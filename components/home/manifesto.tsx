'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Manifesto() {
  const title = "CRAFTED WITH INTENTION"
  const words = title.split(' ')
  
  return (
    <section className="py-32 bg-neutral-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Oversized Typography with Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h2 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] font-display font-bold leading-[0.9] tracking-tighter text-neutral-900 mb-6">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      className="inline-block"
                      initial={{ opacity: 0, y: 50, rotateX: 90 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0, 
                        rotateX: 0,
                      }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{
                        duration: 0.6,
                        delay: (wordIndex * 0.3) + (charIndex * 0.03),
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                      whileHover={{
                        color: '#BFA68F',
                        scale: 1.1,
                        y: -5,
                        transition: {
                          duration: 0.3,
                        }
                      }}
                      style={{
                        display: 'inline-block',
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex < words.length - 1 && (
                    <>
                      <br className="hidden lg:block" />
                      <span className="lg:hidden"> </span>
                    </>
                  )}
                </span>
              ))}
            </h2>
            
            <motion.div 
              className="h-px w-32 bronze-gradient mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ transformOrigin: 'left' }}
            />
            
            <motion.p 
              className="text-sm font-body text-neutral-500 tracking-wide uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              Philosophy
            </motion.p>
          </motion.div>
          
          {/* Right - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="text-lg lg:text-xl font-body text-neutral-700 leading-relaxed">
              Every piece we create honors the natural world—from sustainably harvested wood to 
              time-tested joinery techniques.
            </p>
            
            <p className="text-base lg:text-lg font-body text-neutral-600 leading-relaxed">
              We believe in furniture that lasts generations, reducing waste and celebrating 
              the beauty of honest materials. Our workshop in Victoria, BC sits surrounded by 
              the forests that inspire us.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-base font-body font-medium text-neutral-900 hover:text-neutral-600 transition-colors group mt-4"
            >
              Learn our story
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}