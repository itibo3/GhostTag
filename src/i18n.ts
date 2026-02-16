// ── i18n: GhostTag 多言語対応 ─────────────────────────
// Obsidian の言語設定に自動追従

export interface GhostTagLocale {
    // Settings tab
    settingsTitle: string;
    sectionDelimiter: string;
    startDelimiterName: string;
    startDelimiterDesc: string;
    endDelimiterName: string;
    endDelimiterDesc: string;
    sectionDisplay: string;
    hoverOpacityName: string;
    hoverOpacityDesc: string;
    editOpacityName: string;
    editOpacityDesc: string;
    delimOpacityName: string;
    delimOpacityDesc: string;
    animSpeedName: string;
    animSpeedDesc: string;
    sectionCopy: string;
    autoStripName: string;
    autoStripDesc: string;
    // Context menu & commands
    copyWithTags: string;
    copyWithoutTags: string;
    ghostifySelection: string;
    openScanner: string;
    // Scanner
    scannerTitle: string;
    scannerEmpty: string;
    scannerNoNote: string;
    scannerCount: (n: number) => string;
}

const ja: GhostTagLocale = {
    settingsTitle: "GhostTag 設定",
    sectionDelimiter: "デリミタ（囲み記号）",
    startDelimiterName: "開始記号",
    startDelimiterDesc: "GhostTagの開始を示す記号（例: %%, ((, ==）",
    endDelimiterName: "終了記号",
    endDelimiterDesc: "GhostTagの終了を示す記号（例: %%, )), ==）",
    sectionDisplay: "表示",
    hoverOpacityName: "ホバー時の不透明度",
    hoverOpacityDesc: "マウスを乗せたときのテキストの濃さ (0〜100%)",
    editOpacityName: "編集モードの不透明度",
    editOpacityDesc: "カーソルを置いたときのテキストの濃さ (0〜100%)",
    delimOpacityName: "デリミタの不透明度",
    delimOpacityDesc: "編集モードでのデリミタ記号の濃さ (0〜100%)",
    animSpeedName: "アニメーション速度",
    animSpeedDesc: "フェードイン/アウトの時間 (ミリ秒)",
    sectionCopy: "コピー動作",
    autoStripName: "コピー時にGhostTagを自動除去",
    autoStripDesc: "ONの場合、Ctrl+Cでコピーするとき自動的にGhostTagが除去されます",
    copyWithTags: "👻 GhostTagを含めてコピー",
    copyWithoutTags: "👻 GhostTagを除外してコピー",
    ghostifySelection: "👻 選択範囲をGhost化",
    openScanner: "Ghost Scannerを開く",
    scannerTitle: "👻 Ghost Scanner",
    scannerEmpty: "このノートにGhostTagはありません",
    scannerNoNote: "マークダウンノートを開いてください",
    scannerCount: (n) => `${n} 件`,
};

const en: GhostTagLocale = {
    settingsTitle: "GhostTag settings",
    sectionDelimiter: "Delimiters",
    startDelimiterName: "Start delimiter",
    startDelimiterDesc: "Symbol that opens a GhostTag (e.g. %%, ((, ==)",
    endDelimiterName: "End delimiter",
    endDelimiterDesc: "Symbol that closes a GhostTag (e.g. %%, )), ==)",
    sectionDisplay: "Display",
    hoverOpacityName: "Hover opacity",
    hoverOpacityDesc: "Text opacity when the mouse hovers over a tag (0–100%)",
    editOpacityName: "Edit mode opacity",
    editOpacityDesc: "Text opacity when the cursor is inside a tag (0–100%)",
    delimOpacityName: "Delimiter opacity",
    delimOpacityDesc: "Delimiter symbol opacity in edit mode (0–100%)",
    animSpeedName: "Animation speed",
    animSpeedDesc: "Fade-in / fade-out duration (milliseconds)",
    sectionCopy: "Copy behavior",
    autoStripName: "Auto-strip GhostTags on copy",
    autoStripDesc: "When ON, Ctrl+C automatically removes GhostTags from copied text",
    copyWithTags: "👻 Copy with GhostTags",
    copyWithoutTags: "👻 Copy without GhostTags",
    ghostifySelection: "👻 Ghostify selection",
    openScanner: "Open Ghost scanner",
    scannerTitle: "👻 Ghost scanner",
    scannerEmpty: "No GhostTags in this note",
    scannerNoNote: "Open a markdown note first",
    scannerCount: (n) => `${n} found`,
};

const zh: GhostTagLocale = {
    settingsTitle: "GhostTag 设置",
    sectionDelimiter: "定界符（包围符号）",
    startDelimiterName: "起始符号",
    startDelimiterDesc: "GhostTag的起始符号（例: %%, ((, ==）",
    endDelimiterName: "结束符号",
    endDelimiterDesc: "GhostTag的结束符号（例: %%, )), ==）",
    sectionDisplay: "显示",
    hoverOpacityName: "悬停时不透明度",
    hoverOpacityDesc: "鼠标悬停时文本的浓度 (0〜100%)",
    editOpacityName: "编辑模式不透明度",
    editOpacityDesc: "光标放在标签内时的浓度 (0〜100%)",
    delimOpacityName: "定界符不透明度",
    delimOpacityDesc: "编辑模式下定界符的浓度 (0〜100%)",
    animSpeedName: "动画速度",
    animSpeedDesc: "淡入/淡出时间 (毫秒)",
    sectionCopy: "复制行为",
    autoStripName: "复制时自动去除GhostTag",
    autoStripDesc: "开启后，Ctrl+C复制时会自动去除GhostTag",
    copyWithTags: "👻 包含GhostTag复制",
    copyWithoutTags: "👻 去除GhostTag复制",
    ghostifySelection: "👻 将选中内容Ghost化",
    openScanner: "打开Ghost Scanner",
    scannerTitle: "👻 Ghost Scanner",
    scannerEmpty: "此笔记中没有GhostTag",
    scannerNoNote: "请先打开一个Markdown笔记",
    scannerCount: (n) => `${n} 个`,
};

const ru: GhostTagLocale = {
    settingsTitle: "Настройки GhostTag",
    sectionDelimiter: "Разделители",
    startDelimiterName: "Начальный разделитель",
    startDelimiterDesc: "Символ начала GhostTag (напр. %%, ((, ==)",
    endDelimiterName: "Конечный разделитель",
    endDelimiterDesc: "Символ конца GhostTag (напр. %%, )), ==)",
    sectionDisplay: "Отображение",
    hoverOpacityName: "Прозрачность при наведении",
    hoverOpacityDesc: "Прозрачность текста при наведении мыши (0–100%)",
    editOpacityName: "Прозрачность в режиме редактирования",
    editOpacityDesc: "Прозрачность текста, когда курсор внутри тега (0–100%)",
    delimOpacityName: "Прозрачность разделителей",
    delimOpacityDesc: "Прозрачность символов-разделителей в режиме редактирования (0–100%)",
    animSpeedName: "Скорость анимации",
    animSpeedDesc: "Длительность появления/исчезновения (мс)",
    sectionCopy: "Поведение при копировании",
    autoStripName: "Автоудаление GhostTag при копировании",
    autoStripDesc: "Если включено, Ctrl+C автоматически удаляет GhostTag из скопированного текста",
    copyWithTags: "👻 Копировать с GhostTag",
    copyWithoutTags: "👻 Копировать без GhostTag",
    ghostifySelection: "👻 Ghostify выделение",
    openScanner: "Открыть Ghost Scanner",
    scannerTitle: "👻 Ghost Scanner",
    scannerEmpty: "В этой заметке нет GhostTag",
    scannerNoNote: "Сначала откройте Markdown-заметку",
    scannerCount: (n) => `Найдено: ${n}`,
};

const pt: GhostTagLocale = {
    settingsTitle: "Configurações do GhostTag",
    sectionDelimiter: "Delimitadores",
    startDelimiterName: "Delimitador inicial",
    startDelimiterDesc: "Símbolo que abre um GhostTag (ex: %%, ((, ==)",
    endDelimiterName: "Delimitador final",
    endDelimiterDesc: "Símbolo que fecha um GhostTag (ex: %%, )), ==)",
    sectionDisplay: "Exibição",
    hoverOpacityName: "Opacidade ao passar o mouse",
    hoverOpacityDesc: "Opacidade do texto ao passar o mouse sobre a tag (0–100%)",
    editOpacityName: "Opacidade no modo de edição",
    editOpacityDesc: "Opacidade do texto quando o cursor está dentro da tag (0–100%)",
    delimOpacityName: "Opacidade do delimitador",
    delimOpacityDesc: "Opacidade dos símbolos delimitadores no modo de edição (0–100%)",
    animSpeedName: "Velocidade da animação",
    animSpeedDesc: "Duração do fade-in/fade-out (milissegundos)",
    sectionCopy: "Comportamento de cópia",
    autoStripName: "Remover GhostTags automaticamente ao copiar",
    autoStripDesc: "Quando ativado, Ctrl+C remove automaticamente GhostTags do texto copiado",
    copyWithTags: "👻 Copiar com GhostTags",
    copyWithoutTags: "👻 Copiar sem GhostTags",
    ghostifySelection: "👻 Ghostify seleção",
    openScanner: "Abrir Ghost Scanner",
    scannerTitle: "👻 Ghost Scanner",
    scannerEmpty: "Nenhum GhostTag nesta nota",
    scannerNoNote: "Abra uma nota Markdown primeiro",
    scannerCount: (n) => `${n} encontrado(s)`,
};

const fr: GhostTagLocale = {
    settingsTitle: "Paramètres GhostTag",
    sectionDelimiter: "Délimiteurs",
    startDelimiterName: "Délimiteur d'ouverture",
    startDelimiterDesc: "Symbole ouvrant un GhostTag (ex : %%, ((, ==)",
    endDelimiterName: "Délimiteur de fermeture",
    endDelimiterDesc: "Symbole fermant un GhostTag (ex : %%, )), ==)",
    sectionDisplay: "Affichage",
    hoverOpacityName: "Opacité au survol",
    hoverOpacityDesc: "Opacité du texte au survol de la souris (0–100 %)",
    editOpacityName: "Opacité en mode édition",
    editOpacityDesc: "Opacité du texte lorsque le curseur est dans un tag (0–100 %)",
    delimOpacityName: "Opacité des délimiteurs",
    delimOpacityDesc: "Opacité des symboles délimiteurs en mode édition (0–100 %)",
    animSpeedName: "Vitesse d'animation",
    animSpeedDesc: "Durée du fondu (millisecondes)",
    sectionCopy: "Comportement de copie",
    autoStripName: "Supprimer les GhostTags automatiquement lors de la copie",
    autoStripDesc: "Si activé, Ctrl+C supprime automatiquement les GhostTags du texte copié",
    copyWithTags: "👻 Copier avec les GhostTags",
    copyWithoutTags: "👻 Copier sans les GhostTags",
    ghostifySelection: "👻 Ghostifier la sélection",
    openScanner: "Ouvrir Ghost Scanner",
    scannerTitle: "👻 Ghost Scanner",
    scannerEmpty: "Aucun GhostTag dans cette note",
    scannerNoNote: "Ouvrez d'abord une note Markdown",
    scannerCount: (n) => `${n} trouvé(s)`,
};

const de: GhostTagLocale = {
    settingsTitle: "GhostTag-Einstellungen",
    sectionDelimiter: "Trennzeichen",
    startDelimiterName: "Startzeichen",
    startDelimiterDesc: "Symbol zum Öffnen eines GhostTags (z. B. %%, ((, ==)",
    endDelimiterName: "Endzeichen",
    endDelimiterDesc: "Symbol zum Schließen eines GhostTags (z. B. %%, )), ==)",
    sectionDisplay: "Anzeige",
    hoverOpacityName: "Deckkraft beim Hovern",
    hoverOpacityDesc: "Textdeckkraft bei Mauszeiger über dem Tag (0–100 %)",
    editOpacityName: "Deckkraft im Bearbeitungsmodus",
    editOpacityDesc: "Textdeckkraft bei Cursor im Tag (0–100 %)",
    delimOpacityName: "Trennzeichen-Deckkraft",
    delimOpacityDesc: "Deckkraft der Trennzeichen im Bearbeitungsmodus (0–100 %)",
    animSpeedName: "Animationsgeschwindigkeit",
    animSpeedDesc: "Ein-/Ausblenddauer (Millisekunden)",
    sectionCopy: "Kopierverhalten",
    autoStripName: "GhostTags beim Kopieren automatisch entfernen",
    autoStripDesc: "Wenn aktiviert, entfernt Strg+C automatisch GhostTags aus dem kopierten Text",
    copyWithTags: "👻 Mit GhostTags kopieren",
    copyWithoutTags: "👻 Ohne GhostTags kopieren",
    ghostifySelection: "👻 Auswahl ghostifizieren",
    openScanner: "Ghost Scanner öffnen",
    scannerTitle: "👻 Ghost Scanner",
    scannerEmpty: "Keine GhostTags in dieser Notiz",
    scannerNoNote: "Öffne zuerst eine Markdown-Notiz",
    scannerCount: (n) => `${n} gefunden`,
};

const es: GhostTagLocale = {
    settingsTitle: "Ajustes de GhostTag",
    sectionDelimiter: "Delimitadores",
    startDelimiterName: "Delimitador de inicio",
    startDelimiterDesc: "Símbolo que abre un GhostTag (ej: %%, ((, ==)",
    endDelimiterName: "Delimitador de cierre",
    endDelimiterDesc: "Símbolo que cierra un GhostTag (ej: %%, )), ==)",
    sectionDisplay: "Visualización",
    hoverOpacityName: "Opacidad al pasar el ratón",
    hoverOpacityDesc: "Opacidad del texto al pasar el ratón sobre la etiqueta (0–100%)",
    editOpacityName: "Opacidad en modo edición",
    editOpacityDesc: "Opacidad del texto cuando el cursor está dentro de la etiqueta (0–100%)",
    delimOpacityName: "Opacidad del delimitador",
    delimOpacityDesc: "Opacidad de los símbolos delimitadores en modo edición (0–100%)",
    animSpeedName: "Velocidad de animación",
    animSpeedDesc: "Duración del desvanecimiento (milisegundos)",
    sectionCopy: "Comportamiento de copia",
    autoStripName: "Eliminar GhostTags automáticamente al copiar",
    autoStripDesc: "Si está activado, Ctrl+C elimina automáticamente los GhostTags del texto copiado",
    copyWithTags: "👻 Copiar con GhostTags",
    copyWithoutTags: "👻 Copiar sin GhostTags",
    ghostifySelection: "👻 Ghostificar selección",
    openScanner: "Abrir Ghost Scanner",
    scannerTitle: "👻 Ghost Scanner",
    scannerEmpty: "No hay GhostTags en esta nota",
    scannerNoNote: "Abre primero una nota Markdown",
    scannerCount: (n) => `${n} encontrado(s)`,
};

const locales: Record<string, GhostTagLocale> = {
    ja, en, zh,
    "zh-TW": zh,
    ru, pt, fr, de, es,
    "pt-BR": pt,
    "es-ES": es,
};

/** Detect Obsidian's language and return the matching locale */
export function getLocale(): GhostTagLocale {
    const lang = window.localStorage.getItem("language") || "en";
    return locales[lang] || locales[lang.split("-")[0]] || en;
}

