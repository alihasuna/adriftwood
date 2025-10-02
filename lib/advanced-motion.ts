/**
 * Advanced Framer Motion animations for "wow" scroll effects
 * All animations are minimalistic and elegant
 */

import { Variants } from 'framer-motion'

// Custom easing curves
export const easeSmooth = [0.2, 0.8, 0.2, 1]
export const easeElastic = [0.6, -0.05, 0.01, 0.99]
export const easeSlow = [0.25, 0.1, 0.25, 1]

// Parallax scroll effect
export const parallaxUp: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: easeSmooth,
    },
  },
}

// Fade in from sides with rotation
export const fadeInRotateLeft: Variants = {
  hidden: { opacity: 0, x: -100, rotateY: -15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: easeSmooth,
    },
  },
}

export const fadeInRotateRight: Variants = {
  hidden: { opacity: 0, x: 100, rotateY: 15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: easeSmooth,
    },
  },
}

// Scale up with blur effect (simulated with opacity)
export const scaleBlurIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeElastic,
    },
  },
}

// Slide and fade from bottom with slight rotation
export const slideRotateUp: Variants = {
  hidden: { opacity: 0, y: 80, rotate: -3 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: easeSmooth,
    },
  },
}

// Reveal with clip path effect (simulated)
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 60, clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 1,
      ease: easeSlow,
    },
  },
}

// Float in effect
export const floatIn: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easeSlow,
    },
  },
}

// Sophisticated stagger container with multiple effects
export const sophisticatedStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
      when: 'beforeChildren',
    },
  },
}

// Zoom and fade for images
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: easeSlow,
    },
  },
}

// Fade in with vertical blur simulation
export const fadeBlurUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: easeSmooth,
    },
  },
}

// Split text reveal effect (for headings)
export const splitReveal: Variants = {
  hidden: { opacity: 0, y: 20, scaleY: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      duration: 0.7,
      ease: easeSmooth,
    },
  },
}

// Magnetic hover effect (for interactive elements)
export const magneticHover = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.05,
    rotate: [0, -1, 1, -1, 0],
    transition: {
      duration: 0.4,
      ease: easeSmooth,
      rotate: {
        duration: 0.3,
      },
    },
  },
}

// Parallax container for sections
export const parallaxSection: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
}

// Counter animation for numbers
export const counterUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: easeSmooth,
    },
  }),
}
