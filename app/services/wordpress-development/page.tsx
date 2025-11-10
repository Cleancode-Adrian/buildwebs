import type { Metadata } from 'next'
import Link from 'next/link'
import { HiTemplate, HiCheckCircle } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'WordPress Development Services | BuildWebs.eu',
  description: 'Professional WordPress development services in Europe. Custom themes, plugins, WooCommerce, and headless WordPress solutions.',
  keywords: 'wordpress development, wordpress developer, custom wordpress themes, wordpress agency, woocommerce development, headless wordpress',
}

export default function WordPressDevelopmentPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-semibold mb-6">
            <HiTemplate className="text-xl" />
            WordPress Development
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">WordPress Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Custom WordPress solutions for businesses across Europe. From simple websites to complex e-commerce platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Our WordPress Services</h2>
            <ul className="space-y-4">
              {[
                'Custom WordPress theme development',
                'Plugin development and customization',
                'WooCommerce e-commerce solutions',
                'WordPress performance optimization',
                'Headless WordPress with React/Next.js',
                'WordPress security and maintenance',
                'Migration from other platforms',
                'Multilingual WordPress websites',
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <HiCheckCircle className="text-electric-blue text-xl flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Why WordPress?</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                WordPress powers over 40% of all websites worldwide. It's flexible, scalable, and perfect for businesses that want easy content management.
              </p>
              <p>
                At BuildWebs, we create custom WordPress solutions that go beyond standard themes. Our websites are fast, secure, and optimized for conversions.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4">Technologies We Use:</h3>
                <div className="flex flex-wrap gap-2">
                  {['WordPress', 'WooCommerce', 'ACF', 'Elementor', 'WPML', 'Yoast SEO'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-dark-bg text-gray-400 text-sm rounded-full border border-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30">
          <h2 className="text-3xl font-bold mb-4">Need a WordPress Website?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your WordPress project. We'll help you choose the best approach for your needs.
          </p>
          <Link href="/#contact" className="btn-primary text-lg">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}

