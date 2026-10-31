import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { localePath, type Locale } from '@/lib/i18n'
import { site } from '@/lib/site'
import type { Dictionary } from '@/lib/dictionaries'

type Props = {
  lang: Locale
  t: Dictionary['footer']
  nav: Dictionary['nav']
  services: { slug: string; title: string }[]
}

export default function Footer({ lang, t, nav, services }: Props) {
  const currentYear = new Date().getFullYear()
  const p = (path: string) => localePath(lang, path)

  const quickLinks = [
    { label: nav.home, href: '/' },
    { label: nav.about, href: '/about' },
    { label: nav.services, href: '/services' },
    { label: nav.blog, href: '/blog' },
    { label: nav.contact, href: '/contact' },
  ]

  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="" width={50} height={50} />
              <div className="text-2xl font-bold gradient-text">
                Build<span className="text-neon-turquoise">Webs</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t.tagline}</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 text-sm">
                <a href={`mailto:${site.email}`} className="hover:text-electric-blue-light transition-colors">
                  {site.email}
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric-blue-light transition-colors inline-flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg" aria-hidden="true" />
                  {t.whatsapp}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">{t.services}</h2>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={p(`/services/${s.slug}`)} className="text-gray-300 hover:text-electric-blue-light transition-colors text-sm">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={p('/european-accessibility-act-woocommerce')} className="text-gray-300 hover:text-electric-blue-light transition-colors text-sm">
                  {t.eaa}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">{t.links}</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={p(link.href)} className="text-gray-300 hover:text-electric-blue-light transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} BuildWebs.eu — {t.operatedBy}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href={p('/imprint')} className="text-gray-400 hover:text-electric-blue-light transition-colors">
                {t.imprint}
              </Link>
              <Link href={p('/privacy')} className="text-gray-400 hover:text-electric-blue-light transition-colors">
                {t.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
