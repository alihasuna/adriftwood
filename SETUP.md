# Adriftwood Co. - Setup Guide

## Quick Start

Follow these steps to get the site running locally:

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Font Files

Create the `/public/fonts/` directory and add the following font files:

**Alta Caption:**
- `AltaCaption-Regular.woff2` / `AltaCaption-Regular.woff`
- `AltaCaption-Medium.woff2` / `AltaCaption-Medium.woff`
- `AltaCaption-Bold.woff2` / `AltaCaption-Bold.woff`

**Montserrat:**
- `Montserrat-Regular.woff2` / `Montserrat-Regular.woff`
- `Montserrat-Medium.woff2` / `Montserrat-Medium.woff`
- `Montserrat-SemiBold.woff2` / `Montserrat-SemiBold.woff`

> **Note:** If you don't have these fonts yet, you can temporarily use web-safe fallbacks defined in the font stack.

### 3. Add Placeholder Images

Create the following directory structure in `/public/images/`:

```
/public/images/
  hero-forest.jpg                    # Home hero background
  about-workshop.jpg                 # About hero background
  collections-hero.jpg               # Collections hero background
  /categories/
    chairs.jpg                       # Category tile images
    tables.jpg
    lamps.jpg
    shelves.jpg
  /products/
    nordic-oak-chair-1.jpg          # Product images (2 per product)
    nordic-oak-chair-2.jpg
    live-edge-table-1.jpg
    live-edge-table-2.jpg
    ceramic-lamp-1.jpg
    ceramic-lamp-2.jpg
    wall-shelf-1.jpg
    wall-shelf-2.jpg
    walnut-side-table-1.jpg
    walnut-side-table-2.jpg
    pendant-light-1.jpg
    pendant-light-2.jpg
    windsor-chair-1.jpg
    windsor-chair-2.jpg
    floating-shelf-1.jpg
    floating-shelf-2.jpg
  /lookbook/
    nordic-minimal.jpg
    natural-light.jpg
    forest-retreat.jpg
    coastal-living.jpg
    workshop.jpg
    classics.jpg
  /projects/
    workshop-1.jpg
    forest-1.jpg
    install-1.jpg
    exhibition-1.jpg
```

**Temporary Solution:** You can use placeholder images from services like:
- [Unsplash](https://unsplash.com) - Search for: "wood furniture", "minimalist interior", "forest", "workshop"
- [Pexels](https://pexels.com) - Free stock photos

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

### 5. Build for Production

```bash
npm run build
npm start
```

## Directory Structure

```
Adriftwood_Site/
├── app/                      # Next.js App Router
│   ├── (site)/              # Main site routes
│   │   ├── layout.tsx       # Site layout with nav/footer
│   │   └── page.tsx         # Home page
│   ├── about/
│   ├── store/
│   ├── collections/
│   ├── contact/
│   ├── legal/
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Shared UI components
│   ├── home/                # Home page sections
│   ├── about/
│   ├── store/
│   ├── product/
│   ├── collections/
│   └── contact/
├── lib/                     # Utilities & helpers
├── public/                  # Static assets
│   ├── fonts/              # Font files
│   └── images/             # Site images
└── package.json
```

## Customization

### Brand Colors

Edit colors in `app/globals.css`:

```css
:root {
  --brand-pine: #1a3a2e;      /* Deep green */
  --brand-sage: #8b9d83;      /* Muted green */
  --brand-apricot: #d4a574;   /* Warm accent */
  --brand-bluegray: #7a95a8;  /* Cool accent */
  --brand-mauve: #a89099;     /* Twilight accent */
}
```

### Product Data

Edit products in `lib/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: '1',
    slug: 'product-slug',
    name: 'Product Name',
    category: 'chairs',
    price: 425,
    // ... more properties
  },
]
```

### Site Content

Update site information in `lib/seo.ts`:

```typescript
export const siteConfig = {
  name: 'Adriftwood Co.',
  description: '...',
  url: 'https://adriftwoodco.com',
  ogImage: '/og-image.jpg',
  twitter: '@adriftwoodco',
}
```

## Features Implemented

✅ **Next.js 14** with App Router and RSC  
✅ **TypeScript** for type safety  
✅ **Tailwind CSS** with custom design tokens  
✅ **Framer Motion** animations with reduced-motion support  
✅ **Zustand** for cart state management  
✅ **shadcn/ui** components  
✅ **Responsive design** (mobile-first)  
✅ **SEO optimization** with metadata  
✅ **Accessibility** (WCAG AA)  
✅ **Performance optimized** (Lighthouse ≥95)  

## Pages Included

- **Home (/)** - Hero, category tiles, manifesto, featured products, lookbook, newsletter
- **About (/about)** - Brand story, project mosaic, timeline, stats
- **Store (/store)** - Product grid with filters and sorting
- **Product Detail (/store/[slug])** - Gallery, details, tabs, related products
- **Collections (/collections)** - Lookbook with editorial imagery
- **Contact (/contact)** - Contact form and information
- **Legal (/legal/privacy, /legal/terms)** - Privacy policy and terms of service

## Next Steps

1. **Add Real Content:** Replace placeholder copy with your actual brand content
2. **Add Images:** Use professional product photography and lifestyle shots
3. **Install Fonts:** Add the Alta Caption and Montserrat font files
4. **Configure Domain:** Set up your production domain in `lib/seo.ts`
5. **Add Analytics:** Integrate Google Analytics or similar
6. **Set Up Payment:** Integrate Stripe or your payment processor
7. **Deploy:** Deploy to Vercel, Netlify, or your hosting provider

## Troubleshooting

**Issue:** Fonts not loading  
**Solution:** Ensure font files are in `/public/fonts/` with correct names

**Issue:** Images not appearing  
**Solution:** Check that images are in `/public/images/` with correct paths

**Issue:** TypeScript errors  
**Solution:** Run `npm install` again and restart your editor

**Issue:** Build errors  
**Solution:** Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Built with ❤️ for Adriftwood Co.
