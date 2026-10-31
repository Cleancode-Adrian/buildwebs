import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const t = getDictionary(params.lang).imprint
  return pageMetadata({ lang: params.lang, path: '/imprint', title: t.metaTitle, description: t.title, noindex: true })
}

// Legal notice required for German-speaking markets (§ 5 DDG, § 18 MStV)
export default function ImprintPage({ params }: { params: { lang: Locale } }) {
  const t = getDictionary(params.lang).imprint

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h1>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">{t.provider}</h2>
          <p>
            CleanCode Adrian Sadowski
            <br />
            Pogalewo Wielkie 37/7
            <br />
            56-120 Brzeg Dolny
            <br />
            Poland / Polen
          </p>
          <p className="mt-3">
            NIP: 9880303943
            <br />
            REGON: 522778630
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">{t.contact}</h2>
          <p>
            E-Mail:{' '}
            <a href={`mailto:${site.email}`} className="text-electric-blue-light hover:text-neon-turquoise">
              {site.email}
            </a>
            <br />
            Tel.: +48 724 441 843
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">{t.register}</h2>
          <p>{t.registerText}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">{t.responsible}</h2>
          <p>Adrian Sadowski, Pogalewo Wielkie 37/7, 56-120 Brzeg Dolny, Poland</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">{t.dispute}</h2>
          <p>{t.disputeText}</p>
        </section>
      </div>
    </div>
  )
}
