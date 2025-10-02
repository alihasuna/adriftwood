'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { parallaxUp, sophisticatedStagger, fadeBlurUp } from '@/lib/advanced-motion'
import { Leaf, Heart, Sparkles } from 'lucide-react'

export function AboutManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 overflow-hidden">
      {/* Subtle background decoration */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-brand-bronze/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          style={{ opacity }}
        >
          {/* Title with advanced animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={parallaxUp}
            className="mb-20 text-center"
          >
            {/* Decorative icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-brand-bronze/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Heart className="h-12 w-12 text-brand-bronze relative z-10" fill="currentColor" />
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-pine mb-6">
              Crafted with Intention
            </h2>
            
            {/* Bronze decorative lines */}
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="h-1 w-12 bronze-gradient rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Paragraphs with staggered blur-fade effect */}
          <motion.div
            className="space-y-12 font-body text-neutral-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-150px' }}
            variants={sophisticatedStagger}
          >
            <motion.p 
              variants={fadeBlurUp}
              className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-center max-w-4xl mx-auto font-light text-brand-pine"
            >
              Adriftwood Co. was born from a simple belief: furniture should honor the materials 
              from which it&apos;s made and the spaces it inhabits.
            </motion.p>
            
            <motion.div
              variants={fadeBlurUp}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-sage/20 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Leaf className="h-6 w-6 text-brand-bronze" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-brand-pine mb-3">
                      Sustainable Materials
                    </h3>
                    <p className="text-base leading-relaxed text-neutral-600">
                      We work exclusively with sustainably harvested hardwoods—white oak, walnut, maple, 
                      and ash—each chosen for its beauty, strength, and grain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-sage/20 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Sparkles className="h-6 w-6 text-brand-bronze" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-brand-pine mb-3">
                      Timeless Craft
                    </h3>
                    <p className="text-base leading-relaxed text-neutral-600">
                      Every cut, joint, and finish is executed by hand, following time-tested techniques 
                      passed down through generations of woodworkers.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.p
              variants={fadeBlurUp}
              className="text-lg sm:text-xl leading-relaxed text-center max-w-3xl mx-auto text-neutral-600"
            >
              Our designs are minimal but warm, functional yet poetic. We reject the disposable 
              culture of mass production in favor of slow craftsmanship: pieces built to last 
              lifetimes, to patina gracefully, and to bring a sense of groundedness to your home.
            </motion.p>
            
            {/* Featured callout with bronze gradient */}
            <motion.div 
              variants={fadeBlurUp}
              className="relative bronze-gradient p-12 lg:p-16 rounded-2xl mt-16 overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-pine/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Leaf className="h-10 w-10 text-white" />
                  </motion.div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light text-center max-w-3xl mx-auto text-white">
                  Sustainability isn&apos;t a marketing term for us—it&apos;s a core value.
                </p>
                <p className="text-base sm:text-lg leading-relaxed font-light text-center max-w-2xl mx-auto text-white/90 mt-6">
                  We source local materials when possible, minimize waste through thoughtful design, and partner with 
                  certified forestry programs. Our workshop runs on renewable energy, and we&apos;re constantly 
                  refining our processes to reduce our environmental footprint.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
