import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HiArrowLeft, HiClock, HiUser, HiCalendar } from 'react-icons/hi'
import { blogPosts } from './blogData'

// Blog posts are now imported from blogData.ts for easier management

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: 'Blog Post Not Found | BuildWebs',
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://buildwebs.eu/blog/${params.slug}`,
      type: 'article',
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-turquoise transition-colors mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base"
        >
          <HiArrowLeft />
          Back to Blog
        </Link>

        {/* Category */}
        <div className="mb-3 sm:mb-4">
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric-blue/10 text-electric-blue text-xs sm:text-sm font-semibold rounded-full">
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
            <HiUser className="text-electric-blue text-sm sm:text-base" />
            <span className="text-xs sm:text-sm">{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <HiCalendar className="text-electric-blue text-sm sm:text-base" />
            <span className="text-xs sm:text-sm">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <HiClock className="text-electric-blue text-sm sm:text-base" />
            <span className="text-xs sm:text-sm">{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-6 sm:mb-8 lg:mb-12 rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={`${post.title} - BuildWebs Blog`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <article
          className="max-w-none text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-8 sm:mt-12 lg:mt-16 p-6 sm:p-8 bg-dark-card rounded-xl sm:rounded-2xl border border-gray-800 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Need Help With Your Website?</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
            BuildWebs specializes in modern web development, SEO, and digital marketing for European businesses.
          </p>
          <Link href="/#contact" className="btn-primary">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </article>
  )
}

