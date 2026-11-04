'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionaries'

export default function Hero({ lang, t }: { lang: Locale; t: Dictionary['hero'] }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-grid opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Decorative shapes — static: endless motion would need a pause control (WCAG 2.2.2) */}
      <div aria-hidden="true" className="absolute top-20 left-10 w-32 h-32 border-2 border-electric-blue/20 rounded-full blur-sm" />
      <div aria-hidden="true" className="absolute bottom-20 right-10 w-48 h-48 border-2 border-neon-turquoise/20 rounded-full blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-block max-w-full px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue-light text-sm font-semibold">
              {t.badge}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            {t.titleBefore} <span className="gradient-text">{t.titleHighlight}</span>
            <br />
            {t.titleAfter}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href={`${localePath(lang, '/')}#contact`} className="btn-primary text-lg">
              {t.ctaPrimary}
            </Link>
            <Link href={`${localePath(lang, '/')}#services`} className="btn-secondary text-lg">
              {t.ctaSecondary}
            </Link>
          </motion.div>

          <Link
            href={localePath(lang, '/european-accessibility-act-woocommerce')}
            className="inline-block mt-8 text-sm text-yellow-300 hover:text-yellow-200 underline underline-offset-4"
          >
            {t.eaaLink}
          </Link>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
