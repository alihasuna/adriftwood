# Adriftwood Co. Website

A production-ready Next.js 14 website for Adriftwood Co., featuring handcrafted furniture with a minimal, nature-centric aesthetic.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Animations:** Framer Motion with accessibility support
- **UI Components:** shadcn/ui + Radix UI
- **State Management:** Zustand
- **Icons:** Lucide React
- **Content:** MDX support for long-form pages

## Design System

### Typography
- **Display Font:** Alta Caption (headings, hero text, large UI elements)
- **Body Font:** Montserrat (paragraphs, UI text, labels)

### Color Palette
Brand colors are defined as CSS variables in `globals.css`:
- `--brand-pine` - Primary deep green
- `--brand-sage` - Muted green
- `--brand-apricot` - Warm accent
- `--brand-bluegray` - Cool accent
- `--brand-mauve` - Twilight accent
- `--neutral-50` through `--neutral-900` - Grayscale

### Animation Philosophy
All animations use:
- Custom easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Durations: 220-450ms
- Full `prefers-reduced-motion` support

## Project Structure

```
/app
  /(site)          # Main site routes
    /page.tsx      # Home page
  /about           # About page
  /store           # Store index & product detail
  /collections     # Lookbook collections
  /contact         # Contact form
  /legal           # Privacy & Terms pages
  /layout.tsx      # Root layout
  /globals.css     # Global styles & design tokens

/components
  /ui              # Reusable UI components
  /home            # Home page sections
  /about           # About page sections
  /store           # Store components
  /product         # Product detail components
  /collections     # Collections components
  /contact         # Contact components

/lib
  /cn.ts           # Class name utility
  /format.ts       # Formatting helpers
  /motion.ts       # Framer Motion variants
  /products.ts     # Product data & utilities
  /seo.ts          # SEO metadata helpers
  /store.ts        # Zustand global store

/public
  /fonts           # Alta Caption & Montserrat font files
  /images          # Site imagery (to be added)
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add font files to `/public/fonts/`:
   - Alta Caption (Regular, Medium, Bold) - .woff2 and .woff formats
   - Montserrat (Regular, Medium, SemiBold) - .woff2 and .woff formats

3. Add images to `/public/images/`:
   - Hero images
   - Category images
   - Product images
   - Lookbook images
   - Project/about images

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

## Image Requirements

### Required Image Directories
Create these directories in `/public/images/`:
- `/images/products/` - Product photography
- `/images/categories/` - Category tile images
- `/images/lookbook/` - Lookbook/collection imagery
- `/images/projects/` - About page project images

### Image Naming Convention
- Hero: `hero-forest.jpg`
- Categories: `categories/chairs.jpg`, `categories/tables.jpg`, etc.
- Products: `products/[slug]-1.jpg`, `products/[slug]-2.jpg`
- Lookbook: `lookbook/[name].jpg`

### Recommended Specifications
- Format: JPEG or WebP
- Hero images: 2400×1600px minimum
- Product images: 1200×1200px minimum
- Category tiles: 800×1067px (3:4 aspect ratio)
- Lookbook: 1920×1200px minimum

## Accessibility Features

- WCAG AA contrast ratios
- Keyboard navigation support
- Focus outlines on all interactive elements
- `prefers-reduced-motion` media query support
- Semantic HTML structure
- Proper ARIA labels and roles
- Screen reader friendly

## SEO Optimization

- Dynamic metadata generation with Open Graph and Twitter Card support
- JSON-LD structured data (ready for implementation)
- Optimized images with `next/image`
- Semantic HTML and heading hierarchy
- Fast page loads with Next.js 14 optimizations

## Performance

- Target Lighthouse scores: ≥95 across all categories
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Fast Time to Interactive (TTI)

## Customization

### Updating Brand Colors
Edit CSS variables in `/app/globals.css`:
```css
:root {
  --brand-pine: #1a3a2e;
  --brand-sage: #8b9d83;
  /* ... etc */
}
```

### Adding Products
Edit `/lib/products.ts` to add new products:
```typescript
{
  id: 'unique-id',
  slug: 'product-slug',
  name: 'Product Name',
  // ... other properties
}
```

### Modifying Animations
Edit animation variants in `/lib/motion.ts`:
```typescript
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}
```

## License

© 2025 Adriftwood Co. All rights reserved.

## Credits

- **Typography:** Alta Caption, Montserrat
- **Framework:** Next.js by Vercel
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
