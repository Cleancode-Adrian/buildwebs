'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

export default function CookieBanner() {
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-dark-card border border-electric-blue/30 rounded-2xl shadow-2xl shadow-electric-blue/10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🍪</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        We Use Cookies
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We use essential cookies for website functionality and analytics cookies (Google Analytics)
                        to understand how visitors use our site. We <strong className="text-white">do not use</strong> advertising
                        or tracking cookies. By clicking "Accept", you consent to our use of cookies.
                        <Link href="/privacy" className="text-electric-blue-light hover:text-neon-turquoise underline ml-1 font-semibold">
                          Learn more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={acceptCookies}
                    className="px-6 py-3 bg-electric-blue-light text-dark-bg font-bold rounded-lg hover:bg-electric-blue transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/50 whitespace-nowrap"
                  >
                    Accept Cookies
                  </button>
                  <button
                    onClick={rejectCookies}
                    className="px-6 py-3 border-2 border-gray-600 text-gray-200 font-semibold rounded-lg hover:border-electric-blue-light hover:text-white hover:bg-dark-card transition-all duration-300 whitespace-nowrap"
                  >
                    Reject
                  </button>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setShowBanner(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

