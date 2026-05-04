"use client";
// src/app/components/docs/DocsSidebar.tsx

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  key: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

interface DocsSidebarProps {
  sections: NavSection[];
  activeKey: string;
  onSelect: (key: string) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function DocsSidebar({
  sections,
  activeKey,
  onSelect,
}: DocsSidebarProps) {
  return (
    <aside className="w-50 min-w-50 h-full overflow-y-auto py-6 border-r border-white/8 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.1)_transparent]">
      <nav>
        {sections.map((section, i) => (
          <div
            key={i}
            className="px-4 mb-7 [&+&]:border-t [&+&]:border-white/8 [&+&]:pt-6"
          >
            <p className="text-[11px] font-semibold text-foreground uppercase tracking-widest mb-2 opacity-50">
              {section.title}
            </p>
            <ul className="list-none p-0 m-0">
              {section.items.map((item) => (
                <li key={item.key}>
                  <button
                    className={`block w-full text-left px-2 py-1.25 text-[13px] text-foreground rounded-md transition-colors duration-200 leading-[1.4] ${
                      activeKey === item.key
                        ? "opacity-100 text-(--highlight-color) font-medium"
                        : "opacity-50 hover:opacity-100 hover:bg-(--hover-button)"
                    }`}
                    onClick={() => onSelect(item.key)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
