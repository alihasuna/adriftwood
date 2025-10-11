/**
 * Real Adriftwood product data
 */

export type Category = 'beds' | 'side-tables' | 'art'

export interface ProductVariant {
  size: string
  price: number
}

export interface Product {
  id: string
  slug: string
  name: string
  category: Category
  price: number // Base price
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
  variants?: ProductVariant[]
  finishes?: Array<{ name: string; price: number }>
  woodTypes?: string[]
  care?: string
  partner?: string
}

export const products: Product[] = [
  // Bed Frames
  {
    id: '1',
    slug: 'pine-haven-platform',
    name: 'Pine Haven Platform',
    category: 'beds',
    price: 1299,
    description: 'This frame is hand made entirely from rich Canadian pine. Minimalist design that allows the soft warmth of the wood to speak for itself. This bed frame is built for strength, featuring 5.5-inch slats for superior support. 2.5-inch precision hardware for a secure and accurate assembly. Blending the character of the wood and a nod to Scandinavian design, this beautiful frame brings a contemporary modern cabin warmth to any sleeping space.',
    images: [
      '/images/Products_real/Pine Haven/Pine-Platform-Bedframe-Queen size.png',
      '/images/Products_real/Pine Haven/Pine-Platform-Bedframe-Queen size(1).png',
      '/images/Products_real/Pine Haven/home page banner 3.jpg',
    ],
    materials: ['Canadian Pine', '5.5-inch Slats', 'Precision Hardware'],
    inStock: true,
    featured: true,
    partner: 'Resthouse',
    variants: [
      { size: 'Twin', price: 1299 },
      { size: 'Twin XL', price: 1299 },
      { size: 'Full/Double', price: 1599 },
      { size: 'Full/Double XL', price: 1599 },
      { size: 'Queen', price: 1799 },
      { size: 'King', price: 1999 },
    ],
    finishes: [
      { name: 'Beeswax', price: 0 },
      { name: 'Natural', price: 0 },
      { name: 'Water-based Spray', price: 200 },
    ],
    care: 'Wipe clean with a damp cloth. Reapply finish annually for best results.',
  },
  {
    id: '2',
    slug: 'cedar-crest-platform',
    name: 'Cedar Crest Platform',
    category: 'beds',
    price: 1599,
    description: 'Hand made entirely of rescued cedar from Vancouver Island. This frame honors the forests of the island. A timeless design with supple rounded corners that compliment the softness and warmth of the cedar. This bed frame is built for strength, featuring 5.5-inch slats for superior support. 2.5-inch precision hardware for a secure and accurate assembly. A modern creation that holds value in the materials used.',
    images: [
      '/images/Products_real/Cedar Crest/adrift-cedar-crest-bed-frame-lifestyle.png',
      '/images/Products_real/Cedar Crest/adrift-cedar-crest-bed-frame-lifestyle(1).png',
      '/images/Products_real/Cedar Crest/adrift-cedar-crest-bed-frame-lifestyle(2).png',
      '/images/Products_real/Cedar Crest/openning photo.jpg',
    ],
    materials: ['Rescued Island Cedar', '5.5-inch Slats', 'Precision Hardware'],
    inStock: true,
    featured: true,
    partner: 'Resthouse',
    variants: [
      { size: 'Twin', price: 1599 },
      { size: 'Twin XL', price: 1599 },
      { size: 'Full/Double', price: 1799 },
      { size: 'Full/Double XL', price: 1799 },
      { size: 'Queen', price: 1899 },
      { size: 'King', price: 2199 },
    ],
    woodTypes: ['Rescued Island Cedar', 'Canadian Cedar'],
    finishes: [
      { name: 'Beeswax', price: 0 },
      { name: 'Natural', price: 0 },
      { name: 'Water-based Spray', price: 200 },
    ],
    care: 'Naturally antimicrobial. Wipe clean with a damp cloth. Enjoy the natural aroma of cedar.',
  },
  {
    id: '3',
    slug: 'birchwood-north',
    name: 'Birchwood North Bed Frame',
    category: 'beds',
    price: 2499,
    description: 'Premium birchwood construction featuring elegant grain patterns and exceptional durability. This frame represents the pinnacle of Canadian craftsmanship with superior joinery and finish. Built with 5.5-inch slats for optimal support and 2.5-inch precision hardware.',
    images: [
      '/images/Products_real/Pine Haven/Pine-Platform-Bedframe-Queen size.png',
    ],
    materials: ['Premium Birchwood', '5.5-inch Slats', 'Precision Hardware'],
    inStock: true,
    featured: true,
    partner: 'Resthouse',
    variants: [
      { size: 'Twin', price: 2499 },
      { size: 'Twin XL', price: 2499 },
      { size: 'Full/Double', price: 2899 },
      { size: 'Full/Double XL', price: 2899 },
      { size: 'Queen', price: 2999 },
      { size: 'King', price: 3499 },
    ],
    finishes: [
      { name: 'Beeswax', price: 0 },
      { name: 'Natural', price: 0 },
      { name: 'Water-based Spray', price: 200 },
    ],
    care: 'Wipe with soft cloth. Re-finish annually to maintain luster.',
  },
  {
    id: '4',
    slug: 'walnut-platform',
    name: 'Live Black Walnut Platform',
    category: 'beds',
    price: 6444,
    description: 'Our most luxurious bed frame featuring stunning live-edge black walnut. Each piece showcases the natural beauty of the wood grain and edge, making every frame truly one-of-a-kind. Premium construction with 5.5-inch slats and museum-quality finish.',
    images: [
      '/images/Products_real/Walnut Platform/Walnut-Platform-Bedframe-King.jpg',
      '/images/Products_real/Walnut Platform/home page banner 5.jpg',
    ],
    materials: ['Live Black Walnut', '5.5-inch Slats', 'Premium Hardware'],
    inStock: true,
    featured: true,
    partner: 'Resthouse',
    variants: [
      { size: 'Queen', price: 6444 },
      { size: 'King', price: 6999 },
    ],
    care: 'Museum-quality finish. Dust regularly with soft cloth. Professional refinishing recommended every 5 years.',
  },

  // Side Tables
  {
    id: '5',
    slug: 'cedar-crest-nightstand',
    name: 'Cedar Crest Night Stand',
    category: 'side-tables',
    price: 455,
    description: 'Handcrafted nightstand featuring the same rescued Vancouver Island cedar as our Cedar Crest bed frame. Perfectly complements the bed collection with matching rounded corners and warm cedar tones. Ideal bedside companion with ample surface space.',
    images: [
      '/images/Products_real/Cedar Crest Night Stand/#1 CEDAR-NIGHTSTAND-SIDETABLE.png',
      '/images/Products_real/Cedar Crest Night Stand/CEDAR-NIGHTSTAND-SIDETABLE.png',
      '/images/Products_real/Cedar Crest Night Stand/CEDAR-NIGHTSTAND-SIDETABLE(1).png',
      '/images/Products_real/Cedar Crest Night Stand/CEDAR-NIGHTSTAND-SIDETABLE(2).png',
    ],
    materials: ['Rescued Island Cedar', 'Natural Finish'],
    dimensions: { width: 16, depth: 22, height: 22, unit: 'in' },
    inStock: true,
    featured: true,
    sizes: ['16" W × 22" H', '22" W × 22" H'],
    care: 'Wipe clean. Naturally antimicrobial cedar.',
  },
  {
    id: '6',
    slug: 'pine-haven-side-table',
    name: 'Pine Haven Side Table',
    category: 'side-tables',
    price: 455,
    description: 'Elegant side table crafted from rich Canadian pine to match the Pine Haven bed collection. Clean Scandinavian lines and warm wood tones create a perfect bedside or accent table.',
    images: [
      '/images/Products_real/Pine Haven/Pine-Platform-Bedframe-Queen size.png',
    ],
    materials: ['Canadian Pine', 'Natural Finish'],
    dimensions: { width: 16, depth: 22, height: 22, unit: 'in' },
    inStock: true,
    featured: false,
    sizes: ['16" W × 22" H', '22" W × 22" H'],
    care: 'Wipe with damp cloth. Reapply finish as needed.',
  },
  {
    id: '7',
    slug: 'walnut-side-table',
    name: 'Walnut Side Table',
    category: 'side-tables',
    price: 455,
    description: 'Sophisticated side table in rich black walnut. Deep tones and beautiful grain patterns make this an heirloom-quality accent piece for any room.',
    images: [
      '/images/Products_real/Walnut Platform/Walnut-Platform-Bedframe-King.jpg',
    ],
    materials: ['Black Walnut', 'Natural Wax Finish'],
    dimensions: { width: 16, depth: 22, height: 22, unit: 'in' },
    inStock: true,
    featured: false,
    sizes: ['16" W × 22" H', '22" W × 22" H'],
    care: 'Dust regularly. Re-wax every 6-12 months.',
  },

  // Art & Sculptures
  {
    id: '8',
    slug: 'small-driftwood-sculpture',
    name: 'Small Driftwood Sculpture',
    category: 'art',
    price: 199,
    description: 'Sourced from the shores of Vancouver Island, each piece of driftwood carries a story of the Pacific West Coast. Shaped over time by the waves, rocks, sand and salt. Naturally transformed into stand-alone works of art, these forms honor both ocean and land. Each creation captures the wild, untamed spirit of the island, paying tribute to its rhythms, resilience, and raw beauty.',
    images: [
      '/images/Products_real/Art/driftwood.2.JPG',
      '/images/Products_real/Art/Home4.JPG',
      '/images/Products_real/Art/IMG_2006.PNG',
    ],
    materials: ['Natural Driftwood', 'Vancouver Island Sourced'],
    inStock: true,
    featured: true,
    care: 'Display away from direct moisture. Dust gently.',
  },
  {
    id: '9',
    slug: 'large-driftwood-sculpture',
    name: 'Large Driftwood Sculpture',
    category: 'art',
    price: 2999,
    description: 'Statement piece sourced from the shores of Vancouver Island. Each large sculpture is a museum-quality work of art, shaped by decades of Pacific Ocean waves and weather. These dramatic pieces become the centerpiece of any room, celebrating the raw power and beauty of nature.',
    images: [
      '/images/Products_real/Art/Home4.JPG',
      '/images/Products_real/Art/driftwood.2.JPG',
      '/images/Products_real/Art/IMG_2006.PNG',
    ],
    materials: ['Natural Driftwood', 'Vancouver Island Sourced'],
    inStock: true,
    featured: true,
    care: 'Display away from direct moisture. Professional mounting recommended for large pieces.',
  },
  {
    id: '10',
    slug: 'custom-driftwood-piece',
    name: 'Custom Driftwood Piece',
    category: 'art',
    price: 0,
    description: 'Commission a one-of-a-kind driftwood sculpture tailored to your vision and space. We work with you to select the perfect piece from our curated collection of Vancouver Island driftwood and create something truly unique. Contact us for a personalized quote.',
    images: [
      '/images/Products_real/Custom Collection/table&sculpt.jpg',
      '/images/Products_real/Custom Collection/tablebyself.2.jpg',
    ],
    materials: ['Natural Driftwood', 'Custom Design'],
    inStock: true,
    featured: false,
    care: 'Care instructions provided with custom piece.',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: Category | 'all' | string): Product[] {
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
