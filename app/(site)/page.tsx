import { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { EditorialShowcase } from '@/components/home/editorial-showcase'
import { CategoryTiles } from '@/components/home/category-tiles'
import { Manifesto } from '@/components/home/manifesto'
import { FeaturedProducts } from '@/components/home/featured-products'
import { StructuredData } from '@/components/seo/structured-data'
import { getFAQSchema, getLocalBusinessSchema } from '@/lib/structured-data'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Handcrafted Sustainable Furniture',
  description: 'Premium handcrafted furniture made from sustainably harvested wood in Victoria, BC. Shop chairs, tables, lamps, and shelves designed to last generations.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <StructuredData data={getFAQSchema()} />
      <StructuredData data={getLocalBusinessSchema()} />
      <Hero />
      <EditorialShowcase />
      <CategoryTiles />
      <Manifesto />
      <FeaturedProducts />
    </>
  )
}
