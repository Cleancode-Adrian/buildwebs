import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HiArrowRight, HiClock, HiUser } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Web Design & Marketing Insights | BuildWebs Blog',
  description: 'Read expert articles on web development, SEO, marketing, and design trends for 2025. BuildWebs helps European brands grow through digital performance.',
  keywords: 'web design blog, SEO tips, marketing insights, web development tutorials, digital trends 2025',
  openGraph: {
    title: 'Web Design & Marketing Insights | BuildWebs Blog',
    description: 'Expert articles on web development, SEO, marketing, and design trends for 2025.',
    url: 'https://buildwebs.eu/blog',
  },
}

const blogPosts = [
  {
    slug: 'how-to-choose-web-design-agency-netherlands',
    title: 'How to Choose the Right Web Design Agency in the Netherlands',
    excerpt: 'Choosing a web design agency can be tricky. Learn what to look for — from communication and SEO to performance and design quality.',
    author: 'BuildWebs Team',
    date: '2025-01-15',
    readTime: '12 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
  },
  {
    slug: 'why-fast-websites-win',
    title: 'Why Fast Websites Win — Speed as a Growth Factor',
    excerpt: 'Learn why website speed is crucial for SEO, conversions, and user experience. Discover how BuildWebs ensures lightning-fast sites.',
    author: 'BuildWebs Team',
    date: '2025-01-12',
    readTime: '11 min read',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
  },
  {
    slug: 'seo-checklist-2025',
    title: 'Complete SEO Checklist for 2025 - Essential Steps',
    excerpt: 'A comprehensive SEO checklist covering technical SEO, on-page optimization, content strategy, and link building for better rankings.',
    author: 'BuildWebs Team',
    date: '2025-01-08',
    readTime: '15 min read',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=400&fit=crop',
  },
  {
    slug: 'web-design-with-digital-marketing',
    title: 'The Power of Combining Web Design with Digital Marketing',
    excerpt: 'A great website is only the beginning — SEO, ads, and email marketing amplify growth. See how design and marketing work together.',
    author: 'BuildWebs Team',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
  },
  {
    slug: 'nextjs-vs-react-which-choose',
    title: 'Next.js vs React - Which Should You Choose in 2025?',
    excerpt: 'Comparing Next.js and React for modern web development. Learn about SSR, SEO benefits, and when to use each framework.',
    author: 'BuildWebs Team',
    date: '2025-01-02',
    readTime: '10 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop',
  },
  {
    slug: 'wordpress-vs-laravel',
    title: 'WordPress vs. Laravel — Which One Fits Your Business?',
    excerpt: 'WordPress or Laravel? Learn which platform is best for your business goals and how BuildWebs uses both to deliver solutions.',
    author: 'BuildWebs Team',
    date: '2024-12-28',
    readTime: '14 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  },
  {
    slug: 'google-analytics-4-guide',
    title: 'Google Analytics 4 Setup Guide for Business Websites',
    excerpt: 'Step-by-step guide to setting up Google Analytics 4, understanding reports, and using data to improve your website performance.',
    author: 'BuildWebs Team',
    date: '2024-12-24',
    readTime: '11 min read',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
  },
  {
    slug: 'web-design-trends-2025',
    title: 'Top 10 Web Design Trends in 2025',
    excerpt: 'Explore the leading web design trends for 2025 — dark mode, micro animations, UX focus, and AI personalization. Stay ahead.',
    author: 'BuildWebs Team',
    date: '2024-12-20',
    readTime: '9 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop',
  },
  {
    slug: 'mobile-first-design-guide',
    title: 'Mobile-First Design: Why It Matters in 2025',
    excerpt: 'Learn why mobile-first design is essential, how to implement it, and best practices for creating responsive websites.',
    author: 'BuildWebs Team',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
  },
  {
    slug: 'web-design-with-digital-marketing',
    title: 'The Power of Combining Web Design with Digital Marketing',
    excerpt: 'A great website is only the beginning — SEO, ads, and email marketing amplify growth. See how design and marketing work together.',
    author: 'BuildWebs Team',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
  },
  {
    slug: 'nextjs-vs-react-which-choose',
    title: 'Next.js vs React - Which Should You Choose in 2025?',
    excerpt: 'Comparing Next.js and React for modern web development. Learn about SSR, SEO benefits, and when to use each framework.',
    author: 'BuildWebs Team',
    date: '2025-01-02',
    readTime: '10 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop',
  },
  {
    slug: 'wordpress-vs-laravel',
    title: 'WordPress vs. Laravel — Which One Fits Your Business?',
    excerpt: 'WordPress or Laravel? Learn which platform is best for your business goals and how BuildWebs uses both to deliver solutions.',
    author: 'BuildWebs Team',
    date: '2024-12-28',
    readTime: '14 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  },
  {
    slug: 'google-analytics-4-guide',
    title: 'Google Analytics 4 Setup Guide for Business Websites',
    excerpt: 'Step-by-step guide to setting up Google Analytics 4, understanding reports, and using data to improve your website performance.',
    author: 'BuildWebs Team',
    date: '2024-12-24',
    readTime: '11 min read',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=400&fit=crop',
  },
  {
    slug: 'web-design-trends-2025',
    title: 'Top 10 Web Design Trends in 2025',
    excerpt: 'Explore the leading web design trends for 2025 — dark mode, micro animations, UX focus, and AI personalization. Stay ahead.',
    author: 'BuildWebs Team',
    date: '2024-12-20',
    readTime: '9 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop',
  },
  {
    slug: 'mobile-first-design-guide',
    title: 'Mobile-First Design: Why It Matters in 2025',
    excerpt: 'Learn why mobile-first design is essential, how to implement it, and best practices for creating responsive websites.',
    author: 'BuildWebs Team',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&h=400&fit=crop',
  },
  {
    slug: 'email-marketing-automation-guide',
    title: 'Email Marketing Automation for Small Businesses',
    excerpt: 'Complete guide to email marketing automation - from choosing tools to creating effective drip campaigns and measuring ROI.',
    author: 'BuildWebs Team',
    date: '2024-12-10',
    readTime: '13 min read',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
  },
  {
    slug: 'tailwind-css-benefits',
    title: 'Why We Use Tailwind CSS - Benefits and Best Practices',
    excerpt: 'Discover why Tailwind CSS is our framework of choice. Learn about utility-first CSS, performance benefits, and development speed.',
    author: 'BuildWebs Team',
    date: '2024-12-05',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop',
  },
  {
    slug: 'website-security-essentials',
    title: 'Website Security Essentials Every Business Should Know',
    excerpt: 'Protect your website from threats. Learn about SSL certificates, regular updates, backups, and security best practices.',
    author: 'BuildWebs Team',
    date: '2024-11-30',
    readTime: '10 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop',
  },
  {
    slug: 'conversion-rate-optimization',
    title: 'Conversion Rate Optimization - Turn Visitors into Customers',
    excerpt: 'Proven CRO strategies to increase conversions. Learn about A/B testing, user behavior analysis, and persuasive design.',
    author: 'BuildWebs Team',
    date: '2024-11-25',
    readTime: '12 min read',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
  },
  {
    slug: 'local-seo-netherlands',
    title: 'Local SEO Guide for Dutch Businesses',
    excerpt: 'Master local SEO in the Netherlands. Google My Business optimization, local keywords, and strategies to rank in local search.',
    author: 'BuildWebs Team',
    date: '2024-11-20',
    readTime: '13 min read',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
  },
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Boost your React app performance with lazy loading, code splitting, memoization, and other advanced optimization techniques.',
    author: 'BuildWebs Team',
    date: '2024-11-15',
    readTime: '11 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop',
  },
  {
    slug: 'content-marketing-strategy',
    title: 'Building a Content Marketing Strategy That Works',
    excerpt: 'Create a content marketing strategy that drives traffic and conversions. Learn about content planning, SEO, and distribution.',
    author: 'BuildWebs Team',
    date: '2024-11-10',
    readTime: '14 min read',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop',
  },
  {
    slug: 'api-integration-guide',
    title: 'API Integration Best Practices for Modern Websites',
    excerpt: 'Learn how to integrate third-party APIs effectively. REST vs GraphQL, authentication, error handling, and security considerations.',
    author: 'BuildWebs Team',
    date: '2024-11-05',
    readTime: '10 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
  },
  {
    slug: 'ux-design-principles',
    title: 'Essential UX Design Principles for Better Websites',
    excerpt: 'Master user experience design with these essential principles. Learn about usability, accessibility, and user-centered design.',
    author: 'BuildWebs Team',
    date: '2024-10-30',
    readTime: '8 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=400&fit=crop',
  },
  {
    slug: 'website-maintenance-guide',
    title: 'Website Maintenance Guide - Keep Your Site Running Smoothly',
    excerpt: 'Essential website maintenance tasks to keep your site secure, fast, and up-to-date. Create a maintenance schedule that works.',
    author: 'BuildWebs Team',
    date: '2024-10-25',
    readTime: '9 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
  },
  {
    slug: 'e-commerce-optimization',
    title: 'E-commerce Website Optimization - Boost Your Sales',
    excerpt: 'Optimize your e-commerce store for maximum sales. Product pages, checkout process, payment options, and trust signals.',
    author: 'BuildWebs Team',
    date: '2024-10-20',
    readTime: '13 min read',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">
            BuildWebs <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Expert insights on web development, SEO, marketing, and design trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-dark-card rounded-xl sm:rounded-2xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Category */}
                <div className="mb-2 sm:mb-3">
                  <span className="px-2 sm:px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-2.5 lg:mb-3 group-hover:text-electric-blue transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 lg:mb-6 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <HiClock className="text-electric-blue" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <HiUser className="text-electric-blue" />
                    <span className="hidden sm:inline">{post.author}</span>
                    <span className="sm:hidden">Team</span>
                  </div>
                </div>

                {/* Read More Link - zawsze na dole */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-electric-blue hover:text-neon-turquoise transition-colors font-semibold mt-auto text-sm sm:text-base"
                >
                  Read Article
                  <HiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-6 sm:p-8 lg:p-12 rounded-2xl lg:rounded-3xl border border-electric-blue/30 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Stay Updated</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get the latest web development tips, SEO strategies, and design trends delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-dark-card border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-electric-blue"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

