'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionaries'

export default function CookieBanner({ lang, t }: { lang: Locale; t: Dictionary['cookies'] }) {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookies-accepted')
    if (!cookiesAccepted) {
      // Show banner after 2 seconds
      setTimeout(() => setShowBanner(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true')
    window.dispatchEvent(new Event('cookie-consent'))
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookies-accepted', 'rejected')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          role="region"
          aria-labelledby="cookie-title"
          className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-dark-card border border-electric-blue/30 rounded-2xl shadow-2xl shadow-electric-blue/10 p-4 pr-12 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
                {/* Content */}
                <div className="flex-1">
                  <h2 id="cookie-title" className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">
                    <span aria-hidden="true">🍪 </span>
                    {t.title}
                  </h2>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    {t.text}{' '}
                    <Link href={localePath(lang, '/privacy')} className="text-electric-blue-light hover:text-neon-turquoise underline font-semibold">
                      {t.policy}
                    </Link>
                  </p>
                </div>

                {/* Buttons — equal prominence for accept and reject (GDPR) */}
                <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={acceptCookies}
                    className="px-4 md:px-6 py-2.5 md:py-3 bg-electric-blue-light text-dark-bg font-bold rounded-lg hover:bg-electric-blue transition-all duration-300 whitespace-nowrap"
                  >
                    {t.accept}
                  </button>
                  <button
                    type="button"
                    onClick={rejectCookies}
                    className="px-4 md:px-6 py-2.5 md:py-3 border-2 border-gray-400 text-gray-100 font-semibold rounded-lg hover:border-electric-blue-light hover:text-white transition-all duration-300 whitespace-nowrap"
                  >
                    {t.reject}
                  </button>
                </div>
              </div>

              {/* Close button (24×24 px minimum target, WCAG 2.5.8) */}
              <button
                type="button"
                onClick={() => setShowBanner(false)}
                className="absolute top-2 right-2 md:top-4 md:right-4 p-2 text-gray-300 hover:text-white transition-colors"
                aria-label={t.close}
              >
                <HiX className="text-2xl" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

