# GhostTag

**Invisible hasta que quieras verlo.**

Un plugin gentil para Obsidian que oculta suavemente tus emociones y pensamientos dentro de tus notas.

![Version](https://img.shields.io/badge/version-1.6.0-blue)
![Obsidian](https://img.shields.io/badge/Obsidian-0.15.0+-purple)
![License](https://img.shields.io/badge/license-MIT-green)
![Mobile](https://img.shields.io/badge/mobile-compatible-brightgreen)

---

## 🌙 Concepto

A veces, tenemos palabras que queremos conservar, pero que no queremos ver.
A veces, tenemos emociones que no queremos enfrentar a diario, pero que necesitamos acceder cuando estemos listos.
GhostTag abraza esa complejidad y vulnerabilidad.

- Lo que escribes nunca desaparece
- Pero permanece oculto en silencio hasta que estés listo
- No aparece en impresiones ni copias
- Se revela solo cuando tú quieras verlo

---

## ✨ Características

### 🎭 Modo Sigilo
El texto envuelto en `%%...%%` se vuelve transparente e invisible.

### 👀 Revelar al Pasar el Ratón
Mueve el cursor sobre él, y aparece suavemente.

### ✏️ Clic para Editar
Coloca el cursor dentro, y el texto se vuelve completamente visible para editarlo.

### 👻 Alternador Ghostify
Selecciona cualquier texto y envuélvelo instantáneamente con delimitadores Ghost — o retíralos para alternar.

- **Atajo**: `Ctrl+Shift+G` (o `Cmd+Shift+G` en Mac)
- También disponible desde el menú contextual y la paleta de comandos
- Funciona sin selección — inserta delimitadores y coloca el cursor entre ellos

### 🔍 Ghost Scanner
Un panel lateral que lista todos los Ghosts en tu nota actual.

- **Ábrelo cuando quieras**: Actívalo mediante el icono de la cinta o la paleta de comandos
- **Oculto cuando no lo necesitas**: Cierra el panel y desaparece por completo
- **Clic para navegar**: Selecciona de la lista para ir a ese Ghost

Tus Ghosts se revelan solo cuando estás listo para verlos.
De lo contrario, permanecen completamente ocultos — sin distracciones, sin intrusiones.

### 🛡️ Protección al Copiar
Al presionar `Ctrl+C`, el contenido Ghost se elimina automáticamente (configurable en ajustes).

### 🌍 Soporte Multilingüe
Disponible en English, 日本語, 中文, Русский, Português, Français, Deutsch y Español.

### 🎨 Totalmente Personalizable

- Cambia los delimitadores (`%%`, `((`, `==`, etc.)
- Ajusta la opacidad y la velocidad de animación

### 🖨️ Oculto en Impresión / PDF
Los Ghosts son completamente invisibles en impresiones y exportaciones a PDF.

### 📱 Compatible con Móvil
GhostTag funciona tanto en la versión de escritorio como en la versión móvil de Obsidian.

---

## 📦 Instalación

### Desde los Plugins de la Comunidad de Obsidian (tras aprobación)

1. Abre los Ajustes de Obsidian
2. Ve a Plugins de la Comunidad
3. Busca "GhostTag"
4. Instala y Activa

### Instalación Manual

1. Descarga la última versión desde [Releases](https://github.com/itibo/ghost-tag/releases)
2. Copia `main.js`, `manifest.json` y `styles.css` en `.obsidian/plugins/ghost-tag/`
3. Activa el plugin en Obsidian

---

## 🚀 Uso

### Uso Básico

Simplemente envuelve el texto con `%%`:

```markdown
Hoy fue un buen día %% pero en realidad estoy luchando por dentro %%
```

La parte envuelta se vuelve transparente y se revela al pasar el ratón.

### Alternador Ghostify

Selecciona texto y presiona `Ctrl+Shift+G` para envolverlo con delimitadores Ghost.
Presiona de nuevo para retirarlos — una alternancia fluida.

### Abrir Ghost Scanner

- Haz clic en el icono de la cinta (🔍)
- O usa la paleta de comandos: **"Open Ghost Scanner"**

### Menú Contextual

Selecciona texto y haz clic derecho:

- **Ghostificar selección**: Alternar el envolvimiento con delimitadores Ghost
- **Copiar con GhostTags**: Copiar incluyendo marcadores Ghost
- **Copiar sin GhostTags**: Copiar eliminando el contenido Ghost

---

## ⚙️ Ajustes

### Delimitadores

Personaliza los marcadores de inicio y fin:

- `%% ... %%` (por defecto)
- `(( ... ))`
- `== ... ==`
- O lo que prefieras

### Visualización

| Ajuste | Descripción |
|---|---|
| Opacidad al pasar el ratón | Visibilidad de los Ghosts al pasar el cursor |
| Opacidad en modo edición | Visibilidad cuando el cursor está dentro |
| Opacidad del delimitador | Visibilidad de los marcadores en modo edición |
| Velocidad de animación | Duración de la transición de desvanecimiento (ms) |

### Comportamiento de Copia

| Ajuste | Descripción |
|---|---|
| Eliminación automática al copiar | Eliminar Ghosts al presionar `Ctrl+C` |

---

## 💭 Casos de Uso

### 1. Diario Emocional

```markdown
La reunión fue bien hoy.
%% pero la actitud de mi jefe me molestó mucho %%
Seguimos adelante con el próximo proyecto.
```

### 2. Escritura Creativa

```markdown
Ella sonrió y respondió.
%% mientras tramaba su venganza por dentro %%
"Estoy bien", dijo.
```

### 3. Notas de Estudio

```markdown
Entendí los conceptos básicos de la mecánica cuántica.
%% aún confundido con el principio de incertidumbre %%
A continuación, estudiaré las funciones de onda.
```

### 4. Notas de Trabajo

```markdown
El proyecto va según lo previsto.
%% en realidad, dos semanas de retraso %%
Presentación al cliente la próxima semana.
```

---

## 🎨 Filosofía de Diseño

GhostTag no "oculta completamente" la información.
La envuelve con delicadeza.

- Presente, pero invisible
- Ahí, pero sin molestar
- Oculto, pero accesible

Como un susurro en tu mente, tus emociones existen en un estado cuántico —
revelándose solo cuando eliges observarlas.

---

## 📸 Capturas de Pantalla

*(Próximamente)*

## 🎥 Vídeo Demo

*(Próximamente)*

---

## 🤝 Apoyo

Si GhostTag te resulta útil, considera apoyar su desarrollo:

- ⭐ Estrella en GitHub

---

## 🐛 Reportar Errores y Sugerencias

No dudes en reportar problemas o sugerir funciones en [Issues](https://github.com/itibo/ghost-tag/issues).

---

## 📝 Licencia

MIT License

---

## 📚 Detalles Técnicos

- TypeScript
- CodeMirror 6
- Obsidian Plugin API
- i18n (8 idiomas)

---

## 🙏 Agradecimientos

A todos los que usan este plugin:
Espero que abrace tiernamente vuestras vulnerabilidades y complejidades.

Made with 💙 by **Itibo**
