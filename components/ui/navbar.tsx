'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '@/lib/store'
import { cn } from '@/lib/cn'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/store', label: 'Store' },
  { href: '/collections', label: 'Collections' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { cartItems, setCartOpen, isMobileMenuOpen, setMobileMenuOpen } = useStore()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const isHomePage = pathname === '/'
  
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect when footer is visible
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of footer is visible
        rootMargin: '0px',
      }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [pathname])

  // On homepage at top: center menu without logo
  // On homepage scrolled OR other pages: normal layout with logo
  const showLogo = !isHomePage || isScrolled
  const centerMenu = isHomePage && !isScrolled

  return (
    <>
      <motion.header 
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-smooth",
          isScrolled 
            ? "bg-neutral-50/98 backdrop-blur-lg border-b border-neutral-300" 
            : "bg-transparent border-b border-transparent"
        )}
        animate={{
          y: isFooterVisible ? -150 : 0,
          opacity: isFooterVisible ? 0 : 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.2, 0.8, 0.2, 1],
        }}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className={cn(
            "flex h-24 lg:h-28 items-center transition-all duration-700",
            centerMenu ? "justify-center" : "justify-between"
          )}>
            {/* Logo - Hidden on homepage top, visible when scrolled or on other pages */}
            <motion.div
              initial={false}
              animate={{
                opacity: showLogo ? 1 : 0,
                x: showLogo ? 0 : -20,
                width: showLogo ? 'auto' : 0,
              }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="overflow-hidden"
            >
              <Link
                href="/"
                className={cn(
                  "text-xl lg:text-2xl font-display font-bold tracking-tighter transition-colors duration-700 whitespace-nowrap",
                  isScrolled
                    ? "text-neutral-900 hover:text-neutral-600"
                    : "text-neutral-50 hover:text-neutral-200"
                )}
              >
                ADRIFTWOOD
              </Link>
            </motion.div>

            {/* Desktop Navigation - Centered on homepage top, right-aligned when scrolled */}
            <motion.div 
              className="hidden md:flex items-center gap-8 lg:gap-12"
              animate={{
                x: centerMenu ? 0 : showLogo ? 0 : -100,
              }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm lg:text-base font-body font-medium tracking-wide transition-all duration-700 relative',
                    isScrolled
                      ? pathname === link.href
                        ? 'text-neutral-900'
                        : 'text-neutral-500 hover:text-neutral-900'
                      : pathname === link.href
                        ? 'text-neutral-50'
                        : 'text-neutral-200 hover:text-neutral-50'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span 
                      className={cn(
                        'absolute -bottom-1 left-0 right-0 h-px',
                        isScrolled ? 'bg-neutral-900' : 'bg-neutral-50'
                      )}
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              ))}
            </motion.div>

            {/* Right Icons - Hidden when centered on homepage, visible otherwise */}
            <motion.div 
              className="flex items-center gap-6 lg:gap-8"
              initial={false}
              animate={{
                opacity: centerMenu ? 0 : 1,
                x: centerMenu ? 20 : 0,
              }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <button
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors duration-700 hover:scale-110 transition-transform",
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-900"
                    : "text-neutral-200 hover:text-neutral-50"
                )}
                disabled={centerMenu}
              >
                <Search className="h-5 w-5 lg:h-6 lg:w-6 stroke-[1.5]" />
              </button>
              
              <button
                aria-label={`Cart (${cartItemCount} items)`}
                onClick={() => setCartOpen(true)}
                className={cn(
                  "relative p-2 transition-all duration-700 hover:scale-110",
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-900"
                    : "text-neutral-200 hover:text-neutral-50"
                )}
                disabled={centerMenu}
              >
                <ShoppingBag className="h-5 w-5 lg:h-6 lg:w-6 stroke-[1.5]" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-body font-bold text-neutral-50">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle - Always visible */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "md:hidden p-2 transition-all duration-700 hover:scale-110",
                  isScrolled
                    ? "text-neutral-600 hover:text-neutral-900"
                    : "text-neutral-200 hover:text-neutral-50"
                )}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 stroke-[1.5]" />
                ) : (
                  <Menu className="h-6 w-6 stroke-[1.5]" />
                )}
              </button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay - Minimalist */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden bg-neutral-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-6 p-2 text-neutral-200 hover:text-neutral-50 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-7 w-7 stroke-[1.5]" />
            </button>

            {/* Menu Content */}
            <div className="flex flex-col h-full justify-center px-8">
              <nav>
                <motion.div
                  className="flex flex-col gap-2"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'block py-5 text-5xl font-display font-bold tracking-tighter transition-colors',
                          pathname === link.href
                            ? 'text-neutral-50'
                            : 'text-neutral-500 hover:text-neutral-50'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </nav>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute bottom-12 left-8 right-8"
              >
                <div className="flex gap-6 pb-8 border-t border-neutral-700 pt-8">
                  <a
                    href="#"
                    className="text-sm font-body text-neutral-400 hover:text-neutral-50 transition-colors tracking-wide"
                    aria-label="Instagram"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    href="#"
                    className="text-sm font-body text-neutral-400 hover:text-neutral-50 transition-colors tracking-wide"
                    aria-label="Facebook"
                  >
                    FACEBOOK
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}