'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { sophisticatedStagger, parallaxUp } from '@/lib/advanced-motion'

const lookbookItems = [
  {
    id: '1',
    title: 'Nordic Minimalism',
    image: '/images/lookbook/nordic-minimal.jpg',
    productSlug: 'nordic-oak-chair',
  },
  {
    id: '2',
    title: 'Natural Light',
    image: '/images/lookbook/natural-light.jpg',
    productSlug: 'ceramic-table-lamp',
  },
  {
    id: '3',
    title: 'Forest Retreat',
    image: '/images/lookbook/forest-retreat.jpg',
    productSlug: 'live-edge-dining-table',
  },
  {
    id: '4',
    title: 'Coastal Living',
    image: '/images/lookbook/coastal-living.jpg',
    productSlug: 'walnut-side-table',
  },
]

export function LookbookCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="py-24 bg-neutral-100 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex items-center justify-between mb-12"
          style={{ opacity }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold text-brand-pine"
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Lookbook
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Link
              href="/collections"
              className="hidden sm:inline-flex items-center gap-2 text-brand-pine font-body font-semibold hover:text-brand-pine/80 transition-colors ease-smooth group"
            >
              View collections
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform ease-smooth" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sophisticatedStagger}
        >
          {lookbookItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={parallaxUp}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[45vw] snap-center"
            >
              <Link
                href={`/store/${item.productSlug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-200">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 45vw"
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-display font-semibold text-neutral-50 mb-2">
                      {item.title}
                    </h3>
                    <span className="text-sm font-body text-neutral-200 group-hover:text-brand-apricot transition-colors ease-smooth">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
