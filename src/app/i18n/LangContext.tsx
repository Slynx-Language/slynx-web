"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { translations, type Locale } from "./translations"

interface LangContextType {
  locale: Locale
  t: typeof translations["en"]
  setLocale: (locale: Locale) => void
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const t = translations[locale]
  return (
    <LangContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used inside LangProvider")
  return ctx
}
