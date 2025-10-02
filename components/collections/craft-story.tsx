'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const craftValues = [
  {
    number: '01',
    title: 'Hand-Crafted',
    description: 'Every joint, curve, and finish is executed by skilled artisans using time-honored techniques.',
    image: '/images/about-workshop.jpg',
  },
  {
    number: '02',
    title: 'Sustainable',
    description: 'We use only certified sustainable hardwoods, honoring the forests that provide our materials.',
    image: '/images/hero-forest.jpg',
  },
  {
    number: '03',
    title: 'Made with Care',
    description: 'Each piece takes weeks to complete, ensuring the highest quality and attention to detail.',
    image: '/images/chair.jpg',
  },
  {
    number: '04',
    title: 'Heirloom Quality',
    description: 'Built to last generations, our furniture becomes more beautiful with age and use.',
    image: '/images/products/nordic-oak-chair-1.jpg',
  },
]

export function CraftStory() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="relative py-32 bg-neutral-50 overflow-hidden">
      {/* Decorative elements with bronze accent */}
      <motion.div
        className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-brand-bronze/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute top-40 left-0 w-[400px] h-[400px] bg-brand-bronze-light/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-6xl mx-auto"
          style={{ opacity }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6">
              The Art of Craft
            </h2>
            <motion.div 
              className="h-px w-24 bronze-gradient mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-lg lg:text-xl font-body text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              Every piece begins with a vision and ends with a masterpiece. 
              Our approach blends traditional craftsmanship with modern sensibility, 
              creating furniture that transcends trends.
            </p>
          </motion.div>

          {/* Story Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-neutral-900 text-neutral-50 p-12 lg:p-16 rounded-sm mb-20 relative overflow-hidden"
          >
            {/* Decorative quote mark with bronze accent */}
            <div className="absolute top-8 left-8 text-8xl font-display text-brand-bronze/20 leading-none">
              &ldquo;
            </div>
            
            {/* Bronze accent line */}
            <motion.div
              className="absolute top-0 left-0 h-1 bronze-gradient w-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />
            
            <div className="relative z-10">
              <p className="text-2xl lg:text-3xl font-body font-light leading-relaxed mb-6 text-center">
                We don&apos;t just make furniture. We craft stories in wood, 
                honoring both the material&apos;s past and its future in your home.
              </p>
              <div className="text-center">
                <p className="text-base font-body text-brand-bronze-light tracking-wide">
                  — The Adriftwood Artisans
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid - Alternating Layout with Images */}
          <div className="space-y-16 lg:space-y-24">
            {craftValues.map((value, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Side */}
                  <motion.div
                    className={`relative h-[400px] lg:h-[500px] overflow-hidden rounded-sm shadow-xl ${!isEven ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Bronze overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-brand-bronze/0 group-hover:bg-brand-bronze/20 transition-all duration-500"
                    />
                    
                    {/* Large number overlay */}
                    <motion.div
                      className="absolute top-8 right-8"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6, type: 'spring' }}
                    >
                      <div className="relative">
                        <motion.div
                          className="absolute -inset-8 bg-brand-bronze/20 rounded-full blur-2xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          }}
                        />
                        <span className="relative text-8xl lg:text-9xl font-display font-bold text-white/20 group-hover:text-white/40 transition-colors duration-500" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
                          {value.number}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Bronze accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-2 bronze-gradient w-0 group-hover:w-full transition-all duration-700"
                    />
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Number Badge */}
                    <motion.div
                      className="inline-flex items-center gap-4 mb-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <div className="w-16 h-16 bronze-gradient rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-display font-bold text-white">
                          {value.number}
                        </span>
                      </div>
                      <motion.div 
                        className="h-px w-16 bronze-gradient"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                      />
                    </motion.div>

                    <h3 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 leading-tight">
                      {value.title}
                    </h3>
                    
                    <p className="text-lg lg:text-xl font-body text-neutral-600 leading-relaxed font-light">
                      {value.description}
                    </p>

                    {/* Decorative elements */}
                    <motion.div
                      className="flex gap-2 pt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-1 bronze-gradient rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: 40 - i * 8 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.9 + i * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 text-center"
          >
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              From Forest to Home
            </h3>
            <motion.div 
              className="h-px w-24 bronze-gradient mx-auto mb-12"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {['Select', 'Craft', 'Finish', 'Deliver'].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5, type: 'spring' }}
                  className="flex items-center gap-4"
                >
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="w-16 h-16 bronze-gradient rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-display font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <motion.div
                      className="absolute -inset-2 border-2 border-brand-bronze/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  <span className="text-lg font-body font-medium text-neutral-700">
                    {step}
                  </span>
                  {index < 3 && (
                    <motion.div
                      className="hidden md:block h-px w-12 bg-brand-bronze/30"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
