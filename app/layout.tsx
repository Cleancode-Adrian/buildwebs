import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BuildWebs.eu | Modern Web Design & Development in Europe',
  description: 'BuildWebs creates fast, SEO-optimized websites and digital solutions for European businesses. Full-stack development, design, SEO, ads, and email marketing — all in one place.',
  keywords: 'web design Netherlands, web development Europe, Laravel developer NL, WordPress agency Netherlands, SEO services Amsterdam, digital marketing EU, website optimization, custom web apps, fast websites Europe, email marketing for small business, full-service web agency Europe',
  authors: [{ name: 'BuildWebs.eu' }],
  openGraph: {
    title: 'BuildWebs.eu | Modern Web Design & Development in Europe',
    description: 'BuildWebs creates fast, SEO-optimized websites and digital solutions for European businesses. Full-stack development, design, SEO, ads, and email marketing.',
    url: 'https://buildwebs.eu',
    siteName: 'BuildWebs.eu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BuildWebs.eu - Web Development Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildWebs.eu | Modern Web Design & Development in Europe',
    description: 'BuildWebs creates fast, SEO-optimized websites and digital solutions for European businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BuildWebs.eu',
              url: 'https://buildwebs.eu',
              logo: 'https://buildwebs.eu/logo.png',
              description: 'Professional web development agency in Europe',
              email: 'contact@buildwebs.eu',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NL',
              },
              sameAs: [
                'https://linkedin.com/company/buildwebs',
                'https://github.com/buildwebs',
              ],
            }),
          }}
        />
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'BuildWebs.eu',
              image: 'https://buildwebs.eu/logo.png',
              '@id': 'https://buildwebs.eu',
              url: 'https://buildwebs.eu',
              telephone: '+48-724-441-843',
              email: 'contact@buildwebs.eu',
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 52.3676,
                longitude: 4.9041,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics - Optimized loading */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

