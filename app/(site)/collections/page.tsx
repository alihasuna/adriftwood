import { createMetadata } from '@/lib/seo'
import { CollectionsHero } from '@/components/collections/hero'
import { LookbookGrid } from '@/components/collections/lookbook-grid'
import { CraftStory } from '@/components/collections/craft-story'
import { NewsletterCTA } from '@/components/home/newsletter-cta'

export const metadata = createMetadata({
  title: 'Collections',
  description: 'Explore our curated lookbooks featuring handcrafted furniture in natural settings.',
  path: '/collections',
})

export default function CollectionsPage() {
  return (
    <>
      <CollectionsHero />
      <LookbookGrid />
      <CraftStory />
      <NewsletterCTA />
    </>
  )
}
