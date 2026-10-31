// Languages of the site. English lives at the root (/services),
// every other language under its own prefix (/de/services).
// To add a language: add it here, add lib/dictionaries/<code>.ts and lib/services.<code>.ts.

export const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
}

export const ogLocales: Record<Locale, string> = {
  en: 'en_GB',
  de: 'de_DE',
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** '/services' -> '/services' (en) or '/de/services' (de) */
export function localePath(lang: Locale, path: string = '/') {
  if (lang === defaultLocale) return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}

/** Strips the language prefix: '/de/services' -> '/services' */
export function stripLocale(pathname: string) {
  for (const l of locales) {
    if (l === defaultLocale) continue
    if (pathname === `/${l}`) return '/'
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1)
  }
  return pathname
}
