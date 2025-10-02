'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { slideRotateUp, sophisticatedStagger, imageReveal } from '@/lib/advanced-motion'

const projects = [
  {
    id: '1',
    title: 'Victoria Workshop',
    location: 'Victoria, BC',
    image: '/images/projects/workshop-1.jpg',
  },
  {
    id: '2',
    title: 'Sustainable Forestry',
    location: 'Vancouver Island',
    image: '/images/projects/forest-1.jpg',
  },
  {
    id: '3',
    title: 'Residential Install',
    location: 'Oak Bay, BC',
    image: '/images/projects/install-1.jpg',
  },
  {
    id: '4',
    title: 'Craft Exhibition',
    location: 'Vancouver, BC',
    image: '/images/projects/exhibition-1.jpg',
  },
]

export function ProjectMosaic() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Decorative background elements with parallax */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-brand-bronze/5 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-80 h-80 bg-brand-sage/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          {/* Decorative icon */}
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
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
              <MapPin className="h-12 w-12 text-brand-bronze relative z-10" />
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-pine mb-6">
            Our Projects
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 font-body max-w-3xl mx-auto leading-relaxed">
            A glimpse into our workshop, materials, and the spaces we&apos;ve helped transform
          </p>
          
          {/* Bronze decorative lines */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(4)].map((_, i) => (
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sophisticatedStagger}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow-lg"
              variants={slideRotateUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Image with zoom effect */}
              <motion.div
                className="relative w-full h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageReveal}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              
              {/* Elegant gradient overlay with bronze accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pine/95 via-brand-pine/40 to-transparent group-hover:from-brand-pine transition-all duration-500" />
              
              {/* Bronze glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bronze/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {/* Title with arrow */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-neutral-50">
                      {project.title}
                    </h3>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                    >
                      <div className="bg-brand-bronze p-2 rounded-full">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm font-body text-brand-bronze mb-4">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>

                  {/* Decorative line with bronze gradient */}
                  <motion.div
                    className="h-1 bronze-gradient rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '80%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  />
                </motion.div>
              </div>

              {/* Corner accent with bronze */}
              <motion.div
                className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-brand-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
              />
              
              {/* Bottom right corner accent */}
              <motion.div
                className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-brand-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-lg"
                initial={{ scale: 0, rotate: 90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
