'use client'

import { motion } from 'framer-motion'
import { HiLightningBolt, HiCode, HiTrendingUp } from 'react-icons/hi'

export default function About() {
  const features = [
    {
      icon: HiLightningBolt,
      title: 'Performance First',
      description: 'Lightning-fast, SEO-optimized code. We ensure your website loads in under 2 seconds for the best user experience.',
    },
    {
      icon: HiCode,
      title: 'Full Stack Expertise',
      description: 'Laravel, React, WordPress, Tailwind, and Bootstrap. We master the complete technology stack.',
    },
    {
      icon: HiTrendingUp,
      title: 'Marketing-Driven',
      description: 'SEO, ads, and email marketing built in from day one. Your website will attract and convert customers.',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

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
            Your Partner in <span className="gradient-text">Digital Growth</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At BuildWebs, we combine clean code, strong UX design, and marketing strategy.
            Based in Europe, we help Dutch and EU businesses create fast, optimized, and
            high-converting websites.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-dark-card p-8 rounded-2xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="text-4xl text-electric-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-electric-blue/10 to-neon-turquoise/10 border border-electric-blue/30 rounded-2xl">
            <p className="text-lg text-gray-300">
              <span className="text-neon-turquoise font-semibold">Trusted by 15+ European businesses</span>
              {' '}to deliver exceptional web experiences
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

