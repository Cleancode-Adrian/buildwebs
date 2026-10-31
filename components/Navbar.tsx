'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { locales, localePath, stripLocale, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionaries'

// Targets come from the page's hreflang links (<link rel="alternate" hreflang>), so pages
// with different URLs per language (translated blog slugs) switch to the right page.
// Pages without a translation fall back to the home page of the other language.
function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() || '/'
  const base = stripLocale(pathname)
  const [alternates, setAlternates] = useState<Partial<Record<string, string>>>({})

  useEffect(() => {
    const map: Record<string, string> = {}
    document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((link) => {
      map[link.hreflang] = new URL(link.href).pathname
    })
    setAlternates(map)
  }, [pathname])

  const targetFor = (l: Locale) => {
    if (l === lang) return pathname
    if (alternates[l]) return alternates[l]!
    return base.startsWith('/blog/') ? localePath(l, '/blog') : localePath(l, base)
  }

  return (
    <div className="flex items-center gap-1 text-sm font-semibold" role="group" aria-label={label}>
      {locales.map((l) => {
        return (
          <Link
            key={l}
            href={targetFor(l)}
            hrefLang={l}
            aria-current={l === lang ? 'true' : undefined}
            className={`px-2 py-1 rounded-md uppercase transition-colors ${
              l === lang ? 'bg-electric-blue/20 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {l}
          </Link>
        )
      })}
    </div>
  )
}

export default function Navbar({ lang, t }: { lang: Locale; t: Dictionary['nav'] }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/about', label: t.about },
    { href: '/services', label: t.services },
    { href: '/blog', label: t.blog },
    { href: '/contact', label: t.contact },
  ]
  const contactHref = `${localePath(lang, '/')}#contact`

  return (
    <motion.nav
      aria-label="Main"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={localePath(lang, '/')} className="flex items-center space-x-3">
            <Image
              src="/logo.svg"
              alt=""
              width={50}
              height={50}
              priority
              className="hover:scale-110 transition-transform duration-300"
            />
            <div className="text-2xl md:text-3xl font-bold gradient-text">
              Build<span className="text-neon-turquoise">Webs</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={localePath(lang, link.href)}
                className="text-gray-200 hover:text-electric-blue-light transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher lang={lang} label={t.language} />
            <Link href={contactHref} className="btn-primary">
              {t.cta}
            </Link>
          </div>

          {/* Mobile: language + menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher lang={lang} label={t.language} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-3xl p-1"
              aria-label={isMobileMenuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-menu"
            className="lg:hidden py-6 space-y-3 bg-dark-bg/95 backdrop-blur-md rounded-xl mt-4 shadow-xl border border-gray-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={localePath(lang, link.href)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-electric-blue-light transition-colors duration-300 font-medium py-2 px-4"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link href={contactHref} onClick={() => setIsMobileMenuOpen(false)} className="block btn-primary text-center">
                {t.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
