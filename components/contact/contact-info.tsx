'use client'

import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@adriftwoodco.com',
    href: 'mailto:hello@adriftwoodco.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (250) 555-1234',
    href: 'tel:+12505551234',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Message us',
    href: 'https://wa.me/12505551234',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Workshop',
    value: 'Victoria, BC, Canada',
    href: null,
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bronze-gradient" />
          <span className="text-xs font-body text-[#A68D76] tracking-[0.15em] uppercase">
            Reach Out
          </span>
        </div>

        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            const content = (
              <motion.div
                className="group relative flex items-start gap-4 p-4 bg-white/40 border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#F5EFE6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#D4A574]/20 to-[#BFA68F]/10 group-hover:from-[#D4A574]/30 group-hover:to-[#BFA68F]/20 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-[#3D2F1F]" />
                </div>

                <div className="relative z-10 flex-1 min-w-0">
                  <div className="text-xs font-body text-[#A68D76] uppercase tracking-wider mb-1">
                    {method.label}
                  </div>
                  <div className="text-sm font-body text-[#3D2F1F] font-medium break-words">
                    {method.value}
                  </div>
                </div>

                {/* Arrow indicator for clickable items */}
                {method.href && (
                  <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-[#D4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            )

            return method.href ? (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={method.label}>{content}</div>
            )
          })}
        </div>
      </div>

      {/* Separator */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[#D4A574]/40 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />

      {/* Service Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative p-6 bg-gradient-to-br from-[#F5EFE6]/40 to-white/40 border border-[#D4A574]/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A574]/20 to-[#BFA68F]/10">
            <Globe className="w-5 h-5 text-[#3D2F1F]" />
          </div>
          <h3 className="text-lg font-display font-bold text-[#3D2F1F]">
            Service Area
          </h3>
        </div>
        <p className="text-sm font-body text-neutral-700 leading-relaxed">
          We serve clients across Canada with free shipping on all orders. 
          International shipping available upon request.
        </p>
      </motion.div>

      {/* Workshop Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative p-6 bg-gradient-to-br from-white/40 to-[#F5EFE6]/40 border border-[#D4A574]/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A574]/20 to-[#BFA68F]/10">
            <Clock className="w-5 h-5 text-[#3D2F1F]" />
          </div>
          <h3 className="text-lg font-display font-bold text-[#3D2F1F]">
            Workshop Hours
          </h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm font-body">
            <span className="text-[#A68D76]">Monday - Friday</span>
            <span className="text-[#3D2F1F] font-medium">9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between items-center text-sm font-body">
            <span className="text-[#A68D76]">Saturday</span>
            <span className="text-[#3D2F1F] font-medium">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between items-center text-sm font-body">
            <span className="text-[#A68D76]">Sunday</span>
            <span className="text-[#3D2F1F] font-medium">Closed</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#D4A574]/20">
          <p className="text-xs font-body text-[#A68D76] tracking-wide">
            * Workshop visits by appointment only
          </p>
        </div>
      </motion.div>

      {/* Bottom decorative element */}
      <motion.div
        className="flex items-center justify-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8 }}
      >
        <div className="h-px w-8 bg-[#D4A574]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
        <div className="h-px w-8 bg-[#D4A574]" />
      </motion.div>
    </div>
  )
}
