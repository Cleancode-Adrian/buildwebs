import type { Service } from './services'

export const servicesEn: Service[] = [
  {
    slug: 'business-websites',
    icon: 'website',
    title: 'Fast Business Websites',
    shortTitle: 'Business Websites',
    tagline: 'WordPress websites that load fast and turn visitors into enquiries.',
    description:
      'A custom-designed company website built on WordPress — fast, mobile-first, SEO-ready and easy for you to edit. No page-builder bloat, no monthly builder subscription. You own the code, the domain and the data.',
    priceFrom: '€800',
    priceNote: 'one-off, fixed quote — no hourly surprises',
    timeline: '2–4 weeks',
    metaTitle: 'Business Website Design on WordPress | From €800 | BuildWebs',
    metaDescription:
      'Fast, custom WordPress websites for European small businesses. Mobile-first, SEO-ready, Core Web Vitals optimised. Fixed price from €800, delivered in 2–4 weeks.',
    idealFor: [
      'Service businesses and local companies',
      'Consultants, coaches and personal brands',
      'Start-ups that need to launch quickly',
      'Companies with an outdated or slow website',
    ],
    included: [
      'Custom design approved before development starts',
      'Mobile-first, responsive layout',
      'Core Web Vitals optimisation (target: green scores)',
      'Technical SEO: meta tags, sitemap, structured data',
      'GDPR-compliant forms and cookie consent',
      'SSL, spam protection and basic security hardening',
      'Google Analytics 4 and Search Console setup',
      'Multilingual setup on request (EN / DE / NL / FR …)',
      'Training video so you can edit content yourself',
      '30 days of free fixes after launch',
    ],
    tech: ['WordPress', 'Custom theme / blocks', 'Polylang / WPML', 'GA4', 'Search Console'],
    faq: [
      {
        q: 'How much does a business website cost?',
        a: 'A simple company website with a few pages starts at €800. Larger sites with custom layouts, multiple languages or integrations are typically €1,500–€4,000. You get one fixed price before we start.',
      },
      {
        q: 'Can you build the site in German, Dutch or French?',
        a: 'Yes. We build multilingual WordPress sites. You provide or approve the translations, or we can arrange professional translation as a separate item.',
      },
      {
        q: 'Will I be able to edit the website myself?',
        a: 'Yes. You get a simple editing panel and a short training video. Everything — code, domain, hosting — is in your name.',
      },
      {
        q: 'How do we work together if you are not local?',
        a: 'All projects run remotely: video calls, a shared staging site you can review at any time, and replies within one business day. We work in the CET time zone, the same as most of the EU.',
      },
    ],
  },
  {
    slug: 'woocommerce-stores',
    icon: 'store',
    title: 'WooCommerce Online Stores',
    shortTitle: 'Online Stores',
    tagline: 'Online stores with European payments, shipping and invoicing built in.',
    description:
      'A complete WooCommerce store you fully own — no platform fees on every sale. We set up products and variants, local payment methods (iDEAL, Bancontact, Klarna, cards via Mollie or Stripe), shipping rules, EU VAT and invoices, so you can start selling from day one.',
    priceFrom: '€1,500',
    priceNote: 'one-off, fixed quote',
    timeline: '4–8 weeks',
    metaTitle: 'WooCommerce Store Development for EU Businesses | From €1,500 | BuildWebs',
    metaDescription:
      'Custom WooCommerce online stores for European businesses: iDEAL, Bancontact, Klarna, Stripe, EU VAT, shipping integrations. No monthly platform fees. From €1,500.',
    idealFor: [
      'Brands launching their first online store',
      'Shops moving away from Shopify or Wix fees',
      'Wholesalers and B2B sellers',
      'Existing stores that are slow or hard to manage',
    ],
    included: [
      'Custom store design (product, category, cart, checkout)',
      'Payments: Mollie, Stripe, PayPal — iDEAL, Bancontact, Klarna, cards',
      'EU VAT (OSS) settings and automatic PDF invoices',
      'Shipping rules and carrier integrations (DHL, DPD, PostNL, GLS …)',
      'Product import from CSV or your old platform',
      'Fast checkout optimised for conversion',
      'Product schema for Google Shopping and rich results',
      'Email notifications, abandoned cart recovery',
      'GDPR, terms and withdrawal-right setup',
      'Training for managing orders and products',
    ],
    tech: ['WooCommerce', 'Mollie', 'Stripe', 'Sendcloud', 'Google Merchant Center'],
    faq: [
      {
        q: 'Why WooCommerce instead of Shopify?',
        a: 'With WooCommerce you own the store and pay no percentage or app fees on every order. It is a good fit when you want full control, custom features or lower running costs as you grow.',
      },
      {
        q: 'Can you migrate my existing store?',
        a: 'Yes. We move products, customers and orders from Shopify, Wix, PrestaShop or other platforms, and set up redirects so you keep your Google rankings.',
      },
      {
        q: 'Which payment methods can you add?',
        a: 'Everything your customers expect locally: iDEAL (NL), Bancontact (BE), Klarna, SEPA, credit cards, Apple Pay and Google Pay — usually via Mollie or Stripe.',
      },
      {
        q: 'What results have your stores achieved?',
        a: 'One of the stores our team built processed 1,000+ orders and around €100,000 in sales in the analysed period. Results depend on your product and marketing, but the store will never be the bottleneck.',
      },
    ],
  },
  {
    slug: 'website-care',
    icon: 'care',
    title: 'Website Care, Fixes & Rescue',
    shortTitle: 'Care & Rescue',
    tagline: 'Updates, backups, monitoring and fast fixes — so your site just works.',
    description:
      'Your developer disappeared? Your WordPress site is slow, broken or hacked? We take over, fix what is wrong and keep it running with a monthly care plan. Also: migrations to a new host or domain without losing Google rankings.',
    priceFrom: '€49/month',
    priceNote: 'monthly plans, cancel anytime — one-off fixes from €290',
    timeline: 'Start within 48 hours',
    metaTitle: 'WordPress Maintenance & Website Rescue | From €49/month | BuildWebs',
    metaDescription:
      'WordPress care plans for European businesses: updates, backups, uptime monitoring, security and small changes. Hacked or broken site? Emergency fixes from €290.',
    idealFor: [
      'Owners whose previous developer stopped responding',
      'Slow, broken or hacked WordPress sites',
      'Businesses without in-house IT',
      'Sites that need to move host or domain',
    ],
    included: [
      'Website audit and handover of all access (domain, hosting, admin)',
      'WordPress core, theme and plugin updates',
      'Daily off-site backups',
      'Uptime and security monitoring',
      'Malware removal and hack recovery',
      'Speed optimisation (Core Web Vitals)',
      'Migrations between hosts, domains and platforms',
      'Monthly report in plain English',
    ],
    packages: [
      {
        name: 'Basic',
        price: '€49/mo',
        features: ['Monthly updates', 'Weekly backups', 'Uptime monitoring', 'Monthly report'],
      },
      {
        name: 'Business',
        price: '€99/mo',
        features: ['Weekly updates', 'Daily backups', 'Security monitoring', '1 hour of changes / month', 'Reply within 1 business day'],
      },
      {
        name: 'Store',
        price: '€199/mo',
        features: ['Everything in Business', 'WooCommerce checks after updates', '3 hours of changes / month', 'Priority support'],
      },
    ],
    tech: ['WordPress', 'WooCommerce', 'Cloudflare', 'Off-site backups', 'Uptime monitoring'],
    faq: [
      {
        q: 'My previous developer is not responding. Can you help?',
        a: 'Yes — this is one of the most common situations we handle. We help you regain access to your domain, hosting and admin panel, audit the site and take it over safely.',
      },
      {
        q: 'My site was hacked. How fast can you fix it?',
        a: 'We usually start within 24–48 hours. We clean the malware, close the security hole, restore what was damaged and help you request removal from Google blacklists.',
      },
      {
        q: 'Do I need a contract?',
        a: 'No long-term contract. Care plans are monthly and you can cancel at any time.',
      },
      {
        q: 'Will a migration hurt my Google rankings?',
        a: 'Not when done properly. We map every URL, set up 301 redirects and test everything before switching, so you keep your rankings.',
      },
    ],
  },
  {
    slug: 'web-accessibility',
    icon: 'accessibility',
    title: 'Web Accessibility (WCAG & EAA)',
    shortTitle: 'Accessibility',
    tagline: 'Get your website and store ready for the European Accessibility Act.',
    description:
      'Since 28 June 2025 the European Accessibility Act (EAA) requires many online stores and digital services in the EU to be accessible. We audit your website against WCAG 2.2 AA, fix the issues and prepare your accessibility statement.',
    priceFrom: '€490',
    priceNote: 'audit — implementation quoted after the audit',
    timeline: 'Audit in 5–7 business days',
    featuredLink: {
      href: '/european-accessibility-act-woocommerce',
      label: 'EAA compliance for WooCommerce stores',
      text: 'Running an online store? See our dedicated EAA checklist, common WooCommerce issues and a free mini-check.',
    },
    metaTitle: 'WCAG 2.2 Audit & European Accessibility Act Compliance | BuildWebs',
    metaDescription:
      'Web accessibility audits and fixes for EU businesses. WCAG 2.2 AA, European Accessibility Act (EAA) readiness, accessibility statement. Audit from €490.',
    idealFor: [
      'Online stores selling to EU consumers',
      'Banking, booking, travel and e-service providers',
      'Companies preparing for public tenders',
      'Brands that want to reach every customer',
    ],
    included: [
      'Manual + automated audit against WCAG 2.2 AA',
      'Keyboard and screen reader testing',
      'Colour contrast, forms, headings and image alt texts',
      'Prioritised report with screenshots and how-to-fix notes',
      'Implementation of fixes on WordPress / WooCommerce',
      'Accessibility statement draft',
      'Re-test after fixes',
    ],
    tech: ['WCAG 2.2 AA', 'EN 301 549', 'axe / Lighthouse', 'NVDA', 'VoiceOver'],
    faq: [
      {
        q: 'Does the European Accessibility Act apply to my business?',
        a: 'It applies to many businesses selling products or services to consumers in the EU, including most online stores. Micro-enterprises (fewer than 10 employees and under €2M turnover) providing services are exempt. If you are unsure, we can do a quick check.',
      },
      {
        q: 'Is an accessibility plugin or overlay enough?',
        a: 'No. Overlay widgets do not make a website compliant and can even make it harder to use. Real accessibility comes from fixing the code, content and design.',
      },
      {
        q: 'What do I get after the audit?',
        a: 'A clear, prioritised list of issues with screenshots and explanations, plus a fixed quote to fix them. You can also hand the report to your own developer.',
      },
      {
        q: 'Do you provide legal advice?',
        a: 'No — we handle the technical side (audit, fixes, statement draft). For legal interpretation in your country, consult a lawyer.',
      },
    ],
  },
]
