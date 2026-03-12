import NavBar from "./nav-bar/nav-bar"
import Link from "next/link"
import Icon from "../icon"
import styles from "./header.module.css"
import Logo from "../logo/logo"
import IconGithub from "../IconGithub"
import ThemeToggle from "../theme-toggle/theme-toggle"


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

        {/* <Link href="#" className={`getStartedLink ${styles.headerGetStartedLink}`}>Get Started</Link>

        <ThemeToggle />

        <button type="button" className={styles.iconBtn}>
          <Icon icon="material-symbols:translate" height={24} />
        </button> */}

        <a href="https://github.com/slynx/slynx" target="_blank" className={styles.iconBtn}>
          <IconGithub />
        </a>
      </div>
    </header>
  );
}
