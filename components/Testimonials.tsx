'use client'

import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import type { Dictionary } from '@/lib/dictionaries'

// Real, verifiable numbers only. Results come from projects delivered by our team
// (also operating in Poland as CleanCode — cleancodeas.pl).
export default function Testimonials({ t }: { t: Dictionary['results'] }) {
  return (
    <section id="results" className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

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

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-dark-card p-8 rounded-2xl border border-gray-800 text-center"
            >
              <div className="text-5xl font-bold gradient-text mb-2">{item.value}</div>
              <div className="text-white font-semibold mb-4">{item.label}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.context}</p>
            </motion.div>
          ))}
        </div>

        {/* Google rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="flex gap-1 mb-3" role="img" aria-label={t.ratingStars}>
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="text-yellow-400 text-2xl" aria-hidden="true" />
            ))}
          </div>
          <p className="text-lg text-gray-300">
            <span className="font-bold text-white">{t.ratingStrong}</span> {t.ratingRest}
          </p>
          <a
            href="https://cleancodeas.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-electric-blue-light hover:text-neon-turquoise mt-2 transition-colors"
          >
            {t.ratingSource}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
