import type { Metadata } from 'next'
import { locales, localePath, ogLocales, defaultLocale, type Locale } from './i18n'
import { site } from './site'

type PageMeta = {
  lang: Locale
  /** Path without language prefix, e.g. '/services' */
  path: string
  title: string
  description: string
  keywords?: string
  type?: 'website' | 'article'
  image?: string
  /** Languages this page exists in (default: all) */
  available?: readonly Locale[]
  /** Per-language paths when the URL differs between languages (e.g. translated blog slugs) */
  paths?: Partial<Record<Locale, string>>
  noindex?: boolean
}

export function absoluteUrl(lang: Locale, path: string) {
  const p = localePath(lang, path)
  return p === '/' ? site.url : `${site.url}${p}`
}

/** Canonical + hreflang alternates + Open Graph for one page */
export function pageMetadata({ lang, path, title, description, keywords, type = 'website', image, available = locales, paths, noindex }: PageMeta): Metadata {
  const pathFor = (l: Locale) => paths?.[l] ?? path
  const langs = paths ? (Object.keys(paths) as Locale[]) : available
  const url = absoluteUrl(lang, pathFor(lang))
  const languages: Record<string, string> = {}
  for (const l of langs) languages[l] = absoluteUrl(l, pathFor(l))
  if (langs.includes(defaultLocale)) languages['x-default'] = absoluteUrl(defaultLocale, pathFor(defaultLocale))

  const ogImage = image || localePath(lang, '/opengraph-image')

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: url, languages },
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: site.name,
      locale: ogLocales[lang],
      images: [ogImage],
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
  }
}
