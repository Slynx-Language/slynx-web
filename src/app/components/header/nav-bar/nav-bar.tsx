"use client"

import { useState, useEffect } from "react"

import MenuButton from "./menu-button/menu-button"
import MobileMenu from "./mobile-menu/mobile-menu"
import Link from "next/link"
import Icon from "@/app/components/icon"
import IconGithub from "@/app/components/IconGithub"
import styles from "./nav-bar.module.css"

const links = [
  { href: '#', text: 'Docs' },
  { href: '#', text: 'API Reference' },
  { href: '#', text: 'Features' },
  { href: '#', text: 'Use Cases' },
]

const menuItems = links.map(({ href, text }, index) => (
  <li key={index}>
    <Link href={href} className={styles.menuLink}>{text}</Link>
  </li>
))

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
      setIsMenuOpen(false)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      {
        isSmallScreen ?
          <>
            <MenuButton handleClick={toggleMenu} isMenuOpen={isMenuOpen} />
            <MobileMenu isMenuOpen={isMenuOpen}>
              {menuItems}
              <Link href="#" className={`getStartedLink ${styles.mobileGetStartedLink}`}>Get Started</Link>
              <li className={styles.mobileActions}>
                <button type="button" className={styles.mobileIconBtn}>
                  <Icon icon="material-symbols:search-rounded" height={24} />
                </button>
                <button type="button" className={styles.mobileIconBtn}>
                  <Icon icon="material-symbols:dark-mode-outline-rounded" height={24} />
                </button>
                <button type="button" className={styles.mobileIconBtn}>
                  <Icon icon="material-symbols:translate" height={24} />
                </button>
                <a href="https://github.com/slynx/slynx" target="_blank" className={styles.mobileIconBtn}>
                  <IconGithub />
                </a>
              </li>
            </MobileMenu>
          </> :
          <ul className={styles.navBarMenu}>
            {menuItems}
          </ul>
      }
    </nav>
  )
}
