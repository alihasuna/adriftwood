'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 200 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const hideCursor = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', hideCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', hideCursor)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Large glow effect */}
      <motion.div
        className="fixed pointer-events-none z-[999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(191, 166, 143, 0.15) 0%, rgba(191, 166, 143, 0.05) 30%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Medium glow layer */}
      <motion.div
        className="fixed pointer-events-none z-[999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(191, 166, 143, 0.12) 40%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Small inner glow */}
      <motion.div
        className="fixed pointer-events-none z-[999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '60px',
            height: '60px',
            background: 'radial-gradient(circle, rgba(191, 166, 143, 0.3) 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />
      </motion.div>
    </>
  )
}

