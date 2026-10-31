'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import ServiceIcon from '@/components/ServiceIcon'
import { localePath, type Locale } from '@/lib/i18n'
import type { Service } from '@/lib/services'
import type { Dictionary } from '@/lib/dictionaries'

type Props = { lang: Locale; t: Dictionary['services']; services: Service[] }

export default function Services({ lang, t, services }: Props) {
  return (
    <section id="services" className="py-20 md:py-32 bg-dark-bg relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-turquoise/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t.titleBefore} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                href={localePath(lang, `/services/${service.slug}`)}
                className="group flex flex-col h-full bg-dark-card p-8 rounded-2xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-neon-turquoise/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ServiceIcon icon={service.icon} className="text-4xl text-electric-blue-light group-hover:text-neon-turquoise transition-colors" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{t.from}</div>
                    <div className="text-2xl font-bold gradient-text">{service.priceFrom}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-electric-blue-light transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.tagline}</p>

                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  {service.included.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-neon-turquoise" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-2 text-electric-blue-light font-semibold">
                  {t.learnMore}: {service.shortTitle}
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">{t.pricesNote}</p>
          <a href={`${localePath(lang, '/')}#contact`} className="btn-primary text-lg">
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
