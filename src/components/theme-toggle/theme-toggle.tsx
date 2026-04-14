'use client'

import { useTheme } from "next-themes"
import Icon from "../icon"
import styles from "../header/header.module.css"

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

    return (
        <button
            type="button"
            className={styles.iconBtn}
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
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
                icon={resolvedTheme === 'dark' ? "material-symbols:light-mode-rounded" : "material-symbols:dark-mode-rounded"}
                height={24}
            />
        </button>
    )
}
