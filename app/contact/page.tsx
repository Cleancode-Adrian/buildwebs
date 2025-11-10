import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact BuildWebs | Get a Free Quote for Your Website',
  description: 'Contact BuildWebs for modern web design, development, and digital marketing. Free consultation, fast delivery, and transparent pricing for European businesses.',
  keywords: 'contact web agency, free website quote, web design consultation, Netherlands web developer contact',
  openGraph: {
    title: 'Contact BuildWebs | Get a Free Quote for Your Website',
    description: 'Contact BuildWebs for modern web design, development, and digital marketing. Free consultation and transparent pricing.',
    url: 'https://buildwebs.eu/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Contact />
    </div>
  )
}

