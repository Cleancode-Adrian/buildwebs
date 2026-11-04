import type { Metadata } from 'next'
import Link from 'next/link'
import { HiCheckCircle, HiExclamation, HiXCircle } from 'react-icons/hi'
import { localePath, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { pageMetadata, absoluteUrl } from '@/lib/seo'
import { site } from '@/lib/site'

const path = '/european-accessibility-act-woocommerce'

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const t = getDictionary(params.lang).eaa
  return pageMetadata({ lang: params.lang, path, title: t.metaTitle, description: t.metaDescription, keywords: t.keywords })
}

export default function EaaWooCommercePage({ params }: { params: { lang: Locale } }) {
  const { lang } = params
  const t = getDictionary(lang).eaa
  const p = (to: string) => localePath(lang, to)
  const url = absoluteUrl(lang, path)

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t.metaTitle,
      serviceType: 'Web accessibility audit',
      description: t.metaDescription,
      url,
      areaServed: { '@type': 'Place', name: 'European Union' },
      provider: { '@id': `${site.url}/#organization` },
      offers: { '@type': 'Offer', price: '100', priceCurrency: 'EUR' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.breadcrumbHome, item: absoluteUrl(lang, '/') },
        { '@type': 'ListItem', position: 2, name: t.breadcrumbParent, item: absoluteUrl(lang, '/services/web-accessibility') },
        { '@type': 'ListItem', position: 3, name: t.breadcrumbCurrent, item: url },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href={p('/')} className="hover:text-electric-blue-light">{t.breadcrumbHome}</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link href={p('/services/web-accessibility')} className="hover:text-electric-blue-light">{t.breadcrumbParent}</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-300">{t.breadcrumbCurrent}</span>
        </nav>

        {/* Hero */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-semibold mb-6">
            <HiExclamation className="text-lg" aria-hidden="true" />
            {t.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.titleBefore} <span className="gradient-text">{t.titleHighlight}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{t.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={p('/contact')} className="btn-primary text-lg">{t.ctaPrimary}</Link>
            <a href="#pricing" className="btn-secondary text-lg">{t.ctaPricing}</a>
          </div>
        </header>

        {/* Does it apply */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" aria-labelledby="applies">
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 id="applies" className="text-2xl font-bold mb-6">{t.appliesTitle}</h2>
            <ul className="space-y-4">
              {t.appliesIf.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300">
                  <HiCheckCircle className="text-electric-blue-light text-xl flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">{t.notCoveredTitle}</h2>
            <ul className="space-y-4 mb-6">
              {t.notCovered.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300">
                  <HiXCircle className="text-gray-400 text-xl flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400">{t.exemptNote}</p>
          </div>
        </section>

        {/* Common issues */}
        <section className="mb-20" aria-labelledby="issues">
          <h2 id="issues" className="text-3xl md:text-4xl font-bold mb-4 text-center">{t.issuesTitle}</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">{t.issuesSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.issues.map((item) => (
              <div key={item.area} className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <div className="text-neon-turquoise font-semibold mb-1">{item.area}</div>
                <p className="text-gray-300">{item.issue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20" aria-labelledby="process">
          <h2 id="process" className="text-3xl md:text-4xl font-bold mb-10 text-center">{t.processTitle}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.steps.map((step, i) => (
              <li key={step.title} className="bg-dark-card p-6 rounded-xl border border-gray-800">
                <div className="text-4xl font-bold gradient-text mb-3">{i + 1}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-20 scroll-mt-28" aria-labelledby="pricing-title">
          <h2 id="pricing-title" className="text-3xl md:text-4xl font-bold mb-10 text-center">{t.pricingTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col bg-dark-card p-8 rounded-2xl border ${pkg.highlighted ? 'border-electric-blue' : 'border-gray-800'}`}
              >
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold gradient-text mb-4">{pkg.price}</div>
                <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 text-gray-300 text-sm">
                      <HiCheckCircle className="text-electric-blue-light text-lg flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={p('/contact')} className={`mt-auto text-center ${pkg.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">{t.pricingNote}</p>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-20" aria-labelledby="faq">
          <h2 id="faq" className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faq.map((item) => (
              <details key={item.q} className="group bg-dark-card rounded-xl border border-gray-800 p-6">
                <summary className="cursor-pointer font-semibold text-lg text-white list-none flex justify-between items-center gap-4">
                  {item.q}
                  <span className="text-electric-blue-light group-open:rotate-45 transition-transform text-2xl" aria-hidden="true">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30">
          <h2 className="text-3xl font-bold mb-4">{t.finalTitle}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{t.finalText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={p('/contact')} className="btn-primary text-lg">{t.finalCta}</Link>
            <Link href={p('/services/web-accessibility')} className="btn-secondary text-lg">{t.finalSecondary}</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
