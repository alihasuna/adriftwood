'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const showcaseItems = [
  {
    id: 1,
    title: 'CRAFTSMANSHIP',
    subtitle: 'The Art of Making',
    description: 'Our philosophy is rooted in the spirit of research, guaranteeing variety in proposals and the best solution for interiors.',
    image: '/images/lookbook/nordic-minimal.jpg',
    link: '/collections',
    position: { x: '10%', y: '15%' },
    size: 'large',
  },
  {
    id: 2,
    title: 'SUSTAINABILITY',
    subtitle: 'Natural Origins',
    description: 'Every piece we create honors the natural world—from sustainably harvested wood to time-tested joinery techniques.',
    image: '/images/lookbook/forest-retreat.jpg',
    link: '/about',
    position: { x: '55%', y: '45%' },
    size: 'medium',
  },
  {
    id: 3,
    title: 'INNOVATION',
    subtitle: 'Modern Living',
    description: 'Combining traditional craftsmanship with contemporary design for modern living.',
    image: '/images/chair.jpg',
    link: '/store',
    position: { x: '25%', y: '60%' },
    size: 'small',
  },
]

const getSizeClasses = (size: string) => {
  switch(size) {
    case 'large': return 'w-[45vw] h-[60vh]'
    case 'medium': return 'w-[35vw] h-[45vh]'
    case 'small': return 'w-[28vw] h-[35vh]'
    default: return 'w-[35vw] h-[45vh]'
  }
}

interface ShowcaseItemProps {
  item: typeof showcaseItems[0]
  index: number
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
  mouseXSpring: MotionValue<number>
  mouseYSpring: MotionValue<number>
}

function ShowcaseItem({ item, index, hoveredIndex, setHoveredIndex, mouseXSpring, mouseYSpring }: ShowcaseItemProps) {
  // Parallax effect based on mouse position
  const xParallax = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [index % 2 === 0 ? -30 : -50, index % 2 === 0 ? 30 : 50]
  )
  const yParallax = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [index % 2 === 0 ? -20 : -40, index % 2 === 0 ? 20 : 40]
  )

  return (
    <motion.div
      className={`absolute ${getSizeClasses(item.size)} group cursor-pointer`}
      style={{
        left: item.position.x,
        top: item.position.y,
        x: xParallax,
        y: yParallax,
        zIndex: hoveredIndex === index ? 20 : index,
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.2, 0.8, 0.2, 1] 
      }}
    >
      <Link href={item.link} className="block h-full">
        <div className="relative h-full overflow-hidden rounded-sm shadow-2xl">
          {/* Image */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: hoveredIndex === index ? 1 : 0.9,
                y: hoveredIndex === index ? 0 : 10 
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs font-body text-neutral-300 tracking-widest uppercase mb-2">
                {item.subtitle}
              </p>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-neutral-50 mb-3 tracking-tight">
                {item.title}
              </h3>
              <motion.p 
                className="text-sm font-body text-neutral-200 leading-relaxed max-w-md overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  height: hoveredIndex === index ? 'auto' : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {item.description}
              </motion.p>
            </motion.div>

            {/* Hover Indicator */}
            <motion.div
              className="mt-4 flex items-center gap-2 text-neutral-50"
              initial={{ x: -10, opacity: 0 }}
              animate={{ 
                x: hoveredIndex === index ? 0 : -10,
                opacity: hoveredIndex === index ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs font-body tracking-wider uppercase">Explore</span>
              <motion.span
                animate={{ x: hoveredIndex === index ? [0, 5, 0] : 0 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.div>
          </div>

          {/* Accent Line */}
          <motion.div
            className="absolute top-0 left-0 h-1 bronze-gradient"
            initial={{ width: 0 }}
            animate={{ width: hoveredIndex === index ? '100%' : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </Link>
    </motion.div>
  )
}

export function EditorialShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring animation for smooth mouse follow
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-24 bg-neutral-50 overflow-hidden"
    >
      {/* Section Title */}
      <motion.div 
        className="container mx-auto px-6 lg:px-12 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl lg:text-6xl font-display font-bold tracking-tighter text-neutral-900 mb-4">
          OUR STORY
        </h2>
        <div className="h-px w-24 bronze-gradient" />
      </motion.div>

      {/* Interactive Image Grid */}
      <div className="relative h-[80vh]">
        {showcaseItems.map((item, index) => (
          <ShowcaseItem
            key={item.id}
            item={item}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            mouseXSpring={mouseXSpring}
            mouseYSpring={mouseYSpring}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <p className="text-xs font-body text-neutral-400 tracking-wider uppercase">
          Hover to explore
        </p>
      </motion.div>
    </section>
  )
}
