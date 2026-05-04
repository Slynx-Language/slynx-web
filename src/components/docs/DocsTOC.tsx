// src/app/components/docs/DocsTOC.tsx
"use client"

import { useEffect, useState } from "react"

export interface TocItem {
  id: string
  label: string
}

interface DocsTOCProps {
  items: TocItem[]
}

export default function DocsTOC({ items }: DocsTOCProps) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-20% 0% -70% 0%" }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <aside className="w-[180px] min-w-[180px] h-full overflow-y-auto py-6 px-4 border-l border-white/[0.08] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
      <p className="text-[11px] font-bold text-foreground uppercase tracking-[0.1em] mb-3 opacity-50">
        # Topics
      </p>
      <ul className="list-none p-0 m-0">
        {items.map((item) => (
          <li key={item.id}>
            <button
              className={`block w-full text-left py-1 text-[13px] text-foreground leading-[1.5] transition-[color,opacity] duration-150 ${
                activeId === item.id
                  ? "opacity-100 text-[var(--highlight-color)] font-medium"
                  : "opacity-40 hover:opacity-80"
              }`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
