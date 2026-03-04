// src/app/components/docs/DocsTOC.tsx
"use client"

import { useEffect, useState } from "react"
import styles from "./DocsTOC.module.css"

// ─── Types ────────────────────────────────────────────────────────────────────

/** A single item in the Table of Contents */
export interface TocItem {
  /**
   * Must match the `id` attribute of a heading element in the article.
   * In MDX, ## headings receive an auto-generated id from the heading text.
   * When using `<DocsSection>`, pass the same id you use there.
   */
  id: string
  /** Label displayed in the TOC */
  label: string
}

interface DocsTOCProps {
  /** TOC items for the current article */
  items: TocItem[]
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Right sidebar Table of Contents.
 * Observes heading elements via `IntersectionObserver` and highlights
 * the label corresponding to the heading currently visible in the viewport.
 * Clicking a label smoothly scrolls to the matching heading.
 *
 * @remarks
 * Uses `rootMargin: "-20% 0% -70% 0%"` so the active item updates
 * slightly before the heading reaches the top of the viewport.
 * Re-observes headings whenever `items` changes (i.e. on article switch).
 *
 * @example
 * <DocsTOC
 *   items={[
 *     { id: "instalacao", label: "Instalação" },
 *     { id: "configuracao", label: "Configuração" },
 *   ]}
 * />
 */
export default function DocsTOC({ items }: DocsTOCProps) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-20% 0% -70% 0%" }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  /** Smoothly scrolls the page to the heading with the given id */
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <aside className={styles.toc}>
      <p className={styles.title}># Topics</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              className={`${styles.link} ${activeId === item.id ? styles.linkActive : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}