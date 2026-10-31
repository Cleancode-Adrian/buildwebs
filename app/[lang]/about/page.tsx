import type { Metadata } from 'next'
import Link from 'next/link'
import { localePath, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { getServices } from '@/lib/services'
import { pageMetadata } from '@/lib/seo'

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const t = getDictionary(params.lang).aboutPage
  return pageMetadata({ lang: params.lang, path: '/about', title: t.metaTitle, description: t.metaDescription })
}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params
  const t = getDictionary(lang).aboutPage

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          {t.title} <span className="gradient-text">BuildWebs</span>
        </h1>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>{t.p1}</p>

          <p>
            {t.p2Before}{' '}
            <a href="https://cleancodeas.pl" target="_blank" rel="noopener noreferrer" className="text-electric-blue-light hover:text-neon-turquoise">
              CleanCode
            </a>
            {t.p2After}
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">{t.whatWeDo}</h2>
          <ul className="list-disc list-inside space-y-3 ml-4">
            {getServices(lang).map((s) => (
              <li key={s.slug}>
                <Link href={localePath(lang, `/services/${s.slug}`)} className="text-electric-blue-light hover:text-neon-turquoise">
                  {s.title}
                </Link>{' '}
                — {s.tagline}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">{t.howWeWork}</h2>
          <ul className="list-disc list-inside space-y-3 ml-4">
            {t.how.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-12">
            <Link href={`${localePath(lang, '/')}#contact`} className="btn-primary text-lg">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
