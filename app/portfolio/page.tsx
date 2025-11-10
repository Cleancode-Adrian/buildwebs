import type { Metadata } from 'next'
import Portfolio from '@/components/Portfolio'
import Link from 'next/link'
import { HiExternalLink } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Our Work | Web Design & Development Projects by BuildWebs',
  description: 'Discover BuildWebs\' recent projects — modern websites, ecommerce stores, and apps built with Laravel, React, and WordPress for Dutch and EU companies.',
  keywords: 'web design portfolio, web development projects, Laravel projects, React apps, WordPress websites, European clients',
  openGraph: {
    title: 'Our Work | Web Design & Development Projects by BuildWebs',
    description: 'Modern websites, ecommerce stores, and apps built with Laravel, React, and WordPress for Dutch and EU companies.',
    url: 'https://buildwebs.eu/portfolio',
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real projects, real results. See our recent work for European businesses — from corporate websites to e-commerce solutions.
          </p>
        </div>
      </div>

      <Portfolio />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Want to See Your Project Here?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're expanding our portfolio! Let us create a stunning website for your business.
              Click "Visit Website" on our projects above to see them live!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#contact" className="btn-primary text-lg">
              Start Your Project
            </Link>
            <a
              href="/#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-electric-blue text-electric-blue font-semibold rounded-lg hover:bg-electric-blue hover:text-white transition-all duration-300"
            >
              <HiExternalLink className="text-xl" />
              View Live Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

