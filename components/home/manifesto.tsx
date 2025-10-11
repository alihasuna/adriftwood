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
            <h2 className="text-[10vw] sm:text-[8vw] lg:text-[6vw] font-display font-normal leading-[0.9] tracking-tighter text-neutral-900 mb-6">
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
            <p className="text-lg lg:text-xl font-body text-neutral-700 leading-relaxed mb-8">
              Each piece is locally handcrafted in Victoria BC by father and son. A combination of valued ethics, 
              modern design and the art of woodcraft met with quality for generations.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-bronze/20 flex items-center justify-center">
                  <span className="text-brand-bronze font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-body font-semibold text-neutral-900 mb-2">Buy Canadian, Be Canadian</h3>
                  <p className="text-base font-body text-neutral-600 leading-relaxed">
                    Adriftwood Co. is based in Victoria BC, Canada. Every piece created in Canada using local 
                    Vancouver Island salvaged wood and Canadian sourced materials whenever possible.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-bronze/20 flex items-center justify-center">
                  <span className="text-brand-bronze font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-body font-semibold text-neutral-900 mb-2">Low & Zero VOC</h3>
                  <p className="text-base font-body text-neutral-600 leading-relaxed">
                    Working to improve health. We strive to work with Zero VOC products. 
                    A key value at Adriftwood is the priceless value of health.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-bronze/20 flex items-center justify-center">
                  <span className="text-brand-bronze font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-body font-semibold text-neutral-900 mb-2">Strongest Beds On The Market</h3>
                  <p className="text-base font-body text-neutral-600 leading-relaxed">
                    Adriftwood Co. designs are created to last a lifetime. No squeaks and a restful sleep.
                  </p>
                </div>
              </div>
            </div>

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