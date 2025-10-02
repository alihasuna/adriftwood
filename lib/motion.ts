/**
 * Framer Motion animation variants and utilities
 * All animations respect prefers-reduced-motion
 */

import { Variants } from 'framer-motion'

// Custom easing function
export const easeSmooth = [0.2, 0.8, 0.2, 1]

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeSmooth,
    },
  },
}

// Fade up animation (scroll reveals)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeSmooth,
    },
  },
}

// Stagger container for children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// Scale on hover
export const scaleHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.25,
      ease: easeSmooth,
    },
  },
}

// Page transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: easeSmooth,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.25,
      ease: easeSmooth,
    },
  },
}

// Mobile menu overlay
export const menuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeSmooth,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: easeSmooth,
    },
  },
}

// Mobile menu content
export const menuContent: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeSmooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.25,
      ease: easeSmooth,
    },
  },
}
