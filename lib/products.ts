/**
 * Mock product data
 */

export type Category = 'chairs' | 'tables' | 'lamps' | 'shelves'

export interface Product {
  id: string
  slug: string
  name: string
  category: Category
  price: number
  description: string
  images: string[]
  materials: string[]
  dimensions?: {
    width: number
    depth: number
    height: number
    unit: 'cm' | 'in'
  }
  inStock: boolean
  featured?: boolean
  sizes?: string[]
  care?: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'nordic-oak-chair',
    name: 'Nordic Oak Chair',
    category: 'chairs',
    price: 425,
    description: 'A minimal, sculptural dining chair crafted from sustainably harvested white oak. Hand-finished with natural oil.',
    images: ['/images/products/nordic-oak-chair-1.jpg', '/images/products/nordic-oak-chair-2.jpg'],
    materials: ['White Oak', 'Natural Oil Finish'],
    dimensions: { width: 45, depth: 52, height: 78, unit: 'cm' },
    inStock: true,
    featured: true,
    care: 'Wipe clean with a damp cloth. Re-oil annually for best results.',
  },
  {
    id: '2',
    slug: 'live-edge-dining-table',
    name: 'Live Edge Dining Table',
    category: 'tables',
    price: 1850,
    description: 'Striking live-edge table featuring a single slab of Pacific Northwest maple. Each piece is one-of-a-kind.',
    images: ['/images/products/live-edge-table-1.jpg', '/images/products/live-edge-table-2.jpg'],
    materials: ['Bigleaf Maple', 'Steel Base', 'Matte Varnish'],
    dimensions: { width: 200, depth: 90, height: 75, unit: 'cm' },
    inStock: true,
    featured: true,
    care: 'Clean with mild soap and water. Avoid direct sunlight to prevent fading.',
  },
  {
    id: '3',
    slug: 'ceramic-table-lamp',
    name: 'Ceramic Table Lamp',
    category: 'lamps',
    price: 185,
    description: 'Hand-thrown ceramic lamp with organic texture and warm linen shade. Perfect for bedside or desk.',
    images: ['/images/products/ceramic-lamp-1.jpg', '/images/products/ceramic-lamp-2.jpg'],
    materials: ['Ceramic', 'Linen Shade', 'Brass Fittings'],
    dimensions: { width: 20, depth: 20, height: 42, unit: 'cm' },
    inStock: true,
    featured: true,
    care: 'Dust regularly. Spot clean shade with gentle fabric cleaner.',
  },
  {
    id: '4',
    slug: 'modular-wall-shelf',
    name: 'Modular Wall Shelf',
    category: 'shelves',
    price: 295,
    description: 'Versatile ash wood shelving system. Configurable to suit any space, from kitchen to study.',
    images: ['/images/products/wall-shelf-1.jpg', '/images/products/wall-shelf-2.jpg'],
    materials: ['Ash Wood', 'Steel Brackets'],
    dimensions: { width: 80, depth: 25, height: 5, unit: 'cm' },
    inStock: true,
    featured: true,
    sizes: ['Small (60cm)', 'Medium (80cm)', 'Large (120cm)'],
    care: 'Wipe with a soft cloth. Check brackets annually.',
  },
  {
    id: '5',
    slug: 'walnut-side-table',
    name: 'Walnut Side Table',
    category: 'tables',
    price: 340,
    description: 'Compact side table in rich walnut. Clean lines and subtle grain make it a timeless accent piece.',
    images: ['/images/products/walnut-side-table-1.jpg', '/images/products/walnut-side-table-2.jpg'],
    materials: ['Black Walnut', 'Natural Wax Finish'],
    dimensions: { width: 40, depth: 40, height: 50, unit: 'cm' },
    inStock: true,
    featured: true,
    care: 'Dust regularly. Re-wax every 6-12 months to maintain finish.',
  },
  {
    id: '6',
    slug: 'woven-pendant-light',
    name: 'Woven Pendant Light',
    category: 'lamps',
    price: 225,
    description: 'Artisan woven pendant in natural jute. Filters light beautifully for a warm, ambient glow.',
    images: ['/images/products/pendant-light-1.jpg', '/images/products/pendant-light-2.jpg'],
    materials: ['Natural Jute', 'Steel Frame'],
    dimensions: { width: 35, depth: 35, height: 30, unit: 'cm' },
    inStock: true,
    featured: true,
    care: 'Dust gently. Avoid moisture.',
  },
  {
    id: '7',
    slug: 'windsor-arm-chair',
    name: 'Windsor Arm Chair',
    category: 'chairs',
    price: 485,
    description: 'Modern reinterpretation of the classic Windsor chair. Comfortable, durable, and beautifully crafted.',
    images: ['/images/products/windsor-chair-1.jpg', '/images/products/windsor-chair-2.jpg'],
    materials: ['Ash Wood', 'Natural Oil Finish'],
    dimensions: { width: 55, depth: 60, height: 85, unit: 'cm' },
    inStock: true,
    care: 'Wipe clean. Re-oil as needed.',
  },
  {
    id: '8',
    slug: 'floating-shelf-set',
    name: 'Floating Shelf Set',
    category: 'shelves',
    price: 165,
    description: 'Set of three floating shelves in walnut. Minimalist design with concealed mounting.',
    images: ['/images/products/floating-shelf-1.jpg', '/images/products/floating-shelf-2.jpg'],
    materials: ['Walnut', 'Hidden Steel Mounting'],
    dimensions: { width: 60, depth: 20, height: 3, unit: 'cm' },
    inStock: true,
    care: 'Wipe with dry cloth. Check mounting quarterly.',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: Category | 'all'): Product[] {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getRelatedProducts(productId: string, category: Category, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== productId && p.category === category)
    .slice(0, limit)
}
