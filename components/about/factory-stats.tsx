'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { scaleBlurIn, sophisticatedStagger, magneticHover } from '@/lib/advanced-motion'

const stats = [
  {
    value: '100%',
    label: 'Sustainably Sourced Wood',
    isNumber: false,
  },
  {
    value: 'Carbon Neutral',
    label: 'Production Since 2024',
    isNumber: false,
  },
  {
    value: '6',
    targetValue: 6,
    label: 'Master Artisans',
    isNumber: true,
  },
  {
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
    <section className="py-32 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-bronze/20 to-brand-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-brand-bronze-light/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Elegant floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-40, 40, -40],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div className="w-8 h-8 border-2 border-brand-bronze/40 rotate-45" />
          </motion.div>
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
          {/* Elegant abstract centerpiece */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-8"
          >
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-brand-bronze/10 blur-2xl" />
              <svg className="relative z-10" viewBox="0 0 100 100" fill="none">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke="url(#header-bronze)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="25"
                  stroke="url(#header-bronze)"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.line
                  x1="20"
                  y1="50"
                  x2="80"
                  y2="50"
                  stroke="url(#header-bronze)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.line
                  x1="50"
                  y1="20"
                  x2="50"
                  y2="80"
                  stroke="url(#header-bronze)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="header-bronze" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8956A" />
                    <stop offset="50%" stopColor="#C9A877" />
                    <stop offset="100%" stopColor="#8B7355" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-brand-pine via-brand-pine to-brand-bronze bg-clip-text text-transparent">
            By the Numbers
          </h2>
          <p className="text-lg lg:text-xl font-body text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Our commitment to quality and sustainability, measured
          </p>
          
          {/* Elegant decorative elements */}
          <div className="flex justify-center items-center gap-3">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className={`h-px ${i === 3 ? 'w-20' : 'w-8'} bronze-gradient`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
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
                className="relative text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-neutral-200 hover:border-brand-bronze/50 transition-all duration-500 overflow-hidden"
                initial="rest"
                whileHover="hover"
                variants={magneticHover}
              >
                {/* Elegant gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-bronze/5 via-brand-sage/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-brand-bronze/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-brand-bronze/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Value with counter animation */}
                <div className="text-4xl lg:text-5xl font-display font-bold mb-4 bg-gradient-to-br from-brand-pine to-brand-bronze bg-clip-text text-transparent relative z-10">
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
                <div className="text-sm font-body text-neutral-600 leading-relaxed uppercase tracking-wider relative z-10 font-medium">
                  {stat.label}
                </div>

                {/* Decorative bottom accent with bronze gradient */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bronze-gradient rounded-t-full"
                  initial={{ width: '0%' }}
                  whileInView={{ width: '80%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                />

                {/* Pulsing dot indicator */}
                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 bg-brand-bronze rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
