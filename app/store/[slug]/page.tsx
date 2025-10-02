import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '@/lib/products'
import { createMetadata } from '@/lib/seo'
import { ProductGallery } from '@/components/product/gallery'
import { ProductInfo } from '@/components/product/info'
import { ProductTabs } from '@/components/product/tabs'
import { RelatedProducts } from '@/components/product/related-products'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return createMetadata({
      title: 'Product Not Found',
    })
  }

  return createMetadata({
    title: product.name,
    description: product.description,
    image: product.images[0],
    path: `/store/${product.slug}`,
  })
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Product Details Tabs */}
        <ProductTabs product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </div>
    </div>
  )
}
