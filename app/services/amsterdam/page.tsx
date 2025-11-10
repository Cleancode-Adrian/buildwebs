import type { Metadata } from 'next'
import Link from 'next/link'
import Services from '@/components/Services'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Web Design & Development Amsterdam | BuildWebs.eu',
  description: 'Professional web design and development services in Amsterdam. Custom websites, WordPress, Laravel, SEO, and digital marketing for Amsterdam businesses.',
  keywords: 'web design Amsterdam, web development Amsterdam, website Amsterdam, WordPress Amsterdam, SEO Amsterdam, web agency Amsterdam',
}

export default function AmsterdamPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-semibold mb-6">
              <HiLocationMarker className="text-xl" />
              Amsterdam, Netherlands
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Web Design & Development in <span className="gradient-text">Amsterdam</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Professional web development services for Amsterdam businesses. We create fast, SEO-optimized websites
              that drive results in the Dutch capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary text-lg">
                Get a Free Quote
              </Link>
              <Link href="#services" className="btn-secondary text-lg">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Amsterdam */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Why Amsterdam Businesses <span className="gradient-text">Choose BuildWebs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Local Expertise</h3>
              <p className="text-gray-400">
                We understand the Amsterdam market and create websites that resonate with local and international audiences.
              </p>
            </div>
            <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
              <p className="text-gray-400">
                Quick turnaround times without compromising quality. Most projects delivered within 4-6 weeks.
              </p>
            </div>
            <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-gray-400">
                Dedicated support for Amsterdam clients with fast response times and Dutch/English communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <div id="services">
        <Services />
      </div>

      {/* Amsterdam-specific CTA */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Amsterdam Business Online?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's create a powerful online presence for your Amsterdam business.
              Contact us today for a free consultation and quote.
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
            <Link href="/#contact" className="btn-primary text-lg">
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

