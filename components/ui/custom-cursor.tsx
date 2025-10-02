'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      const isClickable = target.closest('a, button, [role="button"], input[type="submit"], input[type="button"]')
      setIsPointer(!!isClickable)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
        }}
      >
        <div className="w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
      </motion.div>

      {/* Outer ring on hover */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isPointer ? 1 : 0,
          opacity: isPointer ? 0.6 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full" />
      </motion.div>
    </>
  )
}

