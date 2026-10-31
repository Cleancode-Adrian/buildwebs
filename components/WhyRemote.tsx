'use client'

import { motion } from 'framer-motion'
import { HiGlobe, HiClock, HiDocumentText, HiLockClosed } from 'react-icons/hi'
import type { Dictionary } from '@/lib/dictionaries'

const icons = [HiGlobe, HiClock, HiDocumentText, HiLockClosed]

export default function WhyRemote({ t }: { t: Dictionary['whyRemote'] }) {
  return (
    <section className="py-20 bg-dark-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.titleBefore} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.points.map((point, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark-card p-6 rounded-xl border border-gray-800"
              >
                <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-2xl text-electric-blue-light" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
