# GhostTag

**Unsichtbar, bis du es sehen willst.**

Ein sanftes Obsidian-Plugin, das deine Emotionen und Gedanken behutsam in deinen Notizen verbirgt.

![Version](https://img.shields.io/badge/version-1.6.0-blue)
![Obsidian](https://img.shields.io/badge/Obsidian-0.15.0+-purple)
![License](https://img.shields.io/badge/license-MIT-green)
![Mobile](https://img.shields.io/badge/mobile-unterstützt-brightgreen)

---

## 🌙 Konzept

Manchmal haben wir Worte, die wir behalten wollen, aber nicht sehen möchten.
Manchmal haben wir Emotionen, die wir nicht täglich sehen wollen, aber auf die wir zugreifen müssen, wenn wir bereit sind.
GhostTag umarmt diese Komplexität und Verletzlichkeit.

- Was du schreibst, verschwindet nie
- Aber es bleibt still verborgen, bis du bereit bist
- Es erscheint nicht beim Drucken oder Kopieren
- Es zeigt sich nur, wenn du es sehen willst

---

## ✨ Funktionen

### 🎭 Stealth-Modus
Text, der in `%%...%%` eingeschlossen ist, wird transparent und unsichtbar.

### 👀 Beim Hovern Sichtbar
Bewege den Cursor darüber, und der Text erscheint sanft.

### ✏️ Klicken zum Bearbeiten
Platziere den Cursor darin, und der Text wird vollständig sichtbar zur Bearbeitung.

### 👻 Ghostify-Umschalter
Wähle beliebigen Text aus und umhülle ihn sofort mit Ghost-Trennzeichen — oder entferne sie zum Umschalten.

- **Tastenkürzel**: `Ctrl+Shift+G` (oder `Cmd+Shift+G` auf Mac)
- Auch über das Kontextmenü und die Befehlspalette verfügbar
- Funktioniert auch ohne Auswahl — fügt Trennzeichen ein und platziert den Cursor dazwischen

### 🔍 Ghost Scanner
Eine Seitenleiste, die alle Ghosts in deiner aktuellen Notiz auflistet.

- **Öffne, wann du willst**: Aktiviere über das Band-Symbol oder die Befehlspalette
- **Verborgen, wenn du es nicht brauchst**: Schließe die Seitenleiste und sie verschwindet vollständig
- **Klicken zum Springen**: Wähle aus der Liste, um zu diesem Ghost zu navigieren

Deine Ghosts zeigen sich nur, wenn du bereit bist, sie zu sehen.
Ansonsten bleiben sie komplett verborgen — keine Ablenkung, kein Eindringen.

### 🛡️ Kopierschutz
Beim Drücken von `Ctrl+C` wird Ghost-Inhalt automatisch entfernt (in den Einstellungen umschaltbar).

### 🌍 Mehrsprachige Unterstützung
Verfügbar in English, 日本語, 中文, Русский, Português, Français, Deutsch und Español.

### 🎨 Vollständig Anpassbar

- Ändere Trennzeichen (`%%`, `((`, `==` usw.)
- Passe Deckkraft und Animationsgeschwindigkeit an

### 🖨️ Beim Drucken / PDF Verborgen
Ghosts sind beim Drucken und PDF-Export vollständig unsichtbar.

### 📱 Mobilfreundlich
GhostTag funktioniert sowohl in der Desktop- als auch in der Mobilversion von Obsidian.

---

## 📦 Installation

### Über Obsidian Community Plugins (nach Genehmigung)

1. Öffne die Obsidian-Einstellungen
2. Gehe zu Community-Plugins
3. Suche nach "GhostTag"
4. Installieren & Aktivieren

### Manuelle Installation

1. Lade die neueste Version von [Releases](https://github.com/itibo/ghost-tag/releases) herunter
2. Kopiere `main.js`, `manifest.json` und `styles.css` nach `.obsidian/plugins/ghost-tag/`
3. Aktiviere das Plugin in Obsidian

---

## 🚀 Nutzung

### Grundlegende Nutzung

Umschließe Text einfach mit `%%`:

```markdown
Heute war ein guter Tag %% aber innerlich kämpfe ich %%
```

Der umschlossene Teil wird transparent und zeigt sich beim Hovern.

### Ghostify-Umschalter

Wähle Text aus und drücke `Ctrl+Shift+G`, um ihn mit Ghost-Trennzeichen zu umhüllen.
Drücke erneut, um sie zu entfernen — ein nahtloser Umschalter.

### Ghost Scanner Öffnen

- Klicke auf das Band-Symbol (🔍)
- Oder über die Befehlspalette: **„Open Ghost Scanner"**

### Kontextmenü

Text auswählen und rechtsklicken:

- **Auswahl ghostifizieren**: Ghost-Trennzeichen umschalten
- **Mit GhostTags kopieren**: Kopieren inklusive Ghost-Markierungen
- **Ohne GhostTags kopieren**: Kopieren ohne Ghost-Inhalt

---

## ⚙️ Einstellungen

### Trennzeichen

Passe Start- und Endmarkierungen an:

- `%% ... %%` (Standard)
- `(( ... ))`
- `== ... ==`
- Oder was immer du bevorzugst

### Anzeige

| Einstellung | Beschreibung |
|---|---|
| Hover-Deckkraft | Sichtbarkeit der Ghosts beim Hovern |
| Bearbeitungsmodus-Deckkraft | Sichtbarkeit bei Cursor im Inneren |
| Trennzeichen-Deckkraft | Sichtbarkeit der Markierungen im Bearbeitungsmodus |
| Animationsgeschwindigkeit | Dauer des Überblendeffekts (ms) |

### Kopierverhalten

| Einstellung | Beschreibung |
|---|---|
| Automatisches Entfernen beim Kopieren | Ghosts bei `Ctrl+C` entfernen |

---

## 💭 Anwendungsfälle

### 1. Emotionales Tagebuch

```markdown
Das Meeting lief gut heute.
%% aber das Verhalten meines Chefs hat mich wirklich verletzt %%
Weiter geht's mit dem nächsten Projekt.
```

### 2. Kreatives Schreiben

```markdown
Sie lächelte und antwortete.
%% während sie innerlich Rache plante %%
„Mir geht's gut", sagte sie.
```

### 3. Lernnotizen

```markdown
Die Grundlagen der Quantenmechanik verstanden.
%% das Unschärfeprinzip ist noch verwirrend %%
Als Nächstes lerne ich Wellenfunktionen.
```

### 4. Arbeitsnotizen

```markdown
Das Projekt liegt im Zeitplan.
%% tatsächlich zwei Wochen hinterher %%
Kundenpräsentation nächste Woche.
```

---

## 🎨 Designphilosophie

GhostTag „versteckt" Informationen nicht vollständig.
Es hüllt sie sanft ein.

- Vorhanden, aber unsichtbar
- Da, aber nicht störend
- Verborgen, aber erreichbar

Wie ein Flüstern in deinem Geist existieren deine Emotionen in einem Quantenzustand —
sie zeigen sich nur, wenn du dich entscheidest, sie zu beobachten.

---

## 📸 Screenshots

*(Demnächst verfügbar)*

## 🎥 Demo-Video

*(Demnächst verfügbar)*

---

## 🤝 Unterstützung

Wenn GhostTag dir hilft, unterstütze gerne die Entwicklung:

- ⭐ Stern auf GitHub

---

## 🐛 Fehlermeldungen & Feature-Wünsche

Du kannst gerne Probleme melden oder Funktionen vorschlagen auf [Issues](https://github.com/itibo/ghost-tag/issues).

---

## 📝 Lizenz

MIT License

---

## 📚 Technische Details

- TypeScript
- CodeMirror 6
- Obsidian Plugin API
- i18n (8 Sprachen)

---

## 🙏 Danksagung

An alle, die dieses Plugin nutzen:
Ich hoffe, es umarmt sanft eure Verletzlichkeiten und Komplexitäten.

Made with 💙 by **Itibo**
