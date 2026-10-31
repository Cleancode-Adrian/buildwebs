import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import WhyRemote from '@/components/WhyRemote'
import Contact from '@/components/Contact'
import type { Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { getServices } from '@/lib/services'

// Metadata (title, canonical, hreflang) comes from app/[lang]/layout.tsx
export default function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = params
  const t = getDictionary(lang)

  return (
    <>
      <Hero lang={lang} t={t.hero} />
      <About t={t.about} />
      <Services lang={lang} t={t.services} services={getServices(lang)} />
      <Testimonials t={t.results} />
      <Process lang={lang} t={t.process} />
      <WhyRemote t={t.whyRemote} />
      <Contact lang={lang} t={t.contact} />
    </>
  )
}
