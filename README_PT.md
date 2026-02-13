# GhostTag

**Invisível até que você queira ver.**

Um plugin gentil para Obsidian que esconde suavemente suas emoções e pensamentos dentro das suas notas.

![Version](https://img.shields.io/badge/version-1.6.0-blue)
![Obsidian](https://img.shields.io/badge/Obsidian-0.15.0+-purple)
![License](https://img.shields.io/badge/license-MIT-green)
![Mobile](https://img.shields.io/badge/mobile-suportado-brightgreen)

---

## 🌙 Conceito

Às vezes, temos palavras que queremos guardar, mas não queremos ver.
Às vezes, temos emoções que não queremos enxergar no dia a dia, mas que precisamos acessar quando estivermos prontos.
GhostTag acolhe essa complexidade e vulnerabilidade.

- O que você escreve nunca desaparece
- Mas fica quietamente escondido até você estar pronto
- Não aparece em impressões ou cópias
- Revela-se apenas quando você quiser ver

---

## ✨ Funcionalidades

### 🎭 Modo Stealth
Texto envolvido em `%%...%%` torna-se transparente e invisível.

### 👀 Revelar ao Passar o Mouse
Mova o cursor sobre o texto, e ele aparece suavemente.

### ✏️ Clique para Editar
Posicione o cursor dentro, e o texto se torna totalmente visível para edição.

### 👻 Alternador Ghostify
Selecione qualquer texto e envolva-o instantaneamente com delimitadores Ghost — ou remova para alternar.

- **Atalho**: `Ctrl+Shift+G` (ou `Cmd+Shift+G` no Mac)
- Também disponível no menu de contexto e na paleta de comandos
- Funciona sem seleção — insere delimitadores e posiciona o cursor entre eles

### 🔍 Ghost Scanner
Uma barra lateral que lista todos os Ghosts na sua nota atual.

- **Abra quando quiser**: Ative pelo ícone da faixa ou pela paleta de comandos
- **Escondido quando não precisa**: Feche a barra lateral e ela desaparece completamente
- **Clique para navegar**: Selecione da lista para ir até aquele Ghost

Seus Ghosts se revelam apenas quando você está pronto para vê-los.
Caso contrário, permanecem completamente ocultos — sem distração, sem intrusão.

### 🛡️ Proteção de Cópia
Ao pressionar `Ctrl+C`, o conteúdo Ghost é automaticamente removido (configurável nas opções).

### 🌍 Suporte Multilíngue
Disponível em English, 日本語, 中文, Русский, Português, Français, Deutsch e Español.

### 🎨 Totalmente Personalizável

- Altere delimitadores (`%%`, `((`, `==`, etc.)
- Ajuste opacidade e velocidade da animação

### 🖨️ Oculto na Impressão / PDF
Ghosts ficam completamente invisíveis na impressão e exportação para PDF.

### 📱 Compatível com Mobile
GhostTag funciona tanto na versão desktop quanto na versão mobile do Obsidian.

---

## 📦 Instalação

### Pelos Plugins da Comunidade Obsidian (após aprovação)

1. Abra as Configurações do Obsidian
2. Vá para Plugins da Comunidade
3. Pesquise por "GhostTag"
4. Instale e Ative

### Instalação Manual

1. Baixe a versão mais recente em [Releases](https://github.com/itibo/ghost-tag/releases)
2. Copie `main.js`, `manifest.json` e `styles.css` para `.obsidian/plugins/ghost-tag/`
3. Ative o plugin no Obsidian

---

## 🚀 Uso

### Uso Básico

Basta envolver o texto com `%%`:

```markdown
Hoje foi um bom dia %% mas na verdade estou sofrendo por dentro %%
```

A parte envolvida fica transparente e se revela ao passar o mouse.

### Alternador Ghostify

Selecione o texto e pressione `Ctrl+Shift+G` para envolvê-lo com delimitadores Ghost.
Pressione novamente para remover — uma alternância fluida.

### Abrir Ghost Scanner

- Clique no ícone da faixa (🔍)
- Ou use a Paleta de Comandos: **"Open Ghost Scanner"**

### Menu de Contexto

Selecione o texto e clique com o botão direito:

- **Ghostify seleção**: Alternar envolvimento com delimitadores Ghost
- **Copiar com GhostTags**: Copiar incluindo marcadores Ghost
- **Copiar sem GhostTags**: Copiar removendo conteúdo Ghost

---

## ⚙️ Configurações

### Delimitadores

Personalize os marcadores de início e fim:

- `%% ... %%` (padrão)
- `(( ... ))`
- `== ... ==`
- Ou qualquer um de sua preferência

### Exibição

| Configuração | Descrição |
|---|---|
| Opacidade ao passar o mouse | Visibilidade dos Ghosts ao passar o cursor |
| Opacidade no modo de edição | Visibilidade quando o cursor está dentro |
| Opacidade do delimitador | Visibilidade dos marcadores no modo de edição |
| Velocidade da animação | Duração da transição de fade (ms) |

### Comportamento de Cópia

| Configuração | Descrição |
|---|---|
| Remoção automática ao copiar | Remover Ghosts ao pressionar `Ctrl+C` |

---

## 💭 Casos de Uso

### 1. Diário Emocional

```markdown
A reunião foi bem hoje.
%% mas a atitude do meu chefe me deixou muito chateado %%
Seguindo em frente com o próximo projeto.
```

### 2. Escrita Criativa

```markdown
Ela sorriu e respondeu.
%% enquanto planejava sua vingança internamente %%
"Estou bem", disse ela.
```

### 3. Notas de Estudo

```markdown
Entendi os conceitos básicos de mecânica quântica.
%% ainda confuso sobre o princípio da incerteza %%
Em seguida, vou estudar funções de onda.
```

### 4. Notas de Trabalho

```markdown
O projeto está dentro do cronograma.
%% na verdade duas semanas atrasado %%
Apresentação para o cliente na próxima semana.
```

---

## 🎨 Filosofia de Design

GhostTag não "esconde completamente" a informação.
Ele a envolve gentilmente.

- Presente, mas invisível
- Lá, mas sem incomodar
- Escondido, mas acessível

Como um sussurro em sua mente, suas emoções existem em estado quântico —
revelando-se apenas quando você escolhe observá-las.

---

## 📸 Capturas de Tela

*(Em breve)*

## 🎥 Vídeo Demo

*(Em breve)*

---

## 🤝 Apoie

Se o GhostTag te ajuda, considere apoiar seu desenvolvimento:

- ⭐ Dê uma estrela no GitHub

---

## 🐛 Relatar Bugs e Sugestões

Fique à vontade para relatar problemas ou sugerir funcionalidades em [Issues](https://github.com/itibo/ghost-tag/issues).

---

## 📝 Licença

MIT License

---

## 📚 Detalhes Técnicos

- TypeScript
- CodeMirror 6
- Obsidian Plugin API
- i18n (8 idiomas)

---

## 🙏 Agradecimentos

A todos que usam este plugin:
Espero que ele abrace gentilmente suas vulnerabilidades e complexidades.

Made with 💙 by **Itibo**
