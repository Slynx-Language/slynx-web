"use client"

import { useLayoutEffect } from "react"
import styles from "./mobile-menu.module.css"

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

    const root = document.documentElement
    root.style.setProperty('--header-height', `${headerHeight}px`)
  }, [])

  return (
    <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
      <ul className={styles.mobileMenuList}>
        {children}
      </ul>
    </div>
  )
}
