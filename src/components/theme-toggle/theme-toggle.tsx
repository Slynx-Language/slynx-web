'use client'

import { useTheme } from "next-themes"
import Icon from "../icon"

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

    return (
        <button
            type="button"
            className="flex items-center justify-center w-8 h-8 p-1.5 rounded-full text-[var(--frame-foreground)]"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
        >
            <Icon
                icon={resolvedTheme === 'dark' ? "material-symbols:light-mode-rounded" : "material-symbols:dark-mode-rounded"}
                height={24}
            />
        </button>
    )
}
