"use client"

import styles from "./DocsTOC.module.css"

export interface TocItem {
  id: string
  label: string
}

interface DocsTOCProps {
  items: TocItem[]
}

export default function DocsTOC({ items }: DocsTOCProps) {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <aside className={styles.toc}>
      <p className={styles.title}># Topics</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              className={styles.link}
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