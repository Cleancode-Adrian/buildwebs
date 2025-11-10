'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiMail, HiLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
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
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials:
      // 1. Go to https://www.emailjs.com/
      // 2. Create an account and get your Public Key
      // 3. Create an email service and template
      // 4. Replace the IDs below

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'contact@buildwebs.eu',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '', privacyAccepted: false })

      // For development/testing without EmailJS configured:
      // setSubmitStatus('success')
      // console.log('Form data:', formData)

    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      content: 'contact@buildwebs.eu',
      link: 'mailto:contact@buildwebs.eu',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+48 724 441 843',
      link: 'https://wa.me/48724441843',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      content: 'Rotterdam, Netherlands',
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-bg relative overflow-hidden">
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss your project. We'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric-blue-light focus:ring-2 focus:ring-electric-blue-light/20 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric-blue-light focus:ring-2 focus:ring-electric-blue-light/20 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric-blue-light focus:ring-2 focus:ring-electric-blue-light/20 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg text-white focus:outline-none focus:border-electric-blue transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
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
                  className="mt-1 w-5 h-5 bg-dark-card border-2 border-gray-700 rounded text-electric-blue focus:ring-electric-blue focus:ring-2"
                />
                <label htmlFor="privacyAccepted" className="text-sm text-gray-200 leading-relaxed">
                  I agree to the processing of my personal data in accordance with the{' '}
                  <a
                    href="/privacy"
                    target="_blank"
                    className="text-electric-blue-light hover:text-neon-turquoise underline font-semibold"
                  >
                    Privacy Policy
                  </a>.
                  I understand that my data will be used only to respond to my inquiry and for website analytics (Google Analytics). *
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-300 font-semibold"
                >
                  <HiCheckCircle className="text-2xl" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-300 font-semibold"
                >
                  <HiXCircle className="text-2xl" />
                  <span>Something went wrong. Please try again or email us directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-dark-card p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Have a question or want to discuss your project? We're here to help.
                Reach out through the form or use any of the contact methods below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-2xl text-electric-blue" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-electric-blue transition-colors"
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
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-electric-blue/10 to-neon-turquoise/10 p-8 rounded-2xl border border-electric-blue/30">
              <h4 className="text-xl font-bold mb-4">Why Choose BuildWebs?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-neon-turquoise text-xl flex-shrink-0 mt-0.5" />
                  <span>Fast turnaround times</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-neon-turquoise text-xl flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing, no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-neon-turquoise text-xl flex-shrink-0 mt-0.5" />
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-neon-turquoise text-xl flex-shrink-0 mt-0.5" />
                  <span>Proven track record across Europe</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

