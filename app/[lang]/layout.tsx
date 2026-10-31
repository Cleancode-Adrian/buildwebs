import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Analytics from '@/components/Analytics'
import MotionProvider from '@/components/MotionProvider'
import { site } from '@/lib/site'
import { locales, isLocale, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { getServices } from '@/lib/services'
import { pageMetadata } from '@/lib/seo'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLocale(params.lang)) return {}
  const t = getDictionary(params.lang)
  return {
    metadataBase: new URL(site.url),
    ...pageMetadata({
      lang: params.lang,
      path: '/',
      title: t.meta.title,
      description: t.meta.description,
      keywords: t.meta.keywords,
    }),
    authors: [{ name: site.name }],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    ...(site.googleVerification && { verification: { google: site.googleVerification } }),
  }
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound()
  const lang: Locale = params.lang
  const t = getDictionary(lang)
  const services = getServices(lang)

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    image: `${site.url}/logo.svg`,
    description: t.meta.orgDescription,
    email: site.email,
    telephone: '+48-724-441-843',
    priceRange: '€€',
    founder: { '@type': 'Person', name: 'Adrian Sadowski' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pogalewo Wielkie 37/7',
      addressLocality: 'Brzeg Dolny',
      postalCode: '56-120',
      addressCountry: 'PL',
    },
    areaServed: { '@type': 'Place', name: 'European Union' },
    knowsLanguage: ['en', 'de', 'pl'],
    sameAs: ['https://cleancodeas.pl'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </head>
      <body className={inter.className}>
        <a href="#main" className="skip-link">
          {t.nav.skip}
        </a>
        <Analytics />
        <MotionProvider>
          {/* First in DOM order so keyboard users reach the consent banner first */}
          <CookieBanner lang={lang} t={t.cookies} />
          <Navbar lang={lang} t={t.nav} />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer lang={lang} t={t.footer} nav={t.nav} services={services.map((s) => ({ slug: s.slug, title: s.title }))} />
        </MotionProvider>
      </body>
    </html>
  )
}
