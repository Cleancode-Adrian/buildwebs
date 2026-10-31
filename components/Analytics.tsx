'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { site } from '@/lib/site'

// Loads Google Analytics only after the visitor accepted cookies (GDPR).
export default function Analytics() {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const check = () => setConsent(localStorage.getItem('cookies-accepted') === 'true')
    check()
    window.addEventListener('cookie-consent', check)
    return () => window.removeEventListener('cookie-consent', check)
  }, [])

  if (!site.gaId || !consent) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${site.gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
