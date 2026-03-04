'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { THEME_CONFIG, type ThemeName } from './config'

interface ThemeContextType {
    theme: ThemeName | undefined
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * Wraps the app to provide theme state. 
 * Reads preference from localStorage or system settings.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeName | undefined>(THEME_CONFIG.defaultTheme)

    // On mount: detect and apply the initial theme
    useEffect(() => {
        const saved = localStorage.getItem(THEME_CONFIG.storageKey) as ThemeName | null
        const system = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? THEME_CONFIG.themes.dark
            : THEME_CONFIG.themes.light

        const initial = saved || system

        setTheme(initial)
        document.documentElement.classList.add(initial)
    }, [])

    const toggleTheme = () => {
        const { light, dark } = THEME_CONFIG.themes
        const next = theme === light ? dark : light

        setTheme(next)

        // Switch CSS classes on <html> tag
        document.documentElement.classList.remove(light, dark)
        document.documentElement.classList.add(next)

        localStorage.setItem(THEME_CONFIG.storageKey, next)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

/**
 * Simple hook to get 'theme' and 'toggleTheme' anywhere.
 */
export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used within ThemeProvider')
    return context
}
