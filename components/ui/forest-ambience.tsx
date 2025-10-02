'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Floating particles that look like dust in sunlight
function FloatingParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 8,
      drift: Math.random() * 30 - 15,
    }))
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-amber-200/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 4px rgba(251, 191, 36, 0.15)',
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, particle.drift, 0],
            opacity: [0, 0.6, 0],
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

// Light rays filtering through trees
function LightRays() {
  const rays = [
    { id: 1, left: '10%', width: '80px', height: '70%', delay: 0 },
    { id: 2, left: '25%', width: '100px', height: '80%', delay: 1 },
    { id: 3, left: '45%', width: '70px', height: '60%', delay: 0.5 },
    { id: 4, left: '65%', width: '90px', height: '75%', delay: 1.5 },
    { id: 5, left: '85%', width: '75px', height: '65%', delay: 0.8 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[4]">
      {rays.map((ray) => (
        <motion.div
          key={ray.id}
          className="absolute top-0 bg-gradient-to-b from-amber-400/20 via-amber-300/10 to-transparent blur-2xl"
          style={{
            left: ray.left,
            width: ray.width,
            height: ray.height,
            transform: 'rotate(3deg)',
            boxShadow: '0 0 60px rgba(251, 191, 36, 0.2)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scaleY: [1, 1.15, 1],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: ray.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Warm ambient glow
function AmbientGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[3]">
      {/* Top warm glow */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-amber-400/15 via-orange-300/8 to-transparent"
        animate={{
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Side warm glow - left */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-amber-500/12 via-amber-400/6 to-transparent"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      {/* Side warm glow - right */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-orange-400/12 via-orange-300/6 to-transparent"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Center glow spot */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

// Subtle color shift overlay that changes throughout the page
function ColorShiftOverlay() {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[2]"
      animate={{
        background: [
          'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.08) 0%, transparent 60%)',
          'radial-gradient(circle at 80% 70%, rgba(249, 115, 22, 0.08) 0%, transparent 60%)',
          'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.08) 0%, transparent 60%)',
          'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.08) 0%, transparent 60%)',
        ],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function ForestAmbience() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render on server to avoid hydration issues
  if (!isClient) return null

  return (
    <>
      <AmbientGlow />
      <ColorShiftOverlay />
      <LightRays />
      <FloatingParticles />
    </>
  )
}
