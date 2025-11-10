'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="BuildWebs Logo"
                width={50}
                height={50}
              />
              <div className="text-2xl font-bold gradient-text">
                Build<span className="text-neon-turquoise">Webs</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build fast, modern, and powerful websites for ambitious businesses across Europe.
              From concept to code — complete web solutions for the European market.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 text-sm">
                <a href="mailto:contact@buildwebs.eu" className="hover:text-electric-blue transition-colors">
                  contact@buildwebs.eu
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a
                  href="https://wa.me/48724441843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric-blue transition-colors inline-flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp: +48 724 441 843
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-electric-blue-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} BuildWebs.eu. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-electric-blue transition-colors">
                Privacy Policy
              </Link>
              <a href="/privacy#cookies" className="text-gray-500 hover:text-electric-blue transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

