'use client'

import { motion } from 'framer-motion'
import { HiChatAlt2, HiPencilAlt, HiCode, HiCheckCircle, HiShieldCheck } from 'react-icons/hi'
import { localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionaries'

const icons = [HiChatAlt2, HiPencilAlt, HiCode, HiCheckCircle, HiShieldCheck]

export default function Process({ lang, t }: { lang: Locale; t: Dictionary['process'] }) {
  const steps = t.steps.map((step, i) => ({ ...step, icon: icons[i] }))

  return (
    <section id="process" className="py-20 md:py-32 bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-turquoise/5 rounded-full blur-3xl" />

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

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-start">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div className="w-32 h-32 bg-dark-card border-4 border-electric-blue rounded-full flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 z-10">
                  <step.icon className="text-5xl text-electric-blue-light" aria-hidden="true" />
                </div>
                <div className="text-neon-turquoise font-bold text-lg mb-2">
                  {t.step} {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{step.description}</p>
                <div className="px-4 py-2 bg-electric-blue/10 rounded-full text-electric-blue-light text-xs font-semibold">
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex gap-6 bg-dark-card p-6 rounded-2xl border border-gray-800"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center">
                <step.icon className="text-3xl text-electric-blue-light" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="text-neon-turquoise font-bold text-sm mb-1">
                  {t.step} {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{step.description}</p>
                <div className="inline-block px-3 py-1 bg-electric-blue/10 rounded-full text-electric-blue-light text-xs font-semibold">
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">{t.ctaText}</p>
          <a href={`${localePath(lang, '/')}#contact`} className="btn-primary text-lg">
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
