// Site-wide settings. Values that differ per environment come from .env.local
// (see .env.example). Anything left empty is simply not rendered.

export const site = {
  url: 'https://buildwebs.eu',
  name: 'BuildWebs.eu',
  email: 'contact@buildwebs.eu',
  whatsapp: 'https://wa.me/48724441843',
  // e.g. https://calendly.com/buildwebs/30min — shows "Book a call" buttons when set
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || '',
  // e.g. G-XXXXXXXXXX — Google Analytics loads only after cookie consent
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  // Google Search Console HTML-tag verification code
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
}
