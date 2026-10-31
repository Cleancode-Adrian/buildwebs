import type { MetadataRoute } from 'next'
import { serviceSlugs } from '@/lib/services'
import { getFullPosts, postPaths } from '@/lib/blog'
import { locales, type Locale } from '@/lib/i18n'
import { absoluteUrl } from '@/lib/seo'

type Entry = MetadataRoute.Sitemap[number]

// One entry per language, each listing its translations (hreflang in the sitemap)
function localized(path: string, priority: number, changeFrequency: Entry['changeFrequency'] = 'monthly'): Entry[] {
  const languages = Object.fromEntries(locales.map((l) => [l, absoluteUrl(l, path)]))
  return locales.map((lang) => ({
    url: absoluteUrl(lang, path),
    changeFrequency,
    priority,
    alternates: { languages },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...localized('/', 1),
    ...localized('/services', 0.8),
    ...serviceSlugs.flatMap((slug) => localized(`/services/${slug}`, 0.9)),
    ...localized('/european-accessibility-act-woocommerce', 0.9),
    ...localized('/about', 0.7),
    ...localized('/contact', 0.7),
    ...localized('/privacy', 0.3, 'yearly'),
  ]

  // Blog: one entry per full article and language, linked to its translations
  const blog: Entry[] = [
    ...localized('/blog', 0.7, 'weekly'),
    ...locales.flatMap((lang) =>
      getFullPosts(lang).map(({ id, slug, date }) => {
        const languages = Object.fromEntries(
          Object.entries(postPaths(id)).map(([l, p]) => [l, absoluteUrl(l as Locale, p as string)])
        )
        return {
          url: absoluteUrl(lang, `/blog/${slug}`),
          lastModified: date,
          changeFrequency: 'yearly' as const,
          priority: 0.6,
          alternates: { languages },
        }
      })
    ),
  ]

  return [...pages, ...blog]
}
