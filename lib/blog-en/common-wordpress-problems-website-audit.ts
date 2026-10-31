import type { BlogPost } from '../blogTypes'

export const post: BlogPost = {
  slug: 'common-wordpress-problems-website-audit',
  title: 'The 10 Most Common WordPress Problems We Find When Auditing Small-Business Websites (and How to Fix Them)',
  metaTitle: '10 Common WordPress Problems and Fixes | BuildWebs',
  metaDescription: 'The 10 most common WordPress problems we find in small-business website audits – outdated plugins, missing backups, spam forms – and how to fix each one.',
  author: 'BuildWebs Team',
  date: '2026-10-31',
  readTime: '10 min read',
  category: 'Maintenance',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
  content: `
      <p>A large part of our work at BuildWebs is not building new websites but looking closely at existing ones. Owners get in touch because their WordPress site has become slow, a form has stopped working, or because nobody has touched the site since the person who built it moved on. Whatever the trigger, the same problems come up in audit after audit.</p>

      <p>Most of them are neither exotic nor expensive to fix. Below are the ten we see most often, how to recognise each one yourself, and what fixing it usually involves.</p>

      <h2>1. Outdated WordPress core, plugins and PHP version</h2>

      <p>The most common problem we find, and the most serious. Many WordPress, plugin and PHP updates close publicly documented security holes, and automated bots scan for sites that have not installed them.</p>

      <p><strong>How to recognise it:</strong> Log in and look at the update counter in the admin bar. A dozen pending plugin updates or a WordPress version several releases behind are clear warning signs. The PHP version is shown under Tools → Site Health; 7.4 or 8.0 means the server runs a version that no longer receives security fixes.</p>

      <p><strong>How to fix it:</strong> Take a full backup first (see problem 2), then update plugins, theme and core – ideally on a staging copy first. Ask your host to switch to a supported PHP 8.x version. Then make it routine: monthly updates, or a <a href="/services/website-care">website care plan</a> that handles them for you.</p>

      <h2>2. No working backups – or backups stored on the same server</h2>

      <p>Almost every owner we speak to believes they have backups. When we check, the backups stopped running months ago, sit in the same hosting account as the site, or have never been restored even once. An untested backup is a hope, not a backup.</p>

      <p><strong>How to recognise it:</strong> Where is your most recent backup right now, and when was it created? If you cannot answer within a minute, you do not have a working backup.</p>

      <p><strong>How to fix it:</strong> Set up automatic daily backups of files and database to a separate location – Google Drive, Dropbox, an S3 bucket or your host's off-site service. Keep several weeks of history and do a test restore once or twice a year.</p>

      <h2>3. Abandoned plugins, plugin bloat and heavy page builders</h2>

      <p>Sites accumulate plugins that were installed for one task and never removed, plugins that do the same thing twice, and plugins whose developers stopped maintaining them. Each adds code that loads on every page, and abandoned ones often carry unpatched security issues.</p>

      <p><strong>How to recognise it:</strong> Look for plugins that are deactivated but still installed, plugins last updated more than two years ago, and plugins marked as closed in the WordPress directory.</p>

      <p><strong>How to fix it:</strong> Remove anything not actively needed – deactivating is not enough, as the code stays on the server – and replace abandoned plugins with maintained alternatives. If a page builder is the main cause of slow loading, a rebuild on a leaner theme is sometimes the honest answer; for a <a href="/services/business-websites">small business website</a> this is often less work than people expect.</p>

      <h2>4. No caching and slow shared hosting</h2>

      <p>WordPress builds every page dynamically, running PHP code and database queries for each visitor. Without caching, a site on inexpensive shared hosting can take several seconds to show its first content.</p>

      <p><strong>How to recognise it:</strong> Run your homepage through Google PageSpeed Insights and look at the server response time. Well above a second points to caching or hosting.</p>

      <p><strong>How to fix it:</strong> Install and configure a caching plugin, compress and resize images, and make sure the server runs a current PHP version. If the site is still slow, the hosting itself is the bottleneck, and a move to a better host is usually inexpensive.</p>

      <h2>5. Weak admin security: "admin" usernames, no 2FA, no login limits</h2>

      <p>Most WordPress hacks are not sophisticated: automated scripts try thousands of username and password combinations against the login page. A site that still uses "admin" as its username, with no limit on failed attempts and no second factor, makes that job easy.</p>

      <p><strong>How to recognise it:</strong> Check Users in the dashboard. Is there an account called "admin"? How many administrators are there, and do you know all of them? Type a wrong password five times – if nothing stops you, there is no login limit.</p>

      <p><strong>How to fix it:</strong> Rename or replace the "admin" account, give every person their own account with the lowest role they need, and remove unused accounts. Add a plugin that limits login attempts and enable two-factor authentication for all administrators. None of this takes more than an hour.</p>

      <h2>6. Broken or spam-flooded contact forms – and form emails landing in spam</h2>

      <p>This one is invisible: the website looks fine, and the enquiry never arrives. We regularly find forms that silently stopped sending after an update, forms that deliver hundreds of spam messages a week, and forms that work perfectly – except that every message lands in the owner's junk folder.</p>

      <p><strong>How to recognise it:</strong> Send yourself a test message from every form and check whether it arrives, and where. Messages arriving in spam almost always point to missing email authentication.</p>

      <p><strong>How to fix it:</strong> Send form emails through an SMTP plugin connected to your own mailbox or a transactional email service instead of the server's PHP mail function, and make sure your domain has correct SPF, DKIM and DMARC records in its DNS – they prove to receiving mail servers that the message is really from you. Add a honeypot field or a privacy-friendly captcha against spam.</p>

      <h2>7. Mixed content and SSL misconfiguration</h2>

      <p>Having an SSL certificate is not the same as using it correctly, and the gaps are easy to miss because the homepage usually looks fine.</p>

      <p><strong>How to recognise it:</strong> Open a few pages and look at the address bar. A warning triangle or "Not secure" instead of a padlock means some images, scripts or stylesheets still load over plain HTTP ("mixed content"). Type your domain with http:// in front: if the page loads without switching to https://, the redirect is missing.</p>

      <p><strong>How to fix it:</strong> Set the WordPress address and site address to https://, run a search-and-replace on the database to update old http:// references, and add a permanent HTTP-to-HTTPS redirect at server level. Finally, make sure the certificate renews automatically.</p>

      <h2>8. Missing or non-compliant cookie consent and privacy setup</h2>

      <p>Data protection is where small-business websites are most often out of step with the law. Typical findings: tracking scripts that load before the visitor has agreed to anything, a banner with no real decline option, fonts loaded from Google's servers, and embedded videos or maps that set cookies on page load.</p>

      <p><strong>How to recognise it:</strong> Open your site in a private browser window and, before clicking anything, check the cookies and network requests in the browser's developer tools. If Google Analytics, Facebook Pixel or similar are already active, the banner is not doing its job.</p>

      <p><strong>How to fix it:</strong> Use a consent plugin that genuinely blocks scripts until consent is given, host fonts locally, load videos and maps only after a click, and update the privacy policy and legal notice. In Germany, Google Fonts loaded from Google's servers alone have already led to court rulings and warning letters.</p>

      <h2>9. Broken links, redirect chains and leftover staging URLs after a migration</h2>

      <p>Every move to a new host, domain or design leaves traces if it is not cleaned up: internal links to pages that no longer exist, redirects that hop through two or three old addresses, and, surprisingly often, images and links that still point to a staging address such as dev.example.com.</p>

      <p><strong>How to recognise it:</strong> A free crawler such as Screaming Frog or an online broken-link checker lists 404 errors and redirect chains within minutes. Search Google for your staging domain to see whether a test version has been indexed.</p>

      <p><strong>How to fix it:</strong> Fix or remove broken internal links, replace redirect chains with a single direct redirect, and run a search-and-replace to update leftover staging URLs. If a staging site is indexed, password-protect it or set a server-side noindex and request removal in Search Console.</p>

      <h2>10. The owner has no access to the domain, hosting or admin area</h2>

      <p>Many owners discover during an audit that the domain is registered in a former developer's name, the hosting invoice goes to an agency that no longer exists, or the only administrator account belongs to someone they cannot reach. If the domain lapses, a business can lose its web address and its email overnight.</p>

      <p><strong>How to recognise it:</strong> Can you log in to the domain registrar, the hosting control panel and WordPress yourself, right now, with credentials in your own name? Do you receive the renewal invoices? If any answer is no, your website depends on someone else's goodwill.</p>

      <p><strong>How to fix it:</strong> Have the domain transferred to a registrar account in your company's name and the hosting moved to your own account. Create your own administrator account and keep all credentials in a password manager. Any developer or agency – including us – should use separate access you can revoke at any time.</p>

      <h2>What to check this week</h2>

      <p>You do not need to fix everything at once. If you spend an hour on your website this week, start here:</p>

      <ol>
        <li>Note the pending updates and the PHP version under Site Health.</li>
        <li>Find your most recent backup and check its date and location.</li>
        <li>Send a test message through every contact form and see where it arrives.</li>
        <li>Open your site with http:// and on a few subpages, watching the padlock.</li>
        <li>In a private window, check which cookies are set before you click "Accept".</li>
        <li>Confirm that you personally hold the logins for domain, hosting and WordPress.</li>
        <li>Check Users for an "admin" account and for people who should no longer have access.</li>
      </ol>

      <p>Write down what you find – it tells you what to ask for, and whether it was done.</p>

      <h2>Would you like a second pair of eyes?</h2>

      <p>BuildWebs is a small web studio based in Poland, working remotely with small businesses across the EU. We build WordPress websites and WooCommerce stores, and we repair and maintain existing ones: one-off fixes and hack clean-ups start at €290, and our care plans from €49 per month cover updates, backups and monitoring. You always work directly with the developer, at a fixed price agreed in advance.</p>

      <p>If you would like us to take a first look at your site, <a href="/#contact">get in touch</a>. We will tell you honestly what we find, what is urgent and what is not, and give you a fixed quote for putting it right.</p>
    `,
}
