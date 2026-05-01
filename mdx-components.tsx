// mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import React from "react";
import { DocsCodeBlock, DocsSection } from "./src/components/docs/DocsContent";

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
			<h2 id={id} className="text-lg font-semibold text-[var(--title-color)] tracking-tight">
				# {children}
			</h2>
		),
		p: ({ children }) => <p className="text-sm leading-7 text-[var(--foreground)] opacity-80">{children}</p>,
		pre: ({ children }) => {
			const codeEl = children as React.ReactElement<{
				children?: React.ReactNode;
			}>;
			const code = (codeEl?.props?.children as string) ?? "";
			return <DocsCodeBlock code={String(code)} />;
		},
		...components,
	};
}
