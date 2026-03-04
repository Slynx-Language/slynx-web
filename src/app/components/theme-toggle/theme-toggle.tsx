'use client'

import { useTheme } from "@/app/theme/provider"
import Icon from "@/app/components/icon"
import styles from "../header/header.module.css"

/**
 * The Sun/Moon button used in the Header to switch themes.
 */
export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    // Wait for theme detection to avoid flickering on first load
    if (theme === undefined) return <div style={{ width: 32, height: 32 }} />

    return (
        <button
            type="button"
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                color: 'var(--frame-foreground)'
            }}
        >
            <Icon
                icon={theme === 'dark' ? "material-symbols:light-mode-rounded" : "material-symbols:dark-mode-rounded"}
                height={24}
            />
        </button>
    )
}
