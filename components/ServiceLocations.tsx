'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiArrowRight } from 'react-icons/hi'

export default function ServiceLocations() {
  const locations = [
    {
      city: 'Amsterdam',
      region: 'North Holland',
      href: '/services/amsterdam',
      description: 'Web design & development in Amsterdam',
    },
    {
      city: 'Rotterdam',
      region: 'South Holland',
      href: '/services/rotterdam',
      description: 'Professional websites for Rotterdam businesses',
    },
    {
      city: 'Utrecht',
      region: 'Utrecht',
      href: '/services/utrecht',
      description: 'Custom web solutions in Utrecht',
    },
    {
      city: 'Den Haag',
      region: 'South Holland',
      href: '/services/den-haag',
      description: 'Web development services in The Hague',
    },
    {
      city: 'Eindhoven',
      region: 'North Brabant',
      href: '/services/eindhoven',
      description: 'Modern websites for Eindhoven companies',
    },
    {
      city: 'Brussels',
      region: 'Belgium',
      href: '/services/brussels',
      description: 'Web design agency serving Brussels',
    },
  ]

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
            We Serve Businesses Across <span className="gradient-text">Europe</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional web development services for businesses in major European cities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <Link
                href={location.href}
                className="flex flex-col h-full bg-dark-card p-6 rounded-xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 group min-h-[160px]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="text-2xl text-electric-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-electric-blue transition-colors">
                        {location.city}
                      </h3>
                      <p className="text-sm text-gray-500">{location.region}</p>
                    </div>
                  </div>
                  <HiArrowRight className="text-xl text-gray-600 group-hover:text-electric-blue group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
                <p className="text-gray-400 text-sm mt-auto">{location.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Don't see your city? We work with clients across Europe.
          </p>
          <Link href="/#contact" className="btn-primary">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

