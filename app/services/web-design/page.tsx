import type { Metadata } from 'next'
import Link from 'next/link'
import { HiLightBulb, HiCheckCircle } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Web Design Services | UI/UX Design | BuildWebs.eu',
  description: 'Professional web design services for European businesses. Modern, user-friendly interfaces that convert visitors into customers.',
  keywords: 'web design, ui ux design, website design, interface design, responsive design, modern web design',
}

export default function WebDesignPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-semibold mb-6">
            <HiLightBulb className="text-xl" />
            Web Design
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Modern <span className="gradient-text">Web Design</span> Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Beautiful, user-friendly designs that convert. We create interfaces your customers will love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Our Design Services</h2>
            <ul className="space-y-4">
              {[
                'UI/UX design and prototyping',
                'Responsive web design',
                'Mobile-first design',
                'Landing page design',
                'E-commerce design',
                'Brand identity and logo design',
                'Design system creation',
                'Figma/Adobe XD prototypes',
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <HiCheckCircle className="text-electric-blue text-xl flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Design That Converts</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Great design isn't just about aesthetics — it's about creating experiences that guide users toward your goals.
              </p>
              <p>
                We combine visual appeal with strategic thinking to create designs that look amazing and drive real business results.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4">Our Design Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'TailwindCSS'].map((tech, i) => (
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
          <h2 className="text-3xl font-bold mb-4">Need a Beautiful Website Design?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create a stunning design that represents your brand and converts visitors.
          </p>
          <Link href="/#contact" className="btn-primary text-lg">
            Start Your Design Project
          </Link>
        </div>
      </div>
    </div>
  )
}

