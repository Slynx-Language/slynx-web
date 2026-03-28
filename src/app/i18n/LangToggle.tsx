"use client"

import { useLang } from "./LangContext"

export function LangToggle() {
  const { locale, setLocale } = useLang()
  return (
    <button
      onClick={() => setLocale(locale === "en" ? "pt" : "en")}
      style={{ fontWeight: 600, fontSize: 13, cursor: "pointer", background: "none", border: "none", color: "inherit" }}
    >
      {locale === "en" ? "PT" : "EN"}
    </button>
  )
}
