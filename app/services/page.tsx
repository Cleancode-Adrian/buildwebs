import type { Metadata } from 'next'
import Services from '@/components/Services'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Development, SEO & Marketing Services | BuildWebs.eu',
  description: 'Explore BuildWebs\' full range of services — custom web development, WordPress, Laravel, SEO, digital marketing, branding, and email automation. Complete solutions for modern businesses.',
  keywords: 'web development services, Laravel development, WordPress agency, SEO services, digital marketing, branding, email automation, custom web apps',
  openGraph: {
    title: 'Web Development, SEO & Marketing Services | BuildWebs.eu',
    description: 'Custom web development, WordPress, Laravel, SEO, digital marketing, branding, and email automation. Complete solutions for modern businesses.',
    url: 'https://buildwebs.eu/services',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete digital solutions to help your business thrive online — from concept to growth
          </p>
        </div>
      </div>

      <Services />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Let's discuss which services fit your business goals best
        </p>
        <Link href="/#contact" className="btn-primary text-lg">
          Request a Free Consultation
        </Link>
      </div>
    </div>
  )
}

