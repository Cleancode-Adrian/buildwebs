import type { Metadata } from 'next'
import Link from 'next/link'
import Services from '@/components/Services'
import { localePath, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { getServices } from '@/lib/services'
import { pageMetadata } from '@/lib/seo'

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const t = getDictionary(params.lang).servicesPage
  return pageMetadata({ lang: params.lang, path: '/services', title: t.metaTitle, description: t.metaDescription })
}

export default function ServicesPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params
  const dict = getDictionary(lang)
  const t = dict.servicesPage

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.titleBefore} <span className="gradient-text">{t.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      <Services lang={lang} t={dict.services} services={getServices(lang)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">{t.ctaTitle}</h2>
        <p className="text-gray-400 mb-8 text-lg">{t.ctaText}</p>
        <Link href={localePath(lang, '/contact')} className="btn-primary text-lg">
          {t.cta}
        </Link>
      </div>
    </div>
  )
}
