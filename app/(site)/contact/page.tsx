'use client'

import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-[#F5EFE6] to-neutral-50 relative overflow-hidden">
      {/* Animated Background Elements - Sunset Forest Theme */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[600px] opacity-20 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(212, 165, 116, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 40%, rgba(232, 201, 163, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(212, 165, 116, 0.4) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A574' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20h20V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

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
              <span className="text-xs font-body text-[#A68D76] tracking-[0.2em] uppercase">
                Let&apos;s Connect
              </span>
            </motion.div>

            {/* Large Title */}
            <motion.h1
              className="text-[12vw] sm:text-[10vw] lg:text-[8vw] font-display font-bold text-[#3D2F1F] leading-[0.9] mb-6"
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
                <div className="absolute w-24 h-24 border border-[#D4A574]/30 rounded-full" />
                <div className="absolute w-24 h-24 border border-[#D4A574]/20 rounded-full animate-ping" 
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
          className="h-px bg-gradient-to-r from-transparent via-[#D4A574]/50 to-transparent mb-16"
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
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A574]/60" />
          <div className="w-2 h-2 rounded-full bg-[#D4A574]/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A574]/60" />
        </motion.div>
      </div>
    </div>
  )
}

