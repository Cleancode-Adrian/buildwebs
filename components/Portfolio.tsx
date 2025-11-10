'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'VisionFenster - Premium Window Solutions',
      category: 'Corporate Website',
      result: 'Full business website with booking system',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      tags: ['WordPress', 'Multilingual', 'Contact Forms', 'Gallery'],
      link: 'https://visionfenster.eu/',
      client: 'VisionFenster',
      description: 'Professional corporate website for premium window and door manufacturer. Features include product catalog, project gallery, FAQ section, and multilingual support (German/English).',
    },
    {
      title: 'SwissPlush - Children\'s Play Products E-commerce',
      category: 'E-commerce Store',
      result: 'Full WooCommerce store with custom design',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop',
      tags: ['WooCommerce', 'WordPress', 'German Market', 'Product Catalog'],
      link: 'http://swissplush.ch/',
      client: 'SwissPlush (Switzerland)',
      description: 'E-commerce website for Swiss children\'s play products (ball pits, soft furniture, playgrounds). German language site targeting German-speaking markets (Switzerland, Germany, Austria). Features: WooCommerce integration, product categories, custom product pages, and social media integration.',
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

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
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real projects, real results. Check out our recent work — from corporate websites to e-commerce stores.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-dark-card rounded-2xl overflow-hidden border border-gray-800 hover:border-electric-blue/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay - mocniejszy na hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/90 to-dark-bg/40 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-70'
                }`} />
              </div>

              {/* Content - NA obrazku z animacją */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Category - zawsze widoczny */}
                <div className="mb-2">
                  <span className="px-3 py-1 bg-electric-blue-light/90 text-dark-bg text-xs font-bold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Title - mniejszy font */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-electric-blue-light transition-colors drop-shadow-lg">
                  {project.title}
                </h3>

                {/* Client - mniejszy */}
                <p className="text-gray-200 text-xs mb-2 font-medium drop-shadow-lg">{project.client}</p>

                {/* Description - pojawia się na hover */}
                {project.description && (
                  <p className={`text-gray-200 text-xs mb-3 leading-relaxed drop-shadow-lg transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {project.description}
                  </p>
                )}

                {/* Result - mniejszy */}
                <p className="text-neon-turquoise text-sm font-bold mb-3 drop-shadow-lg">{project.result}</p>

                {/* Tags - mniejsze */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-dark-bg/90 border border-gray-600 text-gray-200 text-xs font-medium rounded-md backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit Website Button - kompaktowy */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3 bg-electric-blue-light text-dark-bg text-sm font-bold rounded-lg hover:bg-neon-turquoise hover:text-dark-bg transition-all duration-300 shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Visit Website</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
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
          <a href="#contact" className="btn-secondary text-lg">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

