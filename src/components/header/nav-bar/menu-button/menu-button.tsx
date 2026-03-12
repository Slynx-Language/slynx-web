import styles from "./menu-button.module.css"

type MenuButtonProps = {
  handleClick: () => void
  isMenuOpen?: boolean
}

export default function MenuButton({
  handleClick,
  isMenuOpen = false
}: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="2" y1="5" x2="22" y2="5" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="19" x2="22" y2="19" />
        </g>
      </svg>
    </button>
  )
}
