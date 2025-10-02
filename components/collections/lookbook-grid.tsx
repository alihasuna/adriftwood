'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Eye, Info } from 'lucide-react'
import { useRef } from 'react'

const collections = [
  {
    id: '1',
    title: 'Nordic Minimalism',
    description: 'Clean lines and natural materials create serene, functional spaces.',
    story: 'Inspired by Scandinavian design principles, each piece in this collection embodies the philosophy of "lagom"—not too much, not too little, but just right. Crafted from sustainably sourced white oak.',
    image: '/images/lookbook/nordic-minimal.jpg',
    filterLink: '/store?category=chairs',
    size: 'large', // large takes full width
    materials: 'White Oak, Natural Linseed Oil',
    year: '2024 Collection',
  },
  {
    id: '2',
    title: 'Forest Retreat',
    description: 'Bringing the outdoors in with organic textures and earthy tones.',
    story: 'Every grain tells a story of patient growth in the Pacific Northwest forests. Our artisans hand-select each plank, honoring the tree\'s natural character and unique patterns.',
    image: '/images/lookbook/forest-retreat.jpg',
    filterLink: '/store?category=tables',
    size: 'medium',
    materials: 'Black Walnut, Beeswax Finish',
    year: '2024 Collection',
  },
  {
    id: '3',
    title: 'Coastal Living',
    description: 'Light, airy designs inspired by the Pacific coastline.',
    story: 'Weathered driftwood and ocean breezes influence these pieces designed for relaxed coastal homes. The ash wood\'s pale grain echoes sandy beaches and morning mist.',
    image: '/images/lookbook/coastal-living.jpg',
    filterLink: '/store',
    size: 'medium',
    materials: 'Ash Wood, Water-Based Varnish',
    year: '2023 Collection',
  },
  {
    id: '4',
    title: 'Natural Light',
    description: 'Illuminating spaces with handcrafted lamps and soft ambient glow.',
    story: 'Our lighting collection celebrates the interplay between wood and light. Each lamp is turned by hand on our vintage lathe, creating one-of-a-kind forms that cast warm, inviting shadows.',
    image: '/images/lookbook/natural-light.jpg',
    filterLink: '/store?category=lamps',
    size: 'small',
    materials: 'Maple, Linen Shade',
    year: '2024 Collection',
  },
  {
    id: '5',
    title: 'Sustainable Workshop',
    description: 'A glimpse into our craft process and commitment to quality.',
    story: 'Behind every piece is a workshop powered by renewable energy, where traditional joinery meets modern sustainability. Watch our artisans shape raw timber into heirloom furniture.',
    image: '/images/lookbook/workshop.jpg',
    filterLink: '/about',
    size: 'small',
    materials: 'Various Hardwoods',
    year: 'Our Process',
  },
  {
    id: '6',
    title: 'Timeless Classics',
    description: 'Heritage designs reimagined for contemporary living.',
    story: 'These designs have stood the test of time—Shaker simplicity, Arts & Crafts honesty, Mid-Century elegance. We honor these traditions while adapting them for today\'s homes.',
    image: '/images/lookbook/classics.jpg',
    filterLink: '/store',
    size: 'large',
    materials: 'Cherry Wood, Natural Oil',
    year: 'Heritage Collection',
  },
]

export function LookbookGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} className="relative py-32 bg-neutral-50 overflow-hidden">
      {/* Decorative background with bronze accent */}
      <motion.div
        className="absolute top-40 left-0 w-[500px] h-[500px] bg-brand-bronze/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-brand-bronze-light/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6">
            Our Collections
          </h2>
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="h-1 w-8 bronze-gradient"
              />
            ))}
          </div>
          <p className="text-lg lg:text-xl font-body text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
            Each piece is a work of art, handcrafted with intention and care
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => {
            const isLarge = collection.size === 'large'
            const isMedium = collection.size === 'medium'
            
            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`group relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer
                  ${isLarge ? 'md:col-span-2 lg:col-span-3 aspect-[21/9]' : ''}
                  ${isMedium ? 'md:col-span-1 lg:col-span-2 aspect-[16/10]' : ''}
                  ${!isLarge && !isMedium ? 'aspect-[4/5]' : ''}
                `}
                onHoverStart={() => setHoveredId(collection.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setSelectedCollection(collection.id)}
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredId === collection.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover"
                    sizes={isLarge ? "100vw" : isMedium ? "66vw" : "33vw"}
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />

                {/* Corner Frame - Art Gallery Style */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredId === collection.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-neutral-50" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-neutral-50" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-neutral-50" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-neutral-50" />
                </motion.div>

                {/* Info Badge */}
                <motion.div
                  className="absolute top-6 right-6 z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="bg-neutral-900/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-brand-bronze/30">
                    <Eye className="h-4 w-4 text-brand-bronze" />
                    <span className="text-xs font-body text-neutral-50 tracking-wide">
                      {collection.year}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-50 mb-3">
                      {collection.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base sm:text-lg font-body text-neutral-200 mb-4 max-w-2xl leading-relaxed">
                      {collection.description}
                    </p>

                    {/* Materials - Shows on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredId === collection.id ? 1 : 0,
                        y: hoveredId === collection.id ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <div className="inline-flex items-center gap-2 bg-neutral-50/10 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-bronze/40">
                        <Info className="h-4 w-4 text-brand-bronze" />
                        <span className="text-sm font-body text-neutral-50">
                          {collection.materials}
                        </span>
                      </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredId === collection.id ? 1 : 0,
                        y: hoveredId === collection.id ? 0 : 10,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Link
                        href={collection.filterLink}
                        className="inline-flex items-center gap-2 text-sm font-body font-medium text-neutral-50 border border-neutral-50 hover:bg-neutral-50 hover:text-neutral-900 px-6 py-3 transition-all duration-300 rounded-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Number Badge */}
                <motion.div
                  className="absolute top-6 left-6 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                >
                  <motion.div 
                    className="w-12 h-12 bronze-gradient rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <span className="text-lg font-display font-bold text-white">
                      {index + 1}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedCollection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-900/95 backdrop-blur-lg z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCollection(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {collections
                .filter((c) => c.id === selectedCollection)
                .map((collection) => (
                  <div key={collection.id} className="relative">
                    {/* Image Header */}
                    <div className="relative h-[40vh] overflow-hidden">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                      
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-4xl lg:text-5xl font-display font-bold text-neutral-50 mb-2">
                          {collection.title}
                        </h3>
                        <p className="text-lg font-body text-neutral-200">
                          {collection.year}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      {/* Story */}
                      <div className="mb-8">
                        <h4 className="text-sm font-body font-semibold text-brand-bronze tracking-wide uppercase mb-4">
                          The Story
                        </h4>
                        <p className="text-xl lg:text-2xl font-body text-neutral-700 leading-relaxed font-light">
                          {collection.story}
                        </p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-neutral-50 p-6 rounded-sm border border-brand-bronze/20">
                          <h5 className="text-sm font-body font-semibold text-neutral-900 mb-2 uppercase tracking-wide">
                            Materials
                          </h5>
                          <p className="text-base font-body text-neutral-700 font-light">
                            {collection.materials}
                          </p>
                        </div>
                        <div className="bg-neutral-50 p-6 rounded-sm border border-brand-bronze/20">
                          <h5 className="text-sm font-body font-semibold text-neutral-900 mb-2 uppercase tracking-wide">
                            Collection
                          </h5>
                          <p className="text-base font-body text-neutral-700 font-light">
                            {collection.year}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href={collection.filterLink}
                          className="flex-1 bronze-gradient bronze-shimmer text-white py-4 px-6 rounded-sm font-body font-medium hover:shadow-xl transition-all text-center"
                        >
                          Shop This Collection
                        </Link>
                        <button
                          onClick={() => setSelectedCollection(null)}
                          className="flex-1 bg-neutral-200 text-neutral-900 py-4 px-6 rounded-sm font-body font-medium hover:bg-neutral-300 transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}