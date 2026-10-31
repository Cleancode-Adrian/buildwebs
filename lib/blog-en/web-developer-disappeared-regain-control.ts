import type { BlogPost } from '../blogTypes'

export const post: BlogPost = {
  slug: 'web-developer-disappeared-regain-control',
  title: 'Your Web Developer Has Disappeared? How to Regain Control of Your Website, Domain and Hosting',
  metaTitle: 'Web Developer Disappeared? Regain Control | BuildWebs',
  metaDescription: 'Your web developer has disappeared? A calm step-by-step guide to regaining control of your website, domain, hosting and WordPress admin.',
  author: 'BuildWebs Team',
  date: '2026-10-31',
  readTime: '9 min read',
  category: 'Website Rescue',
  image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=1200&h=600&fit=crop',
  content: `
      <p>The phone goes unanswered, emails stay unread, and the last invoice for "hosting and maintenance" went to someone you can no longer reach. For a small business this is unsettling precisely because the website still looks fine from the outside. Nobody knows who holds the keys.</p>

      <p>It is a situation we handle regularly in our website rescue work, and it is almost always solvable. This guide walks you through it calmly, from finding out who controls what to making sure it never happens again. It is practical guidance based on experience, not legal advice.</p>

      <h2>1. Don't panic: what can and cannot go wrong</h2>

      <p>A website does not stop working because its developer stops answering. The files sit on a server, the domain points to that server, and both carry on until somebody switches them off or a bill goes unpaid. Only three things can genuinely go wrong:</p>

      <ul>
        <li><strong>The domain expires.</strong> If the renewal is missed, the site and every email address on it go offline, and after a grace period anyone can register the name. This is the one real deadline, so find the renewal date first.</li>
        <li><strong>The hosting is cancelled or unpaid.</strong> The account is suspended, the site goes offline and, after a while, the files and the provider's backups may be deleted.</li>
        <li><strong>The site is neglected.</strong> No updates, no patches, no backups. Nothing breaks on day one, but the risk of a hack grows every month.</li>
      </ul>

      <p>What cannot happen: nobody can take away the content you wrote, the photos you own or the brand you have built. Worst case, the site can be rebuilt.</p>

      <h2>2. Make an inventory of every account your website depends on</h2>

      <p>Before contacting anyone, search your inbox for invoices and welcome emails and ask your accountant which companies have been charging you. A typical small-business website depends on most of these:</p>

      <ul>
        <li><strong>Domain registrar</strong> – where the name is registered and renewed.</li>
        <li><strong>DNS</strong> – often the registrar, sometimes a separate service such as Cloudflare.</li>
        <li><strong>Hosting</strong> – the server with the files and database, plus control panel, FTP/SFTP and database access.</li>
        <li><strong>WordPress admin</strong> – the login at /wp-admin and any additional administrator accounts.</li>
        <li><strong>Email mailboxes</strong> – with the web host, Google Workspace, Microsoft 365 or elsewhere.</li>
        <li><strong>Google Analytics, Search Console and Business Profile</strong> – frequently set up under the developer's Google account.</li>
        <li><strong>Payment provider</strong> – Stripe, Mollie, PayPal or similar, if you sell online.</li>
        <li><strong>Premium plugins, themes and SaaS tools</strong> – page builders, SEO and backup plugins, form and newsletter tools. Licences bought on the developer's account stop updating when their subscription lapses.</li>
      </ul>

      <p>For each item note who holds the account, which email address it is tied to, whether you have access and when it renews. The gaps are your to-do list.</p>

      <h2>3. Find out who owns your domain</h2>

      <p>The domain is the most important asset on the list. Whoever is listed as the registrant controls where the name points, and therefore your website and your email.</p>

      <h3>How to check the registrant</h3>

      <p>Run a WHOIS or RDAP lookup on your domain – each country's registry offers one: DENIC for .de, nic.at for .at, SWITCH for .ch, EURid for .eu and SIDN for .nl. Since GDPR most registries no longer show the registrant's name publicly, but you will still see the registrar, the name servers and often the expiry date. If the holder is hidden, the registrar or the registry's holder-verification procedure can tell you who it is.</p>

      <p>If the domain is already in your company's name and you simply lack the login, the registrar's support will reset the access once you prove you represent the company (trade-register extract, ID, matching invoice details).</p>

      <h3>If the domain is registered in the developer's name</h3>

      <p>This is common and not necessarily malicious: many freelancers register domains for clients out of convenience. It only becomes a problem when they are unreachable. Your options, in order:</p>

      <ol>
        <li><strong>Ask for a transfer.</strong> Send a short, friendly, dated request (email plus a letter) asking the developer to change the registrant to your company or to provide the authorisation code (Auth-Code, AuthInfo, EPP code or transfer token, depending on the registry). Many "disappeared" developers reappear when a clear, polite request lands.</li>
        <li><strong>Contact the registrar.</strong> Explain that the domain is used exclusively for your business and send evidence: your company name in the site content and imprint, invoices from the developer for "domain", trade-register or trademark documents. Registrars have procedures for such cases and can often initiate a change of holder.</li>
        <li><strong>Use the registry's dispute procedure.</strong> Country registries and EURid offer procedures for a holder who cannot be reached or refuses to transfer a domain that clearly belongs to someone else. These take time, so start early.</li>
      </ol>

      <p>Throughout, watch the expiry date: some registrars will let you pay the renewal yourself while the transfer is sorted out – ask.</p>

      <h2>4. Hosting: find the provider and get the account handed over</h2>

      <p>If you have no paperwork from the hosting company, the site itself will tell you where it lives. Look up the domain's A record – the IP address it points to – with any online DNS tool or the command <strong>nslookup yourdomain.com</strong>, then run an IP lookup on that address. The result names the hosting company or data-centre operator.</p>

      <p>Contact the provider's support with the domain name and explain the situation. Providers will not hand an account to someone who merely claims to own a website, so expect to prove it with company registration documents, an ID of the managing director and evidence that your business has been paying. If the account is in your company's name but the login email is the developer's, this is usually enough to have the contact details changed.</p>

      <p>If the account is in the developer's name and paid by them, the provider generally cannot give it to you. The practical route is then a migration: obtain a copy of the site – from the developer, an older backup or, if nothing else works, rebuilt from the live pages – set it up on hosting in your own name and point the domain at it. For a developer this is routine and typically done in a day or two.</p>

      <h2>5. Getting back into WordPress admin</h2>

      <p>The WordPress login is often the easiest lock to open, provided you control one of the pieces around it:</p>

      <ul>
        <li><strong>Password reset by email.</strong> Go to yourdomain.com/wp-login.php, click "Lost your password?" and try every email address you have used with the developer; if an administrator account exists with one of them, the reset link arrives.</li>
        <li><strong>Via the hosting panel.</strong> Many hosting panels include a WordPress toolkit with a one-click admin login, or let you add a new administrator without knowing any existing password.</li>
        <li><strong>Via the database.</strong> With database access (phpMyAdmin or similar), an administrator's password can be replaced or a new administrator created. It sounds technical, and it is, but for a developer it takes minutes.</li>
      </ul>

      <p>If none of these are available, everything hinges on hosting access (section 4) – which is exactly why the accounts matter more than the WordPress login itself.</p>

      <h2>6. Once you are in: secure, back up, document</h2>

      <p>Regaining access is not the finish line. Work through this list in order:</p>

      <ol>
        <li><strong>Take a full backup first</strong> – files and database – and store a copy outside the hosting account before you change anything.</li>
        <li><strong>Change every password</strong>: WordPress administrators, hosting panel, FTP/SFTP, database, mailboxes, registrar and DNS. Use a password manager owned by the business and switch on two-factor authentication wherever possible.</li>
        <li><strong>Review users.</strong> Remove administrator accounts you do not recognise, and check for extra FTP accounts, SSH keys and WordPress application passwords.</li>
        <li><strong>Rotate API keys and tokens</strong>: payment gateway, SMTP or transactional email, Google and social integrations, backup services.</li>
        <li><strong>Review plugins and themes.</strong> Note anything unfamiliar or unmaintained, and re-licence anything registered to the developer's account so updates continue.</li>
        <li><strong>Move analytics and search tools</strong> to your own Google account and remove the old access.</li>
        <li><strong>Update registrant and billing details</strong> on the domain and hosting so renewal notices reach you.</li>
        <li><strong>Document everything</strong> in one secured document: every service, login email, renewal date and who has access.</li>
      </ol>

      <h2>7. The legal and organisational side</h2>

      <p>Most of these situations start with a contract that never said who owns what – or with no written contract at all. The principle is simple: the business owns domain, hosting and content, and the developer is a technical contact who can be swapped out at any time. For future agreements, put the following in writing:</p>

      <ul>
        <li>Domain registered with your company as registrant and a company address as the account email.</li>
        <li>Hosting contracted and paid for in the company's name; the developer gets access, not ownership.</li>
        <li>Clear rights to the code, design, text and images, and third-party licences purchased in the company's name.</li>
        <li>An obligation to hand over all credentials and a complete backup within a defined number of days of the engagement ending.</li>
        <li>A named deputy or procedure in case the developer is unavailable.</li>
      </ul>

      <p>Again, this is practical guidance from day-to-day work, not legal advice; for an existing dispute over a domain, a lawyer who knows your country's rules will be worth the fee.</p>

      <h2>8. Prevention checklist</h2>

      <ul>
        <li>Register the domain yourself, in the company's name, with auto-renew on a company card.</li>
        <li>Use a company email address – never the developer's – as the contact on every service.</li>
        <li>Store all credentials in a business password manager and share access from there.</li>
        <li>Check once a quarter that you can actually log in to the registrar, hosting and WordPress.</li>
        <li>Keep an independent backup outside the hosting provider that you know how to restore.</li>
        <li>Insist on a written agreement with a handover clause, however small the project.</li>
      </ul>

      <h2>9. Need help taking your website back?</h2>

      <p>BuildWebs is a small, EU-based web studio, and taking over orphaned WordPress sites and WooCommerce stores is a regular part of our work. We help you regain access to domain, hosting and admin, audit and clean up what we find, migrate the site if that is the safer route, and then keep it updated and backed up under a <a href="/services/website-care">website care plan</a> from €49 per month. One-off rescues start at €290 at a fixed price agreed upfront, we usually begin within 24–48 hours, work remotely, and you deal directly with the developer doing the work.</p>

      <p>If your developer has gone quiet and you are not sure what you still control, <a href="/contact">get in touch</a> and describe the situation. We will tell you honestly what the next step is – even if it is simply a polite email you can send yourself.</p>
  `,
}
