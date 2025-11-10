'use client'

import { motion } from 'framer-motion'
import { HiDesktopComputer, HiTemplate, HiLightBulb, HiSearchCircle, HiSpeakerphone, HiMail } from 'react-icons/hi'

export default function Services() {
  const services = [
    {
      icon: HiDesktopComputer,
      title: 'Web Development',
      description: 'Custom websites and web apps built with PHP, Laravel, React, and Tailwind. Optimized for speed, security, and mobile.',
      tags: ['Laravel', 'React', 'Node.js', 'API Development'],
    },
    {
      icon: HiTemplate,
      title: 'WordPress & CMS',
      description: 'Professional WordPress builds, custom themes, and headless integrations. Full control over your content.',
      tags: ['WordPress', 'Custom Themes', 'Headless CMS', 'E-commerce'],
    },
    {
      icon: HiLightBulb,
      title: 'Branding & UI/UX',
      description: 'Clean, modern interface design that fits your audience and converts. From wireframes to pixel-perfect designs.',
      tags: ['UI Design', 'UX Research', 'Prototyping', 'Brand Identity'],
    },
    {
      icon: HiSearchCircle,
      title: 'SEO & Online Visibility',
      description: 'Keyword research, on-site optimization, and link building. Get found by your ideal customers.',
      tags: ['Technical SEO', 'Content Strategy', 'Link Building', 'Analytics'],
    },
    {
      icon: HiSpeakerphone,
      title: 'Ads & Marketing',
      description: 'Google Ads, Meta campaigns, remarketing, analytics tracking. Maximize your ROI with targeted advertising.',
      tags: ['Google Ads', 'Facebook Ads', 'PPC', 'Conversion Tracking'],
    },
    {
      icon: HiMail,
      title: 'Email Marketing Automation',
      description: 'Design and integration of newsletters, drip campaigns, and popups. Build lasting relationships with your audience.',
      tags: ['Mailchimp', 'Brevo', 'Automation', 'Segmentation'],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-dark-bg relative overflow-hidden">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-spectrum digital solutions to help your business thrive online
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-dark-card p-8 rounded-2xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-neon-turquoise/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-4xl text-electric-blue group-hover:text-neon-turquoise transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-electric-blue transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-dark-bg text-gray-400 text-xs font-medium rounded-full border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn-primary text-lg">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

