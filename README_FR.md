# GhostTag

**Invisible jusqu'à ce que vous vouliez le voir.**

Un plugin Obsidian tout en douceur qui dissimule délicatement vos émotions et pensées dans vos notes.

![Version](https://img.shields.io/badge/version-1.6.0-blue)
![Obsidian](https://img.shields.io/badge/Obsidian-0.15.0+-purple)
![License](https://img.shields.io/badge/license-MIT-green)
![Mobile](https://img.shields.io/badge/mobile-supporté-brightgreen)

---

## 🌙 Concept

Parfois, nous avons des mots que nous voulons garder, mais que nous ne voulons pas voir.
Parfois, nous avons des émotions que nous ne voulons pas affronter au quotidien, mais auxquelles nous devons accéder quand nous sommes prêts.
GhostTag embrasse cette complexité et cette vulnérabilité.

- Ce que vous écrivez ne disparaît jamais
- Mais cela reste discrètement caché jusqu'à ce que vous soyez prêt
- Cela n'apparaît pas à l'impression ou lors de la copie
- Cela ne se révèle que lorsque vous le souhaitez

---

## ✨ Fonctionnalités

### 🎭 Mode Furtif
Le texte entouré de `%%...%%` devient transparent et invisible.

### 👀 Révélation au Survol
Passez votre curseur dessus, et le texte apparaît doucement.

### ✏️ Clic pour Éditer
Placez votre curseur à l'intérieur, et le texte devient entièrement visible pour l'édition.

### 👻 Bascule Ghostify
Sélectionnez n'importe quel texte et enveloppez-le instantanément avec des délimiteurs Ghost — ou retirez-les pour basculer.

- **Raccourci** : `Ctrl+Shift+G` (ou `Cmd+Shift+G` sur Mac)
- Également disponible depuis le menu contextuel et la palette de commandes
- Fonctionne aussi sans sélection — insère les délimiteurs et place le curseur entre eux

### 🔍 Ghost Scanner
Un panneau latéral qui liste tous les Ghosts de votre note actuelle.

- **Ouvrez quand vous voulez** : Activez via l'icône du ruban ou la palette de commandes
- **Caché quand vous n'en avez pas besoin** : Fermez le panneau et il disparaît complètement
- **Cliquez pour naviguer** : Sélectionnez dans la liste pour aller vers ce Ghost

Vos Ghosts ne se révèlent que lorsque vous êtes prêt à les voir.
Sinon, ils restent complètement cachés — sans distraction, sans intrusion.

### 🛡️ Protection de Copie
Lorsque vous appuyez sur `Ctrl+C`, le contenu Ghost est automatiquement supprimé (configurable dans les paramètres).

### 🌍 Support Multilingue
Disponible en English, 日本語, 中文, Русский, Português, Français, Deutsch et Español.

### 🎨 Entièrement Personnalisable

- Changez les délimiteurs (`%%`, `((`, `==`, etc.)
- Ajustez l'opacité et la vitesse d'animation

### 🖨️ Invisible à l'Impression / PDF
Les Ghosts sont complètement invisibles à l'impression et lors de l'exportation en PDF.

### 📱 Compatible Mobile
GhostTag fonctionne sur les versions bureau et mobile d'Obsidian.

---

## 📦 Installation

### Depuis les Plugins Communautaires Obsidian (après approbation)

1. Ouvrez les Paramètres d'Obsidian
2. Allez dans Plugins Communautaires
3. Recherchez "GhostTag"
4. Installez et Activez

### Installation Manuelle

1. Téléchargez la dernière version depuis [Releases](https://github.com/itibo/ghost-tag/releases)
2. Copiez `main.js`, `manifest.json` et `styles.css` dans `.obsidian/plugins/ghost-tag/`
3. Activez le plugin dans Obsidian

---

## 🚀 Utilisation

### Utilisation de Base

Entourez simplement le texte avec `%%` :

```markdown
Aujourd'hui était une bonne journée %% mais en réalité je souffre intérieurement %%
```

La partie entourée devient transparente et se révèle au survol.

### Bascule Ghostify

Sélectionnez du texte et appuyez sur `Ctrl+Shift+G` pour l'envelopper avec des délimiteurs Ghost.
Appuyez à nouveau pour retirer — une bascule fluide.

### Ouvrir Ghost Scanner

- Cliquez sur l'icône du ruban (🔍)
- Ou utilisez la palette de commandes : **« Open Ghost Scanner »**

### Menu Contextuel

Sélectionnez du texte et faites un clic droit :

- **Ghostifier la sélection** : Basculer l'enveloppement avec les délimiteurs Ghost
- **Copier avec les GhostTags** : Copier en incluant les marqueurs Ghost
- **Copier sans les GhostTags** : Copier en supprimant le contenu Ghost

---

## ⚙️ Paramètres

### Délimiteurs

Personnalisez les marqueurs de début et de fin :

- `%% ... %%` (par défaut)
- `(( ... ))`
- `== ... ==`
- Ou tout ce que vous préférez

### Affichage

| Paramètre | Description |
|---|---|
| Opacité au survol | Visibilité des Ghosts au survol |
| Opacité en mode édition | Visibilité lorsque le curseur est à l'intérieur |
| Opacité des délimiteurs | Visibilité des marqueurs en mode édition |
| Vitesse d'animation | Durée de la transition de fondu (ms) |

### Comportement de Copie

| Paramètre | Description |
|---|---|
| Suppression automatique à la copie | Supprimer les Ghosts lors de `Ctrl+C` |

---

## 💭 Cas d'Utilisation

### 1. Journal Émotionnel

```markdown
La réunion s'est bien passée aujourd'hui.
%% mais l'attitude de mon patron m'a vraiment blessé %%
On continue avec le prochain projet.
```

### 2. Écriture Créative

```markdown
Elle a souri et répondu.
%% tout en planifiant sa vengeance intérieurement %%
« Je vais bien », dit-elle.
```

### 3. Notes d'Étude

```markdown
J'ai compris les bases de la mécanique quantique.
%% encore confus sur le principe d'incertitude %%
Ensuite, j'étudierai les fonctions d'onde.
```

### 4. Notes de Travail

```markdown
Le projet est dans les temps.
%% en réalité deux semaines de retard %%
Présentation client la semaine prochaine.
```

---

## 🎨 Philosophie de Design

GhostTag ne « cache pas complètement » l'information.
Il l'enveloppe délicatement.

- Présent, mais invisible
- Là, mais sans déranger
- Caché, mais accessible

Comme un murmure dans votre esprit, vos émotions existent dans un état quantique —
ne se révélant que lorsque vous choisissez de les observer.

---

## 📸 Captures d'Écran

*(Bientôt disponible)*

## 🎥 Vidéo Démo

*(Bientôt disponible)*

---

## 🤝 Soutien

Si GhostTag vous est utile, pensez à soutenir son développement :

- ⭐ Étoile sur GitHub

---

## 🐛 Signalement de Bugs et Suggestions

N'hésitez pas à signaler des problèmes ou à suggérer des fonctionnalités sur [Issues](https://github.com/itibo/ghost-tag/issues).

---

## 📝 Licence

MIT License

---

## 📚 Détails Techniques

- TypeScript
- CodeMirror 6
- Obsidian Plugin API
- i18n (8 langues)

---

## 🙏 Remerciements

À tous ceux qui utilisent ce plugin :
J'espère qu'il embrasse tendrement vos vulnérabilités et vos complexités.

Made with 💙 by **Itibo**
