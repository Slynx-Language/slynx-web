// src/app/components/docs/DocsLayout.tsx
import DocsSidebar, { NavSection } from "./DocsSideBar"
import DocsTOC, { TocItem } from "./DocsTOC"
import styles from "./DocsLayout.module.css"

// ─── Types ────────────────────────────────────────────────────────────────────

/** Represents a navigable page with a label and article key */
interface Page {
  /** Text shown in the prev/next button */
  label: string
  /** Article key passed to `onSelect` when the button is clicked */
  key: string
}

interface DocsLayoutProps {
  /** Article content — typically MDX rendered via `<Content />` */
  children: React.ReactNode
  /** Sidebar navigation sections. See `NavSection` from DocsSidebar. */
  sections: NavSection[]
  /** TOC items for the current article. Must match ## heading ids in the MDX. */
  tocItems: TocItem[]
  /** Title displayed at the top of the article */
  title: string
  /** Key of the currently active article — used to highlight the sidebar link */
  activeKey: string
  /**
   * Called when the user selects an article from the sidebar or pagination buttons.
   * @param key - The key of the selected article
   */
  onSelect: (key: string) => void
  /** Previous article. If provided, renders a "← label" button in the footer. */
  prev?: Page
  /** Next article. If provided, renders a "label →" button in the footer. */
  next?: Page
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Root layout for the documentation page.
 * Composes the sidebar, main content area, and TOC into a three-column layout.
 *
 * @example
 * <DocsLayout
 *   sections={NAV_SECTIONS}
 *   tocItems={current.toc}
 *   title={current.title}
 *   activeKey={activeKey}
 *   onSelect={select}
 *   prev={prev && { label: prev.title, key: prev.key }}
 *   next={next && { label: next.title, key: next.key }}
 * >
 *   {Content ? <Content /> : <p>Loading...</p>}
 * </DocsLayout>
 */
export default function DocsLayout({
  children, sections, tocItems,
  title, activeKey, onSelect, prev, next,
}: DocsLayoutProps) {
  return (
    <div className={styles.root}>

      <DocsSidebar sections={sections} activeKey={activeKey} onSelect={onSelect} />

      <main id="docs-main" className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <hr className={styles.divider} />

          <div className={styles.body}>{children}</div>

          <div className={styles.pagination}>
            {prev && (
              <button className={styles.paginationBtn} onClick={() => onSelect(prev.key)}>
                ← {prev.label}
              </button>
            )}
            {next && (
              <button
                className={`${styles.paginationBtn} ${styles.paginationNext}`}
                onClick={() => onSelect(next.key)}
              >
                {next.label} →
              </button>
            )}
          </div>
        </div>
      </main>

      <DocsTOC items={tocItems} />

    </div>
  )
}