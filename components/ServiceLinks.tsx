'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiTemplate, HiCode, HiSearchCircle, HiShoppingCart, HiLightBulb } from 'react-icons/hi'

export default function ServiceLinks() {
  const services = [
    {
      icon: HiLightBulb,
      title: 'Web Design',
      href: '/services/web-design',
    },
    {
      icon: HiTemplate,
      title: 'WordPress',
      href: '/services/wordpress-development',
    },
    {
      icon: HiCode,
      title: 'Laravel',
      href: '/services/laravel-development',
    },
    {
      icon: HiShoppingCart,
      title: 'E-commerce',
      href: '/services/e-commerce',
    },
    {
      icon: HiSearchCircle,
      title: 'SEO Services',
      href: '/services/seo-services',
    },
  ]

  return (
    <section className="py-16 bg-dark-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Specialized <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our specialized service pages for detailed information
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="block bg-dark-card p-6 rounded-xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-electric-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <service.icon className="text-3xl text-electric-blue" />
                </div>
                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-electric-blue transition-colors">
                  {service.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

