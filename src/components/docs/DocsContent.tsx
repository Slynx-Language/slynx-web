// src/app/components/docs/DocsContent.tsx
import styles from "./DocsContent.module.css"

// ─── DocsSection ─────────────────────────────────────────────────────────────

interface DocsSectionProps {
  /**
   * Used as the HTML `id` of the section element.
   * Must match the corresponding `TocItem.id` for TOC highlighting to work.
   * @example "instalacao"
   */
  id: string
  /** Displayed as `# title` above the section content */
  title: string
  children: React.ReactNode
}

/**
 * A titled content block inside a documentation article.
 * Renders an anchored `<section>` that the TOC can scroll to.
 *
 * Can be used directly in `.mdx` files or in JSX article content.
 *
 * @example
 * // In a .mdx file:
 * <DocsSection id="instalacao" title="Instalação">
 *   <p>Run `npm install` to get started.</p>
 * </DocsSection>
 *
 * @example
 * // In JSX:
 * <DocsSection id="intro" title="Introduction">
 *   <p>Welcome to the docs.</p>
 * </DocsSection>
 */
export function DocsSection({ id, title, children }: DocsSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.sectionTitle}># {title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  )
}

// ─── DocsCodeBlock ────────────────────────────────────────────────────────────

interface DocsCodeBlockProps {
  /** Raw code string to display */
  code: string
  /**
   * Language label shown above the code block.
   * Purely visual — does not affect syntax highlighting.
   * @example "typescript" | "bash" | "json"
   */
  language?: string
}

/**
 * Styled code block for documentation articles.
 * Displays a language label when provided.
 *
 * In `.mdx` files, fenced code blocks (``` ```) are automatically
 * mapped to this component via `mdx-components.tsx`.
 *
 * @example
 * // Direct usage:
 * <DocsCodeBlock language="typescript" code={`const x = 1`} />
 *
 * @example
 * // In .mdx (automatic via mdx-components.tsx):
 * ```typescript
 * const x = 1
 * ```
 */
export function DocsCodeBlock({ code, language }: DocsCodeBlockProps) {
  return (
    <div className={styles.codeWrapper}>
      {language && <span className={styles.codeLang}>{language}</span>}
      <pre className={styles.code}>
        <code>{code}</code>
      </pre>
    </div>
  )
}