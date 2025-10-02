'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { NewsletterForm } from '@/components/ui/newsletter-form'

export function NewsletterCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="py-32 bg-neutral-900 relative overflow-hidden">
      {/* Bronze gradient accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bronze-gradient opacity-20" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] font-display text-neutral-50 leading-[0.9] tracking-tighter mb-8">
              STAY<br/>CONNECTED
            </h2>
            
            {/* Bronze accent line */}
            <div className="h-1 w-32 bronze-gradient mb-12 rounded-full" />
            
            <p className="text-lg font-body text-neutral-200 mb-12 max-w-xl leading-relaxed">
              Subscribe to receive updates on new arrivals, seasonal collections, 
              and stories from our workshop.
            </p>

            <div className="max-w-md">
              <NewsletterForm />
            </div>

            <p className="mt-6 text-xs font-body text-neutral-400 tracking-wide">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}