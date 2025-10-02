'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function AmbientParticles() {
  const particles = useRef<Particle[]>([])

  useEffect(() => {
    // Generate 25 particles with random properties
    particles.current = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1-4px
      duration: Math.random() * 20 + 15, // 15-35s
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]" aria-hidden="true">
      {particles.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, -200, -300, -400],
            x: [
              0,
              Math.sin(particle.id) * 50,
              Math.cos(particle.id) * 50,
              Math.sin(particle.id * 2) * 50,
              0,
            ],
            opacity: [0, particle.opacity, particle.opacity, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

