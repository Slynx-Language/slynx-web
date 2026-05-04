"use client"

import { useLayoutEffect } from "react"

type MobileNavBarProps = {
  isMenuOpen?: boolean
  children: React.ReactNode
}

export default function MobileMenu({
  isMenuOpen = false,
  children
}: MobileNavBarProps) {
  useLayoutEffect(() => {
    const header = document.getElementsByTagName('header')[0]
    const headerHeight = header.getBoundingClientRect().height
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`)
  }, [])

  return (
    <div
      className={`fixed z-10 top-[var(--header-height,0px)] bottom-0 right-0 px-[8vw] py-8 bg-[var(--frame-background)] text-[var(--frame-foreground)] transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <ul className="flex flex-col items-center gap-8 w-max list-none">
        {children}
      </ul>
    </div>
  )
}
