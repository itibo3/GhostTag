import { Plugin, WorkspaceLeaf, Menu, Editor } from 'obsidian';
import { ghostTagPlugin, ghostConfigFacet, GhostEditorConfig } from './src/editor/ghostExtension';
import { ghostCopyHandler, ghostCopyConfigFacet, GhostCopyConfig, stripGhostTags } from './src/editor/copyHandler';
import { GhostTagSettingTab } from './src/settings/settingTab';
import { GhostScannerView, SCANNER_VIEW_TYPE } from './src/scanner/scannerView';
import { GhostTagSettings, DEFAULT_SETTINGS } from './src/settings/types';
import { getLocale } from './src/i18n';
import { Compartment } from '@codemirror/state';

export default class GhostTagPlugin extends Plugin {
    settings: GhostTagSettings = DEFAULT_SETTINGS;

    private ghostConfigCompartment = new Compartment();
    private copyConfigCompartment = new Compartment();

    async onload(): Promise<void> {
        console.debug('GhostTag v1.6: Loading...');

        await this.loadSettings();

        // Register editor extensions
        this.registerEditorExtension([
            this.ghostConfigCompartment.of(
                ghostConfigFacet.of(this.buildEditorConfig())
            ),
            this.copyConfigCompartment.of(
                ghostCopyConfigFacet.of(this.buildCopyConfig())
            ),
            ghostTagPlugin,
            ghostCopyHandler,
        ]);

        // Settings tab
        this.addSettingTab(new GhostTagSettingTab(this.app, this));

        // Scanner view
        this.registerView(
            SCANNER_VIEW_TYPE,
            (leaf) => new GhostScannerView(leaf)
        );

        const t = getLocale();

        // Ribbon icon (toggle)
        this.addRibbonIcon("search", "Ghost scanner", () => {
            void this.activateScanner();
        });

        // Commands
        this.addCommand({
            id: "open-ghost-scanner",
            name: t.openScanner,
            callback: () => { void this.activateScanner(); },
        });

        this.addCommand({
            id: "copy-with-tags",
            name: t.copyWithTags,
            editorCallback: (editor) => {
                const selection = editor.getSelection();
                if (selection.length > 0) {
                    void navigator.clipboard.writeText(selection);
                }
            },
        });

        this.addCommand({
            id: "copy-without-tags",
            name: t.copyWithoutTags,
            editorCallback: (editor) => {
                const selection = editor.getSelection();
                if (selection.length > 0) {
                    const stripped = stripGhostTags(
                        selection,
                        this.settings.startDelimiter,
                        this.settings.endDelimiter
                    );
                    void navigator.clipboard.writeText(stripped);
                }
            },
        });

        this.addCommand({
            id: "ghostify-selection",
            name: t.ghostifySelection,
            editorCallback: (editor) => this.ghostifySelection(editor),
        });

        // Right-click context menu
        this.registerEvent(
            this.app.workspace.on("editor-menu", (menu: Menu, editor: Editor) => {
                const selection = editor.getSelection();

                menu.addSeparator();

                // Ghostify is always available (works on empty selection too)
                menu.addItem((item) => {
                    item.setTitle(t.ghostifySelection)
                        .setIcon("quote-glyph")
                        .onClick(() => this.ghostifySelection(editor));
                });

                if (selection.length > 0) {
                    menu.addItem((item) => {
                        item.setTitle(t.copyWithTags)
                            .setIcon("copy")
                            .onClick(() => {
                                void navigator.clipboard.writeText(selection);
                            });
                    });

                    menu.addItem((item) => {
                        item.setTitle(t.copyWithoutTags)
                            .setIcon("scissors")
                            .onClick(() => {
                                const stripped = stripGhostTags(
                                    selection,
                                    this.settings.startDelimiter,
                                    this.settings.endDelimiter
                                );
                                void navigator.clipboard.writeText(stripped);
                            });
                    });
                }
            })
        );

        // Apply CSS variables
        this.applyCssVariables();
    }

    onunload(): void {
        console.debug('GhostTag v1.6: Unloading...');
        // Clean up CSS variables
        const props = [
            "--gt-hover-opacity",
            "--gt-edit-opacity",
            "--gt-edit-delim-opacity",
            "--gt-transition",
        ];
        props.forEach(p => document.body.style.removeProperty(p));
    }

    async loadSettings(): Promise<void> {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings(): Promise<void> {
        await this.saveData(this.settings);
        this.applyCssVariables();
        this.reconfigureEditorExtension();
    }

    private buildEditorConfig(): GhostEditorConfig {
        return {
            startDelimiter: this.settings.startDelimiter,
            endDelimiter: this.settings.endDelimiter,
        };
    }

    private buildCopyConfig(): GhostCopyConfig {
        return {
            autoStrip: this.settings.autoStripOnCopy,
            startDelimiter: this.settings.startDelimiter,
            endDelimiter: this.settings.endDelimiter,
        };
    }

    private reconfigureEditorExtension(): void {
        this.app.workspace.iterateAllLeaves((leaf: WorkspaceLeaf) => {
            const view = leaf.view as unknown as Record<string, unknown>;
            const editorObj = view?.editor as Record<string, unknown> | undefined;
            const editor = editorObj?.cm as { dispatch?: (transaction: Record<string, unknown>) => void } | undefined;
            if (editor?.dispatch) {
                editor.dispatch({
                    effects: [
                        this.ghostConfigCompartment.reconfigure(
                            ghostConfigFacet.of(this.buildEditorConfig())
                        ),
                        this.copyConfigCompartment.reconfigure(
                            ghostCopyConfigFacet.of(this.buildCopyConfig())
                        ),
                    ],
                });
            }
        });
    }

    /** Apply settings to CSS custom properties (gt- namespaced) */
    applyCssVariables(): void {
        const s = this.settings;
        document.body.style.setProperty("--gt-hover-opacity", String(s.hoverOpacity));
        document.body.style.setProperty("--gt-edit-opacity", String(s.editOpacity));
        document.body.style.setProperty("--gt-edit-delim-opacity", String(s.editDelimOpacity));
        document.body.style.setProperty("--gt-transition", `${s.transitionDuration}ms`);
    }

    async activateScanner(): Promise<void> {
        const existing = this.app.workspace.getLeavesOfType(SCANNER_VIEW_TYPE);
        if (existing.length > 0) {
            existing.forEach(leaf => leaf.detach());
            return;
        }
        const leaf = this.app.workspace.getRightLeaf(false);
        if (leaf) {
            await leaf.setViewState({
                type: SCANNER_VIEW_TYPE,
                active: true,
            });
            this.app.workspace.revealLeaf(leaf);
        }
    }

    /** Ghostify / Unghostify toggle for selection(s) */
    private ghostifySelection(editor: Editor): void {
        const sd = this.settings.startDelimiter;
        const ed = this.settings.endDelimiter;
        const selections = editor.listSelections();

        // Process each selection in reverse to preserve offsets
        const sortedSelections = [...selections].sort((a, b) => {
            const aLine = Math.min(a.anchor.line, a.head.line);
            const bLine = Math.min(b.anchor.line, b.head.line);
            if (aLine !== bLine) return bLine - aLine;
            const aCh = Math.min(a.anchor.ch, a.head.ch);
            const bCh = Math.min(b.anchor.ch, b.head.ch);
            return bCh - aCh;
        });

        for (const sel of sortedSelections) {
            const from = {
                line: Math.min(sel.anchor.line, sel.head.line),
                ch: sel.anchor.line === sel.head.line
                    ? Math.min(sel.anchor.ch, sel.head.ch)
                    : (sel.anchor.line < sel.head.line ? sel.anchor.ch : sel.head.ch),
            };
            const to = {
                line: Math.max(sel.anchor.line, sel.head.line),
                ch: sel.anchor.line === sel.head.line
                    ? Math.max(sel.anchor.ch, sel.head.ch)
                    : (sel.anchor.line > sel.head.line ? sel.anchor.ch : sel.head.ch),
            };

            const text = editor.getRange(from, to);

            if (text.length === 0) {
                // Empty selection: insert delimiters and place cursor between
                editor.replaceRange(sd + ed, from);
                editor.setCursor({ line: from.line, ch: from.ch + sd.length });
            } else if (text.startsWith(sd) && text.endsWith(ed) && text.length >= sd.length + ed.length) {
                // Already wrapped → unwrap (toggle off)
                const inner = text.slice(sd.length, text.length - ed.length);
                editor.replaceRange(inner, from, to);
                // Select the unwrapped content
                const innerLines = inner.split("\n");
                const lastInnerLine = innerLines[innerLines.length - 1];
                editor.setSelection(from, { line: from.line + innerLines.length - 1, ch: innerLines.length > 1 ? lastInnerLine.length : from.ch + inner.length });
            } else {
                // Not wrapped → wrap (toggle on)
                const wrapped = sd + text + ed;
                editor.replaceRange(wrapped, from, to);
                // Select the entire wrapped text (including delimiters)
                const wrappedLines = wrapped.split("\n");
                const lastWrappedLine = wrappedLines[wrappedLines.length - 1];
                const newEndLine = from.line + wrappedLines.length - 1;
                const newEndCh = wrappedLines.length > 1 ? lastWrappedLine.length : from.ch + wrapped.length;
                editor.setSelection(from, { line: newEndLine, ch: newEndCh });
            }
        }
    }
}
