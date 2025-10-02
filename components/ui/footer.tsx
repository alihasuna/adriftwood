'use client'

import Link from 'next/link'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
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

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
}

const letterVariants = {
  hidden: { 
    opacity: 0,
    y: 60,
    rotateX: 45,
  },
  visible: (i: number) => ({
    opacity: 0.35,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      delay: i * 0.05,
    },
  }),
  hover: {
    opacity: 0.85,
    y: -10,
    rotateX: -10,
    scale: 1.05,
    color: '#BFA68F',
    textShadow: '0 10px 30px rgba(191, 166, 143, 0.4)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const brandName = 'ADRIFTWOOD'
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null)

  return (
    <footer className="relative text-neutral-50 overflow-hidden bg-[#2D1F15] border-t border-[#D4A574]/30">
      {/* Very subtle gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, rgba(212, 165, 116, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.2) 0%, transparent 60%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top decorative line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#D4A574]/40 to-transparent mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-16">
          {/* Left Column - Navigation */}
          <motion.nav
            className="lg:col-span-5 space-y-3 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Vertical accent line */}
            <motion.div
              className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4A574]/40 to-transparent hidden lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className="group block text-2xl lg:text-3xl font-display text-[#D4C3B1] hover:text-[#E8DCC8] transition-all duration-300"
                >
                  <motion.span
                    className="inline-block relative"
                    whileHover={{ x: 12 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {link.label}
                    {/* Underline on hover */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-px bg-[#D4A574]"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </Link>
                {/* Subtle line separator */}
                {index < navLinks.length - 1 && (
                  <div className="mt-3 h-px w-8 bg-[#D4A574]/30" />
                )}
              </motion.div>
            ))}
          </motion.nav>

          {/* Middle - Vertical Line Separator */}
          <motion.div 
            className="hidden lg:block lg:col-span-1 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4A574]/30 to-transparent" />
          </motion.div>

          {/* Right Column - Social & Legal */}
          <div className="lg:col-span-6 flex flex-col justify-between items-start lg:items-end relative">
            {/* Vertical accent line */}
            <motion.div
              className="absolute -right-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4A574]/40 to-transparent hidden lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />

            {/* Social Icons */}
            <div className="flex flex-row lg:flex-col gap-4 mb-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-[#D4A574]/50 hover:border-[#D4A574] hover:bg-[#D4A574]/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: 'spring', stiffness: 400, damping: 10 }
                  }}
                >
                  <social.icon className="w-5 h-5 text-[#D4C3B1] group-hover:text-[#E8DCC8] transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links with lines */}
            <div className="flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
              {legalLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative group"
                >
                  <Link
                    href={link.href}
                    className="text-sm font-body text-[#BFA68F] hover:text-[#D4C3B1] transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                  {/* Hover line */}
                  <motion.div
                    className="absolute -bottom-1 right-0 h-px bg-[#D4A574]"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
              
              {/* Decorative line */}
              <motion.div
                className="h-px w-16 bg-[#D4A574]/50 mt-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
              
              {/* Made by info */}
              <motion.p
                className="text-xs font-body text-[#BFA68F] tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                Made with care in Victoria, BC
              </motion.p>
            </div>
          </div>
        </div>

        {/* Middle separator line */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#D4A574]/35 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        />

        {/* Bottom Section - Large Brand Name with Advanced Effects */}
        <div className="relative py-12 lg:py-16">
          {/* Decorative corner lines */}
          <motion.div
            className="absolute top-12 left-0 flex gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-8 h-px bg-[#D4A574]/40" />
            <div className="w-4 h-px bg-[#D4A574]/30" />
          </motion.div>

          <motion.div
            className="absolute top-12 right-0 flex gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-4 h-px bg-[#D4A574]/30" />
            <div className="w-8 h-px bg-[#D4A574]/40" />
          </motion.div>

          <div className="overflow-hidden">
            <h2 
              className="text-[20vw] sm:text-[16vw] lg:text-[14vw] xl:text-[12vw] font-display font-bold text-[#8B7355] leading-none tracking-tighter select-none"
              style={{ perspective: '1000px' }}
            >
              {brandName.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: '-50px' }}
                  onHoverStart={() => setHoveredLetter(index)}
                  onHoverEnd={() => setHoveredLetter(null)}
                  className="inline-block cursor-pointer"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.3s ease',
                  }}
                  animate={
                    hoveredLetter !== null && Math.abs(hoveredLetter - index) <= 1
                      ? {
                          y: hoveredLetter === index ? -15 : -8,
                          opacity: hoveredLetter === index ? 0.9 : 0.4,
                        }
                      : {}
                  }
                >
                  {letter}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* Separator line before bottom info */}
          <motion.div
            className="h-px bg-gradient-to-r from-[#D4A574]/30 via-[#D4A574]/50 to-[#D4A574]/30 my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {/* Bottom Info with Newsletter */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Left side - Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <motion.div
                  className="h-px w-6 bg-[#D4A574]/40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                />
                <motion.p 
                  className="text-xs font-body text-[#BFA68F] tracking-wide"
                  whileHover={{ color: '#D4C3B1' }}
                >
                  © {currentYear} Adriftwood Co.
                </motion.p>
              </div>
              <div className="flex items-center gap-4">
                <motion.div
                  className="h-px w-6 bg-[#D4A574]/40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                />
                <motion.p 
                  className="text-xs font-body text-[#BFA68F] tracking-wide"
                  whileHover={{ color: '#D4C3B1' }}
                >
                  Handcrafted Furniture
                </motion.p>
              </div>
            </div>

            {/* Right side - Newsletter Signup */}
            <motion.div 
              className="flex flex-col gap-3 w-full lg:w-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-xs font-body text-[#BFA68F] tracking-wider uppercase">
                <div className="h-px w-8 bg-[#D4A574]/40" />
                <span>Newsletter</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 text-sm bg-transparent text-[#D4C3B1] placeholder-[#BFA68F]/50 border border-[#D4A574]/50 focus:outline-none focus:border-[#D4A574] transition-colors w-64"
                />
                <motion.button
                  className="px-6 py-2 text-sm font-body border border-[#D4A574]/60 text-[#D4C3B1] hover:bg-[#D4A574]/20 hover:border-[#D4A574] hover:text-[#E8DCC8] transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated bottom accent line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A574]/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </footer>
  )
}