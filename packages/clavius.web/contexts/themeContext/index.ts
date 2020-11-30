import { ThemeContextProvider, ThemeContext } from './themeContext'

export type setThemeType = (theme: themeType) => void

export type themeContextType = {
  theme: themeType
  setTheme: setThemeType
  toggleTheme: () => themeType | undefined
}

export type themeType = 'dark' | 'light'

export const otherTheme = (theme: themeType) =>
  theme === 'dark' ? 'light' : 'dark'

export { ThemeContextProvider, ThemeContext }
