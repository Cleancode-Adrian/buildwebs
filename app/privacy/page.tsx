import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | BuildWebs.eu',
  description: 'Privacy policy for BuildWebs.eu - Learn how we collect, use, and protect your personal data. GDPR compliant.',
  keywords: 'privacy policy, GDPR, data protection, cookies, personal data',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">Privacy Policy</span>
        </h1>

        <div className="text-gray-400 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* English Version */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              BuildWebs.eu ("we", "our", "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website
              or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p className="mb-3">When you contact us through our website, we collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contact Information:</strong> Name, email address, company name (optional)</li>
              <li><strong>Communication Data:</strong> Your message content and any attachments</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information (via Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="mb-3">We use your personal data to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services (only if you requested it)</li>
              <li>Improve our website and services through analytics</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Google Analytics</h2>
            <p>
              We use <strong>Google Analytics</strong> to understand how visitors use our website. Google Analytics collects
              information anonymously and reports website trends without identifying individual visitors. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Pages visited and time spent on pages</li>
              <li>Traffic sources (how you found our website)</li>
              <li>Device and browser information</li>
              <li>Geographic location (country/city level only)</li>
            </ul>
            <p className="mt-3">
              <strong>We DO NOT use:</strong> advertising cookies, remarketing, or any tracking for advertising purposes.
            </p>
            <p className="mt-3">
              You can opt-out of Google Analytics by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-blue hover:text-neon-turquoise underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Legal Basis for Processing (GDPR)</h2>
            <p className="mb-3">Under GDPR, we process your data based on:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consent:</strong> When you submit a contact form (checkbox required)</li>
              <li><strong>Legitimate Interest:</strong> To analyze website traffic and improve our services</li>
              <li><strong>Contractual Necessity:</strong> To respond to your inquiries and provide services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Storage and Security</h2>
            <p>
              Your data is stored securely and retained only as long as necessary:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li><strong>Contact form data:</strong> Stored in our email system for up to 2 years</li>
              <li><strong>Analytics data:</strong> Stored by Google Analytics for 26 months (default)</li>
              <li><strong>Security:</strong> We use industry-standard security measures including HTTPS encryption</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights (GDPR)</h2>
            <p className="mb-3">Under GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Limit how we use your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Object:</strong> Object to data processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at:{' '}
              <a href="mailto:contact@buildwebs.eu" className="text-electric-blue hover:text-neon-turquoise">
                contact@buildwebs.eu
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies</h2>
            <p>
              We use minimal cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics cookies:</strong> Google Analytics (anonymous tracking only)</li>
            </ul>
            <p className="mt-3">
              We do NOT use advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Services</h2>
            <p className="mb-3">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> Website analytics (Google LLC, USA)</li>
              <li><strong>EmailJS:</strong> Contact form delivery service</li>
            </ul>
            <p className="mt-3">
              These services have their own privacy policies and may be located outside the EU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 16. We do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any significant changes
              by posting the new policy on this page with an updated "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p className="mb-3">
              If you have questions about this privacy policy or want to exercise your rights, contact us:
            </p>
            <div className="bg-dark-card p-6 rounded-lg border border-gray-800">
              <p><strong>BuildWebs.eu</strong></p>
              <p>Email: <a href="mailto:contact@buildwebs.eu" className="text-electric-blue hover:text-neon-turquoise">contact@buildwebs.eu</a></p>
              <p>Location: Rotterdam, Netherlands</p>
            </div>
          </section>

          <div className="mt-12 text-center">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

