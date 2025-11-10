import type { Metadata } from 'next'
import Link from 'next/link'
import { HiCode, HiCheckCircle } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Laravel Development Services | BuildWebs.eu',
  description: 'Expert Laravel development services in Europe. Custom web applications, APIs, SaaS platforms, and enterprise solutions built with Laravel PHP framework.',
  keywords: 'laravel development, laravel developer, custom web applications, php laravel, laravel api, laravel agency europe',
}

export default function LaravelDevelopmentPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-blue text-sm font-semibold mb-6">
            <HiCode className="text-xl" />
            Laravel Development
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert <span className="gradient-text">Laravel Development</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Custom web applications and APIs built with Laravel — the PHP framework for modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Our Laravel Services</h2>
            <ul className="space-y-4">
              {[
                'Custom web application development',
                'RESTful API development',
                'SaaS platform development',
                'E-commerce solutions',
                'CRM and ERP systems',
                'Laravel migration and upgrades',
                'Third-party integrations',
                'Performance optimization',
              ].map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <HiCheckCircle className="text-electric-blue text-xl flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">Why Laravel?</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Laravel is the most popular PHP framework, known for its elegant syntax, powerful features, and excellent documentation.
              </p>
              <p>
                Perfect for complex web applications, APIs, and business systems that require scalability, security, and maintainability.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4">Technologies We Use:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Laravel 10', 'PHP 8.2', 'MySQL', 'PostgreSQL', 'Redis', 'Vue.js'].map((tech, i) => (
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
          <h2 className="text-3xl font-bold mb-4">Need a Custom Web Application?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's build a powerful Laravel application tailored to your business needs.
          </p>
          <Link href="/#contact" className="btn-primary text-lg">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  )
}

