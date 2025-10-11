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
  // State for configurator
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null)
  const [selectedFinish, setSelectedFinish] = useState(product.finishes?.[0] || null)
  const [selectedWoodType, setSelectedWoodType] = useState(product.woodTypes?.[0] || '')
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '')
  
  const { addToCart } = useStore()

  // Calculate dynamic price based on selections
  const calculatePrice = () => {
    let basePrice = product.price
    
    // If product has variants (bed frames), use variant pricing
    if (selectedVariant) {
      basePrice = selectedVariant.price
    }
    
    // Add finish cost
    if (selectedFinish && selectedFinish.price > 0) {
      // For beds, finish pricing varies by size
      if (product.category === 'beds' && selectedVariant) {
        const isSmallSize = selectedVariant.size.includes('Twin') || selectedVariant.size.includes('Full')
        basePrice += isSmallSize ? 200 : 300
      } else {
        basePrice += selectedFinish.price
      }
    }
    
    return basePrice
  }

  const finalPrice = calculatePrice()

  const handleAddToCart = () => {
    const cartName = selectedVariant 
      ? `${product.name} - ${selectedVariant.size}`
      : product.name
    
    const cartDetails = []
    if (selectedFinish) cartDetails.push(selectedFinish.name)
    if (selectedWoodType) cartDetails.push(selectedWoodType)
    if (selectedSize) cartDetails.push(selectedSize)
    
    addToCart({
      id: product.id,
      name: `${cartName}${cartDetails.length > 0 ? ` (${cartDetails.join(', ')})` : ''}`,
      price: finalPrice,
      image: product.images[0],
      size: selectedVariant?.size || selectedSize || undefined,
    })
  }

  return (
    <div className="flex flex-col">
      {/* Title & Price */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-display font-normal text-brand-pine mb-2">
          {product.name}
        </h1>
        <div className="flex items-baseline gap-3">
          <p className="text-2xl font-body font-medium text-neutral-900">
            {formatPrice(finalPrice)}
          </p>
          {finalPrice !== product.price && (
            <p className="text-lg font-body text-neutral-500 line-through">
              {formatPrice(product.price)}
            </p>
          )}
        </div>
        {product.partner && (
          <p className="text-sm font-body text-neutral-600 mt-2">
            In partnership with <span className="font-semibold text-brand-bronze">{product.partner}</span>
          </p>
        )}
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

      {/* Bed Frame Configurator */}
      {product.variants && product.variants.length > 0 && (
        <div className="mb-8 p-6 bg-neutral-100 rounded-lg border border-neutral-200">
          <h3 className="text-lg font-display font-semibold text-brand-pine mb-4">
            Configure Your Bed
          </h3>
          
          {/* Size Selector */}
          <div className="mb-6">
            <Label className="text-sm font-body font-semibold mb-3 block">
              Bed Size *
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.size}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-4 py-3 border rounded-sm text-sm font-body transition-all ease-smooth ${
                    selectedVariant?.size === variant.size
                      ? 'border-brand-pine bg-brand-pine text-neutral-50 shadow-md'
                      : 'border-neutral-300 bg-white text-neutral-700 hover:border-brand-pine hover:shadow-sm'
                  }`}
                >
                  <div className="font-semibold">{variant.size}</div>
                  <div className="text-xs mt-1 opacity-90">
                    {formatPrice(variant.price)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Wood Type Selector (Cedar Crest only) */}
          {product.woodTypes && product.woodTypes.length > 0 && (
            <div className="mb-6">
              <Label className="text-sm font-body font-semibold mb-3 block">
                Wood Type *
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.woodTypes.map((wood) => (
                  <button
                    key={wood}
                    onClick={() => setSelectedWoodType(wood)}
                    className={`px-4 py-3 border rounded-sm text-sm font-body transition-all text-left ${
                      selectedWoodType === wood
                        ? 'border-brand-pine bg-brand-pine text-neutral-50 shadow-md'
                        : 'border-neutral-300 bg-white text-neutral-700 hover:border-brand-pine hover:shadow-sm'
                    }`}
                  >
                    {wood}
                    {wood.includes('Rescued') && (
                      <span className="block text-xs mt-1 opacity-90">
                        Sustainable choice
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Finish Selector */}
          {product.finishes && product.finishes.length > 0 && (
            <div className="mb-4">
              <Label className="text-sm font-body font-semibold mb-3 block">
                Finish *
              </Label>
              <div className="space-y-2">
                {product.finishes.map((finish) => {
                  const finishPrice = finish.price > 0 && selectedVariant
                    ? (selectedVariant.size.includes('Twin') || selectedVariant.size.includes('Full') ? 200 : 300)
                    : finish.price
                  
                  return (
                    <button
                      key={finish.name}
                      onClick={() => setSelectedFinish(finish)}
                      className={`w-full px-4 py-3 border rounded-sm text-sm font-body transition-all text-left ${
                        selectedFinish?.name === finish.name
                          ? 'border-brand-pine bg-brand-pine text-neutral-50 shadow-md'
                          : 'border-neutral-300 bg-white text-neutral-700 hover:border-brand-pine hover:shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{finish.name}</span>
                        <span className="text-sm">
                          {finishPrice > 0 ? `+${formatPrice(finishPrice)}` : 'Included'}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Price Breakdown */}
          {selectedVariant && (
            <div className="mt-6 pt-4 border-t border-neutral-300 text-sm font-body">
              <div className="flex justify-between mb-2">
                <span className="text-neutral-600">Base Price ({selectedVariant.size})</span>
                <span className="font-medium">{formatPrice(selectedVariant.price)}</span>
              </div>
              {selectedFinish && selectedFinish.price > 0 && (
                <div className="flex justify-between mb-2">
                  <span className="text-neutral-600">Finish ({selectedFinish.name})</span>
                  <span className="font-medium">
                    +{formatPrice(
                      selectedVariant.size.includes('Twin') || selectedVariant.size.includes('Full') 
                        ? 200 
                        : 300
                    )}
                  </span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-neutral-300 text-base">
                <span className="font-semibold text-brand-pine">Total</span>
                <span className="font-bold text-brand-pine">{formatPrice(finalPrice)}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Regular Size Selector (for non-bed products) */}
      {!product.variants && product.sizes && product.sizes.length > 0 && (
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
