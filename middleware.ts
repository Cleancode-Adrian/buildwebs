import { NextResponse, type NextRequest } from 'next/server'
import { locales, defaultLocale } from './lib/i18n'

// English has no URL prefix: '/services' is served from app/[lang] with lang=en.
// '/en/...' is redirected to the prefix-less URL to avoid duplicate content.
// The detected language is passed on as 'x-locale' (used by not-found.tsx, which gets no params).
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const locale = locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ?? defaultLocale

  const headers = new Headers(request.headers)
  headers.set('x-locale', locale)

  // Next.js links the generated OG image as /en/opengraph-image — serve it directly
  if (pathname.endsWith('/opengraph-image')) return NextResponse.next({ request: { headers } })

  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultLocale.length + 1) || '/'
    return NextResponse.redirect(url, 308)
  }

  if (pathname.startsWith(`/${locale}`) && locale !== defaultLocale) {
    return NextResponse.next({ request: { headers } })
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url, { request: { headers } })
}

export const config = {
  // Skip Next internals, API routes, sitemap and any file with an extension (favicon.svg, llms.txt …)
  matcher: ['/((?!_next|api|sitemap.xml|.*\\..*).*)'],
}
