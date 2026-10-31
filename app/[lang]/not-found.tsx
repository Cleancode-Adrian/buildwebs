import Link from 'next/link'
import { headers } from 'next/headers'
import { isLocale, localePath, defaultLocale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'

// Next.js passes no params to not-found pages; the language comes from middleware ('x-locale').
export default function NotFound() {
  const value = headers().get('x-locale') ?? defaultLocale
  const lang = isLocale(value) ? value : defaultLocale
  const t = getDictionary(lang).notFound

  return (
    <div className="min-h-screen pt-40 pb-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        404 · <span className="gradient-text">{t.title}</span>
      </h1>
      <p className="text-gray-400 text-lg mb-10">{t.text}</p>
      <Link href={localePath(lang, '/')} className="btn-primary">
        {t.cta}
      </Link>
    </div>
  )
}
