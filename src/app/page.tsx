"use client"

import { useState, useEffect } from "react"
import DocsLayout from "./components/docs/DocsLayout"
import { ARTICLES, NAV_SECTIONS } from "./docs/articles"

export default function Home() {
  const [activeKey, setActiveKey] = useState(ARTICLES[0].key)
  const [Content, setContent]     = useState<React.FC | null>(null)

  useEffect(() => {
    import(`./docs/content/${activeKey}.mdx`)
      .then((mod) => setContent(() => mod.default))
      .catch(() => setContent(null))
  }, [activeKey])

  const index   = ARTICLES.findIndex((a) => a.key === activeKey)
  const current = ARTICLES[index]
  const prev    = ARTICLES[index - 1]
  const next    = ARTICLES[index + 1]

  const select = (key: string) => {
    setActiveKey(key)
    document.getElementById("docs-main")?.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <DocsLayout
      sections={NAV_SECTIONS}
      tocItems={current.toc}
      title={current.title}
      activeKey={activeKey}
      onSelect={select}
      prev={prev && { label: prev.title, key: prev.key }}
      next={next && { label: next.title, key: next.key }}
      editUrl="https://github.com/cykna/slynx-web/blob/main/src/app/docs/content"
    >
      {Content ? <Content /> : <p>Carregando...</p>}
    </DocsLayout>
  )
}