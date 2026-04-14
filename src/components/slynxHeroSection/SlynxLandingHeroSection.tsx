"use client";

import { useEffect, useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SlynxPossibilities from "./SlynxPossibilities";

/** Token types for syntax highlighting (Dracula theme) */
type TokenType =
  | "keyword"
  | "string"
  | "number"
  | "type"
  | "identifier"
  | "comment"
  | "default";

interface Token {
  type: TokenType;
  value: string;
}

const KEYWORDS = new Set([
  "style",
  "component",
  "func",
  "struct",
  "const",
  "let",
  "mut",
  "for",
  "in",
  "void",
  "if",
  "else",
  "return",
  "true",
  "false",
  "int",
  "float",
  "type",
  "impl",
]);

/**
 * Tokenizes code for syntax highlighting. Supports partial input (typing animation).
 */
function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    // Comment (line)
    if (code.slice(i, i + 2) === "//") {
      let end = code.indexOf("\n", i);
      if (end === -1) end = code.length;
      tokens.push({ type: "comment", value: code.slice(i, end) });
      i = end;
      continue;
    }

    // String (double quote, allow unclosed)
    if (code[i] === '"') {
      let end = i + 1;
      while (end < code.length && code[end] !== '"' && code[end] !== "\n") {
        if (code[end] === "\\") end++;
        end++;
      }
      if (end < code.length && code[end] === '"') end++;
      tokens.push({ type: "string", value: code.slice(i, end) });
      i = end;
      continue;
    }

    // Number
    const numMatch = code.slice(i).match(/^\d+\.?\d*/);
    if (numMatch) {
      tokens.push({ type: "number", value: numMatch[0] });
      i += numMatch[0].length;
      continue;
    }

    // Word (keyword, type PascalCase, or identifier)
    const wordMatch = code.slice(i).match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
    if (wordMatch) {
      const word = wordMatch[0];
      let type: TokenType = "identifier";
      if (KEYWORDS.has(word)) type = "keyword";
      else if (/^[A-Z]/.test(word)) type = "type";
      tokens.push({ type, value: word });
      i += word.length;
      continue;
    }

    // Single character (punctuation, newline, etc.)
    tokens.push({ type: "default", value: code[i] });
    i++;
  }

  return tokens;
}

/**
 * Badge configuration object
 */
interface Badge {
  /** Unique identifier for the badge */
  id: string;
  /** Display text for the badge */
  text: string;
}

/**
 * Props for the WhySlynxSection component
 */
interface WhySlynxSectionProps {
  /** Main heading text (e.g., "Why") */
  title: string;
  /** Brand name to be highlighted (e.g., "Slynx") */
  brandName: string;
  /** Description paragraph below the title */
  description: string;
  /**
   * Array of badge objects to display as selection options.
   * Each badge must have an id and text.
   *
   * @example
   * ```ts
   * badges={[
   *   { id: 'simple', text: 'Simple' },
   *   { id: 'performance', text: 'Performance' }
   * ]}
   * ```
   */
  badges: Badge[];
  /** Currently selected badge id. */
  activeTabId: string;
  /** Code examples keyed by badge id. */
  codeExamplesByBadgeId: Record<string, string>;
  /** File name shown in the code window header */
  fileName: string;
  /** Typing animation speed in milliseconds (lower = faster) */
  typingSpeed: number;
  /**
   * Callback function triggered when a badge is selected.
   * Receives the badge id as parameter.
   * Use this to update the active tab in the parent container.
   *
   * @example
   * ```ts
   * onBadgeSelect={(id) => setSelectedFeature(id as FeatureId)}
   * ```
   */
  onBadgeSelect?: (badgeId: string) => void;
}

/**
 * WhySlynxSection Component
 *
 * A hero section component that displays a title, description, selectable badges,
 * and an animated code window with typing effect.
 *
 * **Important**: The badges array must contain objects with id and text properties.
 * Use onBadgeSelect callback to handle badge changes and update the selected tab accordingly.
 *
 * @example
 * ```tsx
 * type FeatureId = 'simple' | 'performance' | 'data-oriented' | 'intuitive';
 *
 * const [selectedFeature, setSelectedFeature] = useState<FeatureId>('simple');
 *
 * const featureCodeExamples: Record<FeatureId, string> = {
 *   simple: 'fun main() { println("Hello") }',
 *   performance: 'fun fibonacci(n: Int): Int { ... }',
 *   'data-oriented': 'struct Player { var health: Int }',
 *   intuitive: 'fun greet(name: String) { ... }'
 * };
 *
 * <WhySlynxSection
 *   title="Why"
 *   brandName="Slynx"
 *   description="Experience a syntax that feels natural..."
 *   badges={[
 *     { id: 'simple', text: 'Simple' },
 *     { id: 'performance', text: 'Performance' },
 *     { id: 'data-oriented', text: 'Data Oriented' },
 *     { id: 'intuitive', text: 'Intuitive' }
 *   ]}
 *   activeTabId={selectedFeature}
 *   codeExamplesByBadgeId={featureCodeExamples}
 *   fileName="MAIN.SX"
 *   typingSpeed={30}
 *   onBadgeSelect={(id) => setSelectedFeature(id as FeatureId)}
 * />
 * ```
 *
 * @param props - Component props
 * @returns React component
 */
export function WhySlynxSection(props: WhySlynxSectionProps) {
  const {
    title,
    brandName,
    description,
    badges,
    activeTabId,
    codeExamplesByBadgeId,
    fileName,
    typingSpeed,
    onBadgeSelect,
  } = props;

  const [typedText, setTypedText] = useState("");
  const activeCodeExample = codeExamplesByBadgeId[activeTabId] ?? "";

  /**
   * Effect hook to animate the typing of code example
   * Resets and restarts animation when the active tab's code or typingSpeed changes
   */
  useEffect(() => {
    let currentIndex = 0;
    setTypedText("");
    const interval = setInterval(() => {
      if (currentIndex <= activeCodeExample.length) {
        setTypedText(activeCodeExample.slice(0, currentIndex));
        currentIndex++;
      } else clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [activeCodeExample, typingSpeed]);

  const highlightedCode = useMemo(() => {
    const tokens = tokenize(typedText);
    const classByType: Record<TokenType, string> = {
      keyword: "text-primary-brand-color",
      string: "text-chart-1",
      number: "text-chart-1",
      type: "text-primary-brand-color",
      identifier: "text-emerald-100",
      comment: "text-muted-foreground",
      default: "text-foreground",
    };
    let charOffset = 0;
    return tokens.map((t) => {
      const key = `${charOffset}-${t.type}-${t.value}`;
      charOffset += t.value.length;
      return (
        <span key={key} className={classByType[t.type]}>
          {t.value}
        </span>
      );
    });
  }, [typedText]);

  return (
    <div className="relative px-5 py-6 md:p-8 w-full h-screen flex items-center">
      <Tabs
        value={activeTabId}
        defaultValue={badges[0]?.id}
        onValueChange={(value) => {
          if (onBadgeSelect) {
            onBadgeSelect(String(value));
          }
        }}
        className="relative z-10 w-full items-center justify-between gap-0 data-horizontal:flex-row animate-in fade-in slide-in-from-bottom-6 duration-700"
      >
        <div className="w-full">
          <h1 className="mb-6 font-heading text-[clamp(2.4rem,7vw,4rem)] leading-[1.1] font-bold tracking-[-0.03em] text-foreground sm:mb-4">
            {title}{" "}
            <span className="text-primary-brand-color">{brandName}</span>
          </h1>

          <p className="mb-8 font-heading text-[clamp(1rem,2.5vw,1.125rem)] leading-[1.7] text-muted-foreground sm:mb-6">
            {description}
          </p>

          <div className="flex flex-col gap-10">
            <div className="mb-8 flex flex-wrap gap-2 md:mb-12 md:gap-3">
              <TabsList className="h-auto! group-data-horizontal/tabs:h-auto! w-fit gap-1 overflow-hidden rounded-full border border-border bg-linear-to-b from-card/90 to-card/60 p-1 shadow-sm shadow-black/25 backdrop-blur-md">
                {badges.map((badge) => (
                  <TabsTrigger
                    key={badge.id}
                    value={badge.id}
                    className="h-auto! flex-none! rounded-full! border-transparent! px-5 py-2.5 font-heading text-sm font-medium text-muted-foreground transition-all duration-300 sm:px-7 sm:text-[1.1rem] hover:bg-primary-brand-color/20! hover:text-primary-brand-color! data-active:border-transparent! data-active:bg-primary-brand-color/30! data-active:text-primary-brand-color!"
                  >
                    {badge.text}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          <SlynxPossibilities />
        </div>

        <div className="overflow-hidden w-full rounded-2xl border border-border bg-card animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300 fill-mode-backwards">
          <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
            <div className="flex items-center gap-2 *:h-3 *:w-3 *:rounded-full">
              <span className="bg-[#ff5f57]"></span>
              <span className="bg-[#ffbd2e]"></span>
              <span className="bg-[#28ca42]"></span>
            </div>
            <div className="font-mono text-xs font-medium tracking-[0.05em] text-muted-foreground">
              {fileName}
            </div>
          </div>

          {badges.map((badge) => (
            <TabsContent
              key={badge.id}
              value={badge.id}
              className="relative min-h-35 bg-popover p-4 sm:min-h-40 md:min-h-50 md:p-6"
            >
              <pre className="relative m-0 font-mono text-xs leading-[1.7] text-foreground md:text-sm">
                <code className="block whitespace-pre-wrap wrap-break-word font-mono!">
                  {highlightedCode}
                  <span className="ml-0.5 inline-block h-[1em] w-[0.5em] animate-pulse align-text-bottom bg-foreground"></span>
                </code>
              </pre>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default WhySlynxSection;
