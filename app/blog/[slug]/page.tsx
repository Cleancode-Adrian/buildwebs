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
    <article className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-turquoise transition-colors mb-8"
        >
          <HiArrowLeft />
          Back to Blog
        </Link>

        {/* Category */}
        <div className="mb-4">
          <span className="px-4 py-2 bg-electric-blue/10 text-electric-blue text-sm font-semibold rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 text-gray-400 mb-12 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <HiUser className="text-electric-blue" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiCalendar className="text-electric-blue" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiClock className="text-electric-blue" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden">
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
        <div className="mt-16 p-8 bg-dark-card rounded-2xl border border-gray-800 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help With Your Website?</h3>
          <p className="text-gray-400 mb-6">
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

