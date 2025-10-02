import { createMetadata } from '@/lib/seo'
import { AboutHero } from '@/components/about/hero'
import { AboutManifesto } from '@/components/about/manifesto'
import { Founders } from '@/components/about/founders'
import { Timeline } from '@/components/about/timeline'
import { FactoryStats } from '@/components/about/factory-stats'
import { ProjectMosaic } from '@/components/about/project-mosaic'
import { NewsletterCTA } from '@/components/home/newsletter-cta'
import { StructuredData } from '@/components/seo/structured-data'
import { getBreadcrumbSchema } from '@/lib/structured-data'

export const metadata = createMetadata({
  title: 'About Us - Sustainable Craftsmanship Since 2018',
  description: 'Learn about our commitment to sustainable craftsmanship and the story behind Adriftwood Co. Handcrafting furniture in Victoria, BC since 2018.',
  path: '/about',
})

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Adriftwood Co.',
    description: 'Our story of sustainable craftsmanship and commitment to timeless design',
    url: 'https://adriftwoodco.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Adriftwood Co.',
      foundingDate: '2018',
      description: 'Sustainable furniture makers based in Victoria, BC, specializing in handcrafted wood furniture',
    },
  }

  return (
    <>
      <StructuredData data={getBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={aboutSchema} />
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
