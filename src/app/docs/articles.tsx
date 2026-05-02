// src/app/docs/articles.tsx
// Single source of truth for all documentation content.
// To add a new article: add an object to DOCS and create the matching .mdx file.

import type { TocItem } from "../../components/docs/DocsTOC";
import WhatIsIt from "./content/introduction/whatisit.mdx";
import Installation from "./content/introduction/installation.mdx";
import FirstSteps from "./content/guides/first-steps.mdx";
import Functions from "./content/guides/functions.mdx";
import Strings from "./content/guides/strings.mdx";
import NumericTypes from "./content/guides/numeric-types.mdx";
import Conditionals from "./content/guides/conditionals.mdx";
import SpecializedComponents from "./content/guides/specialized-components.mdx";
import Objects from "./content/guides/objects.mdx";
import NamingConventions from "./content/guides/naming-conventions.mdx";
import Aliases from "./content/guides/aliases.mdx";
import Booleans from "./content/guides/booleans.mdx";
import Comments from "./content/guides/comments.mdx";
import Components from "./content/guides/components.mdx";
import Roadmap002 from "./content/guides/roadmap-0-0-2.mdx";
import LongTermGoals from "./content/guides/long-term-goals.mdx";
import ContributingOverview from "./content/contributing/overview.mdx";
import ContributingPipeline from "./content/contributing/pipeline.mdx";
import ContributingCommon from "./content/contributing/common.mdx";
import LexerParser from "./content/contributing/lexer-parser.mdx";
import Hir from "./content/contributing/hir.mdx";
import TypeChecker from "./content/contributing/typechecker.mdx";
import Middleend from "./content/contributing/middleend.mdx";
import { ReactNode } from "react";

type Mdx = (props: any) => ReactNode;

// ─── Types ────────────────────────────────────────────────────────────────────

/** A single entry in the Table of Contents. Must match a ## heading id in the .mdx file. */
interface Topic {
  /** Must match the id of a ## heading in the corresponding .mdx file */
  id: string;
  /** Label displayed in the TOC sidebar */
  label: string;
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
  key: string;
  /** Short label displayed in the sidebar navigation */
  label: string;
  /** Full title displayed at the top of the article page */
  title: string;
  /**
   * Groups the article under a sidebar section.
   * If the section does not exist yet, it will be created automatically.
   * @example "Introdução" | "Guias"
   */
  section: string;
  /**
   * List of TOC entries for this article.
   * Each `id` must match a ## heading id in the corresponding .mdx file.
   */
  topics: Topic[];
  content: Mdx;
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
    label: "What is it?",
    title: "What is it?",
    section: "Introduction",
    topics: [
      { id: "general-vision", label: "General Ideology" },
      { id: "motivation", label: "Motivation" },
    ],
    content: WhatIsIt,
  },
  {
    key: "introduction/installation",
    label: "Instalation",
    title: "Instalation",
    section: "Introduction",
    topics: [
      { id: "requisites", label: "Requirements" },
      { id: "installing", label: "Installing" },
    ],
    content: Installation,
  },
  {
    key: "guides/first-steps",
    label: "First Steps",
    title: "First Steps",
    section: "Guides",
    topics: [
      { id: "configuring", label: "Configuring" },
      { id: "basic-usage", label: "Basic Usage" },
    ],
    content: FirstSteps,
  },
  {
    key: "guides/functions",
    label: "Intro To Functions",
    title: "Functions",
    section: "Guides",
    topics: [
      { id: "variables", label: "Variables" },
      { id: "conditionals", label: "If Expression" },
      { id: "while", label: "While" },
      { id: "func-sign", label: "Function Signatures" },
      { id: "tuples", label: "Tuples" },
    ],
    content: Functions,
  },
  {
    key: "guides/strings",
    label: "Strings",
    title: "Strings",
    section: "Guides",
    topics: [
      { id: "characteristics", label: "Characteristics" },
      { id: "current-state", label: "Current State" },
    ],
    content: Strings,
  },
  {
    key: "guides/numeric-types",
    label: "Numeric Types",
    title: "Numbers",
    section: "Guides",
    topics: [
      { id: "current-types", label: "Current Types" },
      { id: "future-types", label: "Future Types" },
      { id: "numeric-literals", label: "Numeric Literals" },
    ],
    content: NumericTypes,
  },
  {
    key: "guides/conditionals",
    label: "Conditionals",
    title: "Numbers",
    section: "Guides",
    topics: [
      { id: "if", label: "If Expression" },
      { id: "exaustiviness", label: "Exaustiviness" },
      { id: "while", label: "While" },
    ],
    content: Conditionals,
  },
  {
    key: "guides/specialized-components",
    label: "Specialized Components",
    title: "Specialized Components",
    section: "Guides",
    topics: [
      { id: "text", label: "Text" },
      { id: "div", label: "Div" },
    ],
    content: SpecializedComponents,
  },
  {
    key: "guides/objects",
    label: "Objects",
    title: "Objects",
    section: "Guides",
    topics: [
      { id: "what-is", label: "What is an Object" },
      { id: "declaring", label: "Declaring" },
      { id: "instantiating", label: "Instantiating" },
      { id: "accessing-fields", label: "Accessing Fields" },
      { id: "as-a-type", label: "Using as a Type" },
    ],
    content: Objects,
  },
  {
    key: "guides/objects",
    label: "Objects",
    title: "Objects",
    section: "Guides",
    topics: [
      { id: "declaring-an-object", label: "Declaring an Object" },
      { id: "creating-an-instance", label: "Creating an Instance" },
      { id: "accessing-fields", label: "Accessing Fields" },
      { id: "mutating-fields", label: "Mutating Fields" },
      { id: "using-objects-in-functions", label: "Using in Functions" },
      { id: "aliases", label: "Aliases" },
    ],
    content: Objects
  },
  {
    key: "guides/naming-conventions",
    label: "Naming Conventions",
    title: "Naming Conventions",
    section: "Guides",
    topics: [
      { id: "types-objects-and-components", label: "Types & Objects" },
      { id: "variables-and-function-parameters", label: "Variables" },
      { id: "functions", label: "Functions" },
      { id: "constants", label: "Constants" },
      { id: "component-props", label: "Component Props" },
    ],
    content: NamingConventions
  },
  {
    key: "guides/aliases",
    label: "Aliases",
    title: "Aliases",
    section: "Guides",
    topics: [
      { id: "usage", label: "Usage" },
      { id: "aliasing-built-in-types", label: "Built-in Types" },
      { id: "notes", label: "Notes" },
    ],
    content: Aliases
  },
  {
    key: "guides/booleans",
    label: "Booleans",
    title: "Booleans",
    section: "Guides",
    topics: [
      { id: "boolean-operators", label: "Boolean Operators" },
      { id: "comparison-operators", label: "Comparison Operators" },
      { id: "using-booleans-in-conditions", label: "In Conditions" },
    ],
    content: Booleans
  },
  {
    key: "guides/comments",
    label: "Comments",
    title: "Comments",
    section: "Guides",
    topics: [
      { id: "line-comments", label: "Line Comments" },
      { id: "block-comments", label: "Block Comments" },
    ],
    content: Comments
  },
  {
    key: "guides/components",
    label: "Components",
    title: "Components",
    section: "Guides",
    topics: [
      { id: "props", label: "Props" },
      { id: "instantiating-a-component", label: "Instantiating" },
      { id: "composing-components", label: "Composing" },
      { id: "the-component-return-type", label: "Return Type" },
    ],
    content: Components
  },
  {
    key: "contributing/overview",
    label: "Contributing",
    title: "Contributing",
    section: "Contributing",
    topics: [
      { id: "where-to-contribute", label: "Where to Contribute" },
      { id: "setup", label: "Setup" },
      { id: "workflow", label: "Workflow" },
    ],
    content: ContributingOverview
  },
  {
    key: "contributing/pipeline",
    label: "Compilation Pipeline",
    title: "Compilation Pipeline",
    section: "Contributing",
    topics: [
      { id: "overview", label: "Overview" },
      { id: "crates", label: "Crates" },
      { id: "entry-points", label: "Entry Points" },
      { id: "current-state", label: "Current State" },
    ],
    content: ContributingPipeline
  },
  {
    key: "contributing/common",
    label: "The common Crate",
    title: "The common Crate",
    section: "Contributing",
    topics: [
      { id: "whats-inside", label: "What's Inside" },
      { id: "ast-types-ast", label: "AST Types" },
      { id: "symbols-symbolsrs", label: "Symbols" },
    ],
    content: ContributingCommon
  },
  {
    key: "contributing/lexer-parser",
    label: "Lexer and Parser",
    title: "Lexer and Parser",
    section: "Contributing",
    topics: [
      { id: "lexer", label: "Lexer" },
      { id: "parser", label: "Parser" },
    ],
    content: LexerParser
  },
  {
    key: "contributing/hir",
    label: "HIR",
    title: "HIR",
    section: "Contributing",
    topics: [
      { id: "what-the-hir-does", label: "What the HIR does" },
      { id: "two-phase-generation", label: "Two-phase generation" },
      { id: "key-types", label: "Key types" },
      { id: "error-handling", label: "Error handling" },
    ],
    content: Hir
  },
  {
    key: "contributing/typechecker",
    label: "Type Checker & Monomorphizer",
    title: "Type Checker and Monomorphizer",
    section: "Contributing",
    topics: [
      { id: "type-checker", label: "Type Checker" },
      { id: "monomorphizer", label: "Monomorphizer" },
    ],
    content: TypeChecker
  },
  {
    key: "contributing/middleend",
    label: "Middleend & SlynxIR",
    title: "Middleend and SlynxIR",
    section: "Contributing",
    topics: [
      { id: "basic-structure", label: "Basic Structure" },
      { id: "contexts-and-basic-blocks", label: "Contexts & Basic Blocks" },
      { id: "instructions", label: "Instructions" },
      { id: "components-in-the-ir", label: "Components in the IR" },
      { id: "what-is-implemented-today", label: "Current State" },
    ],
    content: Middleend
  },
  {
    key: "guides/roadmap-0-0-2",
    label: "Planned for v0.0.2",
    title: "Planned for v0.0.2",
    section: "Goals",
    topics: [
      { id: "numeric-types", label: "Numeric Types" },
      { id: "imports-and-modules", label: "Imports" },
      { id: "for-loops", label: "For Loops" },
      { id: "array-indexing", label: "Array Indexing" },
      { id: "unary-operators", label: "Unary Operators" },
      { id: "compound-assignment-operators", label: "Compound Assignment" },
    ],
    content: Roadmap002
  },
  {
    key: "guides/long-term-goals",
    label: "Long-term Goals",
    title: "Long-term Goals",
    section: "Goals",
    topics: [
      { id: "move-semantics", label: "Move Semantics" },
      { id: "state-based-type-system", label: "State-based Types" },
      { id: "pattern-matching", label: "Pattern Matching" },
      { id: "enums-and-adts", label: "Enums & ADTs" },
      { id: "methods", label: "Methods" },
      { id: "interfaces", label: "Interfaces" },
      { id: "extensions", label: "Extensions" },
      { id: "lanes-data-oriented-layout", label: "Lanes (SoA)" },
      { id: "reactivity-model-redesign", label: "Reactivity Redesign" },
      { id: "slot-system", label: "Slot System" },
      { id: "styling-system", label: "Styling System" },
      { id: "macros-and-comptime-functions", label: "Macros & Comptime" },
      { id: "package-manager-and-cli", label: "Package Manager & CLI" },
      { id: "object--struct-rename", label: "object → struct" },
    ],
    content: LongTermGoals
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
  content,
}));

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
  DOCS.reduce<
    Record<string, { title: string; items: { label: string; key: string }[] }>
  >((acc, doc) => {
    if (!acc[doc.section]) acc[doc.section] = { title: doc.section, items: [] };
    acc[doc.section].items.push({ label: doc.label, key: doc.key });
    return acc;
  }, {}),
);
