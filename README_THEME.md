# Slynx Theme Switcher 🍡 ✨

<p align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20Face.png" width="120" />
</p>

<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=00db63&center=true&vCenter=true&width=435&lines=Theme+Switcher+Module;Light+%26+Dark+Mode;Zero-config+System;Persistent+Storage" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Completed-00db63?style=for-the-badge&logoColor=white" alt="Status">
  <img src="https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
</p>

---
<p align="center">🍥 ✨ 🍥 ✨ 🍥 ✨ 🍥 ✨ 🍥 ✨ 🍥 ✨ 🍥</p>

### 🎀 Developer Note
> **Hey, MochiMochi is here!** 🚀
> 
> I've implemented a zero-config theme switcher designed to be "plug and play". The goal is to keep your workflow exactly as it is while adding theme persistence.

---

### ✨ How it Works
The system monitors the theme state and injects a CSS class (`.light` or `.dark`) into the document root (`<html>`). This triggers the predefined CSS variables to switch values automatically.

---

### 🍯 Step-by-Step (Easy as pie)
To make your new components support Dark Mode, you only need to follow **one rule**:

1. **Use CSS Variables** – Instead of hardcoding colors, use the variables defined in `globals.css`.
   ```css
   .my-component {
     background-color: var(--background);
     color: var(--foreground);
   }
   ```
*The toggle button handles all the logic, storage, and transitions for you.*

---

### 📖 File Changes

| Action | Path | Purpose |
| :--- | :--- | :--- |
| **Added** | `src/app/theme/` | Central logic & configuration |
| **Added** | `src/app/components/theme-toggle/` | Sun/Moon button component |
| **Modified** | `src/app/layout.tsx` | Global Provider integration |
| **Modified** | `src/app/globals.css` | Theme tokens & transitions |

---

### 📂 Structure

<details>
<summary><b>☁️ Theme Module Organization</b></summary>

```text
.
└── src/app/
    ├── theme/
    │   ├── config.ts    # Central constants (storage keys, names)
    │   └── provider.tsx  # Context & Persistence logic
    └── components/
        └── theme-toggle/
            └── theme-toggle.tsx # UI Component
```
</details>

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Sparkling%20Heart.png" width="50" />
  <br>
  <i>Implemented with care for the Slynx project.</i>
</p>
