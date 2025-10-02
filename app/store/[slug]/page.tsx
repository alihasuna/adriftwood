import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts } from '@/lib/products'
import { createMetadata } from '@/lib/seo'
import { ProductGallery } from '@/components/product/gallery'
import { ProductInfo } from '@/components/product/info'
import { ProductTabs } from '@/components/product/tabs'
import { RelatedProducts } from '@/components/product/related-products'
import { StructuredData } from '@/components/seo/structured-data'
import { getProductSchema, getBreadcrumbSchema } from '@/lib/structured-data'

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
    title: `${product.name} - ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`,
    description: `${product.description} Made with ${product.materials.join(', ')}. ${product.inStock ? 'In stock' : 'Pre-order'} now. $${product.price} CAD.`,
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

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Store', url: '/store' },
    { name: product.category.charAt(0).toUpperCase() + product.category.slice(1), url: `/store?category=${product.category}` },
    { name: product.name, url: `/store/${product.slug}` },
  ]

  return (
    <>
      <StructuredData data={getProductSchema(product)} />
      <StructuredData data={getBreadcrumbSchema(breadcrumbs)} />
      <div className="min-h-screen bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          {/* Breadcrumbs for navigation context */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-body text-neutral-600">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-brand-pine font-medium">{crumb.name}</span>
                  ) : (
                    <a href={crumb.url} className="hover:text-brand-bronze transition-colors">
                      {crumb.name}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>

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
    </>
  )
}
