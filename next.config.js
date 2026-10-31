/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimize imports for better tree-shaking
  modularizeImports: {
    'react-icons/hi': {
      transform: 'react-icons/hi/{{member}}',
    },
    'react-icons/fa': {
      transform: 'react-icons/fa/{{member}}',
    },
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },

  // Old service & city pages (pre-2026 offer) -> new service structure
  async redirects() {
    const toServices = ['laravel-development', 'seo-services', 'amsterdam', 'rotterdam', 'utrecht', 'den-haag', 'eindhoven', 'brussels']
    return [
      { source: '/services/web-design', destination: '/services/business-websites', permanent: true },
      { source: '/services/wordpress-development', destination: '/services/business-websites', permanent: true },
      { source: '/services/e-commerce', destination: '/services/woocommerce-stores', permanent: true },
      ...toServices.map((slug) => ({ source: `/services/${slug}`, destination: '/services', permanent: true })),
      // Portfolio removed for now
      { source: '/portfolio', destination: '/', permanent: false },
      { source: '/de/portfolio', destination: '/de', permanent: false },
      // Placeholder blog posts removed (were noindex stubs)
      ...['web-design-with-digital-marketing', 'nextjs-vs-react-which-choose', 'google-analytics-4-guide', 'web-design-trends-2025', 'mobile-first-design-guide', 'email-marketing-automation-guide', 'tailwind-css-benefits', 'website-security-essentials', 'conversion-rate-optimization', 'react-performance-optimization', 'content-marketing-strategy', 'api-integration-guide', 'ux-design-principles', 'website-maintenance-guide', 'e-commerce-optimization'].map((slug) => ({
        source: `/blog/${slug}`,
        destination: '/blog',
        permanent: true,
      })),
    ]
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
}

module.exports = nextConfig

