'use client'

import { Product } from '@/lib/products'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <div className="max-w-4xl mb-24">
      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
          <TabsTrigger value="care">Care</TabsTrigger>
        </TabsList>

        <TabsContent value="description">
          <div className="prose prose-neutral max-w-none font-body">
            <p className="text-base leading-relaxed text-neutral-700">
              {product.description}
            </p>
            <p className="text-base leading-relaxed text-neutral-700 mt-4">
              Each piece is meticulously handcrafted in our Victoria workshop, 
              combining traditional joinery techniques with contemporary design. 
              Our commitment to sustainable sourcing means every material is 
              carefully selected from certified suppliers.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="materials">
          <div className="prose prose-neutral max-w-none font-body">
            <h3 className="text-lg font-display font-semibold text-brand-pine mb-4">
              Materials Used
            </h3>
            <ul className="space-y-2 text-base text-neutral-700">
              {product.materials.map((material) => (
                <li key={material}>• {material}</li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-neutral-700 mt-6">
              All wood is sustainably harvested from certified forestry programs. 
              We use natural oil and wax finishes that are non-toxic and enhance 
              the wood&apos;s natural beauty while providing protection.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="dimensions">
          <div className="prose prose-neutral max-w-none font-body">
            <h3 className="text-lg font-display font-semibold text-brand-pine mb-4">
              Product Dimensions
            </h3>
            {product.dimensions ? (
              <div className="text-base text-neutral-700">
                <p>Width: {product.dimensions.width} {product.dimensions.unit}</p>
                <p>Depth: {product.dimensions.depth} {product.dimensions.unit}</p>
                <p>Height: {product.dimensions.height} {product.dimensions.unit}</p>
              </div>
            ) : (
              <p className="text-base text-neutral-700">
                Dimensions vary by size selection. Contact us for specific measurements.
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="care">
          <div className="prose prose-neutral max-w-none font-body">
            <h3 className="text-lg font-display font-semibold text-brand-pine mb-4">
              Care Instructions
            </h3>
            <p className="text-base leading-relaxed text-neutral-700">
              {product.care || 'Wipe clean with a soft, damp cloth. Avoid harsh chemicals and abrasive cleaners.'}
            </p>
            <div className="mt-6 space-y-2 text-base text-neutral-700">
              <p>• Keep away from direct sunlight to prevent fading</p>
              <p>• Maintain consistent humidity levels (40-60%)</p>
              <p>• Re-apply natural oil or wax annually for best results</p>
              <p>• Use coasters and placemats to protect surfaces</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
