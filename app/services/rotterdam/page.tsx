import type { Metadata } from 'next'
import Link from 'next/link'
import Services from '@/components/Services'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Web Design & Development Rotterdam | BuildWebs.eu',
  description: 'Professional web design and development services in Rotterdam. Custom websites, WordPress, Laravel, and SEO for Rotterdam businesses.',
  keywords: 'web design Rotterdam, web development Rotterdam, website Rotterdam, WordPress Rotterdam, SEO Rotterdam, web agency Rotterdam',
}

export default function RotterdamPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 md:py-32 bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-semibold mb-6">
              <HiLocationMarker className="text-xl" />
              Rotterdam, Netherlands
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Development Services in <span className="gradient-text">Rotterdam</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Modern web development for Rotterdam businesses. We create powerful websites that help you grow in Europe's largest port city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary text-lg">Get Started</Link>
              <Link href="#services" className="btn-secondary text-lg">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Rotterdam <span className="gradient-text">Web Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Port & Logistics Websites</h3>
              <p className="text-gray-400">
                Specialized websites for Rotterdam's port and logistics industry with multilingual support.
              </p>
            </div>
            <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Corporate Websites</h3>
              <p className="text-gray-400">
                Professional corporate websites for Rotterdam businesses targeting international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="services"><Services /></div>

      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Project in Rotterdam</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to build a powerful online presence? Contact us for a free consultation.
            </p>
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
            <Link href="/#contact" className="btn-primary text-lg">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

