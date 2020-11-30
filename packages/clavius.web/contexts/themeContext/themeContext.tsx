import { createContext } from 'react'
import { useCookie } from '../../hooks'
import { setThemeType, themeContextType, themeType, otherTheme } from '.'

export const ThemeContext = createContext<themeContextType>({
  theme: 'dark',
  setTheme: () => undefined,
  toggleTheme: () => undefined,
})

export const ThemeContextProvider: React.FunctionComponent<{
  theme: themeType
}> = ({ children, theme: initialTheme }) => {
  const [themeCookie, setThemeCookie] = useCookie('theme', initialTheme)

  const theme = themeCookie as themeType

  const updateHtml = (newTheme: themeType) => {
    const html = document.getElementsByTagName('html')?.[0]
    if (!html) return

    const htmlClasses = html.classList
    htmlClasses.add(newTheme)
  }

  const setTheme: setThemeType = newTheme => {
    updateHtml(newTheme)
    setThemeCookie(newTheme)
  }

  const toggleTheme = () => {
    const toggled = otherTheme(theme)
    console.log(`toggleTheme -> toggled`, toggled)
    setTheme(toggled)

    return toggled
  }

  const value = {
    theme,
    setTheme,
    toggleTheme,
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
