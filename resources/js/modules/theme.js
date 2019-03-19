import Cookie from 'js-cookie'
import { setMeta } from './helpers'
const CONFIG = AWES_CONFIG.theme || {}
const DOMAIN = CONFIG.domain

export function setTheme(isDark) {
    if ( isDark ) {
        document.documentElement.setAttribute('data-dark', true)
    } else {
        document.documentElement.removeAttribute('data-dark')
    }
    if ( CONFIG.metaColor ) {
        let color = CONFIG.metaColor[isDark ? 'dark' : 'light']
        setMeta('theme-color', color)
        setMeta('msapplication-navbutton-color', color)
    }
    Cookie.set('theme_dark', isDark, {expires: 365, domain: DOMAIN})
}

export const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

export function getTheme() {
    return Number( Cookie.get('theme_dark') || themeMediaQuery.matches )
}

export function checkTheme() {
    let isDark = getTheme() || CONFIG.isDark && Number(CONFIG.isDark) || 0
    setTheme(isDark)
    return isDark
}