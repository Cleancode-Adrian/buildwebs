'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { site } from '@/lib/site'
import { localePath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/lib/dictionaries'

type Props = { lang: Locale; t: Dictionary['contact']; headingLevel?: 'h1' | 'h2' }

export default function Contact({ lang, t, headingLevel = 'h2' }: Props) {
  const Heading = headingLevel
  const SubHeading = headingLevel === 'h1' ? 'h2' : 'h3'
  const formRef = useRef<HTMLFormElement>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    privacyAccepted: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    const name = target.name

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Sent by our own API route (app/api/contact) through the studio's SMTP mailbox
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang, website: honeypotRef.current?.value ?? '' }),
      })
      if (!res.ok) throw new Error(`Contact API responded ${res.status}`)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '', privacyAccepted: false })

    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: HiMail,
      title: t.emailLabel,
      content: site.email,
      link: `mailto:${site.email}`,
    },
    {
      icon: FaWhatsapp,
      title: t.whatsappLabel,
      content: t.whatsappText,
      link: site.whatsapp,
    },
    {
      icon: HiLocationMarker,
      title: t.locationLabel,
      content: t.location,
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-bg relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-turquoise/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading className="text-4xl md:text-6xl font-bold mb-6">
            {t.titleBefore} <span className="gradient-text">{t.titleHighlight}</span>
          </Heading>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric-blue-light focus:ring-2 focus:ring-electric-blue-light/20 transition-colors"
                  placeholder={t.namePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric-blue-light focus:ring-2 focus:ring-electric-blue-light/20 transition-colors"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.company}
                </label>
                <input
                  type="text"
                  id="company"
                  autoComplete="organization"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric-blue-light focus:ring-2 focus:ring-electric-blue-light/20 transition-colors"
                  placeholder={t.companyPlaceholder}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors resize-none"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              {/* Honeypot — hidden from people, filled only by bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input ref={honeypotRef} type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyAccepted"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 bg-dark-card border-2 border-gray-700 rounded text-electric-blue-light focus:ring-electric-blue focus:ring-2"
                />
                <label htmlFor="privacyAccepted" className="text-sm text-gray-200 leading-relaxed">
                  {t.consentBefore}{' '}
                  <a
                    href={localePath(lang, '/privacy')}
                    target="_blank"
                    className="text-electric-blue-light hover:text-neon-turquoise underline font-semibold"
                  >
                    {t.consentLink}
                  </a>{' '}
                  {t.consentAfter}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.privacyAccepted}
                className={`w-full btn-primary text-lg ${
                  (isSubmitting || !formData.privacyAccepted) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? t.sending : t.send}
              </button>

              {/* Status Messages — live regions stay in the DOM so screen readers announce changes (WCAG 4.1.3) */}
              <div role="status" aria-live="polite">
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-300 font-semibold">
                    <HiCheckCircle className="text-2xl flex-shrink-0" aria-hidden="true" />
                    <span>{t.success}</span>
                  </div>
                )}
              </div>
              <div role="alert">
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-300 font-semibold">
                    <HiXCircle className="text-2xl flex-shrink-0" aria-hidden="true" />
                    <span>{t.error}</span>
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
              <SubHeading className="text-2xl font-bold mb-6">{t.infoTitle}</SubHeading>
              <p className="text-gray-400 mb-8 leading-relaxed">{t.infoText}</p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-2xl text-electric-blue-light" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-electric-blue-light transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-white">{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {site.bookingUrl && (
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center mt-8"
                >
                  {t.bookCall}
                </a>
              )}
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-8 rounded-2xl border border-electric-blue/30">
              <SubHeading className="text-xl font-bold mb-4">{t.whyTitle}</SubHeading>
              <ul className="space-y-3 text-gray-300">
                {t.why.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <HiCheckCircle className="text-neon-turquoise text-xl flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

