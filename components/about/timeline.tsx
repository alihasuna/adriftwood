'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { slideRotateUp, sophisticatedStagger, parallaxUp } from '@/lib/advanced-motion'
import { TrendingUp } from 'lucide-react'

const timelineEvents = [
  {
    year: '2018',
    title: 'The Beginning',
    description: 'Founded in a small Victoria workshop with a focus on sustainable woodworking.',
  },
  {
    year: '2019',
    title: 'First Collection',
    description: 'Launched our inaugural furniture line featuring Pacific Northwest hardwoods.',
  },
  {
    year: '2021',
    title: 'Expansion',
    description: 'Moved to a larger eco-certified workshop, expanded our team to six artisans.',
  },
  {
    year: '2023',
    title: 'National Recognition',
    description: 'Featured in Design Canada magazine for sustainable craftsmanship.',
  },
  {
    year: '2024',
    title: 'Carbon Neutral',
    description: 'Achieved carbon-neutral production through renewable energy and local sourcing.',
  },
]

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={sectionRef} className="relative py-32 bg-neutral-50 overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-brand-bronze/5 rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={parallaxUp}
          className="mb-20 text-center"
        >
          {/* Decorative icon */}
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
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
              <TrendingUp className="h-12 w-12 text-brand-bronze relative z-10" />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-pine mb-6">
            Our Journey
          </h2>
          
          {/* Bronze decorative lines */}
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-1 w-16 bronze-gradient rounded-full"
              />
            ))}
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 md:left-[120px] top-0 bottom-0 w-px bg-brand-sage/20">
            <motion.div
              className="w-full bronze-gradient"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sophisticatedStagger}
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 relative group"
                variants={slideRotateUp}
              >
                {/* Year - larger and more prominent */}
                <div className="relative z-10 flex items-start">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    className="relative"
                  >
                    {/* Bronze glow effect */}
                    <div className="absolute inset-0 bg-brand-bronze/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-brand-bronze via-brand-bronze-light to-brand-bronze-dark p-6 rounded-2xl shadow-lg">
                      <span className="text-4xl font-display font-bold text-white block">
                        {event.year}
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Content with timeline dot */}
                <div className="relative">
                  {/* Timeline dot with pulse animation */}
                  <motion.div
                    className="absolute -left-[28px] md:-left-[52px] top-8 w-3 h-3 rounded-full bg-brand-bronze shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-brand-bronze"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                  
                  <motion.div
                    className="bg-white p-8 rounded-2xl shadow-sm border border-brand-sage/20 hover:shadow-lg hover:border-brand-bronze/30 transition-all duration-300 group-hover:translate-x-2"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-brand-bronze/0 group-hover:border-brand-bronze/30 transition-colors duration-300 rounded-tr-lg" />
                    
                    <h3 className="text-2xl font-display font-bold text-brand-pine mb-4">
                      {event.title}
                    </h3>
                    <p className="text-base font-body text-neutral-600 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* Bronze accent line */}
                    <motion.div
                      className="mt-4 h-1 bronze-gradient rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '60px' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.6, duration: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
