import { useEffect, useMemo, useState } from 'react'
import { Theme, ThemeContext } from './ThemeContext'
import { LocalStorage } from '@/shared/lib/classes/LocalStorage'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)

  // const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  // const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches

  const setThemeMode = (theme: Theme) => setTheme(theme)

  const toggleThemeMode = () => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))

  const rootElem = useMemo(() => document.documentElement, [])

  useEffect(() => {
    LocalStorage.setItem('theme', theme)
    setIsDarkMode(theme === 'dark')
    setIsLightMode(theme === 'light')
    if (rootElem) {
      rootElem.classList.remove('dark', 'light')
      rootElem.classList.add(theme)
    }
  }, [theme, setIsDarkMode, setIsLightMode, rootElem])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkMode,
        isLightMode,
        setTheme: setThemeMode,
        toggleTheme: toggleThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
