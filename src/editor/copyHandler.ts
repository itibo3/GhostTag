import { EditorView } from "@codemirror/view";
import { Facet } from "@codemirror/state";

// ── Copy-strip config facet ─────────────────────────────
export interface GhostCopyConfig {
    autoStrip: boolean;
    startDelimiter: string;
    endDelimiter: string;
}

const defaultCopyConfig: GhostCopyConfig = {
    autoStrip: true,
    startDelimiter: "%%",
    endDelimiter: "%%",
};

export const ghostCopyConfigFacet = Facet.define<GhostCopyConfig, GhostCopyConfig>({
    combine(inputs: readonly GhostCopyConfig[]): GhostCopyConfig {
        return inputs.length > 0 ? inputs[inputs.length - 1] : defaultCopyConfig;
    },
});

// ── Regex escape ────────────────────────────────────────
function escapeRegex(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Strip ghost tags from text using configured delimiters */
export function stripGhostTags(text: string, start: string, end: string): string {
    const regex = new RegExp(
        `${escapeRegex(start)}[\\s\\S]*?${escapeRegex(end)}`,
        "g"
    );
    return text.replace(regex, "");
}

// ── Copy event handler extension ────────────────────────
export const ghostCopyHandler = EditorView.domEventHandlers({
    copy(event: ClipboardEvent, view: EditorView): boolean {
        const config = view.state.facet(ghostCopyConfigFacet);
        if (!config.autoStrip) return false; // let default handle it

        const selection = view.state.sliceDoc(
            view.state.selection.main.from,
            view.state.selection.main.to
        );

        if (selection.length === 0) return false;

        // Check if selection contains any ghost tags
        const regex = new RegExp(
            `${escapeRegex(config.startDelimiter)}[\\s\\S]*?${escapeRegex(config.endDelimiter)}`
        );
        if (!regex.test(selection)) return false; // no tags, let default handle it

        // Strip and write to clipboard
        const stripped = stripGhostTags(
            selection,
            config.startDelimiter,
            config.endDelimiter
        );
        event.clipboardData?.setData("text/plain", stripped);
        event.preventDefault();
        return true;
    },
});
