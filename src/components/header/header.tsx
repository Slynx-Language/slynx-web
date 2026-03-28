import NavBar from "./nav-bar/nav-bar"
import Link from "next/link"
import Icon from "@/app/components/icon"
import styles from "./header.module.css"
import Logo from "../logo/logo"
import IconGithub from "@/app/components/IconGithub"
import { LangToggle } from "@/app/i18n/LangToggle"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Logo className={styles.logo} />
          <span className={styles.title}>
            <span className={styles.letterS}>S</span>
            <span className={styles.letterLy}>ly</span>
            <span className={styles.letterN}>n</span>
            <span className={styles.letterX}>x</span>
          </span>
        </Link>
      </div>
      <NavBar />
      <div className={styles.actions}>
        <button type="button" className={styles.iconBtn}>
          <Icon icon="material-symbols:search-rounded" height={24} />
        </button>
        <LangToggle />
        <a href="https://github.com/slynx/slynx" target="_blank" className={styles.iconBtn}>
          <IconGithub />
        </a>
      </div>
    </header>
  );
}
