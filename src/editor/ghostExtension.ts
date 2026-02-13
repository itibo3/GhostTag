import {
    EditorView,
    ViewPlugin,
    ViewUpdate,
    Decoration,
    DecorationSet,
} from "@codemirror/view";
import { RangeSetBuilder, Facet } from "@codemirror/state";

// ── Settings Facet ──────────────────────────────────────
// Allows main.ts to pass settings into the CM6 extension reactively
export interface GhostEditorConfig {
    startDelimiter: string;
    endDelimiter: string;
}

const defaultConfig: GhostEditorConfig = { startDelimiter: "%%", endDelimiter: "%%" };

export const ghostConfigFacet = Facet.define<GhostEditorConfig, GhostEditorConfig>({
    combine(inputs: readonly GhostEditorConfig[]): GhostEditorConfig {
        return inputs.length > 0 ? inputs[inputs.length - 1] : defaultConfig;
    },
});

// ── Regex helpers ───────────────────────────────────────
/** Escape special regex characters in user-supplied delimiter */
function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Build a regex from the current delimiter config */
function buildGhostRegex(config: GhostEditorConfig): RegExp {
    const start = escapeRegex(config.startDelimiter);
    const end = escapeRegex(config.endDelimiter);
    return new RegExp(`${start}([\\s\\S]*?)${end}`, "g");
}

// ── Decoration builder ──────────────────────────────────
function buildDecorations(view: EditorView): DecorationSet {
    const builder = new RangeSetBuilder<Decoration>();
    const doc = view.state.doc;
    const config = view.state.facet(ghostConfigFacet);
    const delimStartLen = config.startDelimiter.length;
    const delimEndLen = config.endDelimiter.length;
    const regex = buildGhostRegex(config);

    const cursors = view.state.selection.ranges.map(
        (r: { from: number; to: number }) => ({ from: r.from, to: r.to })
    );

    for (const { from, to } of view.visibleRanges) {
        const text = doc.sliceString(from, to);
        regex.lastIndex = 0;

        let m: RegExpExecArray | null;
        while ((m = regex.exec(text)) !== null) {
            const matchStart = from + m.index;
            const matchEnd = from + m.index + m[0].length;
            const contentStart = matchStart + delimStartLen;
            const contentEnd = matchEnd - delimEndLen;

            // Skip empty tags
            if (contentStart >= contentEnd) continue;

            const cursorInside = cursors.some(
                (c: { from: number; to: number }) =>
                    c.from >= matchStart && c.from <= matchEnd
            );

            if (cursorInside) {
                // ── Edit mode ──
                builder.add(matchStart, contentStart, Decoration.mark({ class: "gt-delim-edit" }));
                builder.add(contentStart, contentEnd, Decoration.mark({ class: "gt-content-edit" }));
                builder.add(contentEnd, matchEnd, Decoration.mark({ class: "gt-delim-edit" }));
            } else {
                // ── Stealth mode ──
                builder.add(matchStart, matchEnd, Decoration.mark({ class: "gt-wrapper" }));
                builder.add(matchStart, contentStart, Decoration.mark({ class: "gt-delim" }));
                builder.add(contentStart, contentEnd, Decoration.mark({ class: "gt-content" }));
                builder.add(contentEnd, matchEnd, Decoration.mark({ class: "gt-delim" }));
            }
        }
    }
    return builder.finish();
}

// ── ViewPlugin ──────────────────────────────────────────
export const ghostTagPlugin = ViewPlugin.fromClass(
    class {
        decorations: DecorationSet;
        constructor(view: EditorView) {
            this.decorations = buildDecorations(view);
        }
        update(update: ViewUpdate): void {
            if (
                update.docChanged ||
                update.viewportChanged ||
                update.selectionSet ||
                // Rebuild when facet config changes (delimiter changed)
                update.state.facet(ghostConfigFacet) !==
                update.startState.facet(ghostConfigFacet)
            ) {
                this.decorations = buildDecorations(update.view);
            }
        }
    },
    {
        decorations: (v: { decorations: DecorationSet }) => v.decorations,
        provide: () => [],  // No additional provides; keeps priority neutral
    },
);
