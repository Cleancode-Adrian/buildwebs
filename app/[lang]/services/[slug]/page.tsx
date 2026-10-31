import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HiCheckCircle, HiClock, HiCurrencyEuro } from 'react-icons/hi'
import ServiceIcon from '@/components/ServiceIcon'
import { getServices, getService, serviceSlugs } from '@/lib/services'
import { locales, localePath, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { pageMetadata, absoluteUrl } from '@/lib/seo'

type Params = { params: { lang: Locale; slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return locales.flatMap((lang) => serviceSlugs.map((slug) => ({ lang, slug })))
}

export function generateMetadata({ params }: Params): Metadata {
  const service = getService(params.lang, params.slug)
  if (!service) return {}
  return pageMetadata({
    lang: params.lang,
    path: `/services/${service.slug}`,
    title: service.metaTitle,
    description: service.metaDescription,
  })
}

export default function ServicePage({ params }: Params) {
  const { lang } = params
  const service = getService(lang, params.slug)
  if (!service) notFound()

  const t = getDictionary(lang).servicePage
  const otherServices = getServices(lang).filter((s) => s.slug !== service.slug)

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.description,
      areaServed: { '@type': 'Place', name: 'European Union' },
      provider: { '@id': 'https://buildwebs.eu/#organization' },
      url: absoluteUrl(lang, `/services/${service.slug}`),
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        description: `${t.from} ${service.priceFrom}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue-light text-sm font-semibold mb-6">
            <ServiceIcon icon={service.icon} className="text-xl" />
            {service.shortTitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{service.title}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">{service.tagline}</p>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">{service.description}</p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 px-5 py-3 bg-dark-card border border-gray-800 rounded-xl">
              <HiCurrencyEuro className="text-2xl text-neon-turquoise" aria-hidden="true" />
              <span className="text-white font-bold">{t.from} {service.priceFrom}</span>
              <span className="text-gray-400 text-sm">· {service.priceNote}</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-dark-card border border-gray-800 rounded-xl">
              <HiClock className="text-2xl text-neon-turquoise" aria-hidden="true" />
              <span className="text-white font-semibold">{service.timeline}</span>
            </div>
          </div>
        </div>

        {service.featuredLink && (
          <Link
            href={localePath(lang, service.featuredLink.href)}
            className="block mb-12 p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 hover:border-yellow-500/60 transition-colors"
          >
            <div className="text-yellow-300 font-bold text-lg mb-1">{service.featuredLink.label} →</div>
            <p className="text-gray-300">{service.featuredLink.text}</p>
          </Link>
        )}

        {/* Included + Ideal for */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">{t.included}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <HiCheckCircle className="text-electric-blue-light text-xl flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">{t.idealFor}</h2>
            <ul className="space-y-4 mb-8">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="text-neon-turquoise mt-0.5" aria-hidden="true">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-3">{t.tools}</h3>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-dark-bg text-gray-400 text-sm rounded-full border border-gray-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Packages */}
        {service.packages && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.plans}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.packages.map((pkg, i) => (
                <div
                  key={pkg.name}
                  className={`bg-dark-card p-8 rounded-2xl border ${
                    i === 1 ? 'border-electric-blue' : 'border-gray-800'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold gradient-text mb-6">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-gray-300 text-sm">
                        <HiCheckCircle className="text-electric-blue-light text-lg flex-shrink-0" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">{t.plansNote}</p>
          </div>
        )}

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.faq}</h2>
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details key={item.q} className="group bg-dark-card rounded-xl border border-gray-800 p-6">
                <summary className="cursor-pointer font-semibold text-lg text-white list-none flex justify-between items-center gap-4">
                  {item.q}
                  <span className="text-electric-blue-light group-open:rotate-45 transition-transform text-2xl" aria-hidden="true">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30 mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <Link href={localePath(lang, '/contact')} className="btn-primary text-lg">
            {t.cta}
          </Link>
        </div>

        {/* Other services */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">{t.other}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={localePath(lang, `/services/${s.slug}`)}
                className="flex items-center gap-4 bg-dark-card p-5 rounded-xl border border-gray-800 hover:border-electric-blue/50 transition-colors group"
              >
                <ServiceIcon icon={s.icon} className="text-3xl text-electric-blue-light flex-shrink-0" />
                <div>
                  <div className="font-semibold group-hover:text-electric-blue-light transition-colors">{s.title}</div>
                  <div className="text-sm text-gray-400">{t.from} {s.priceFrom}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
