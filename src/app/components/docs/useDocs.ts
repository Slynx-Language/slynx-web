"use client"

import { useState } from "react"

export interface Article {
  key: string
  title: string
  content: React.ReactNode
}

/**
 * Gerencia o estado das docs: artigo ativo, navegação prev/next e scroll.
 *
 * @param articles - Lista completa de artigos
 * @returns `activeKey`, `title`, `content`, `prev`, `next` e `select`
 *
 * @example
 * const docs = useDocs(ARTICLES)
 *
 * <DocsLayout
 *   title={docs.title}
 *   activeKey={docs.activeKey}
 *   onSelect={docs.select}
 *   prev={docs.prev}
 *   next={docs.next}
 * >
 *   {docs.content}
 * </DocsLayout>
 */
export function useDocs(articles: Article[]) {
  const [activeKey, setActiveKey] = useState(articles[0].key)

  const index   = articles.findIndex((a) => a.key === activeKey)
  const current = articles[index]

  const select = (key: string) => {
    setActiveKey(key)
    document.getElementById("docs-main")?.scrollTo({ top: 0, behavior: "smooth" })
  }

  return {
    activeKey,
    title:   current.title,
    content: current.content,
    prev:    articles[index - 1] as Article | undefined,
    next:    articles[index + 1] as Article | undefined,
    select,
  }
}