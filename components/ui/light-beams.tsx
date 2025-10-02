'use client'

import { motion } from 'framer-motion'

export function LightBeams() {
  const beams = [
    { delay: 0, duration: 8, opacity: 0.03, left: '10%' },
    { delay: 2, duration: 10, opacity: 0.025, left: '35%' },
    { delay: 4, duration: 9, opacity: 0.02, left: '60%' },
    { delay: 1, duration: 11, opacity: 0.028, left: '80%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]" aria-hidden="true">
      {beams.map((beam, i) => (
        <motion.div
          key={i}
          className="absolute -top-1/4 h-[150vh] w-[2px]"
          style={{
            left: beam.left,
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              rgba(255, 255, 255, ${beam.opacity}) 20%,
              rgba(191, 166, 143, ${beam.opacity * 0.8}) 50%,
              rgba(255, 255, 255, ${beam.opacity}) 80%,
              transparent 100%
            )`,
            transform: 'skewX(-5deg)',
            filter: 'blur(1px)',
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scaleY: [0, 1, 1, 0],
          }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

