import type { Service } from './services'

export const servicesDe: Service[] = [
  {
    slug: 'business-websites',
    icon: 'website',
    title: 'Schnelle Firmenwebseiten',
    shortTitle: 'Firmenwebseiten',
    tagline: 'WordPress-Webseiten, die schnell laden und Besucher zu Anfragen machen.',
    description:
      'Eine individuell gestaltete Firmenwebseite auf WordPress-Basis – schnell, mobiloptimiert, SEO-ready und einfach selbst zu pflegen. Kein aufgeblähter Page-Builder, kein Baukasten-Abo. Code, Domain und Daten gehören Ihnen.',
    priceFrom: '800 €',
    priceNote: 'einmalig, Festpreis – keine Überraschungen bei den Stunden',
    timeline: '2–4 Wochen',
    metaTitle: 'Firmenwebseite mit WordPress erstellen lassen | ab 800 € | BuildWebs',
    metaDescription:
      'Schnelle, individuelle WordPress-Webseiten für kleine Unternehmen in Deutschland, Österreich und der Schweiz. Mobil, SEO-ready, Core Web Vitals optimiert. Festpreis ab 800 €, fertig in 2–4 Wochen.',
    idealFor: [
      'Dienstleister und lokale Unternehmen',
      'Berater, Coaches und Personal Brands',
      'Start-ups, die schnell online gehen wollen',
      'Unternehmen mit veralteter oder langsamer Webseite',
    ],
    included: [
      'Individuelles Design – Freigabe vor Entwicklungsbeginn',
      'Mobile-first, responsives Layout',
      'Core-Web-Vitals-Optimierung (Ziel: grüne Werte)',
      'Technisches SEO: Meta-Tags, Sitemap, strukturierte Daten',
      'DSGVO-konforme Formulare und Cookie-Einwilligung',
      'SSL, Spamschutz und grundlegende Sicherheitsmaßnahmen',
      'Einrichtung von Google Analytics 4 und Search Console',
      'Mehrsprachigkeit auf Wunsch (DE / EN / FR …)',
      'Schulungsvideo, damit Sie Inhalte selbst bearbeiten können',
      '30 Tage kostenlose Korrekturen nach dem Launch',
    ],
    tech: ['WordPress', 'Eigenes Theme / Blöcke', 'Polylang / WPML', 'GA4', 'Search Console'],
    faq: [
      {
        q: 'Was kostet eine Firmenwebseite?',
        a: 'Eine einfache Firmenwebseite mit einigen Unterseiten beginnt bei 800 €. Größere Webseiten mit individuellen Layouts, mehreren Sprachen oder Schnittstellen liegen meist bei 1.500–4.000 €. Sie erhalten vor Projektstart einen verbindlichen Festpreis.',
      },
      {
        q: 'Erstellen Sie die Webseite auch auf Deutsch?',
        a: 'Ja. Wir bauen ein- und mehrsprachige WordPress-Webseiten. Die Texte liefern Sie oder Sie geben sie frei; eine professionelle Übersetzung können wir als separate Position organisieren.',
      },
      {
        q: 'Kann ich die Webseite selbst bearbeiten?',
        a: 'Ja. Sie erhalten ein übersichtliches Redaktionssystem und ein kurzes Schulungsvideo. Code, Domain und Hosting laufen auf Ihren Namen.',
      },
      {
        q: 'Wie läuft die Zusammenarbeit ohne Agentur vor Ort?',
        a: 'Alle Projekte laufen remote: Videocalls, eine Testumgebung, die Sie jederzeit ansehen können, und Antworten innerhalb eines Werktags. Wir arbeiten in derselben Zeitzone (MEZ) wie Sie.',
      },
    ],
  },
  {
    slug: 'woocommerce-stores',
    icon: 'store',
    title: 'WooCommerce-Onlineshops',
    shortTitle: 'Onlineshops',
    tagline: 'Onlineshops mit europäischen Zahlungsarten, Versand und Rechnungen – startklar.',
    description:
      'Ein kompletter WooCommerce-Shop, der Ihnen gehört – ohne Plattformgebühren pro Bestellung. Wir richten Produkte und Varianten, lokale Zahlungsarten (PayPal, Klarna, SEPA, Kreditkarte über Mollie oder Stripe), Versandregeln, EU-Umsatzsteuer und Rechnungen ein, damit Sie ab dem ersten Tag verkaufen können.',
    priceFrom: '1.500 €',
    priceNote: 'einmalig, Festpreis',
    timeline: '4–8 Wochen',
    metaTitle: 'WooCommerce Shop erstellen lassen | ab 1.500 € | BuildWebs',
    metaDescription:
      'Individuelle WooCommerce-Onlineshops für Unternehmen in der EU: PayPal, Klarna, SEPA, Stripe, EU-Umsatzsteuer (OSS), DHL/DPD/GLS-Anbindung. Keine monatlichen Plattformgebühren. Ab 1.500 €.',
    idealFor: [
      'Marken, die ihren ersten Onlineshop starten',
      'Händler, die Shopify- oder Wix-Gebühren loswerden wollen',
      'Großhändler und B2B-Verkäufer',
      'Bestehende Shops, die langsam oder schwer zu pflegen sind',
    ],
    included: [
      'Individuelles Shop-Design (Produkt, Kategorie, Warenkorb, Checkout)',
      'Zahlungen: Mollie, Stripe, PayPal – Klarna, SEPA, Kreditkarte, Apple Pay',
      'EU-Umsatzsteuer (OSS) und automatische PDF-Rechnungen',
      'Versandregeln und Anbindung an DHL, DPD, GLS, Hermes …',
      'Produktimport per CSV oder aus Ihrem alten System',
      'Schneller, konversionsoptimierter Checkout',
      'Produkt-Schema für Google Shopping und Rich Results',
      'E-Mail-Benachrichtigungen, Warenkorbabbrecher-Mails',
      'DSGVO, AGB und Widerrufsbelehrung technisch eingebunden',
      'Schulung für Bestellungen und Produktpflege',
    ],
    tech: ['WooCommerce', 'Mollie', 'Stripe', 'Sendcloud', 'Google Merchant Center'],
    faq: [
      {
        q: 'Warum WooCommerce statt Shopify?',
        a: 'Mit WooCommerce gehört der Shop Ihnen, und Sie zahlen keine prozentualen Gebühren oder App-Abos pro Bestellung. Das lohnt sich, wenn Sie volle Kontrolle, individuelle Funktionen oder niedrigere laufende Kosten beim Wachstum wollen.',
      },
      {
        q: 'Können Sie meinen bestehenden Shop umziehen?',
        a: 'Ja. Wir übernehmen Produkte, Kunden und Bestellungen aus Shopify, Wix, Shopware, PrestaShop und anderen Systemen und richten Weiterleitungen ein, damit Ihre Google-Rankings erhalten bleiben.',
      },
      {
        q: 'Welche Zahlungsarten können Sie einbinden?',
        a: 'Alles, was Ihre Kunden erwarten: PayPal, Klarna, SEPA-Lastschrift, Kreditkarte, Apple Pay und Google Pay – meist über Mollie oder Stripe.',
      },
      {
        q: 'Welche Ergebnisse haben Ihre Shops erzielt?',
        a: 'Ein von unserem Team gebauter Shop hat im ausgewerteten Zeitraum über 1.000 Bestellungen und rund 100.000 € Umsatz abgewickelt. Ergebnisse hängen von Produkt und Marketing ab – der Shop wird aber nie der Engpass sein.',
      },
    ],
  },
  {
    slug: 'website-care',
    icon: 'care',
    title: 'Wartung, Reparatur & Rettung',
    shortTitle: 'Wartung & Rettung',
    tagline: 'Updates, Backups, Monitoring und schnelle Hilfe – damit Ihre Webseite einfach läuft.',
    description:
      'Ihr Entwickler ist nicht mehr erreichbar? Ihre WordPress-Seite ist langsam, defekt oder gehackt? Wir übernehmen, beheben die Probleme und halten alles mit einem monatlichen Wartungsplan am Laufen. Außerdem: Umzüge auf neues Hosting oder eine neue Domain ohne Ranking-Verlust.',
    priceFrom: '49 €/Monat',
    priceNote: 'monatlich kündbar – einmalige Reparaturen ab 290 €',
    timeline: 'Start innerhalb von 48 Stunden',
    metaTitle: 'WordPress Wartung & Notfall-Hilfe | ab 49 €/Monat | BuildWebs',
    metaDescription:
      'WordPress-Wartungsverträge für Unternehmen: Updates, Backups, Uptime-Monitoring, Sicherheit und kleine Änderungen. Seite gehackt oder defekt? Notfall-Reparatur ab 290 €.',
    idealFor: [
      'Inhaber, deren Entwickler nicht mehr reagiert',
      'Langsame, defekte oder gehackte WordPress-Seiten',
      'Unternehmen ohne eigene IT',
      'Webseiten, die Hosting oder Domain wechseln müssen',
    ],
    included: [
      'Website-Audit und Übernahme aller Zugänge (Domain, Hosting, Admin)',
      'Updates für WordPress, Theme und Plugins',
      'Tägliche externe Backups',
      'Uptime- und Sicherheitsmonitoring',
      'Malware-Entfernung und Wiederherstellung nach Hacks',
      'Geschwindigkeitsoptimierung (Core Web Vitals)',
      'Umzüge zwischen Hostern, Domains und Plattformen',
      'Monatlicher Bericht in verständlicher Sprache',
    ],
    packages: [
      {
        name: 'Basis',
        price: '49 €/Monat',
        features: ['Monatliche Updates', 'Wöchentliche Backups', 'Uptime-Monitoring', 'Monatlicher Bericht'],
      },
      {
        name: 'Business',
        price: '99 €/Monat',
        features: ['Wöchentliche Updates', 'Tägliche Backups', 'Sicherheitsmonitoring', '1 Stunde Änderungen / Monat', 'Antwort innerhalb eines Werktags'],
      },
      {
        name: 'Shop',
        price: '199 €/Monat',
        features: ['Alles aus Business', 'WooCommerce-Tests nach Updates', '3 Stunden Änderungen / Monat', 'Priorisierter Support'],
      },
    ],
    tech: ['WordPress', 'WooCommerce', 'Cloudflare', 'Externe Backups', 'Uptime-Monitoring'],
    faq: [
      {
        q: 'Mein bisheriger Entwickler reagiert nicht mehr. Können Sie helfen?',
        a: 'Ja – das ist eine der häufigsten Situationen. Wir helfen Ihnen, wieder Zugriff auf Domain, Hosting und Admin-Bereich zu bekommen, prüfen die Seite und übernehmen sie sicher.',
      },
      {
        q: 'Meine Seite wurde gehackt. Wie schnell können Sie helfen?',
        a: 'In der Regel beginnen wir innerhalb von 24–48 Stunden. Wir entfernen die Schadsoftware, schließen die Sicherheitslücke, stellen Beschädigtes wieder her und helfen bei der Entfernung von Google-Warnungen.',
      },
      {
        q: 'Brauche ich einen langfristigen Vertrag?',
        a: 'Nein. Die Wartungspläne laufen monatlich und sind jederzeit kündbar.',
      },
      {
        q: 'Schadet ein Umzug meinen Google-Rankings?',
        a: 'Nicht, wenn er richtig gemacht wird. Wir erfassen jede URL, richten 301-Weiterleitungen ein und testen alles vor der Umstellung.',
      },
    ],
  },
  {
    slug: 'web-accessibility',
    icon: 'accessibility',
    title: 'Barrierefreiheit (WCAG & BFSG)',
    shortTitle: 'Barrierefreiheit',
    tagline: 'Machen Sie Ihre Webseite und Ihren Shop fit für das Barrierefreiheitsstärkungsgesetz.',
    description:
      'Seit dem 28. Juni 2025 müssen viele Onlineshops und digitale Dienstleistungen in der EU barrierefrei sein – in Deutschland geregelt durch das Barrierefreiheitsstärkungsgesetz (BFSG), das den European Accessibility Act umsetzt. Wir prüfen Ihre Webseite nach WCAG 2.2 AA, beheben die Mängel und erstellen Ihre Barrierefreiheitserklärung.',
    priceFrom: '490 €',
    priceNote: 'Audit – Umsetzung als Festpreis nach dem Audit',
    timeline: 'Audit in 5–7 Werktagen',
    featuredLink: {
      href: '/european-accessibility-act-woocommerce',
      label: 'BFSG / EAA für WooCommerce-Shops',
      text: 'Sie betreiben einen Onlineshop? Unsere Checkliste, typische WooCommerce-Probleme und ein kostenloser Mini-Check.',
    },
    metaTitle: 'Barrierefreiheit nach BFSG & WCAG 2.2 – Audit & Umsetzung | BuildWebs',
    metaDescription:
      'Barrierefreiheits-Audits und Umsetzung für Unternehmen: WCAG 2.2 AA, Barrierefreiheitsstärkungsgesetz (BFSG) / European Accessibility Act, Barrierefreiheitserklärung. Audit ab 490 €.',
    idealFor: [
      'Onlineshops, die an Verbraucher in der EU verkaufen',
      'Banken, Buchungs-, Reise- und E-Service-Anbieter',
      'Unternehmen, die sich auf öffentliche Ausschreibungen vorbereiten',
      'Marken, die alle Kunden erreichen wollen',
    ],
    included: [
      'Manuelles und automatisiertes Audit nach WCAG 2.2 AA',
      'Tests mit Tastatur und Screenreader',
      'Farbkontraste, Formulare, Überschriften und Alternativtexte',
      'Priorisierter Bericht mit Screenshots und Lösungshinweisen',
      'Umsetzung der Korrekturen in WordPress / WooCommerce',
      'Entwurf der Barrierefreiheitserklärung',
      'Nachtest nach den Korrekturen',
    ],
    tech: ['WCAG 2.2 AA', 'EN 301 549', 'axe / Lighthouse', 'NVDA', 'VoiceOver'],
    faq: [
      {
        q: 'Gilt das BFSG für mein Unternehmen?',
        a: 'Es gilt für viele Unternehmen, die Produkte oder Dienstleistungen an Verbraucher verkaufen, darunter die meisten Onlineshops. Kleinstunternehmen, die Dienstleistungen erbringen (weniger als 10 Beschäftigte und höchstens 2 Mio. € Jahresumsatz oder Bilanzsumme), sind ausgenommen. Wenn Sie unsicher sind, prüfen wir das kurz für Sie.',
      },
      {
        q: 'Reicht ein Barrierefreiheits-Plugin oder Overlay?',
        a: 'Nein. Overlay-Widgets machen eine Webseite nicht konform und können die Bedienung sogar erschweren. Echte Barrierefreiheit entsteht durch Korrekturen an Code, Inhalten und Design.',
      },
      {
        q: 'Was erhalte ich nach dem Audit?',
        a: 'Eine klare, priorisierte Liste der Mängel mit Screenshots und Erklärungen sowie einen Festpreis für die Behebung. Den Bericht können Sie auch an Ihren eigenen Entwickler weitergeben.',
      },
      {
        q: 'Bieten Sie Rechtsberatung an?',
        a: 'Nein – wir übernehmen die technische Seite (Audit, Korrekturen, Entwurf der Erklärung). Für rechtliche Fragen wenden Sie sich bitte an eine Anwältin oder einen Anwalt.',
      },
    ],
  },
]
