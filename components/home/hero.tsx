'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasLoaded, setHasLoaded] = useState(false)
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setHasLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-forest.jpg)',
            backgroundPosition: 'center',
          }}
        />
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-neutral-900/40" />
      </motion.div>

      {/* Oversized Typography - Center */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl">
          {/* Elegant animated title - Alta Caption Regular */}
          <h1 className="text-[14vw] sm:text-[12vw] lg:text-[11vw] font-display font-bold text-neutral-50 leading-[0.9] mb-12">
            <div 
              className={`overflow-hidden ${hasLoaded ? 'animate-hero-reveal' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              ADRIFT
            </div>
            <div 
              className={`overflow-hidden ${hasLoaded ? 'animate-hero-reveal' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
            >
              WOOD
            </div>
          </h1>
          
          <motion.div
            className="relative inline-flex items-center gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2, 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            {/* Content with enhanced dark shadow for contrast */}
            <div className="relative flex items-center gap-6 sm:gap-8">
              {/* Dark backdrop for extra contrast */}
              <div className="absolute inset-0 -inset-x-4 -inset-y-2 bg-gradient-to-r from-black/40 via-black/30 to-transparent blur-xl" />
              
              {/* Bronze accent line */}
              <motion.div 
                className="h-px w-16 sm:w-20 bronze-gradient relative z-10"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ 
                  delay: 1.4, 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              />
              <p 
                className="text-base sm:text-lg lg:text-xl font-body text-neutral-50 tracking-[0.15em] max-w-md font-light relative z-10"
                style={{ 
                  textShadow: '0 2px 4px rgba(0, 0, 0, 1), 0 4px 8px rgba(0, 0, 0, 0.9), 0 8px 16px rgba(0, 0, 0, 0.8), 2px 2px 12px rgba(0, 0, 0, 0.95)' 
                }}
              >
                TIMELESS DESIGN IN BALANCE WITH NATURE
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-neutral-50 stroke-[1.5]" />
        </motion.div>
      </motion.div>

      {/* Side Text - Minimal */}
      <motion.div
        className="absolute top-1/3 right-8 lg:right-16 z-20 hidden md:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{ opacity }}
      >
        <div className="flex flex-col gap-4 items-end">
          <motion.div 
            className="h-16 w-px bg-neutral-50/30"
            initial={{ height: 0 }}
            animate={{ height: 64 }}
            transition={{ 
              delay: 1.6, 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          />
          <p className="text-xs font-body tracking-[0.2em] text-neutral-300 uppercase [writing-mode:vertical-lr] rotate-180 font-light">
            50 Years Experience
          </p>
        </div>
      </motion.div>
    </section>
  )
}