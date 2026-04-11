"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

const links = [
  { href: 'docs', text: 'Docs' },
  { href: 'reference', text: 'API Reference' },
  { href: '#', text: 'Features' },
  { href: '#', text: 'Use Cases' },
]

const menuItems = links.map(({ href, text }, index) => (
  <li key={index}>
    <Link href={href} className={buttonVariants({ variant: "link" })}>{text}</Link>
  </li >
))

export default function NavBar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [isSmallScreen, setIsSmallScreen] = useState(false)

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth < 1024)
  //     setIsMenuOpen(false)
  //   }
  //
  //   handleResize()
  //   window.addEventListener("resize", handleResize)
  //
  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // }, [])

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen)
  // }

  return (
    <nav>
      <ul className="flex justify-self-center gap-12 transition-colors">
        {menuItems}
      </ul>
    </nav>
  )
}
