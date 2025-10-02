'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const categories = [
  {
    name: 'Chairs',
    slug: 'chairs',
    image: '/images/categories/chairs.jpg',
  },
  {
    name: 'Tables',
    slug: 'tables',
    image: '/images/categories/tables.jpg',
  },
  {
    name: 'Lamps',
    slug: 'lamps',
    image: '/images/categories/lamps.jpg',
  },
  {
    name: 'Shelves',
    slug: 'shelves',
    image: '/images/categories/shelves.jpg',
  },
]

export function CategoryTiles() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={sectionRef} className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Subtle animated background element */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, var(--brand-bronze) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title - Minimal */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-normal tracking-tighter text-neutral-900 mb-4">
            EXPLORE
          </h2>
          <motion.div 
            className="h-px w-24 bronze-gradient"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.div>

        {/* Categories Grid - Dynamic with scroll effects */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.2, 0.8, 0.2, 1],
                    },
                  },
                }}
              >
                <Link
                  href={`/store?category=${category.slug}`}
                  className="group block relative aspect-[3/4] overflow-hidden bg-neutral-200 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-500"
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                  
                  {/* Bronze tinted overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 via-transparent to-brand-bronze/10"
                    whileHover={{ 
                      background: 'linear-gradient(to bottom right, rgba(23, 23, 23, 0.5), rgba(191, 166, 143, 0.2))'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Animated accent lines - top and bottom */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 bronze-gradient"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 h-1 bronze-gradient"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
                  />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: -12 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <motion.h3 
                        className="text-3xl font-display font-normal text-neutral-50 tracking-tight mb-2"
                        whileHover={{ 
                          scale: 1.05,
                          color: '#D4C3B1',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.name}
                      </motion.h3>
                      <motion.div
                        className="flex items-center gap-2 text-neutral-50"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-xs font-body tracking-wider uppercase text-brand-bronze-light">Shop now</span>
                        <motion.span
                          className="text-brand-bronze-light"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}