import type { BlogPost } from '../blogTypes'

export const post: BlogPost = {
  slug: 'online-store-accessibility-errors-eaa',
  title: 'The accessibility errors that most often fail online stores under the European Accessibility Act – and how to test for them yourself in 15 minutes',
  metaTitle: 'Online Store Accessibility Errors (EAA) | BuildWebs',
  metaDescription: 'The 10 most common online store accessibility errors under the EAA, the WCAG rules behind them and how to test for them yourself in 15 minutes.',
  author: 'BuildWebs Team',
  date: '2026-10-31',
  readTime: '11 min read',
  category: 'Accessibility',
  image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=600&fit=crop',
  content: `
      <p>Since 28 June 2025 the European Accessibility Act has applied across the EU, and online stores are explicitly covered. Many shop owners have heard of it; far fewer know what a check of their store would actually find. The good news: the errors that fail stores are remarkably predictable, and most can be spotted with free tools in a quarter of an hour.</p>

      <p>This guide lists the ten errors we find most often in WooCommerce and other online stores – what each means in WCAG terms, how to check for it yourself and how it is usually fixed. One note first: we are web developers, not lawyers, and this article is not legal advice.</p>

      <h2>The European Accessibility Act in brief</h2>

      <p>Directive (EU) 2019/882 has applied since 28 June 2025 and is enforced through national law in each member state – in Germany through the Barrierefreiheitsstärkungsgesetz (BFSG). The key points for online stores:</p>

      <ul>
        <li><strong>E-commerce services are explicitly in scope</strong> – if you sell to consumers in the EU online, the law applies to that sales process.</li>
        <li><strong>Micro-enterprises providing services are exempt</strong> – fewer than 10 employees and an annual turnover or balance sheet total of no more than €2 million. Both conditions must be met.</li>
        <li><strong>The technical benchmark is EN 301 549</strong>, which in practice means WCAG 2.1 level AA. Testing against WCAG 2.2 AA also covers the newer criteria.</li>
        <li><strong>Penalties are set nationally</strong> and must be "effective, proportionate and dissuasive".</li>
        <li><strong>You must publish an accessibility statement</strong> explaining how your service meets the requirements.</li>
      </ul>

      <h2>1. Low colour contrast – the most common finding by far</h2>

      <p>Text or controls that are too light against their background. In almost every store we check this is the first finding, and it usually appears in the same places: grey helper text under form fields, placeholder text in search and checkout fields, prices or sale badges on coloured backgrounds, and thin, light-coloured buttons such as "Continue shopping".</p>

      <ul>
        <li><strong>WCAG:</strong> 1.4.3 Contrast (Minimum) requires a ratio of at least 4.5:1 for normal text and 3:1 for large text; 1.4.11 Non-text Contrast requires 3:1 for user interface components such as button borders and form field outlines.</li>
        <li><strong>How to spot it:</strong> Right-click a suspicious piece of text, choose "Inspect" and click the colour swatch next to the text colour: Chrome and Edge show the contrast ratio and whether it passes AA. WAVE and axe DevTools flag failing text automatically.</li>
        <li><strong>How it is fixed:</strong> Darken the text or the background in the theme settings or stylesheet. Often one grey value is used site-wide, so a single change fixes dozens of elements. Placeholder text should be darkened too – or, better, replaced with a visible label.</li>
      </ul>

      <h2>2. Checkout fields without labels and errors shown only in red</h2>

      <p>Many checkouts hide field labels to look cleaner and rely on placeholder text instead. Once the customer starts typing, the placeholder disappears and nothing tells a screen reader user which field is which. Mistakes are often marked only by a red border, with no message saying what went wrong.</p>

      <ul>
        <li><strong>WCAG:</strong> 3.3.2 Labels or Instructions, 1.3.1 Info and Relationships, 3.3.1 Error Identification and 1.4.1 Use of Colour.</li>
        <li><strong>How to spot it:</strong> Run WAVE on your checkout: missing labels appear as red icons. Then submit the form empty – could a colour-blind customer tell which fields failed and why?</li>
        <li><strong>How it is fixed:</strong> Show visible labels above each field (many themes simply hide them) and add a text error message linked to each failing field – not just a red outline.</li>
      </ul>

      <h2>3. Invisible focus and keyboard traps in menus and filters</h2>

      <p>Keyboard users move through a page with the Tab key and need to see where they are. Many themes remove the browser's focus outline for aesthetic reasons. Mega menus and filter panels add a second problem: once focus enters them, it sometimes cannot get out without a mouse.</p>

      <ul>
        <li><strong>WCAG:</strong> 2.4.7 Focus Visible and 2.1.2 No Keyboard Trap.</li>
        <li><strong>How to spot it:</strong> Put your mouse aside and press Tab repeatedly. Can you always see which element is highlighted? Can you open the main menu, move through the filters on a category page and get back out with Tab, Shift+Tab and Escape?</li>
        <li><strong>How it is fixed:</strong> Restore a clearly visible focus style (a 2 px outline in a contrasting colour is enough) and make sure Escape closes menus and filters and returns focus to the element that opened them.</li>
      </ul>

      <h2>4. Product variation selectors that only work with a mouse</h2>

      <p>Colour swatches and size buttons usually come from a "variation swatches" plugin. Many replace the standard dropdown with plain clickable boxes that cannot be reached by keyboard and have no name a screen reader can announce. The customer sees six colours but cannot choose one.</p>

      <ul>
        <li><strong>WCAG:</strong> 2.1.1 Keyboard and 4.1.2 Name, Role, Value.</li>
        <li><strong>How to spot it:</strong> On a variable product, Tab to the swatches. If focus skips them, or you cannot select one with Space or Enter, they fail. With NVDA (Windows, free) or VoiceOver (Mac) running, each option should be announced as something like "Blue, option 2 of 6".</li>
        <li><strong>How it is fixed:</strong> Use a swatch plugin that renders real buttons or radio inputs with labels, or keep the accessible standard dropdown and style it instead.</li>
      </ul>

      <h2>5. Product images without meaningful alt text</h2>

      <p>Alt text is what a screen reader reads instead of an image. Product photos are often uploaded with no alt text, with filenames like "IMG_4821.jpg", or with the same keyword in every image. None of these tells a blind customer what the product looks like.</p>

      <ul>
        <li><strong>WCAG:</strong> 1.1.1 Non-text Content.</li>
        <li><strong>How to spot it:</strong> WAVE marks images without alt text with a red icon; clicking the green icon next to other images shows their alt text. Lighthouse lists missing alt attributes too.</li>
        <li><strong>How it is fixed:</strong> Describe what matters for the purchase: "Navy wool coat, double-breasted, front view". Purely decorative images get an empty alt attribute so screen readers skip them. Alt text is edited once per image in the media library.</li>
      </ul>

      <h2>6. "Added to cart" and quantity changes that nobody hears</h2>

      <p>When a customer clicks "Add to cart" on a category page, most stores show a brief message and update the cart icon. A screen reader user hears nothing. The same goes for quantity changes in the cart, updated totals and recalculated shipping costs.</p>

      <ul>
        <li><strong>WCAG:</strong> 4.1.3 Status Messages.</li>
        <li><strong>How to spot it:</strong> With NVDA or VoiceOver running, add a product to the cart without leaving the page. If nothing is announced, the message is visual only.</li>
        <li><strong>How it is fixed:</strong> The confirmation message and cart count need an ARIA live region – an attribute that tells assistive technology to read updates aloud. In WooCommerce this is a short change in the theme.</li>
      </ul>

      <h2>7. A cookie banner that cannot be used without a mouse</h2>

      <p>The cookie banner is the first thing every visitor meets – and often the first barrier. Many banners cannot be reached by Tab, trap focus once it gets there, or cover the page so that keyboard users are operating a store they cannot see.</p>

      <ul>
        <li><strong>WCAG:</strong> 2.1.1 Keyboard, 2.4.3 Focus Order and 2.4.11 Focus Not Obscured (WCAG 2.2).</li>
        <li><strong>How to spot it:</strong> Open your store in a private window and try to accept or reject cookies using only Tab, Enter and Escape.</li>
        <li><strong>How it is fixed:</strong> Choose a consent plugin that moves focus into the banner on load, offers "Accept" and "Reject" as real buttons and returns focus to the page afterwards.</li>
      </ul>

      <h2>8. Visual-only CAPTCHA</h2>

      <p>An image CAPTCHA ("select all the pictures with traffic lights") before checkout, login or newsletter sign-up locks out blind and visually impaired customers completely.</p>

      <ul>
        <li><strong>WCAG:</strong> 1.1.1 Non-text Content requires an alternative; 3.3.8 Accessible Authentication (WCAG 2.2) restricts puzzles at login.</li>
        <li><strong>How to spot it:</strong> Go through your checkout, account registration and contact form and note every puzzle you have to solve.</li>
        <li><strong>How it is fixed:</strong> Use invisible spam protection (honeypot fields, server-side checks or a modern risk-based service with no puzzle), or at least offer an audio alternative.</li>
      </ul>

      <h2>9. Missing or wrong language attribute</h2>

      <p>The lang attribute on the HTML element tells browsers and screen readers which language the page is in. If it is missing, or says "en" while the store is in German, the screen reader uses the wrong pronunciation and the text becomes almost unintelligible. In multilingual stores it is often correct only for the main language.</p>

      <ul>
        <li><strong>WCAG:</strong> 3.1.1 Language of Page.</li>
        <li><strong>How to spot it:</strong> Lighthouse and axe DevTools both report a missing or invalid lang attribute; or view the page source and check the first line.</li>
        <li><strong>How it is fixed:</strong> Set the site language correctly in WordPress and make sure your translation plugin updates the attribute for each language version.</li>
      </ul>

      <h2>10. Touch targets that are too small</h2>

      <p>Tiny "+" and "−" quantity buttons, close icons on pop-ups and closely packed footer links are hard to hit on a phone, particularly for customers with tremor or reduced dexterity.</p>

      <ul>
        <li><strong>WCAG:</strong> 2.5.8 Target Size (Minimum) in WCAG 2.2 requires at least 24 × 24 CSS pixels, or equivalent spacing around the target.</li>
        <li><strong>How to spot it:</strong> Open the mobile view in your browser's DevTools and inspect the quantity buttons, icon buttons and inline links. Lighthouse also flags targets that are too small or too close together.</li>
        <li><strong>How it is fixed:</strong> Increase the padding on small buttons and space adjacent links apart; 44 × 44 px is a comfortable, widely used target size.</li>
      </ul>

      <h2>Why overlay widgets don't solve this</h2>

      <p>Accessibility overlays – the floating icon that opens a toolbar for font size, contrast and "screen reader mode" – are heavily marketed to shop owners as a one-line fix for the European Accessibility Act. They are not. The ten errors above – missing labels, unreachable swatches, missing alt text, unannounced status messages – are defects in your store's code. A script loaded on top cannot know what your product photo shows or what a form field is for. At best an overlay guesses; at worst it conflicts with the screen reader or magnifier the customer already uses.</p>

      <p>Nor does an overlay produce the accessibility statement the law requires, or change the fact that your store is judged against EN 301 549. The requirements are met by fixing the theme, checkout and content – not by adding another plugin.</p>

      <h2>The 15-minute self-test checklist</h2>

      <ol>
        <li><strong>Keyboard tour (5 minutes):</strong> Homepage, one category page, one product page, cart and checkout, using only Tab, Shift+Tab, Enter, Space and Escape. Note anything you cannot reach, cannot see or cannot leave – including the cookie banner.</li>
        <li><strong>WAVE on three pages (4 minutes):</strong> Run WAVE on the homepage, a product page and the checkout. Count red errors and contrast errors and review the product images' alt text.</li>
        <li><strong>Lighthouse accessibility audit (2 minutes):</strong> In Chrome DevTools, run Lighthouse with only "Accessibility" ticked on the product page. Look for findings on lang, contrast, labels and target size.</li>
        <li><strong>Contrast spot-check (2 minutes):</strong> Inspect your helper text, placeholders, price badges and your lightest button. Anything below 4.5:1 for text or 3:1 for borders and icons goes on the list.</li>
        <li><strong>Screen reader (2 minutes):</strong> Start NVDA or VoiceOver, choose a variation and add a product to the cart. Were the options and the confirmation announced?</li>
      </ol>

      <p>In our experience most stores end up with several items on the list – and the first two or three are usually quick to fix.</p>

      <h2>Not sure what you found? Get a free mini-check</h2>

      <p>If you would rather have someone else do the first pass, we offer a <a href="/european-accessibility-act-woocommerce">free accessibility mini-check for online stores</a>: we review your homepage, one product page and your checkout and send you the three most serious issues within two business days, no obligation.</p>

      <p>For the complete picture, our <a href="/services/web-accessibility">WCAG 2.2 AA accessibility audit</a> starts at €100. Because we build <a href="/services/woocommerce-stores">WooCommerce stores</a> ourselves, we implement the fixes directly in the theme and checkout rather than handing you a report, and we draft the accessibility statement for you to publish. Remote, at fixed prices.</p>
    `,
}
