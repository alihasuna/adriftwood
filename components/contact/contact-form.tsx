'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', topic: 'general', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <div className="relative">
      {/* Background card with gradient */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-sm border border-brand-bronze/20" />
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-brand-bronze/30" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-brand-bronze/30" />

      <div className="relative p-8 lg:p-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bronze-gradient" />
            <span className="text-xs font-body text-brand-bronze-dark tracking-[0.15em] uppercase">
              Send Message
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-normal text-brand-pine mb-3">
            Tell us about
            <br />
            your project
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-body font-medium text-brand-pine mb-2 tracking-wide"
            >
              Your Name
            </label>
            <div className="relative">
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-4 py-3 bg-white/60 border border-neutral-300 focus:border-brand-bronze focus:outline-none transition-all duration-300 font-body text-neutral-900 placeholder-neutral-400"
                placeholder="John Smith"
              />
              {focusedField === 'name' && (
                <motion.div
                  className="absolute -bottom-px left-0 h-px bronze-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-body font-medium text-brand-pine mb-2 tracking-wide"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full px-4 py-3 bg-white/60 border border-neutral-300 focus:border-brand-bronze focus:outline-none transition-all duration-300 font-body text-neutral-900 placeholder-neutral-400"
                placeholder="hello@example.com"
              />
              {focusedField === 'email' && (
                <motion.div
                  className="absolute -bottom-px left-0 h-px bronze-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>

          {/* Topic Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="topic"
              className="block text-sm font-body font-medium text-brand-pine mb-2 tracking-wide"
            >
              What can we help with?
            </label>
            <div className="relative">
              <select
                id="topic"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                onFocus={() => setFocusedField('topic')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-white/60 border border-neutral-300 focus:border-brand-bronze focus:outline-none transition-all duration-300 font-body text-neutral-900 appearance-none cursor-pointer"
              >
                <option value="general">General Inquiry</option>
                <option value="product">Product Question</option>
                <option value="custom">Custom Project</option>
                <option value="wholesale">Wholesale Inquiry</option>
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-brand-bronze-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {focusedField === 'topic' && (
                <motion.div
                  className="absolute -bottom-px left-0 h-px bronze-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-body font-medium text-brand-pine mb-2 tracking-wide"
            >
              Your Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/60 border border-neutral-300 focus:border-brand-bronze focus:outline-none transition-all duration-300 font-body text-neutral-900 placeholder-neutral-400 resize-none"
                placeholder="Tell us about your project or inquiry..."
              />
              {focusedField === 'message' && (
                <motion.div
                  className="absolute -bottom-px left-0 h-px bronze-gradient"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="group relative px-8 py-4 bg-brand-pine text-white font-body font-medium tracking-wide overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bronze-gradient"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Button content */}
              <span className="relative flex items-center justify-center gap-2">
                {status === 'loading' && (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                )}
                {status === 'success' && (
                  <CheckCircle className="w-5 h-5" />
                )}
                {status === 'idle' && (
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
                <span>
                  {status === 'loading'
                    ? 'Sending...'
                    : status === 'success'
                    ? 'Message Sent!'
                    : 'Send Message'}
                </span>
              </span>
            </motion.button>
          </motion.div>

          {/* Success Message */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 p-4 bg-brand-sage/30 border border-brand-bronze rounded-sm"
              >
                <CheckCircle className="w-5 h-5 text-brand-pine flex-shrink-0" />
                <p className="text-sm font-body text-brand-pine">
                  Thank you for your message. We&apos;ll get back to you within 24 hours!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  )
}
