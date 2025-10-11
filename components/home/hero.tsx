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
    <section ref={sectionRef} className="relative h-screen flex items-end justify-start overflow-hidden bg-neutral-900 pb-12 pl-6 lg:pl-12">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-bedroom.jpg)',
            backgroundPosition: 'center bottom',
          }}
        />
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-neutral-900/20" /> {/* Reduced opacity for brighter image */}
      </motion.div>

      {/* Logo - Bottom Left Aligned */}
      <div className="relative z-10">
        {/* Animated Logo - Smaller size to match design */}
        <motion.div
          className="mb-2"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ 
            opacity: hasLoaded ? 1 : 0, 
            y: hasLoaded ? 0 : 30, 
            scale: hasLoaded ? 1 : 0.9 
          }}
          transition={{ 
            delay: 0.2, 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <motion.img
            src="/logo.svg"
            alt="Adriftwood Logo"
            className="w-32 sm:w-40 lg:w-48 h-auto block"
            style={{ 
              filter: 'brightness(0) invert(1)'
            }}
            initial={{ filter: 'brightness(0) invert(1) blur(4px)' }}
            animate={{ filter: 'brightness(0) invert(1) blur(0px)' }}
            transition={{
              delay: 0.4,
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1]
            }}
            draggable={false}
          />
        </motion.div>
        
        {/* Tagline - Smaller text to match design */}
        <motion.div
          className="relative flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.0, 
            duration: 1.0, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {/* Bronze accent line - Shorter */}
          <motion.div 
            className="h-px w-8 bronze-gradient relative z-10 flex-shrink-0"
            initial={{ width: 0 }}
            animate={{ width: '2rem' }}
            transition={{ 
              delay: 1.2, 
              duration: 0.6, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          />
          <p 
            className="text-xs font-body text-neutral-100 tracking-widest font-light relative z-10"
            style={{ 
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' 
            }}
          >
            TIMELESS DESIGN IN BALANCE WITH NATURE
          </p>
        </motion.div>
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