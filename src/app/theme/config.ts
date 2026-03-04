/**
 * Simple configuration for the theme system.
 * Change these values to rename themes or storage keys.
 */
export const THEME_CONFIG = {
    storageKey: 'theme',
    themes: {
        light: 'light',
        dark: 'dark'
    } as const,
    defaultTheme: undefined // Defaults to system preference
}

export type ThemeName = keyof typeof THEME_CONFIG.themes;
