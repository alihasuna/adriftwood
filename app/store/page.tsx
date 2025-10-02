'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Filter } from 'lucide-react'
import { products, Category } from '@/lib/products'
import { ProductCard } from '@/components/ui/product-card'
import { Button } from '@/components/ui/button'
import { CategoryChips } from '@/components/store/category-chips'
import { SortSelect } from '@/components/store/sort-select'
import { FiltersDrawer } from '@/components/store/filters-drawer'

function StoreContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') as Category | 'all' | null
  
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(
    categoryParam || 'all'
  )
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc' | 'name'>('newest')
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])

  // Filter products
  let filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false
    if (selectedMaterials.length > 0) {
      const hasMatchingMaterial = p.materials.some((m) =>
        selectedMaterials.some((sm) => m.toLowerCase().includes(sm.toLowerCase()))
      )
      if (!hasMatchingMaterial) return false
    }
    return true
  })

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-neutral-100 border-b border-neutral-200">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <h1 className="text-4xl sm:text-5xl font-display font-normal text-brand-pine mb-4">
            Shop
          </h1>
          <p className="text-lg font-body text-neutral-600">
            Handcrafted furniture designed to last generations
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-16 z-30 bg-neutral-50 border-b border-neutral-200">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <CategoryChips
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <SortSelect value={sortBy} onChange={setSortBy} />
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFiltersOpen(true)}
                className="sm:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="mb-6">
          <p className="text-sm font-body text-neutral-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-lg font-body text-neutral-500">
              No products found matching your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Filters Drawer (Mobile) */}
      <FiltersDrawer
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedMaterials={selectedMaterials}
        setSelectedMaterials={setSelectedMaterials}
      />
    </div>
  )
}

export default function StorePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StoreContent />
    </Suspense>
  )
}
