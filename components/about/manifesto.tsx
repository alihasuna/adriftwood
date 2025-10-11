'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { parallaxUp, sophisticatedStagger, fadeBlurUp } from '@/lib/advanced-motion'

export function AboutManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 overflow-hidden">
      {/* Subtle background decoration */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-brand-bronze/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          style={{ opacity }}
        >
          {/* Title with advanced animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={parallaxUp}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-pine mb-6">
              Crafted with Intention
            </h2>
            
            {/* Bronze decorative lines */}
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="h-1 w-12 bronze-gradient rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Paragraphs with staggered blur-fade effect */}
          <motion.div
            className="space-y-12 font-body text-neutral-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-150px' }}
            variants={sophisticatedStagger}
          >
            <motion.p 
              variants={fadeBlurUp}
              className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-center max-w-4xl mx-auto font-light text-brand-pine"
            >
              Adrift represents the untethered flow of one&apos;s life. We all experience being adrift. 
              The balance to this state is finding direction and taking action.
            </motion.p>
            
            <motion.div
              variants={fadeBlurUp}
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-brand-sage/20 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-display font-semibold text-brand-pine mb-6 text-center">
                Jake&apos;s Story
              </h3>
              <p className="text-base lg:text-lg leading-relaxed text-neutral-700 mb-6">
                &ldquo;The idea of Adriftwood Co. was born in a tent in the middle of nowhere in Northern BC, 
                while laying on my back trying to ignore the sting of blisters and ache of fatigue. 
                Planting trees and brushing blocks is the perfect place to dream about anything else you 
                would rather be doing. The time spent in between those grueling seasons of work is a perfect 
                representation of letting your life drift.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-neutral-700">
                Working with my hands has always been natural. Creativity has come from within since I was a child. 
                Adriftwood is a combination of these two things. With an immense amount of help and guidance from my father 
                in addition to the desire to create, Adriftwood has finally come together.&rdquo;
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeBlurUp}
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-brand-sage/20 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-display font-semibold text-brand-pine mb-6 text-center">
                Time&apos;s Perspective
              </h3>
              <p className="text-base lg:text-lg leading-relaxed text-neutral-700 mb-6">
                At 22 years old, I started planting trees. 36 years later my company had planted nearly 750 million trees. 
                That number equates to a straight line of trees, planted three feet apart that would go around the planet 42 times. 
                I have been blessed to work in the woods and put back in an industry that has given all of us so much. 
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-neutral-700">
                Adriftwood Company is honoring what wood gives us through the art of furniture. My education was not in business or wood working, 
                I did a double major philosophy and religious studies. What I have taken from tree planting, business, school and just getting older 
                is that we are all connected and we are all looking for meaning, we need to be creative and we need to contribute. 
                Working with my son Jake is a blessing. We get to be creative, work with wood, give back and create pieces of art that hold 
                the memory of our work.
              </p>
            </motion.div>
            
            {/* Sleep Science callout with bronze gradient */}
            <motion.div 
              variants={fadeBlurUp}
              className="relative bronze-gradient p-12 lg:p-16 rounded-2xl mt-16 overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-pine/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-white mb-6 text-center">
                  Sleep Science Meets Craftsmanship
                </h3>
                <p className="text-base sm:text-lg leading-relaxed font-light text-center max-w-3xl mx-auto text-white/95 mb-6">
                  As awareness grows around the critical role sleep plays in overall health, more people are rethinking 
                  the foundations of their sleep environment. Quality sleep is directly linked to improved immune function, 
                  mental clarity, emotional regulation, and long-term cardiovascular health.
                </p>
                <p className="text-base sm:text-lg leading-relaxed font-light text-center max-w-3xl mx-auto text-white/95">
                  At Adriftwood, we design our bed frames around robust 5.5-inch slats to create a more stable, supportive 
                  foundation that helps your mattress maintain proper spinal alignment and weight distribution throughout the night. 
                  This principal design paired with zero VOC beeswax finish and naturally antimicrobial salvaged cedar, our frames 
                  eliminate exposure to harmful chemicals and allergens. As science continues to emphasize the importance of 
                  restorative sleep, investing in a thoughtfully engineered, non-toxic bed frame is no longer a luxury—it&apos;s a health decision.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
