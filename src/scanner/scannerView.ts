import { ItemView, WorkspaceLeaf, MarkdownView } from "obsidian";
import type GhostTagPlugin from "../../main";
import { getLocale } from "../i18n";

export const SCANNER_VIEW_TYPE = "ghost-tag-scanner";

interface GhostMatch {
    content: string;
    line: number;
    offset: number;
}

export class GhostScannerView extends ItemView {
    private matches: GhostMatch[] = [];

    constructor(leaf: WorkspaceLeaf) {
        super(leaf);
    }

    getViewType(): string {
        return SCANNER_VIEW_TYPE;
    }

    getDisplayText(): string {
        return "Ghost Scanner";
    }

    getIcon(): string {
        return "search";
    }

    async onOpen(): Promise<void> {
        this.registerEvent(
            this.app.workspace.on("active-leaf-change", () => this.refresh())
        );
        this.registerEvent(
            this.app.workspace.on("editor-change", () => this.refresh())
        );
        this.refresh();
    }

    async onClose(): Promise<void> { }

    /** Get the plugin instance to access settings */
    private getPlugin(): GhostTagPlugin | null {
        // @ts-ignore — community plugins are accessed via app
        return (this.app as any).plugins?.plugins?.["ghost-tag"] as GhostTagPlugin ?? null;
    }

    /** Build regex from current plugin settings */
    private buildScanRegex(): RegExp {
        const plugin = this.getPlugin();
        const start = plugin?.settings?.startDelimiter ?? "%%";
        const end = plugin?.settings?.endDelimiter ?? "%%";
        const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`${esc(start)}([\\s\\S]*?)${esc(end)}`, "g");
    }

    refresh(): void {
        const container = this.contentEl;
        container.empty();
        const t = getLocale();

        const header = container.createDiv({ cls: "gt-scanner-header" });
        header.createEl("h4", { text: t.scannerTitle });

        // Get active markdown view
        const mdView = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!mdView) {
            container.createEl("p", {
                text: t.scannerNoNote,
                cls: "gt-scanner-empty",
            });
            return;
        }

        const plugin = this.getPlugin();
        const delimLen = (plugin?.settings?.startDelimiter ?? "%%").length;

        const editor = mdView.editor;
        const text = editor.getValue();
        const fileName = mdView.file?.basename ?? "Unknown";

        header.createEl("small", {
            text: fileName,
            cls: "gt-scanner-filename",
        });

        // Scan for ghost tags using current delimiter settings
        this.matches = [];
        const regex = this.buildScanRegex();
        let m: RegExpExecArray | null;
        while ((m = regex.exec(text)) !== null) {
            const content = m[1].trim();
            if (content.length === 0) continue;
            const pos = m.index;
            const line = editor.offsetToPos(pos).line;
            this.matches.push({ content, line, offset: pos });
        }

        if (this.matches.length === 0) {
            container.createEl("p", {
                text: t.scannerEmpty,
                cls: "gt-scanner-empty",
            });
            return;
        }

        // Count
        header.createEl("span", {
            text: t.scannerCount(this.matches.length),
            cls: "gt-scanner-count",
        });

        // List
        const list = container.createDiv({ cls: "gt-scanner-list" });
        for (const match of this.matches) {
            const item = list.createDiv({ cls: "gt-scanner-item" });

            item.createEl("span", {
                text: `L${match.line + 1}`,
                cls: "gt-scanner-line",
            });

            const preview = match.content.length > 60
                ? match.content.substring(0, 57) + "…"
                : match.content;
            item.createEl("span", {
                text: preview,
                cls: "gt-scanner-text",
            });

            // Click to jump (skip delimiter length)
            item.addEventListener("click", () => {
                const view = this.app.workspace.getActiveViewOfType(MarkdownView);
                if (!view) return;
                const pos = view.editor.offsetToPos(match.offset + delimLen);
                view.editor.setCursor(pos);
                view.editor.focus();
            });
        }
    }
}
