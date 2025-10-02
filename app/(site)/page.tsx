import { Hero } from '@/components/home/hero'
import { EditorialShowcase } from '@/components/home/editorial-showcase'
import { CategoryTiles } from '@/components/home/category-tiles'
import { Manifesto } from '@/components/home/manifesto'
import { FeaturedProducts } from '@/components/home/featured-products'

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialShowcase />
      <CategoryTiles />
      <Manifesto />
      <FeaturedProducts />
    </>
  )
}
