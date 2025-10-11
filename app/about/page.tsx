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
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-brand-pine mb-4">
              Our Partnership
            </h3>
            <p className="text-base lg:text-lg font-body text-neutral-600 mb-8 leading-relaxed">
              We&apos;re proud to partner with Resthouse Sleep to create the perfect foundation for restorative rest
            </p>
            <a
              href="/about/partners"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pine text-white rounded-lg font-body font-semibold hover:bg-brand-pine/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Learn About Our Partnership
            </a>
          </div>
        </div>
      </section>
      <Timeline />
      <FactoryStats />
      <ProjectMosaic />
      <NewsletterCTA />
    </>
  )
}
