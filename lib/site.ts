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
  // EmailJS (https://www.emailjs.com) — contact form delivery
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  },
  // Google Search Console HTML-tag verification code
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
}
