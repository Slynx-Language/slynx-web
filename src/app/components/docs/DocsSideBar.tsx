// src/app/components/docs/DocsSidebar.tsx
"use client"

import styles from "./DocsSideBar.module.css"

// ─── Types ────────────────────────────────────────────────────────────────────

/** A single article link in the sidebar */
export interface NavItem {
  /** Text displayed in the sidebar */
  label: string
  /** Unique article identifier — passed to `onSelect` when clicked */
  key: string
}

/** A group of articles under a shared heading in the sidebar */
export interface NavSection {
  /** Section heading displayed above the article list */
  title: string
  items: NavItem[]
}

interface DocsSidebarProps {
  sections: NavSection[]
  /** Key of the currently active article — highlights the matching link */
  activeKey: string
  /**
   * Called when the user clicks an article link.
   * Does not trigger any navigation — the parent is responsible for updating content.
   * @param key - The key of the selected article
   */
  onSelect: (key: string) => void
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Left sidebar navigation for the docs.
 * Renders sections and article links as buttons — no routing involved.
 * The active link is highlighted based on `activeKey`.
 *
 * @example
 * <DocsSidebar
 *   sections={NAV_SECTIONS}
 *   activeKey={activeKey}
 *   onSelect={(key) => setActiveKey(key)}
 * />
 */
export default function DocsSidebar({ sections, activeKey, onSelect }: DocsSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <nav>
        {sections.map((section, i) => (
          <div key={i} className={styles.section}>
            <p className={styles.sectionTitle}>{section.title}</p>
            <ul className={styles.list}>
              {section.items.map((item) => (
                <li key={item.key}>
                  <button
                    className={`${styles.link} ${activeKey === item.key ? styles.linkActive : ""}`}
                    onClick={() => onSelect(item.key)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}