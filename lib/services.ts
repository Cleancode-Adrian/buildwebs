// The 4 core services, per language.
// Used by the home page cards, /services, /services/[slug], footer and sitemap.
import type { Locale } from './i18n'
import { servicesEn } from './services.en'
import { servicesDe } from './services.de'

export type Service = {
  slug: string
  icon: 'website' | 'store' | 'care' | 'accessibility'
  title: string
  shortTitle: string
  tagline: string
  description: string
  priceFrom: string
  priceNote: string
  timeline: string
  metaTitle: string
  metaDescription: string
  idealFor: string[]
  included: string[]
  packages?: { name: string; price: string; features: string[] }[]
  /** Path without language prefix, e.g. '/european-accessibility-act-woocommerce' */
  featuredLink?: { href: string; label: string; text: string }
  tech: string[]
  faq: { q: string; a: string }[]
}

const byLocale: Record<Locale, Service[]> = {
  en: servicesEn,
  de: servicesDe,
}

export function getServices(lang: Locale) {
  return byLocale[lang]
}

export function getService(lang: Locale, slug: string) {
  return byLocale[lang].find((s) => s.slug === slug)
}

export const serviceSlugs = servicesEn.map((s) => s.slug)
