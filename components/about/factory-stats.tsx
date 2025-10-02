'use client'

import { motion, useInView } from 'framer-motion'
import { Leaf, Users, Trees, Award } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { scaleBlurIn, sophisticatedStagger, magneticHover } from '@/lib/advanced-motion'

const stats = [
  {
    icon: Trees,
    value: '100%',
    label: 'Sustainably Sourced Wood',
    isNumber: false,
  },
  {
    icon: Leaf,
    value: 'Carbon Neutral',
    label: 'Production Since 2024',
    isNumber: false,
  },
  {
    icon: Users,
    value: '6',
    targetValue: 6,
    label: 'Master Artisans',
    isNumber: true,
  },
  {
    icon: Award,
    value: '500+',
    targetValue: 500,
    label: 'Pieces Crafted',
    isNumber: true,
    suffix: '+',
  },
]

function AnimatedCounter({ targetValue, suffix = '', duration = 2000 }: { targetValue: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * targetValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(targetValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, targetValue, duration])

  return <div ref={ref}>{count}{suffix}</div>
}

export function FactoryStats() {
  return (
    <section className="py-32 bg-gradient-to-br from-brand-pine via-brand-pine/95 to-brand-pine text-neutral-50 relative overflow-hidden">
      {/* Decorative background elements with bronze accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-brand-bronze rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-bronze-light rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-sage rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-bronze rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 8}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bronze-gradient" />
              <div className="h-2 w-2 bg-brand-bronze rounded-full" />
              <div className="h-px w-12 bronze-gradient" />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            By the Numbers
          </h2>
          
          {/* Bronze decorative lines */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="h-1 w-12 bg-brand-bronze rounded-full"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sophisticatedStagger}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              variants={scaleBlurIn}
            >
              <motion.div
                className="relative text-center p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-brand-bronze/20 hover:border-brand-bronze/40 hover:bg-white/10 transition-all duration-500 overflow-hidden"
                initial="rest"
                whileHover="hover"
                variants={magneticHover}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bronze-shimmer h-full w-full" />
                </div>

                {/* Icon with floating animation */}
                <motion.div 
                  className="flex justify-center mb-8 relative z-10"
                  animate={{ 
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-brand-bronze/30 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.9, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative bg-gradient-to-br from-brand-bronze via-brand-bronze-light to-brand-bronze p-4 rounded-2xl">
                      <stat.icon className="h-12 w-12 text-white relative z-10" />
                    </div>
                  </div>
                </motion.div>

                {/* Value with counter animation */}
                <div className="text-5xl lg:text-6xl font-display font-bold mb-4 text-white relative z-10">
                  {stat.isNumber && stat.targetValue ? (
                    <AnimatedCounter targetValue={stat.targetValue} suffix={stat.suffix} />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                    >
                      {stat.value}
                    </motion.div>
                  )}
                </div>

                {/* Label */}
                <div className="text-sm font-body text-brand-bronze-light leading-relaxed uppercase tracking-wider relative z-10">
                  {stat.label}
                </div>

                {/* Decorative bottom border with bronze gradient */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bronze-gradient rounded-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '70%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
