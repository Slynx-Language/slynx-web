// mdx-components.tsx
import type { MDXComponents } from "mdx/types"
import { DocsSection, DocsCodeBlock } from "./src/app/components/docs/DocsContent"
import styles from "./src/app/components/docs/DocsContent.module.css"

/**
 * Maps MDX tags to styled documentation components.
 *
 * - `##` headings → `DocsSection` (anchored, TOC-compatible)
 * - `p` → styled paragraph
 * - fenced code blocks → `DocsCodeBlock`
 *
 * This file is picked up automatically by Next.js when `@next/mdx` is configured.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, id }) => (
      <h2 id={id} className={styles.sectionTitle}>
        # {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className={styles.paragraph}>{children}</p>
    ),
    pre: ({ children }) => (
      <DocsCodeBlock code={String((children as any)?.props?.children ?? "")} />
    ),
    ...components,
  }
}