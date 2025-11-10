'use client'

import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anna van der Berg',
      role: 'CEO, TechStart Rotterdam',
      location: 'Rotterdam, Netherlands',
      text: 'BuildWebs helped us relaunch our website in record time. The performance improvements were immediate, and we saw a 60% increase in organic traffic within just 3 months.',
      rating: 5,
    },
    {
      name: 'Marco Jansen',
      role: 'Marketing Director',
      location: 'Amsterdam, Netherlands',
      text: 'Their full-stack expertise is impressive. They built us a custom Laravel application that handles thousands of users daily. The code quality and documentation are exceptional.',
      rating: 5,
    },
    {
      name: 'Sophie Dubois',
      role: 'Founder, BoutiqueMode',
      location: 'Brussels, Belgium',
      text: 'Not only did they design a beautiful e-commerce site, but they also set up our entire marketing funnel. Our conversion rate increased by 48% and ROI tripled.',
      rating: 5,
    },
    {
      name: 'Lars Andersson',
      role: 'Operations Manager',
      location: 'Stockholm, Sweden',
      text: 'Professional, responsive, and skilled. They delivered exactly what we needed on time and within budget. The ongoing support is excellent too.',
      rating: 5,
    },
    {
      name: 'Elena Müller',
      role: 'Digital Lead',
      location: 'Berlin, Germany',
      text: 'BuildWebs transformed our outdated WordPress site into a modern, fast-loading platform. Our bounce rate decreased by 40% and engagement doubled.',
      rating: 5,
    },
    {
      name: 'Thomas Petersen',
      role: 'Business Owner',
      location: 'Copenhagen, Denmark',
      text: 'They understand both the technical and marketing side. The SEO work they did brought us from page 3 to page 1 on Google for our main keywords.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

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
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it — hear what our clients across Europe have to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-dark-card p-8 rounded-2xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-electric-blue">{testimonial.role}</div>
                <div className="text-xs text-gray-500 mt-1">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">4.9/5</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">15+</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">10+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">99%</div>
            <div className="text-gray-400 text-sm">Client Retention</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

