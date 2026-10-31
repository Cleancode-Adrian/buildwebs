import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HiArrowRight, HiClock, HiUser } from 'react-icons/hi'
import { getFullPosts } from '@/lib/blog'
import { pageMetadata } from '@/lib/seo'
import { localePath, type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const t = getDictionary(params.lang).blog
  return pageMetadata({ lang: params.lang, path: '/blog', title: t.metaTitle, description: t.metaDescription, keywords: t.keywords })
}

export default function BlogPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params
  const t = getDictionary(lang).blog
  const blogPosts = getFullPosts(lang).map((post) => ({ ...post, excerpt: post.metaDescription }))

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">
            BuildWebs <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-dark-card rounded-xl sm:rounded-2xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image!}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Category */}
                <div className="mb-2 sm:mb-3">
                  <span className="px-2 sm:px-3 py-1 bg-electric-blue/10 text-electric-blue-light text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-2.5 lg:mb-3 group-hover:text-electric-blue-light transition-colors leading-tight">
                  <Link href={localePath(lang, `/blog/${post.slug}`)} className="no-underline">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 lg:mb-6 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <HiClock className="text-electric-blue-light" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <HiUser className="text-electric-blue-light" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More Link - zawsze na dole */}
                <Link
                  href={localePath(lang, `/blog/${post.slug}`)}
                  aria-hidden="true"
                  tabIndex={-1}
                  className="inline-flex items-center gap-2 text-electric-blue-light hover:text-neon-turquoise transition-colors font-semibold mt-auto text-sm sm:text-base"
                >
                  {t.read}
                  <HiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl border border-electric-blue/30 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{t.eaaTitle}</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t.eaaText}
          </p>
          <Link href={localePath(lang, '/european-accessibility-act-woocommerce')} className="btn-primary">
            {t.eaaCta}
          </Link>
        </div>
      </div>
    </div>
  )
}

