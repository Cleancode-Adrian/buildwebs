export type BlogPost = {
  /** URL slug in this language (may differ between languages) */
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  author: string
  /** ISO date, e.g. '2025-01-15' */
  date: string
  readTime: string
  category: string
  image?: string
  /** HTML */
  content: string
}
