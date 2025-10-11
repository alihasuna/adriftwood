'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

const founders = [
  {
    id: 1,
    name: 'Jake Tchida',
    role: 'Founder & Master Craftsman',
    bio: 'Jake\'s journey began in the forests of Northern BC, planting trees and dreaming of creating something meaningful. His passion for working with his hands and innate creativity led to the founding of Adriftwood Co. With guidance from his father and an unwavering desire to create, Jake has built a company that combines artistry with craftsmanship, honoring the wood and the memories held within each piece.',
    quote: 'Working with my hands has always been natural. Creativity has come from within since I was a child. Adriftwood is a combination of these two things.',
    image: '/images/about-workshop.jpg',
    email: '',
    linkedin: '#',
    focus: 'Craftsmanship & Design',
    achievement: 'Founded Adriftwood Co., bringing together art, ethics, and woodcraft',
  },
  {
    id: 2,
    name: 'Time Tchida',
    role: 'Co-Founder & Forest Steward',
    bio: 'Time spent 36 years planting nearly 750 million trees—a straight line that would circle the planet 42 times. With a double major in philosophy and religious studies, he brings a unique perspective on connection, meaning, and contribution. Working alongside his son Jake, Time ensures that Adriftwood honors what wood gives us through the art of furniture, creating pieces that hold the memory of their work and the forests they cherish.',
    quote: 'We are all connected and we are all looking for meaning. We need to be creative and we need to contribute. Working with my son Jake is a blessing.',
    image: '/images/hero-forest.jpg',
    email: '',
    linkedin: '#',
    focus: 'Sustainability & Heritage',
    achievement: '750 million trees planted over 36 years of forest stewardship',
  },
]

export function Founders() {
  const [selectedFounder, setSelectedFounder] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 overflow-hidden"
    >
      {/* Decorative background elements with bronze accents */}
      <motion.div
        className="absolute top-20 left-0 w-[600px] h-[600px] bg-brand-bronze/5 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-brand-sage/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-bronze-light/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          {/* Elegant abstract geometric design */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-6"
          >
            <div className="relative w-20 h-20">
              <motion.div
                className="absolute inset-0 bg-brand-bronze/20 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Interlocking circles design */}
              <motion.svg
                className="relative z-10"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="30"
                  cy="40"
                  r="18"
                  stroke="url(#bronze-gradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="50"
                  cy="40"
                  r="18"
                  stroke="url(#bronze-gradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 40 25 L 40 55"
                  stroke="url(#bronze-gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="bronze-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8956A" />
                    <stop offset="50%" stopColor="#C9A877" />
                    <stop offset="100%" stopColor="#8B7355" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-pine mb-6">
            Father & Son
          </h2>
          <p className="text-lg lg:text-xl font-body text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Two generations united by creativity, craftsmanship, and a deep respect for the natural world
          </p>
          
          {/* Bronze decorative lines */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-1 w-12 bronze-gradient rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative"
              onHoverStart={() => setHoveredId(founder.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.div
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer border border-brand-sage/20 hover:border-brand-bronze/40 transition-all duration-500"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setSelectedFounder(founder.id)}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredId === founder.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Elegant gradient overlay with bronze accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-pine/95 via-brand-pine/40 to-transparent" />
                  
                  {/* Bronze glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-brand-bronze/20 via-transparent to-transparent transition-opacity duration-500 ${hoveredId === founder.id ? 'opacity-100' : 'opacity-0'}`} />
                  
                  {/* Abstract geometric badge - appears on hover */}
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{
                      opacity: hoveredId === founder.id ? 1 : 0,
                      scale: hoveredId === founder.id ? 1 : 0,
                      rotate: hoveredId === founder.id ? 0 : -180,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="relative w-14 h-14 bg-gradient-to-br from-brand-bronze via-brand-bronze-light to-brand-bronze rounded-xl shadow-lg flex items-center justify-center">
                      <div className="absolute inset-2 border-2 border-white/30 rounded-lg" />
                      <div className="absolute w-2 h-2 bg-white rounded-full" />
                    </div>
                  </motion.div>

                  {/* Name and Role */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-neutral-50 mb-3">
                        {founder.name}
                      </h3>
                      <p className="text-sm font-body text-brand-bronze tracking-wider uppercase mb-4 font-medium">
                        {founder.role}
                      </p>
                      <div className="flex items-center gap-3 text-brand-bronze-light">
                        <motion.div 
                          className="h-px flex-1 bronze-gradient"
                          animate={{
                            scaleX: hoveredId === founder.id ? 1 : 0.7,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Focus Badge with bronze accent */}
                <motion.div
                  className="absolute top-6 left-6 bg-gradient-to-br from-brand-bronze via-brand-bronze-light to-brand-bronze backdrop-blur-md px-5 py-2 rounded-full shadow-lg"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  <p className="text-xs font-body text-white tracking-wide font-medium">
                    {founder.focus}
                  </p>
                </motion.div>

                {/* Corner Accents with bronze */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-brand-bronze rounded-tr-2xl transition-opacity duration-300 ${hoveredId === founder.id ? 'opacity-100' : 'opacity-0'}`}
                />
                <motion.div
                  className={`absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-brand-bronze rounded-bl-2xl transition-opacity duration-300 ${hoveredId === founder.id ? 'opacity-100' : 'opacity-0'}`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Timeline - shows on click */}
        <AnimatePresence>
          {selectedFounder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-900/95 backdrop-blur-lg z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedFounder(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {founders
                  .filter((f) => f.id === selectedFounder)
                  .map((founder) => (
                    <div key={founder.id} className="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
                      {/* Image Side */}
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative aspect-[3/4] rounded-lg overflow-hidden"
                      >
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Content Side */}
                      <div className="flex flex-col">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="mb-6">
                            <h3 className="text-4xl font-display font-bold text-brand-pine mb-2">
                              {founder.name}
                            </h3>
                            <p className="text-sm font-body text-brand-apricot tracking-wide uppercase">
                              {founder.role}
                            </p>
                          </div>

                          {/* Quote with bronze accent and elegant abstract design */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative bg-gradient-to-br from-brand-bronze/5 to-brand-sage/5 p-8 rounded-2xl mb-6 border-l-4 border-brand-bronze overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-bronze/5 rounded-full blur-2xl" />
                            {/* Abstract geometric quote mark */}
                            <div className="absolute top-6 right-6 w-10 h-10 opacity-20">
                              <div className="absolute w-4 h-4 border-t-2 border-l-2 border-brand-bronze rounded-tl-lg" />
                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-bronze rounded-br-lg" />
                            </div>
                            <p className="text-lg lg:text-xl font-body text-neutral-700 italic leading-relaxed relative z-10">
                              &ldquo;{founder.quote}&rdquo;
                            </p>
                          </motion.div>

                          {/* Bio */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mb-6"
                          >
                            <p className="text-base font-body text-neutral-600 leading-relaxed mb-4">
                              {founder.bio}
                            </p>
                            <div className="bg-gradient-to-r from-brand-bronze/10 to-brand-sage/10 p-6 rounded-xl border border-brand-bronze/20">
                              <p className="text-sm font-body text-neutral-700 leading-relaxed">
                                <span className="font-semibold text-brand-bronze">Key Achievement: </span>
                                {founder.achievement}
                              </p>
                            </div>
                          </motion.div>


                          {/* Close Button with bronze gradient */}
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            onClick={() => setSelectedFounder(null)}
                            className="mt-8 w-full bronze-gradient bronze-shimmer text-white py-4 rounded-xl font-body font-medium hover:shadow-lg transition-all duration-300"
                          >
                            Close
                          </motion.button>
                        </motion.div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
