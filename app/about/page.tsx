import { createMetadata } from '@/lib/seo'
import { AboutHero } from '@/components/about/hero'
import { AboutManifesto } from '@/components/about/manifesto'
import { Founders } from '@/components/about/founders'
import { Timeline } from '@/components/about/timeline'
import { FactoryStats } from '@/components/about/factory-stats'
import { ProjectMosaic } from '@/components/about/project-mosaic'
import { NewsletterCTA } from '@/components/home/newsletter-cta'

export const metadata = createMetadata({
  title: 'About',
  description: 'Learn about our commitment to sustainable craftsmanship and the story behind Adriftwood Co.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutManifesto />
      <Founders />
      <Timeline />
      <FactoryStats />
      <ProjectMosaic />
      <NewsletterCTA />
    </>
  )
}
