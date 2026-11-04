# Plan treści bloga BuildWebs.eu (EN + DE)

Stan na 31.10.2026. Cel: zbudować widoczność w Google i wyszukiwarkach AI dla 4 usług
(strony firmowe, sklepy WooCommerce, opieka i ratowanie stron, dostępność WCAG/EAA)
na rynkach anglojęzycznych (NL, BE, IE, Skandynawia) i niemieckojęzycznych (DE, AT, CH).

Każdy wpis powstaje w dwóch wersjach: angielskiej (`/blog/...`) i niemieckiej (`/de/blog/...`).
Wersja niemiecka to adaptacja na rynek DACH (BFSG zamiast EAA, Google Unternehmensprofil,
niemieckie katalogi, ceny w formacie 1.500 €), nie tłumaczenie słowo w słowo.

## Zasady dla każdego wpisu

- 1 200–1 800 słów, nagłówki H2/H3 z naturalnymi frazami wyszukiwania, lista albo checklista do zabrania.
- **Zero wymyślonych statystyk, wyników klientów i nazw klientów.** Doświadczenie opisujemy ogólnie
  („problem, który najczęściej widzimy w audytach”). Liczby tylko powszechnie znane i przypisane do źródła.
- O BuildWebs tylko prawda: małe studio z Polski (UE), WordPress i WooCommerce, pakiety opieki od 49 €/mies.,
  naprawy od 290 €, audyt WCAG od 100 €, darmowy mini-check EAA, zdalnie, stałe ceny. Bez Next.js/React/Laravel.
- 2–3 linki wewnętrzne do podstron usług, 1 CTA na końcu. Żadnych obietnic „#1 w Google”.
- Meta title ≤ 60 znaków, meta description ≤ 155 znaków z główną frazą.
- Wpisy poniżej 600 słów dostają automatycznie `noindex` i nie trafiają do listy ani sitemap.

## Jak dodać wpis (technicznie)

1. Utwórz `lib/blog-en/<id>.ts` i `lib/blog-de/<id>.ts` (ten sam `<id>` = angielski slug).
   Oba eksportują `post: BlogPost` (typ w `lib/blogTypes.ts`); niemiecki ma własny `slug`.
2. Zarejestruj wpis w `lib/blogData.en.ts` i `lib/blogData.de.ts` pod tym samym kluczem `<id>`.
3. Reszta dzieje się sama: lista bloga, sitemap, hreflang EN↔DE, przełącznik języka, schema BlogPosting.
4. Obrazek: `images.unsplash.com` (dozwolona domena) albo własny plik w `public/`.

Priorytety: **P1** = pierwsze 3 miesiące (2 wpisy/mies.), **P2** = miesiące 4–6, **P3** = później.
Status: ✅ opublikowany, ✍️ w trakcie, ☐ do napisania.

---

## A. Opieka, naprawa i ratowanie stron → `/services/website-care`

Najszybsze zapytania do zamknięcia: ktoś ma problem *teraz* i szuka rozwiązania. Najwyższy priorytet.

| # | Status | EN tytuł roboczy | DE tytuł roboczy | Fraza EN / DE | Prio |
|---|---|---|---|---|---|
| A1 | ✍️ | The 10 most common WordPress problems we find in website audits | Die 10 häufigsten WordPress-Probleme aus unseren Website-Audits | wordpress problems / WordPress Probleme | P1 |
| A2 | ✍️ | Your web developer disappeared? How to regain control of your website | Webentwickler nicht erreichbar: So bekommen Sie Ihre Webseite zurück | developer disappeared website / Webdesigner nicht erreichbar | P1 |
| A3 | ☐ | WordPress site hacked: step-by-step recovery (and how to stop it happening again) | WordPress gehackt: Schritt-für-Schritt-Anleitung zur Wiederherstellung | wordpress hacked what to do / WordPress gehackt was tun | P1 |
| A4 | ☐ | How much does WordPress maintenance cost in Europe? What a care plan should include | Was kostet WordPress-Wartung? Was ein Wartungsvertrag enthalten sollte | wordpress maintenance cost / WordPress Wartung Kosten | P1 |
| A5 | ☐ | WordPress backups: what “we have backups” should actually mean | WordPress-Backups: Was „wir haben Backups“ wirklich bedeuten sollte | wordpress backup best practices / WordPress Backup | P2 |
| A6 | ☐ | Contact form emails landing in spam? SPF, DKIM and DMARC explained for business owners | Kontaktformular-Mails landen im Spam: SPF, DKIM und DMARC einfach erklärt | contact form emails spam / Kontaktformular Spam | P2 |
| A7 | ☐ | Too many plugins: how to audit and cut your WordPress plugin list | Zu viele Plugins: WordPress-Plugins prüfen und ausmisten | too many wordpress plugins / WordPress Plugins reduzieren | P2 |
| A8 | ☐ | Moving your website to a new host or domain without losing Google rankings | Website-Umzug ohne Ranking-Verlust: Hosting- und Domainwechsel richtig planen | website migration seo checklist / Website umziehen SEO | P2 |
| A9 | ☐ | Outdated PHP version: why it matters and how to update WordPress safely | Veraltete PHP-Version: Warum das wichtig ist und wie Sie sicher aktualisieren | wordpress php version update / PHP Version WordPress aktualisieren | P3 |
| A10 | ☐ | Cheap shared hosting vs managed WordPress hosting: what small businesses actually need | Günstiges Shared Hosting oder Managed WordPress Hosting? | wordpress hosting small business / WordPress Hosting Vergleich | P3 |
| A11 | ☐ | Who owns your website? Domain, hosting and code — a checklist before you sign | Wem gehört Ihre Webseite? Domain, Hosting und Code vor Vertragsabschluss klären | website ownership domain hosting / Domain gehört Agentur | P2 |
| A12 | ☐ | Uptime monitoring for small businesses: how to know your site is down before your customers do | Uptime-Monitoring: Erfahren Sie vor Ihren Kunden, wenn die Webseite ausfällt | website uptime monitoring / Website Monitoring | P3 |

## B. Sklepy WooCommerce → `/services/woocommerce-stores`

| # | Status | EN tytuł roboczy | DE tytuł roboczy | Fraza EN / DE | Prio |
|---|---|---|---|---|---|
| B1 | ☐ | WooCommerce vs Shopify for EU stores: fees, VAT, ownership and the real total cost | WooCommerce oder Shopify? Gebühren, Umsatzsteuer und Gesamtkosten im Vergleich | woocommerce vs shopify / WooCommerce oder Shopify | P1 |
| B2 | ☐ | EU VAT (OSS) in WooCommerce: how to set it up correctly | EU-Umsatzsteuer (OSS) in WooCommerce richtig einrichten | woocommerce eu vat oss / WooCommerce OSS Umsatzsteuer | P2 |
| B3 | ☐ | Payment methods European customers expect: iDEAL, Bancontact, Klarna, SEPA, Twint | Zahlungsarten im Onlineshop: Was Kunden in DE, AT und CH erwarten | payment methods europe online store / Zahlungsarten Onlineshop | P1 |
| B4 | ☐ | WooCommerce checkout optimisation: fewer abandoned carts without plugins overload | WooCommerce-Checkout optimieren: weniger Kaufabbrüche | woocommerce checkout optimization / Checkout optimieren | P2 |
| B5 | ☐ | Migrating from Shopify or Wix to WooCommerce: products, customers, orders, redirects | Von Shopify oder Wix zu WooCommerce wechseln: Produkte, Kunden, Weiterleitungen | shopify to woocommerce migration / Shopify zu WooCommerce | P2 |
| B6 | ☐ | WooCommerce speed: caching without breaking cart and checkout | WooCommerce schneller machen: Caching, ohne Warenkorb und Checkout zu zerstören | woocommerce slow / WooCommerce langsam | P2 |
| B7 | ☐ | Product pages that sell: structure, photos, variations and product schema | Produktseiten, die verkaufen: Aufbau, Fotos, Varianten und Produkt-Schema | woocommerce product page / Produktseite optimieren | P3 |
| B8 | ☐ | Shipping integrations for EU stores: DHL, DPD, GLS, PostNL and Sendcloud | Versand-Schnittstellen: DHL, DPD, GLS und Sendcloud in WooCommerce | woocommerce shipping integration / WooCommerce Versand DHL | P3 |
| B9 | ☐ | Legal must-haves for an EU online store and how to implement them technically | Rechtliche Pflichten im Onlineshop (AGB, Widerruf, Button-Lösung) technisch umsetzen | online store legal requirements eu / Onlineshop rechtssicher | P2 |
| B10 | ☐ | B2B with WooCommerce: net prices, price lists and VAT-ID validation | B2B-Shop mit WooCommerce: Nettopreise, Preislisten, USt-ID-Prüfung | woocommerce b2b / WooCommerce B2B | P3 |

## C. Dostępność WCAG / EAA / BFSG → `/services/web-accessibility` i landing EAA

Najmocniejszy wyróżnik: termin ustawowy, mało konkurencji wśród małych studiów.

| # | Status | EN tytuł roboczy | DE tytuł roboczy | Fraza EN / DE | Prio |
|---|---|---|---|---|---|
| C1 | ✍️ | The accessibility errors that most often fail online stores under the EAA | Barrierefreiheit im Onlineshop: Die häufigsten Fehler nach dem BFSG | eaa online store accessibility / BFSG Onlineshop Fehler | P1 |
| C2 | ☐ | European Accessibility Act checklist for online stores (complete, section by section) | BFSG-Checkliste für Onlineshops: Abschnitt für Abschnitt | european accessibility act checklist / BFSG Checkliste | P1 |
| C3 | ☐ | Does the EAA apply to my business? The micro-enterprise exemption explained | Gilt das BFSG für mein Unternehmen? Die Kleinstunternehmer-Ausnahme erklärt | does eaa apply to my business / BFSG Kleinstunternehmen Ausnahme | P1 |
| C4 | ☐ | Colour contrast: the most common WCAG error and how to fix it on your site | Farbkontrast: Der häufigste WCAG-Fehler und wie Sie ihn beheben | color contrast wcag / Farbkontrast WCAG | P2 |
| C5 | ☐ | Accessibility overlays: why a widget does not make your website compliant | Overlay-Tools für Barrierefreiheit: Warum ein Widget nicht reicht | accessibility overlay compliance / Barrierefreiheit Overlay | P2 |
| C6 | ☐ | How to write an accessibility statement (with a template structure) | Barrierefreiheitserklärung schreiben: Aufbau und Inhalte | accessibility statement template / Barrierefreiheitserklärung Muster | P2 |
| C7 | ☐ | Test your website with a keyboard in 10 minutes | Webseite mit der Tastatur testen: In 10 Minuten zum ersten Ergebnis | keyboard accessibility test / Barrierefreiheit testen Tastatur | P3 |
| C8 | ☐ | Accessible forms and checkout: labels, error messages, autocomplete | Barrierefreie Formulare und Checkout: Labels, Fehlermeldungen, Autocomplete | accessible checkout / barrierefreier Checkout | P3 |

## D. Strony firmowe, szybkość, SEO, RODO → `/services/business-websites`

| # | Status | EN tytuł roboczy | DE tytuł roboczy | Fraza EN / DE | Prio |
|---|---|---|---|---|---|
| D1 | ✅ | How to choose a web design agency (NL) | Webdesign-Agentur finden: Worauf Unternehmen achten sollten | web design agency / Webdesign-Agentur finden | – |
| D2 | ✅ | Why fast websites win | Warum schnelle Webseiten gewinnen | website speed / Ladezeit verbessern | – |
| D3 | ✅ | SEO checklist | SEO-Checkliste für kleine Unternehmen | seo checklist / SEO Checkliste | – |
| D4 | ✅ | WordPress vs Laravel | WordPress oder Laravel | wordpress vs laravel / WordPress oder Laravel | – |
| D5 | ✅ | Local SEO (NL) | Lokales SEO: So werden Sie in Ihrer Stadt gefunden | local seo / Lokales SEO | – |
| D6 | ☐ | How much does a business website cost in Europe in 2026? | Was kostet eine Firmenwebseite 2026? Realistische Preise und was sie beeinflusst | business website cost / Webseite erstellen lassen Kosten | P1 |
| D7 | ☐ | Website builder (Wix, Squarespace) vs WordPress for a small business | Baukasten (Wix, Jimdo) oder WordPress? Was sich für kleine Unternehmen lohnt | wix vs wordpress small business / Baukasten oder WordPress | P2 |
| D8 | ☐ | Core Web Vitals explained for business owners: LCP, INP, CLS | Core Web Vitals einfach erklärt: LCP, INP und CLS | core web vitals explained / Core Web Vitals erklärt | P2 |
| D9 | ☐ | A multilingual website done right: structure, hreflang, translation workflow | Mehrsprachige Webseite richtig aufsetzen: Struktur, hreflang, Übersetzung | multilingual website seo / mehrsprachige Webseite | P2 |
| D10 | ☐ | GDPR-compliant website checklist: cookies, fonts, analytics, forms | DSGVO-konforme Webseite: Checkliste für Cookies, Schriftarten, Analytics, Formulare | gdpr website checklist / DSGVO Webseite Checkliste | P1 |
| D11 | ☐ | Google Fonts and GDPR: why and how to self-host fonts | Google Fonts lokal einbinden: DSGVO-Risiko vermeiden | google fonts gdpr / Google Fonts DSGVO lokal | P2 |
| D12 | ☐ | Google Business Profile setup guide for service businesses | Google Unternehmensprofil einrichten: Anleitung für Dienstleister | google business profile setup / Google Unternehmensprofil einrichten | P3 |
| D13 | ☐ | Redesign or fix? When a website needs a relaunch and when it doesn't | Relaunch oder Optimierung? Wann eine neue Webseite wirklich nötig ist | website redesign when / Website Relaunch wann | P3 |
| D14 | ☐ | Structured data (schema.org) for small-business websites | Strukturierte Daten (schema.org) für kleine Unternehmen | schema markup small business / strukturierte Daten Webseite | P3 |
| D15 | ☐ | Website images: WebP/AVIF, sizes, lazy loading and alt text | Bilder für die Webseite optimieren: WebP/AVIF, Größen, Alt-Texte | optimize images website / Bilder Webseite optimieren | P3 |

Razem: 45 tematów (5 gotowych, 3 w trakcie, 37 do napisania).

## Harmonogram na pierwsze 6 miesięcy (2 wpisy/mies., każdy EN + DE)

| Miesiąc | Wpisy |
|---|---|
| 1 | A3 (strona zhakowana), C2 (checklista EAA/BFSG) |
| 2 | B1 (WooCommerce vs Shopify), D10 (checklista RODO) |
| 3 | A4 (koszt opieki), C3 (czy EAA mnie dotyczy) |
| 4 | D6 (koszt strony firmowej), B3 (metody płatności) |
| 5 | A11 (kto jest właścicielem strony), C4 (kontrast) |
| 6 | A6 (maile w spamie), B5 (migracja z Shopify) |

Potem P2, następnie P3. Kolejność można zmieniać pod to, o co pytają klienci.

## Case studies (gdy będą prawdziwe dane)

Osobna kategoria, dopiero gdy klient zgodzi się na publikację i mamy liczby z Analytics / WooCommerce:
„Sklep X: 1 000+ zamówień w pierwszym roku”, „Landing Y: konwersja 40–58 %” itp.
Do tego czasu wyniki pokazujemy tylko zbiorczo w sekcji „Real Results” na stronie głównej.

## Dystrybucja

- Każdy wpis: post na LinkedIn (EN i DE) + krótkie podsumowanie na profilu Google.
- Wpisy z serii C (dostępność) warto zgłaszać do newsletterów i grup e-commerce w DACH; temat ma termin ustawowy.
- Po 3 miesiącach sprawdzić w Search Console, które frazy łapią wyświetlenia bez kliknięć, i poprawić tytuły/opisy.
