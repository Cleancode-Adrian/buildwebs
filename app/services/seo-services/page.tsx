import type { Metadata } from 'next'
import Link from 'next/link'
import { HiSearchCircle, HiCheckCircle, HiTrendingUp } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'SEO Services Europe | Professional SEO Agency | BuildWebs.eu',
  description: 'Professional SEO services for European businesses. Technical SEO, on-page optimization, link building, and local SEO to improve your search rankings.',
  keywords: 'seo services, seo agency, search engine optimization, google ranking, seo europe, seo netherlands, local seo, technical seo',
}

export default function SEOServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-semibold mb-6">
            <HiSearchCircle className="text-xl" />
            SEO Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">SEO Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Improve your Google rankings and drive organic traffic with our comprehensive SEO services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-6">
              <HiSearchCircle className="text-4xl text-electric-blue" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Technical SEO</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Website speed optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Mobile-first optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Structured data markup</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>XML sitemap optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-6">
              <HiTrendingUp className="text-4xl text-electric-blue" />
            </div>
            <h2 className="text-2xl font-bold mb-4">On-Page SEO</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Keyword research & strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Content optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Meta tags optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Internal linking structure</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-6">
              <HiCheckCircle className="text-4xl text-electric-blue" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Off-Page SEO</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Quality link building</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Local SEO & Google My Business</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Brand mention building</span>
              </li>
              <li className="flex items-start gap-2">
                <HiCheckCircle className="text-neon-turquoise flex-shrink-0 mt-1" />
                <span>Competitor analysis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-dark-secondary p-12 rounded-3xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Audit', desc: 'Complete SEO audit of your website' },
              { step: '2', title: 'Strategy', desc: 'Custom SEO strategy based on your goals' },
              { step: '3', title: 'Implementation', desc: 'Technical and content optimization' },
              { step: '4', title: 'Monitoring', desc: 'Track rankings and adjust strategy' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-electric-blue">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-12 rounded-3xl border border-electric-blue/30">
          <h2 className="text-3xl font-bold mb-4">Ready to Rank Higher on Google?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create an SEO strategy that brings you more organic traffic and qualified leads.
          </p>
          <Link href="/#contact" className="btn-primary text-lg">
            Request SEO Audit
          </Link>
        </div>
      </div>
    </div>
  )
}

