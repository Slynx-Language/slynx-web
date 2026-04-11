// src/app/docs/articles.tsx
// Single source of truth for all documentation content.
// To add a new article: add an object to DOCS and create the matching .mdx file.

import type { TocItem } from "../../components/docs/DocsTOC"
import WhatIsIt from "./content/introduction/whatisit.mdx";
import Installation from "./content/introduction/installation.mdx";
import FirstSteps from "./content/guides/first-steps.mdx";
import { ReactNode } from "react";

type Mdx = (props: any) => ReactNode;

// ─── Types ────────────────────────────────────────────────────────────────────

/** A single entry in the Table of Contents. Must match a ## heading id in the .mdx file. */
interface Topic {
  /** Must match the id of a ## heading in the corresponding .mdx file */
  id: string
  /** Label displayed in the TOC sidebar */
  label: string
}

/**
 * Represents a documentation article.
 * The `key` determines which .mdx file is loaded from `./content/<key>.mdx`.
 */
interface DocArticle {
  /**
   * Unique identifier for the article.
   * Must match the path of the .mdx file inside `./content/`.
   * @example "introducao/instalacao" → loads `./content/introducao/instalacao.mdx`
   */
  key: string
  /** Short label displayed in the sidebar navigation */
  label: string
  /** Full title displayed at the top of the article page */
  title: string
  /**
   * Groups the article under a sidebar section.
   * If the section does not exist yet, it will be created automatically.
   * @example "Introdução" | "Guias"
   */
  section: string
  /**
   * List of TOC entries for this article.
   * Each `id` must match a ## heading id in the corresponding .mdx file.
   */
  topics: Topic[],
  content: Mdx
}

// ─── Source ───────────────────────────────────────────────────────────────────

/**
 * Master list of all documentation articles.
 * This is the only place you need to edit to add, remove, or reorder content.
 *
 * `NAV_SECTIONS` and `ARTICLES` are derived from this array automatically.
 */
const DOCS: DocArticle[] = [
  {
    key: "introduction/what-is-it",
    label: "O que é?",
    title: "O que é?",
    section: "Introdução",
    topics: [
      { id: "visao-geral", label: "Visão geral" },
      { id: "motivacao", label: "Motivação" },
    ],
    content: WhatIsIt,
  },
  {
    key: "introduction/installation",
    label: "Instalação",
    title: "Instalação",
    section: "Introdução",
    topics: [
      { id: "requisitos", label: "Requisitos" },
      { id: "instalando", label: "Instalando" },
    ],
    content: Installation
  },
  {
    key: "guides/first-steps",
    label: "Primeiros passos",
    title: "Primeiros passos",
    section: "Guias",
    topics: [
      { id: "configuracao", label: "Configuração" },
      { id: "uso-basico", label: "Uso básico" },
    ],
    content: FirstSteps
  },
]

// ─── Derived exports ──────────────────────────────────────────────────────────

/**
 * Flat list of articles used by `page.tsx` to manage active state and navigation.
 * Automatically derived from `DOCS` — do not edit manually.
 *
 * @returns Array of `{ key, title, toc }` objects
 */
export const ARTICLES = DOCS.map(({ key, title, topics, content }) => ({
  key,
  title,
  toc: topics as TocItem[],
  content
}))

/**
 * Sidebar navigation sections, grouped by the `section` field in `DOCS`.
 * Automatically derived from `DOCS` — do not edit manually.
 *
 * @returns Array of `{ title, items: { label, key }[] }` objects
 *
 * @example
 * // Result for the DOCS above:
 * [
 *   { title: "Introdução", items: [{ label: "O que é?", key: "introducao/o-que-e" }, ...] },
 *   { title: "Guias",      items: [{ label: "Primeiros passos", key: "guias/primeiros-passos" }] },
 * ]
 */
export const NAV_SECTIONS = Object.values(
  DOCS.reduce<Record<string, { title: string; items: { label: string; key: string }[] }>>(
    (acc, doc) => {
      if (!acc[doc.section]) acc[doc.section] = { title: doc.section, items: [] }
      acc[doc.section].items.push({ label: doc.label, key: doc.key })
      return acc
    },
    {}
  )
)
