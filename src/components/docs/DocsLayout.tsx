"use client";
// src/app/components/docs/DocsLayout.tsx
import DocsSidebar, { NavSection } from "./DocsSideBar"
import DocsTOC, { TocItem } from "./DocsTOC"

interface Page {
  label: string
  key: string
}

interface DocsLayoutProps {
  children: React.ReactNode
  sections: NavSection[]
  tocItems: TocItem[]
  title: string
  activeKey: string
  onSelect: (key: string) => void
  prev?: Page
  next?: Page
}

export default function DocsLayout({
  children, sections, tocItems,
  title, activeKey, onSelect, prev, next,
}: DocsLayoutProps) {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-background max-lg:flex-col max-lg:h-auto max-lg:min-h-screen">

      <DocsSidebar sections={sections} activeKey={activeKey} onSelect={onSelect} />

      <main
        id="docs-main"
        className="flex-1 overflow-y-auto px-12 py-8 max-md:px-4 max-md:py-6 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]"
      >
        <div className="max-w-[720px]">
          <h1 className="text-[26px] font-bold text-[var(--title-color)] tracking-[-0.01em] mb-5">
            {title}
          </h1>
          <hr className="border-none border-t border-white/[0.08] mb-8" />

          <div className="flex flex-col gap-10">{children}</div>

          <div className="flex justify-between items-center pt-8 pb-4 border-t border-white/[0.08] mt-12">
            {prev && (
              <button
                className="text-[13px] text-foreground px-3.5 py-1.5 border border-white/10 rounded-lg opacity-60 transition-[opacity,border-color] duration-200 hover:opacity-100 hover:border-white/30"
                onClick={() => onSelect(prev.key)}
              >
                ← {prev.label}
              </button>
            )}
            {next && (
              <button
                className="ml-auto text-[13px] text-foreground px-3.5 py-1.5 border border-white/10 rounded-lg opacity-60 transition-[opacity,border-color] duration-200 hover:opacity-100 hover:border-white/30"
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
