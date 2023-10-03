import { useState, useEffect, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useTheme = () => {
    const [theme, setTheme] = useState('')

    const setThemeHandler = (theme) => {
        localStorage.setItem('theme', JSON.stringify(theme))
        setTheme(theme)
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            setTheme(JSON.parse(localTheme))
        }
    }, [])

    useIsomorphicLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])


    const imgThemeChanger = fileName => `/theme/${theme}/${fileName}`

    return { theme, setTheme: setThemeHandler, imgThemeChanger }
}
