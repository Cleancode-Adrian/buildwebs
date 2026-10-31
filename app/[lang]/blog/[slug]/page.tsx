import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HiArrowLeft, HiClock, HiUser, HiCalendar } from 'react-icons/hi'
import { notFound } from 'next/navigation'
import { getPosts, getPostBySlug, isFullPost, postPaths } from '@/lib/blog'
import { getServices } from '@/lib/services'
import { pageMetadata, absoluteUrl } from '@/lib/seo'
import { localePath, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'

type Params = { params: { lang: Locale; slug: string } }

export function generateStaticParams({ params }: { params: { lang: Locale } }) {
  return getPosts(params.lang).map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.lang, params.slug)
  if (!post) return {}

  const full = isFullPost(params.lang, post.id)
  const meta = pageMetadata({
    lang: params.lang,
    path: `/blog/${post.slug}`,
    // hreflang links only between full translations of the same article
    paths: full ? postPaths(post.id) : { [params.lang]: `/blog/${post.slug}` },
    title: post.metaTitle,
    description: post.metaDescription,
    type: 'article',
    image: post.image,
    noindex: !full,
  })
  return { ...meta, openGraph: { ...meta.openGraph, type: 'article', publishedTime: post.date } }
}

export default function BlogPost({ params }: Params) {
  const { lang } = params
  const post = getPostBySlug(lang, params.slug)
  if (!post) notFound()

  const t = getDictionary(lang).blog

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    ...(post.image && { image: post.image }),
    author: { '@type': 'Organization', name: 'BuildWebs.eu', url: 'https://buildwebs.eu' },
    publisher: { '@id': 'https://buildwebs.eu/#organization' },
    inLanguage: lang,
    mainEntityOfPage: absoluteUrl(lang, `/blog/${post.slug}`),
  }

  return (
    <article className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href={localePath(lang, '/blog')}
          className="inline-flex items-center gap-2 text-electric-blue-light hover:text-neon-turquoise transition-colors mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base"
        >
          <HiArrowLeft aria-hidden="true" />
          {t.back}
        </Link>

        {/* Category */}
        <div className="mb-3 sm:mb-4">
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric-blue/10 text-electric-blue-light text-xs sm:text-sm font-semibold rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 lg:mb-12 pb-4 sm:pb-6 lg:pb-8 border-b border-gray-800">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <HiUser className="text-electric-blue-light text-sm sm:text-base" />
            <span className="text-xs sm:text-sm">{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <HiCalendar className="text-electric-blue-light text-sm sm:text-base" />
            <span className="text-xs sm:text-sm">{new Date(post.date).toLocaleDateString(t.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <HiClock className="text-electric-blue-light text-sm sm:text-base" />
            <span className="text-xs sm:text-sm">{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-6 sm:mb-8 lg:mb-12 rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 p-6 sm:p-8 bg-dark-card rounded-xl sm:rounded-2xl border border-gray-800 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.ctaTitle}</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
            {t.ctaText}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {getServices(lang).map((s) => (
              <Link
                key={s.slug}
                href={localePath(lang, `/services/${s.slug}`)}
                className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300 hover:border-electric-blue-light hover:text-electric-blue-light transition-colors"
              >
                {s.title} · {t.ctaFrom} {s.priceFrom}
              </Link>
            ))}
          </div>
          <Link href={localePath(lang, '/contact')} className="btn-primary">
            {t.cta}
          </Link>
        </div>
      </div>
    </article>
  )
}

