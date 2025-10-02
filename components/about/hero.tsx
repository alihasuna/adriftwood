'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

export function AboutHero() {
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
    <section 
      ref={sectionRef} 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-900"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/about-workshop.jpg)',
            backgroundPosition: 'center',
          }}
        />
        {/* Elegant gradient overlay with bronze accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-neutral-900/40 to-brand-pine/30" />
      </motion.div>

      {/* Floating bronze particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-bronze rounded-full opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Oversized Typography - Center */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Decorative top element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <motion.div 
              className="h-px w-16 bronze-gradient"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <Sparkles className="h-5 w-5 text-brand-bronze" />
            <motion.div 
              className="h-px w-16 bronze-gradient"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </motion.div>

          {/* Elegant animated title */}
          <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] font-display font-bold text-neutral-50 leading-[0.9] mb-12">
            <div 
              className={`overflow-hidden ${hasLoaded ? 'animate-hero-reveal' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <span className="inline-block">OUR</span>
            </div>
            <div 
              className={`overflow-hidden ${hasLoaded ? 'animate-hero-reveal' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
            >
              <span className="inline-block bg-gradient-to-r from-neutral-50 via-brand-bronze-light to-neutral-50 bg-clip-text text-transparent">
                STORY
              </span>
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
            {/* Dark backdrop for extra contrast */}
            <div className="absolute inset-0 -inset-x-8 -inset-y-4 bg-gradient-to-r from-black/40 via-black/30 to-black/40 blur-xl" />
            
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
              className="text-base sm:text-lg lg:text-xl font-body text-neutral-50 tracking-[0.15em] max-w-2xl font-light relative z-10"
              style={{ 
                textShadow: '0 2px 4px rgba(0, 0, 0, 1), 0 4px 8px rgba(0, 0, 0, 0.9)' 
              }}
            >
              CRAFTING TIMELESS FURNITURE IN HARMONY WITH NATURE
            </p>
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
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-body text-brand-bronze tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="h-6 w-6 text-brand-bronze stroke-[1.5]" />
        </motion.div>
      </motion.div>

      {/* Side Text - Minimal with bronze accent */}
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
            className="h-16 w-px bronze-gradient"
            initial={{ height: 0 }}
            animate={{ height: 64 }}
            transition={{ 
              delay: 1.6, 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] 
            }}
          />
          <p className="text-xs font-body tracking-[0.2em] text-brand-bronze uppercase [writing-mode:vertical-lr] rotate-180 font-medium">
            Since 2018
          </p>
        </div>
      </motion.div>
    </section>
  )
}
