import type { Metadata } from 'next'
import Link from 'next/link'
import { localePath, type Locale } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { getPrivacy } from '@/lib/content/privacy'

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const t = getPrivacy(params.lang)
  return pageMetadata({ lang: params.lang, path: '/privacy', title: t.metaTitle, description: t.metaDescription })
}

const linkClass = '[&_a]:text-electric-blue-light [&_a]:underline [&_a:hover]:text-neon-turquoise'

export default function PrivacyPage({ params }: { params: { lang: Locale } }) {
  const t = getPrivacy(params.lang)

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">{t.title}</span>
        </h1>
        <p className="text-gray-400 text-sm mb-8">{t.updated}</p>

        <div className={`space-y-8 text-gray-300 leading-relaxed ${linkClass}`}>
          {t.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mb-3" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              {section.list && (
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  {section.list.map((item) => (
                    <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
              {section.after?.map((p) => (
                <p key={p} className="mb-3" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </section>
          ))}

          <div className="mt-12 text-center">
            <Link href={localePath(params.lang, '/')} className="btn-primary">
              {t.back}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
