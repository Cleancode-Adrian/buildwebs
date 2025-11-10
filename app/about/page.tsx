import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About BuildWebs | European Web Development & Marketing Studio',
  description: 'Learn about BuildWebs — a full-service digital studio building modern websites and web apps for clients across the Netherlands and Europe. We combine design, code, and strategy.',
  keywords: 'web development studio Europe, digital agency Netherlands, full-stack developers, web design team',
  openGraph: {
    title: 'About BuildWebs | European Web Development & Marketing Studio',
    description: 'Learn about BuildWebs — a full-service digital studio building modern websites and web apps for clients across the Netherlands and Europe.',
    url: 'https://buildwebs.eu/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          About <span className="gradient-text">BuildWebs</span>
        </h1>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            BuildWebs is a full-service digital studio specializing in modern web development
            and marketing solutions for European businesses.
          </p>

          <p>
            Based in the Netherlands, we serve clients across Europe with cutting-edge
            technology and strategic thinking. Our team combines expertise in full-stack
            development, design, SEO, and digital marketing.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Our Mission</h2>
          <p>
            We believe every business deserves a fast, beautiful, and high-performing digital
            presence. Our mission is to create websites and web applications that not only look
            great but drive real business results.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What We Do</h2>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>Custom web development with Laravel, React, and Node.js</li>
            <li>Professional WordPress solutions and custom themes</li>
            <li>SEO optimization and digital marketing strategy</li>
            <li>Brand identity and UI/UX design</li>
            <li>Email marketing automation and campaigns</li>
            <li>Performance optimization and security</li>
          </ul>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Choose Us</h2>
          <p>
            We're not just developers or designers — we're your digital growth partners.
            Every project gets our full attention, from strategy to launch and beyond.
            We work closely with you to understand your goals and deliver solutions that exceed expectations.
          </p>

          <div className="mt-12">
            <Link href="/#contact" className="btn-primary text-lg">
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

