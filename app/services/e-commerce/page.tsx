import type { Metadata } from 'next'
import Link from 'next/link'
import { HiShoppingCart, HiCheckCircle } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'E-commerce Development | Online Shop Solutions | BuildWebs.eu',
  description: 'Professional e-commerce development services. WooCommerce, custom online shops, payment integration, and conversion optimization for European businesses.',
  keywords: 'ecommerce development, online shop development, woocommerce, webshop, online store, ecommerce website',
}

export default function EcommercePage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-semibold mb-6">
            <HiShoppingCart className="text-xl" />
            E-commerce Development
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">E-commerce</span> Development Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional online shops that convert visitors into customers. From WooCommerce to custom solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">E-commerce Solutions</h2>
            <ul className="space-y-4">
              {[
                'WooCommerce online shops',
                'Custom e-commerce platforms',
                'Payment gateway integration (Stripe, Mollie, PayPal)',
                'Product catalog management',
                'Shopping cart optimization',
                'Multi-currency support',
                'Inventory management',
                'Order processing automation',
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <HiCheckCircle className="text-electric-blue text-xl flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Conversion Optimization</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                A beautiful shop means nothing without sales. We optimize every aspect of your e-commerce site for maximum conversions.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                  <span>Fast checkout process</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                  <span>Product page optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                  <span>Trust signals & reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                  <span>Mobile shopping experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Online Shop?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create an e-commerce platform that drives sales and grows your business.
          </p>
          <Link href="/#contact" className="btn-primary text-lg">
            Start Your E-commerce Project
          </Link>
        </div>
      </div>
    </div>
  )
}

