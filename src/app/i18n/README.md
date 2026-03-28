# Translation System

This project uses a manual, lightweight translation system built with React Context. No external libraries are required.

## How it works

### 1. `translations.ts`
Single source of truth for all translated strings. Contains a `translations` object with one key per supported locale (`en`, `pt`).
```ts
export const translations = {
  en: { hero: { title: "Customizable, Fast, & Efficient" } },
  pt: { hero: { title: "Customizável, Rápido e Eficiente" } },
}
```

### 2. `LangContext.tsx`
A React Context that holds the active locale and exposes `t` (the translations object for the current locale) and `setLocale` to switch languages.

The `LangProvider` wraps the entire app in `layout.tsx`.

### 3. `LangToggle.tsx`
A button component that toggles between `en` and `pt`. Rendered in the header.

## How to use translations in a component
```tsx
"use client"
import { useLang } from "@/app/i18n/LangContext"

export default function MyComponent() {
  const { t } = useLang()
  return <h1>{t.hero.title}</h1>
}
```

> **Note**: Components that use `useLang` must be Client Components (`"use client"`).

## How to add a new string

1. Open `src/app/i18n/translations.ts`
2. Add the key under both `en` and `pt`
3. Use it in your component via `t.yourKey`

## How to add a new language

1. Add the new locale to the `locales` array in `translations.ts`
2. Add a new entry to the `translations` object with all keys translated
3. Update `LangToggle.tsx` to cycle through the new locale

## File structure
```
src/app/i18n/
├── translations.ts   ← all translated strings
├── LangContext.tsx   ← React Context + useLang hook
├── LangToggle.tsx    ← toggle button (EN/PT)
└── README.md         ← this file
```
