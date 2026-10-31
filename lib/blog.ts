import { blogPostsEn } from './blogData.en'
import { blogPostsDe } from './blogData.de'
import type { BlogPost } from './blogTypes'
import type { Locale } from './i18n'

// Posts are identified by their English slug (the "id"); translations may use their own slug.
const byLocale: Record<Locale, Record<string, BlogPost>> = { en: blogPostsEn, de: blogPostsDe }

// Posts below this length are stubs: kept online, but hidden from the blog list,
// the sitemap and search engines (noindex) until they are written out in full.
const MIN_WORDS = 600

export function wordCount(html: string) {
  return html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
}

export function isFullPost(lang: Locale, id: string) {
  const post = byLocale[lang][id]
  return Boolean(post) && wordCount(post.content) >= MIN_WORDS
}

export function getPosts(lang: Locale) {
  return Object.entries(byLocale[lang]).map(([id, post]) => ({ id, ...post }))
}

export function getPostBySlug(lang: Locale, slug: string) {
  return getPosts(lang).find((p) => p.slug === slug)
}

export function getFullPosts(lang: Locale) {
  return getPosts(lang)
    .filter((p) => isFullPost(lang, p.id))
    .sort((a, b) => b.date.localeCompare(a.date))
}

/** Path of the same post in every language where a full version exists, e.g. { en: '/blog/x', de: '/blog/y' } */
export function postPaths(id: string) {
  const paths: Partial<Record<Locale, string>> = {}
  for (const lang of Object.keys(byLocale) as Locale[]) {
    const post = byLocale[lang][id]
    if (post && isFullPost(lang, id)) paths[lang] = `/blog/${post.slug}`
  }
  return paths
}
