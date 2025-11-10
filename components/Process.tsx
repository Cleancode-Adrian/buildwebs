'use client'

import { motion } from 'framer-motion'
import { HiLightBulb, HiPencilAlt, HiCode, HiCheckCircle, HiTrendingUp } from 'react-icons/hi'

export default function Process() {
  const steps = [
    {
      icon: HiLightBulb,
      title: 'Discovery & Strategy',
      description: 'We analyze your business, target audience, and competitors to create a winning strategy.',
      duration: '1-2 weeks',
    },
    {
      icon: HiPencilAlt,
      title: 'Design & Prototyping',
      description: 'Our designers create beautiful, user-friendly interfaces that align with your brand.',
      duration: '2-3 weeks',
    },
    {
      icon: HiCode,
      title: 'Development',
      description: 'Clean, efficient code built with modern technologies for optimal performance.',
      duration: '4-8 weeks',
    },
    {
      icon: HiCheckCircle,
      title: 'Testing & Launch',
      description: 'Rigorous testing across devices and browsers ensures a flawless launch.',
      duration: '1-2 weeks',
    },
    {
      icon: HiTrendingUp,
      title: 'Marketing & Growth',
      description: 'Post-launch optimization, SEO, and marketing to drive traffic and conversions.',
      duration: 'Ongoing',
    },
  ]

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
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven methodology that delivers results, from concept to launch and beyond
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-start">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center max-w-xs"
              >
                {/* Icon Circle */}
                <div className="w-32 h-32 bg-dark-card border-4 border-electric-blue rounded-full flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 z-10">
                  <step.icon className="text-5xl text-electric-blue" />
                </div>

                {/* Step Number */}
                <div className="text-neon-turquoise font-bold text-lg mb-2">
                  Step {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {step.description}
                </p>

                {/* Duration */}
                <div className="px-4 py-2 bg-electric-blue/10 rounded-full text-electric-blue text-xs font-semibold">
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
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex gap-6 bg-dark-card p-6 rounded-2xl border border-gray-800"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center">
                <step.icon className="text-3xl text-electric-blue" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-neon-turquoise font-bold text-sm mb-1">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-block px-3 py-1 bg-electric-blue/10 rounded-full text-electric-blue text-xs font-semibold">
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
          <p className="text-gray-400 mb-6 text-lg">
            Ready to start your project journey?
          </p>
          <a href="#contact" className="btn-primary text-lg">
            Let's Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}

