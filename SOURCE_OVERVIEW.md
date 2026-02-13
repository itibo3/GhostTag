# GhostTag - Obsidian Plugin Source Code

**概要**: ノート内の `%%...%%` で囲んだテキストを「幽霊化」するプラグイン。  
通常時は透明で見えず、ホバーでグレーアウト浮上、クリック（カーソル配置）で編集モード。  
印刷/PDFエクスポート時は完全に非表示。

## ディレクトリ構造
```
GhostTag/
├── main.ts                        # エントリーポイント
├── manifest.json                  # プラグインメタデータ
├── package.json                   # 依存関係
├── tsconfig.json                  # TypeScript設定
├── esbuild.config.mjs             # ビルド設定
├── styles.css                     # スタイル定義
└── src/
    ├── editor/
    │   └── ghostExtension.ts      # CodeMirror 6 拡張 (コア)
    ├── settings/
    │   ├── types.ts               # 設定インターフェース
    │   └── settingTab.ts          # 設定画面UI
    └── scanner/
        └── scannerView.ts         # Ghost Scanner サイドバー
```

---

## manifest.json
```json
{
  "id": "ghost-tag",
  "name": "GhostTag",
  "version": "1.0.0",
  "minAppVersion": "0.15.0",
  "description": "Manage hidden emotional data within your notes.",
  "author": "Itibo",
  "authorUrl": "https://github.com/itibo",
  "isDesktopOnly": false
}
```

---

## main.ts
```typescript
import { Plugin, WorkspaceLeaf } from 'obsidian';
import { ghostTagPlugin } from './src/editor/ghostExtension';
import { GhostTagSettingTab } from './src/settings/settingTab';
import { GhostScannerView, SCANNER_VIEW_TYPE } from './src/scanner/scannerView';
import { GhostTagSettings, DEFAULT_SETTINGS } from './src/settings/types';

export default class GhostTagPlugin extends Plugin {
    settings: GhostTagSettings = DEFAULT_SETTINGS;

    async onload(): Promise<void> {
        await this.loadSettings();
        this.registerEditorExtension(ghostTagPlugin);
        this.addSettingTab(new GhostTagSettingTab(this.app, this));
        this.registerView(SCANNER_VIEW_TYPE, (leaf) => new GhostScannerView(leaf));
        this.addRibbonIcon("search", "Ghost Scanner", () => this.activateScanner());
        this.addCommand({ id: "open-ghost-scanner", name: "Open Ghost Scanner", callback: () => this.activateScanner() });
        this.applyCssVariables();
    }

    onunload(): void {}

    async loadSettings(): Promise<void> {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings(): Promise<void> {
        await this.saveData(this.settings);
        this.applyCssVariables();
    }

    applyCssVariables(): void {
        const s = this.settings;
        document.body.style.setProperty("--ghost-hover-opacity", String(s.hoverOpacity));
        document.body.style.setProperty("--ghost-edit-opacity", String(s.editOpacity));
        document.body.style.setProperty("--ghost-edit-delim-opacity", String(s.editDelimOpacity));
        document.body.style.setProperty("--ghost-transition", `${s.transitionDuration}ms`);
    }

    async activateScanner(): Promise<void> {
        const existing = this.app.workspace.getLeavesOfType(SCANNER_VIEW_TYPE);
        if (existing.length > 0) { existing.forEach(leaf => leaf.detach()); return; }
        const leaf = this.app.workspace.getRightLeaf(false);
        if (leaf) {
            await leaf.setViewState({ type: SCANNER_VIEW_TYPE, active: true });
            this.app.workspace.revealLeaf(leaf);
        }
    }
}
```

---

## src/editor/ghostExtension.ts (コア)
```typescript
import { EditorView, ViewPlugin, ViewUpdate, Decoration, DecorationSet } from "@codemirror/view";
import { RangeSetBuilder } from "@codemirror/state";

const GHOST_RE = /%%([\s\S]*?)%%/g;

function buildDecorations(view: EditorView): DecorationSet {
    const builder = new RangeSetBuilder<Decoration>();
    const doc = view.state.doc;
    const cursors = view.state.selection.ranges.map((r: {from: number; to: number}) => ({ from: r.from, to: r.to }));

    for (const { from, to } of view.visibleRanges) {
        const text = doc.sliceString(from, to);
        GHOST_RE.lastIndex = 0;
        let m: RegExpExecArray | null;
        while ((m = GHOST_RE.exec(text)) !== null) {
            const matchStart = from + m.index;
            const matchEnd   = from + m.index + m[0].length;
            const contentStart = matchStart + 2;
            const contentEnd   = matchEnd - 2;
            const cursorInside = cursors.some((c: {from: number; to: number}) => c.from >= matchStart && c.from <= matchEnd);

            if (cursorInside) {
                builder.add(matchStart, contentStart, Decoration.mark({ class: "ghost-tag-delim-edit" }));
                builder.add(contentStart, contentEnd, Decoration.mark({ class: "ghost-tag-content-edit" }));
                builder.add(contentEnd, matchEnd, Decoration.mark({ class: "ghost-tag-delim-edit" }));
            } else {
                builder.add(matchStart, matchEnd, Decoration.mark({ class: "ghost-tag-wrapper" }));
                builder.add(matchStart, contentStart, Decoration.mark({ class: "ghost-tag-delim" }));
                builder.add(contentStart, contentEnd, Decoration.mark({ class: "ghost-tag-content" }));
                builder.add(contentEnd, matchEnd, Decoration.mark({ class: "ghost-tag-delim" }));
            }
        }
    }
    return builder.finish();
}

export const ghostTagPlugin = ViewPlugin.fromClass(
    class {
        decorations: DecorationSet;
        constructor(view: EditorView) { this.decorations = buildDecorations(view); }
        update(update: ViewUpdate): void {
            if (update.docChanged || update.viewportChanged || update.selectionSet) {
                this.decorations = buildDecorations(update.view);
            }
        }
    },
    { decorations: (v: {decorations: DecorationSet}) => v.decorations },
);
```

---

## src/settings/types.ts
```typescript
export interface GhostTagSettings {
    hoverOpacity: number;      // ホバー時のコンテンツ不透明度 (0.0 - 1.0)
    editOpacity: number;       // 編集モード時のコンテンツ不透明度
    editDelimOpacity: number;  // 編集モード時の %% 不透明度
    transitionDuration: number; // アニメーション時間 (ms)
}

export const DEFAULT_SETTINGS: GhostTagSettings = {
    hoverOpacity: 0.55, editOpacity: 0.75, editDelimOpacity: 0.35, transitionDuration: 250,
};
```

---

## src/settings/settingTab.ts
```typescript
import { App, PluginSettingTab, Setting } from "obsidian";
import type GhostTagPlugin from "../../main";

export class GhostTagSettingTab extends PluginSettingTab {
    plugin: GhostTagPlugin;
    constructor(app: App, plugin: GhostTagPlugin) { super(app, plugin); this.plugin = plugin; }

    display(): void {
        const { containerEl } = this;
        containerEl.empty();
        containerEl.createEl("h2", { text: "GhostTag 設定" });

        new Setting(containerEl).setName("ホバー時の不透明度").setDesc("マウスを乗せたときの濃さ (0〜100%)")
            .addSlider(s => s.setLimits(10,100,5).setValue(this.plugin.settings.hoverOpacity*100).setDynamicTooltip()
            .onChange(async v => { this.plugin.settings.hoverOpacity = v/100; await this.plugin.saveSettings(); }));

        new Setting(containerEl).setName("編集モードの不透明度").setDesc("カーソルを置いたときの濃さ")
            .addSlider(s => s.setLimits(20,100,5).setValue(this.plugin.settings.editOpacity*100).setDynamicTooltip()
            .onChange(async v => { this.plugin.settings.editOpacity = v/100; await this.plugin.saveSettings(); }));

        new Setting(containerEl).setName("%% デリミタの不透明度").setDesc("編集モードでの %% の濃さ")
            .addSlider(s => s.setLimits(10,100,5).setValue(this.plugin.settings.editDelimOpacity*100).setDynamicTooltip()
            .onChange(async v => { this.plugin.settings.editDelimOpacity = v/100; await this.plugin.saveSettings(); }));

        new Setting(containerEl).setName("アニメーション速度").setDesc("フェードの時間 (ms)")
            .addSlider(s => s.setLimits(0,1000,50).setValue(this.plugin.settings.transitionDuration).setDynamicTooltip()
            .onChange(async v => { this.plugin.settings.transitionDuration = v; await this.plugin.saveSettings(); }));
    }
}
```

---

## src/scanner/scannerView.ts
```typescript
import { ItemView, WorkspaceLeaf, MarkdownView } from "obsidian";
export const SCANNER_VIEW_TYPE = "ghost-tag-scanner";

interface GhostMatch { content: string; line: number; offset: number; }

export class GhostScannerView extends ItemView {
    private matches: GhostMatch[] = [];
    constructor(leaf: WorkspaceLeaf) { super(leaf); }
    getViewType(): string { return SCANNER_VIEW_TYPE; }
    getDisplayText(): string { return "Ghost Scanner"; }
    getIcon(): string { return "ghost"; }

    async onOpen(): Promise<void> {
        this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.refresh()));
        this.registerEvent(this.app.workspace.on("editor-change", () => this.refresh()));
        this.refresh();
    }
    async onClose(): Promise<void> {}

    refresh(): void {
        const container = this.contentEl;
        container.empty();
        const header = container.createDiv({ cls: "ghost-scanner-header" });
        header.createEl("h4", { text: "👻 Ghost Scanner" });

        const mdView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!mdView) { container.createEl("p", { text: "マークダウンノートを開いてください", cls: "ghost-scanner-empty" }); return; }

        const editor = mdView.editor;
        const text = editor.getValue();
        header.createEl("small", { text: mdView.file?.basename ?? "Unknown", cls: "ghost-scanner-filename" });

        this.matches = [];
        const regex = /%%([\s\S]*?)%%/g;
        let m: RegExpExecArray | null;
        while ((m = regex.exec(text)) !== null) {
            const content = m[1].trim();
            if (content.length === 0) continue;
            this.matches.push({ content, line: editor.offsetToPos(m.index).line, offset: m.index });
        }

        if (this.matches.length === 0) { container.createEl("p", { text: "GhostTagなし", cls: "ghost-scanner-empty" }); return; }
        header.createEl("span", { text: `${this.matches.length} 件`, cls: "ghost-scanner-count" });

        const list = container.createDiv({ cls: "ghost-scanner-list" });
        for (const match of this.matches) {
            const item = list.createDiv({ cls: "ghost-scanner-item" });
            item.createEl("span", { text: `L${match.line+1}`, cls: "ghost-scanner-line" });
            item.createEl("span", { text: match.content.length > 60 ? match.content.substring(0,57)+"…" : match.content, cls: "ghost-scanner-text" });
            item.addEventListener("click", () => {
                const view = this.app.workspace.getActiveViewOfType(MarkdownView);
                if (!view) return;
                view.editor.setCursor(view.editor.offsetToPos(match.offset + 2));
                view.editor.focus();
            });
        }
    }
}
```

---

## styles.css
```css
/* 隠蔽モード */
.ghost-tag-delim { color: transparent; }
.ghost-tag-content { color: transparent; transition: color var(--ghost-transition, 250ms) ease; }
.ghost-tag-wrapper:hover .ghost-tag-content { color: var(--text-faint); opacity: var(--ghost-hover-opacity, 0.55); }
.ghost-tag-wrapper:hover .ghost-tag-delim { color: var(--text-faint); opacity: calc(var(--ghost-hover-opacity, 0.55) * 0.45); transition: color var(--ghost-transition, 250ms) ease, opacity var(--ghost-transition, 250ms) ease; }

/* 編集モード */
.ghost-tag-delim-edit { color: var(--text-faint); opacity: var(--ghost-edit-delim-opacity, 0.35); }
.ghost-tag-content-edit { color: var(--text-muted); opacity: var(--ghost-edit-opacity, 0.75); }

/* 印刷 / PDF */
@media print { .ghost-tag-wrapper, .ghost-tag-delim, .ghost-tag-content, .ghost-tag-delim-edit, .ghost-tag-content-edit { display: none !important; } }

/* Scanner サイドバー */
.ghost-scanner-header { padding: 12px 16px 8px; border-bottom: 1px solid var(--background-modifier-border); }
.ghost-scanner-header h4 { margin: 0 0 4px 0; font-size: 1em; }
.ghost-scanner-filename { color: var(--text-faint); display: block; margin-bottom: 4px; }
.ghost-scanner-count { display: inline-block; background: var(--background-modifier-border); padding: 1px 8px; border-radius: 10px; font-size: 0.8em; color: var(--text-muted); }
.ghost-scanner-empty { padding: 16px; color: var(--text-faint); font-style: italic; text-align: center; }
.ghost-scanner-list { padding: 4px 0; }
.ghost-scanner-item { display: flex; align-items: baseline; gap: 8px; padding: 6px 16px; cursor: pointer; transition: background 0.15s ease; }
.ghost-scanner-item:hover { background: var(--background-modifier-hover); }
.ghost-scanner-line { flex-shrink: 0; font-size: 0.75em; font-family: var(--font-monospace); color: var(--text-faint); min-width: 32px; }
.ghost-scanner-text { color: var(--text-muted); font-size: 0.9em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
```
