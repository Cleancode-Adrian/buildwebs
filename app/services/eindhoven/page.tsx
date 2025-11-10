import type { Metadata } from 'next'
import Link from 'next/link'
import Services from '@/components/Services'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Web Design & Development Eindhoven | BuildWebs.eu',
  description: 'Modern web design and development in Eindhoven. Tech-focused websites for innovative Eindhoven businesses.',
  keywords: 'web design Eindhoven, web development Eindhoven, website Eindhoven, tech startup websites Eindhoven',
}

export default function EindhovenPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 md:py-32 bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-semibold mb-6">
              <HiLocationMarker className="text-xl" />
              Eindhoven, Netherlands
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Development in <span className="gradient-text">Eindhoven</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Tech-focused web solutions for Eindhoven's innovative businesses. Modern websites for the Brainport region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary text-lg">Get Started</Link>
              <Link href="#services" className="btn-secondary text-lg">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <div id="services"><Services /></div>

      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate in Eindhoven?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <HiMail className="text-electric-blue text-xl" />
                <a href="mailto:contact@buildwebs.eu" className="hover:text-electric-blue transition-colors">
                  contact@buildwebs.eu
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaWhatsapp className="text-electric-blue text-xl" />
                <a href="https://wa.me/48724441843" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors">
                  +48 724 441 843
                </a>
              </div>
            </div>
            <Link href="/#contact" className="btn-primary text-lg">Start Your Project</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

