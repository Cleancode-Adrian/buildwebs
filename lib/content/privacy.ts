import type { Locale } from '../i18n'

// Privacy policy per language. Items may contain simple, trusted HTML (links, <strong>).
// Keep both languages in sync when changing anything.

export type PrivacySection = { title: string; paragraphs?: string[]; list?: string[]; after?: string[] }
export type PrivacyContent = {
  metaTitle: string
  metaDescription: string
  title: string
  updated: string
  sections: PrivacySection[]
  back: string
}

const controller =
  'CleanCode Adrian Sadowski, Pogalewo Wielkie 37/7, 56-120 Brzeg Dolny, Poland · NIP 9880303943 · <a href="mailto:contact@buildwebs.eu">contact@buildwebs.eu</a>'

const en: PrivacyContent = {
  metaTitle: 'Privacy Policy | BuildWebs.eu',
  metaDescription: 'How BuildWebs.eu collects, uses and protects your personal data. GDPR-compliant privacy policy.',
  title: 'Privacy Policy',
  updated: 'Last updated: 27 October 2026',
  back: 'Back to Home',
  sections: [
    {
      title: '1. Controller',
      paragraphs: [
        'The controller responsible for processing your personal data on this website (buildwebs.eu) is:',
        controller,
      ],
    },
    {
      title: '2. Hosting and server log files',
      paragraphs: [
        'When you visit this website, our hosting provider automatically processes technical data that your browser sends: IP address, date and time of the request, the page requested, referrer URL, browser and operating system. This is necessary to deliver the website and keep it secure.',
        'Legal basis: Art. 6(1)(f) GDPR (our legitimate interest in a secure and working website). Log files are kept only as long as necessary for this purpose. The hosting provider acts as our processor under a data processing agreement.',
      ],
    },
    {
      title: '3. Contact form, email and WhatsApp',
      paragraphs: ['When you contact us, we process the data you provide:'],
      list: [
        '<strong>Contact form:</strong> name, email address, company (optional) and your message. The form is delivered by EmailJS (EmailJS Pte. Ltd.) to our mailbox.',
        '<strong>Email:</strong> your email address and the content of your message.',
        '<strong>WhatsApp:</strong> if you choose to contact us via WhatsApp, WhatsApp/Meta processes your data according to its own privacy policy.',
      ],
      after: [
        'Purpose: answering your enquiry and, if applicable, preparing a quote or contract. Legal basis: Art. 6(1)(b) GDPR (pre-contractual measures) and Art. 6(1)(f) GDPR (our interest in answering enquiries). Enquiries are stored for up to 2 years unless statutory retention periods (e.g. for invoices) require longer storage.',
      ],
    },
    {
      title: '4. Cookies and consent',
      paragraphs: [
        'We store your cookie choice in your browser’s local storage (technically necessary, § 25(2) TDDDG / Art. 6(1)(f) GDPR). All other cookies and similar technologies are used only with your consent (Art. 6(1)(a) GDPR, § 25(1) TDDDG). You can change your decision at any time by deleting the site data in your browser; the banner will then appear again.',
        'We do not use advertising or remarketing cookies.',
      ],
    },
    {
      title: '5. Google Analytics (only with consent)',
      paragraphs: [
        'If you accept cookies, we use Google Analytics 4, a web analytics service of Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Google Analytics helps us understand how visitors use our website (pages visited, time on page, traffic sources, device and browser, approximate location at country/city level). IP addresses are not stored in Google Analytics 4.',
        'Legal basis: your consent, Art. 6(1)(a) GDPR. Data may be transferred to Google LLC in the USA; Google is certified under the EU-U.S. Data Privacy Framework (adequacy decision of the European Commission). Data is retained for up to 14 months. You can withdraw your consent at any time with effect for the future.',
      ],
    },
    {
      title: '6. Fonts and images',
      paragraphs: [
        'Fonts are hosted on our own server — no connection to Google Fonts is made. Images are delivered through our own server as well.',
      ],
    },
    {
      title: '7. Your rights',
      paragraphs: ['Under the GDPR you have the right to:'],
      list: [
        'access your personal data (Art. 15)',
        'rectification of inaccurate data (Art. 16)',
        'erasure (Art. 17)',
        'restriction of processing (Art. 18)',
        'data portability (Art. 20)',
        '<strong>object</strong> to processing based on legitimate interests (Art. 21)',
        'withdraw your consent at any time with effect for the future (Art. 7(3))',
        'lodge a complaint with a supervisory authority (Art. 77) — for us this is the Polish President of the Personal Data Protection Office (UODO), ul. Stawki 2, 00-193 Warsaw, <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>. You may also contact the authority in your own country.',
      ],
      after: ['To exercise your rights, simply email <a href="mailto:contact@buildwebs.eu">contact@buildwebs.eu</a>.'],
    },
    {
      title: '8. Data security',
      paragraphs: ['This website uses TLS/HTTPS encryption. We take appropriate technical and organisational measures to protect your data.'],
    },
    {
      title: '9. Changes to this policy',
      paragraphs: ['We update this policy when our website or the law changes. The current version is always available on this page.'],
    },
  ],
}

const deController =
  'CleanCode Adrian Sadowski, Pogalewo Wielkie 37/7, 56-120 Brzeg Dolny, Polen · NIP 9880303943 · <a href="mailto:contact@buildwebs.eu">contact@buildwebs.eu</a>'

const de: PrivacyContent = {
  metaTitle: 'Datenschutzerklärung | BuildWebs.eu',
  metaDescription: 'Wie BuildWebs.eu personenbezogene Daten verarbeitet und schützt. Datenschutzerklärung nach DSGVO.',
  title: 'Datenschutzerklärung',
  updated: 'Stand: 27. Oktober 2026',
  back: 'Zur Startseite',
  sections: [
    {
      title: '1. Verantwortlicher',
      paragraphs: ['Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website (buildwebs.eu) ist:', deController],
    },
    {
      title: '2. Hosting und Server-Logfiles',
      paragraphs: [
        'Beim Aufruf dieser Website verarbeitet unser Hosting-Anbieter automatisch technische Daten, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, Referrer-URL, Browser und Betriebssystem. Dies ist erforderlich, um die Website auszuliefern und ihre Sicherheit zu gewährleisten.',
        'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und funktionsfähigen Website). Die Logfiles werden nur so lange gespeichert, wie es für diesen Zweck erforderlich ist. Der Hosting-Anbieter ist auf Grundlage eines Auftragsverarbeitungsvertrags für uns tätig.',
      ],
    },
    {
      title: '3. Kontaktformular, E-Mail und WhatsApp',
      paragraphs: ['Wenn Sie uns kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten:'],
      list: [
        '<strong>Kontaktformular:</strong> Name, E-Mail-Adresse, Firma (optional) und Ihre Nachricht. Das Formular wird über EmailJS (EmailJS Pte. Ltd.) an unser Postfach übermittelt.',
        '<strong>E-Mail:</strong> Ihre E-Mail-Adresse und der Inhalt Ihrer Nachricht.',
        '<strong>WhatsApp:</strong> Wenn Sie uns über WhatsApp kontaktieren, verarbeitet WhatsApp/Meta Ihre Daten nach eigener Datenschutzerklärung.',
      ],
      after: [
        'Zweck: Beantwortung Ihrer Anfrage und ggf. Erstellung eines Angebots oder Vertrags. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Anfragen speichern wir bis zu 2 Jahre, sofern keine gesetzlichen Aufbewahrungspflichten (z. B. für Rechnungen) eine längere Speicherung erfordern.',
      ],
    },
    {
      title: '4. Cookies und Einwilligung',
      paragraphs: [
        'Ihre Cookie-Entscheidung speichern wir im lokalen Speicher Ihres Browsers (technisch erforderlich, § 25 Abs. 2 TDDDG / Art. 6 Abs. 1 lit. f DSGVO). Alle anderen Cookies und ähnlichen Technologien setzen wir nur mit Ihrer Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können Ihre Entscheidung jederzeit ändern, indem Sie die Website-Daten in Ihrem Browser löschen; der Hinweis erscheint dann erneut.',
        'Werbe- oder Remarketing-Cookies verwenden wir nicht.',
      ],
    },
    {
      title: '5. Google Analytics (nur mit Einwilligung)',
      paragraphs: [
        'Wenn Sie Cookies akzeptieren, nutzen wir Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics hilft uns zu verstehen, wie Besucher unsere Website nutzen (aufgerufene Seiten, Verweildauer, Herkunft der Besucher, Gerät und Browser, ungefährer Standort auf Länder-/Stadtebene). IP-Adressen werden in Google Analytics 4 nicht gespeichert.',
        'Rechtsgrundlage: Ihre Einwilligung, Art. 6 Abs. 1 lit. a DSGVO. Eine Übermittlung an Google LLC in den USA ist möglich; Google ist nach dem EU-U.S. Data Privacy Framework zertifiziert (Angemessenheitsbeschluss der EU-Kommission). Die Daten werden bis zu 14 Monate gespeichert. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.',
      ],
    },
    {
      title: '6. Schriftarten und Bilder',
      paragraphs: ['Schriftarten werden lokal von unserem eigenen Server geladen – es besteht keine Verbindung zu Google Fonts. Auch Bilder werden über unseren eigenen Server ausgeliefert.'],
    },
    {
      title: '7. Ihre Rechte',
      paragraphs: ['Nach der DSGVO haben Sie das Recht auf:'],
      list: [
        'Auskunft über Ihre gespeicherten Daten (Art. 15)',
        'Berichtigung unrichtiger Daten (Art. 16)',
        'Löschung (Art. 17)',
        'Einschränkung der Verarbeitung (Art. 18)',
        'Datenübertragbarkeit (Art. 20)',
        '<strong>Widerspruch</strong> gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21)',
        'Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3)',
        'Beschwerde bei einer Aufsichtsbehörde (Art. 77) – für uns zuständig ist der Präsident des polnischen Amtes für den Schutz personenbezogener Daten (UODO), ul. Stawki 2, 00-193 Warschau, <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">uodo.gov.pl</a>. Sie können sich auch an die Aufsichtsbehörde Ihres Landes wenden.',
      ],
      after: ['Zur Ausübung Ihrer Rechte genügt eine E-Mail an <a href="mailto:contact@buildwebs.eu">contact@buildwebs.eu</a>.'],
    },
    {
      title: '8. Datensicherheit',
      paragraphs: ['Diese Website nutzt TLS/HTTPS-Verschlüsselung. Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten.'],
    },
    {
      title: '9. Änderungen',
      paragraphs: ['Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder die Rechtslage ändert. Die aktuelle Fassung finden Sie stets auf dieser Seite.'],
    },
  ],
}

const byLocale: Record<Locale, PrivacyContent> = { en, de }

export function getPrivacy(lang: Locale) {
  return byLocale[lang]
}
