import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './content/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary brand colors
          pine: 'var(--brand-pine)',           // #044002 - Primary dark green
          bronze: 'var(--brand-bronze)',       // #BFA68F - Secondary bronze/beige
          sage: 'var(--brand-sage)',           // #CCD9CC - Accent light sage
          
          // Bronze variations
          'bronze-light': 'var(--brand-bronze-light)',  // #D4C3B1
          'bronze-dark': 'var(--brand-bronze-dark)',    // #A68D76
          
          // Legacy support
          black: 'var(--brand-black)',
          charcoal: 'var(--brand-charcoal)',
          taupe: 'var(--brand-taupe)',
          stone: 'var(--brand-stone)',
          concrete: 'var(--brand-concrete)',
          apricot: 'var(--brand-apricot)',
          bluegray: 'var(--brand-bluegray)',
          mauve: 'var(--brand-mauve)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
      },
      fontFamily: {
        display: ['Alta', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        body: ['Montserrat', 'ui-sans-serif', 'system-ui', 'Helvetica Neue', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'hero-reveal': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(60px)',
            letterSpacing: '0.1em',
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)',
            letterSpacing: '-0.02em',
          },
        },
        'elegant-fade': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px) scale(0.95)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'fade-up': 'fade-up 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'slide-in': 'slide-in 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'hero-reveal': 'hero-reveal 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'elegant-fade': 'elegant-fade 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
