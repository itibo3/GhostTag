export interface GhostTagSettings {
    /** ホバー時のコンテンツ不透明度 (0.0 - 1.0) */
    hoverOpacity: number;
    /** 編集モード時のコンテンツ不透明度 (0.0 - 1.0) */
    editOpacity: number;
    /** 編集モード時のデリミタ不透明度 (0.0 - 1.0) */
    editDelimOpacity: number;
    /** アニメーション時間 (ms) */
    transitionDuration: number;
    /** 開始デリミタ記号 */
    startDelimiter: string;
    /** 終了デリミタ記号 */
    endDelimiter: string;
    /** コピー時にGhostTagを自動除去するか */
    autoStripOnCopy: boolean;
}

export const DEFAULT_SETTINGS: GhostTagSettings = {
    hoverOpacity: 0.55,
    editOpacity: 0.75,
    editDelimOpacity: 0.35,
    transitionDuration: 250,
    startDelimiter: "%%",
    endDelimiter: "%%",
    autoStripOnCopy: true,
};

