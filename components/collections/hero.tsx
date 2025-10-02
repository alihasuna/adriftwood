'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export function CollectionsHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasLoaded, setHasLoaded] = useState(false)
  
  // Mouse position for parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)
  
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight
      mouseX.set(x)
      mouseY.set(y)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // Parallax transforms based on mouse position
  const xParallax = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20])
  const yParallax = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20])

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
            backgroundImage: 'url(/images/collections-hero1.jpg)',
            backgroundPosition: 'center',
          }}
        />
        {/* Stronger gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/60 to-neutral-900/70" />
        <div className="absolute inset-0 bg-neutral-900/30" />
      </motion.div>

      {/* Oversized Typography with Mouse Parallax */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 lg:px-12"
        style={{ x: xParallax, y: yParallax }}
      >
        <div className="max-w-7xl">
          <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] font-display font-normal text-neutral-50 leading-[0.9] mb-8">
            <motion.div 
              className={`overflow-hidden ${hasLoaded ? 'animate-hero-reveal' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
              whileHover={{ scale: 1.05, color: '#D4C3B1' }}
              transition={{ duration: 0.3 }}
            >
              HAND
            </motion.div>
            <motion.div 
              className={`overflow-hidden ${hasLoaded ? 'animate-hero-reveal' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
              whileHover={{ scale: 1.05, color: '#D4C3B1' }}
              transition={{ duration: 0.3 }}
            >
              CRAFTED
            </motion.div>
          </h1>
          
          <motion.div
            className="flex items-center gap-12"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 1.2, 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{ opacity }}
          >
            <motion.div 
              className="h-px w-24 bronze-gradient"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
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
              WHERE ART MEETS FUNCTION
            </p>
          </motion.div>
          
          {/* Decorative bronze accent elements */}
          <motion.div
            className="mt-12 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            style={{ opacity }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1 bronze-gradient"
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ delay: 1.8 + i * 0.1, duration: 0.6 }}
                whileHover={{ width: 80, height: 4 }}
                style={{ width: 60 - i * 10 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

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

      {/* Side Text with Bronze Accent */}
      <motion.div
        className="absolute top-1/3 right-8 lg:right-16 z-20 hidden md:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          delay: 1.5, 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{ opacity, x: useTransform(mouseXSpring, [-0.5, 0.5], [10, -10]) }}
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
          <p className="text-xs font-body tracking-[0.2em] text-neutral-300 uppercase [writing-mode:vertical-lr] rotate-180 font-light">
            Curated Collections
          </p>
        </div>
      </motion.div>
      
      {/* Floating Bronze Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bronze-gradient rounded-full blur-sm"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bronze-gradient rounded-full blur-sm"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-1 h-1 bg-brand-bronze rounded-full blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  )
}
