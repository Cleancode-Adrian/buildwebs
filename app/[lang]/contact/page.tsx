import type { Metadata } from 'next'
import Contact from '@/components/Contact'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const t = getDictionary(params.lang).contactPage
  return pageMetadata({ lang: params.lang, path: '/contact', title: t.metaTitle, description: t.metaDescription })
}

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  return (
    <div className="min-h-screen pt-20">
      <Contact lang={params.lang} t={getDictionary(params.lang).contact} headingLevel="h1" />
    </div>
  )
}
