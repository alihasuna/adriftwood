'use client'

import { useState } from 'react'
import { Check, ShoppingBag } from 'lucide-react'
import { Product } from '@/lib/products'
import { formatPrice } from '@/lib/format'
import { useStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '')
  const { addToCart } = useStore()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize || undefined,
    })
  }

  return (
    <div className="flex flex-col">
      {/* Title & Price */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-display font-normal text-brand-pine mb-2">
          {product.name}
        </h1>
        <p className="text-2xl font-body font-medium text-neutral-900">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Stock Badge */}
      <div className="mb-6">
        {product.inStock ? (
          <div className="inline-flex items-center gap-2 text-sm font-body text-green-700 bg-green-50 px-3 py-1 rounded-sm">
            <Check className="h-4 w-4" />
            In Stock
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 text-sm font-body text-neutral-600 bg-neutral-100 px-3 py-1 rounded-sm">
            Out of Stock
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-base font-body text-neutral-700 leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="mb-8">
          <Label className="text-sm font-body font-semibold mb-3 block">
            Size
          </Label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-sm text-sm font-body transition-all ease-smooth ${
                  selectedSize === size
                    ? 'border-brand-pine bg-brand-pine text-neutral-50'
                    : 'border-neutral-300 bg-neutral-50 text-neutral-700 hover:border-brand-pine'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Materials */}
      <div className="mb-8">
        <Label className="text-sm font-body font-semibold mb-2 block">
          Materials
        </Label>
        <div className="flex flex-wrap gap-2">
          {product.materials.map((material) => (
            <span
              key={material}
              className="inline-block px-3 py-1 bg-neutral-100 text-sm font-body text-neutral-700 rounded-sm"
            >
              {material}
            </span>
          ))}
        </div>
      </div>

      {/* Dimensions */}
      {product.dimensions && (
        <div className="mb-8">
          <Label className="text-sm font-body font-semibold mb-2 block">
            Dimensions
          </Label>
          <p className="text-sm font-body text-neutral-700">
            W {product.dimensions.width} × D {product.dimensions.depth} × H{' '}
            {product.dimensions.height} {product.dimensions.unit}
          </p>
        </div>
      )}

      {/* Add to Cart */}
      <Button
        size="lg"
        onClick={handleAddToCart}
        disabled={!product.inStock}
        className="w-full sm:w-auto"
      >
        <ShoppingBag className="h-5 w-5 mr-2" />
        Add to Cart
      </Button>

      {/* Additional Info */}
      <div className="mt-8 pt-8 border-t border-neutral-200">
        <ul className="space-y-3 text-sm font-body text-neutral-600">
          <li>• Handcrafted in Victoria, BC</li>
          <li>• Sustainably sourced materials</li>
          <li>• Free shipping across Canada</li>
          <li>• 30-day return policy</li>
        </ul>
      </div>
    </div>
  )
}
