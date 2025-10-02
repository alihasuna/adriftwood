'use client'

import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            {/* Decorative line */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-px w-16 bronze-gradient" />
              <span className="text-xs font-body text-brand-bronze-dark tracking-[0.2em] uppercase">
                Let&apos;s Connect
              </span>
            </motion.div>

            {/* Large Title */}
            <motion.h1
              className="text-[12vw] sm:text-[10vw] lg:text-[8vw] font-display font-normal text-brand-pine leading-[0.9] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              GET IN
              <br />
              TOUCH
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg lg:text-xl font-body text-neutral-600 max-w-2xl font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Have questions about our furniture or interested in a custom project? 
              We&apos;d love to hear from you and bring your vision to life.
            </motion.p>

            {/* Decorative corner accent */}
            <motion.div
              className="absolute top-32 right-12 hidden lg:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="relative">
                <div className="absolute w-24 h-24 border border-brand-bronze/30 rounded-full" />
                <div className="absolute w-24 h-24 border border-brand-bronze/20 rounded-full animate-ping" 
                     style={{ animationDuration: '3s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pb-24">
        {/* Decorative top line */}
        <motion.div
          className="h-px bronze-gradient mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Form - Larger section */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
          
          {/* Contact Info - Sidebar */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactInfo />
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-24 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h-px w-16 bronze-gradient opacity-60" />
          <div className="w-2 h-2 rounded-full bg-brand-bronze opacity-60" />
          <div className="h-px w-16 bronze-gradient opacity-60" />
        </motion.div>
      </div>
    </div>
  )
}

