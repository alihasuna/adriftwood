'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { Product } from '@/lib/products'
import { formatPrice } from '@/lib/format'
import { useStore } from '@/lib/store'
import { Button } from './button'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useStore()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    })
  }

  return (
    <Link href={`/store/${product.slug}`}>
      <motion.div
        className="group relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Product Image - Clean and minimal */}
        <motion.div
          className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4"
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-500"
            style={{ opacity: isHovered && product.images[1] ? 0 : 1 }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Secondary image on hover */}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              fill
              className="object-cover transition-opacity duration-500"
              style={{ opacity: isHovered ? 1 : 0 }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          {/* Stock Badge - Minimal */}
          {!product.inStock && (
            <div className="absolute top-4 right-4 bg-neutral-900 text-neutral-50 text-xs font-body px-4 py-2 tracking-wide">
              OUT OF STOCK
            </div>
          )}

          {/* Quick Add Button - Minimal */}
          <div
            className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"
          >
            <Button
              onClick={handleAddToCart}
              className="w-full bg-neutral-50 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 border border-neutral-900 font-medium tracking-wide"
              disabled={!product.inStock}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              ADD TO CART
            </Button>
          </div>
        </motion.div>

        {/* Product Info - Minimal typography */}
        <div className="space-y-2">
          <h3 className="text-lg font-display font-normal text-neutral-900 tracking-tight">
            {product.name}
          </h3>
          <p className="text-sm font-body text-neutral-500 uppercase tracking-wider">
            {product.category}
          </p>
          <p className="text-base font-body font-medium text-neutral-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}