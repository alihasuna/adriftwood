'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Homepage', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Collections', href: '/collections' },
  { label: 'Store', href: '/store' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Terms and Conditions', href: '/legal/terms' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail('')
  }

  return (
    <footer className="relative bg-neutral-50 border-t border-neutral-200 overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16 lg:py-20">
          {/* Left Column - Brand & Navigation */}
          <div className="lg:col-span-7 space-y-8">
            {/* Brand Name */}
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-display font-normal text-brand-pine mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                ADRIFTWOOD
              </motion.h2>
              <motion.div
                className="h-px w-24 bronze-gradient"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            {/* Navigation Links */}
            <motion.nav
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center text-base font-body text-neutral-700 hover:text-brand-pine transition-colors duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Made By */}
            <motion.p
              className="text-sm font-body text-neutral-500 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Handcrafted with care in Victoria, BC
            </motion.p>
          </div>

          {/* Right Column - Newsletter & Social */}
          <div className="lg:col-span-5 space-y-8">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bronze-gradient" />
                <span className="text-xs font-body text-brand-bronze-dark tracking-[0.15em] uppercase">
                  Newsletter
                </span>
              </div>
              <h3 className="text-xl font-display font-normal text-brand-pine mb-4">
                Stay Updated
              </h3>
              <p className="text-sm font-body text-neutral-600 mb-6 leading-relaxed">
                Subscribe to receive updates about new collections and special offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-3 text-sm bg-white border border-neutral-300 focus:border-brand-bronze focus:outline-none transition-all duration-300 font-body text-neutral-900 placeholder-neutral-400"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 text-sm font-body font-medium bg-brand-pine text-white hover:bg-brand-bronze transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bronze-gradient" />
                <span className="text-xs font-body text-brand-bronze-dark tracking-[0.15em] uppercase">
                  Follow Us
                </span>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex items-center justify-center w-11 h-11 border border-neutral-300 hover:border-brand-bronze hover:bg-brand-bronze/5 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <social.icon className="w-5 h-5 text-neutral-700 group-hover:text-brand-pine transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bronze-gradient opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Copyright */}
          <div className="flex items-center gap-4">
            <div className="h-px w-6 bg-brand-bronze/40" />
            <p className="text-sm font-body text-neutral-500">
              © {currentYear} Adriftwood Co. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link, index) => (
              <div key={link.href} className="flex items-center gap-6">
                {index > 0 && (
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                )}
                <Link
                  href={link.href}
                  className="text-sm font-body text-neutral-500 hover:text-brand-pine transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
