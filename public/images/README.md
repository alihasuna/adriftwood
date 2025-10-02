# Image Assets Guide

This directory contains all imagery for the Adriftwood Co. website.

## Directory Structure

```
/images/
├── hero-forest.jpg                 # Home page hero (2400×1600px min)
├── about-workshop.jpg              # About page hero (2400×1600px min)
├── collections-hero.jpg            # Collections page hero (2400×1600px min)
├── og-image.jpg                    # Open Graph image (1200×630px)
│
├── /categories/                    # Category tile images (800×1067px, 3:4 ratio)
│   ├── chairs.jpg
│   ├── tables.jpg
│   ├── lamps.jpg
│   └── shelves.jpg
│
├── /products/                      # Product photography (1200×1200px min, square)
│   ├── nordic-oak-chair-1.jpg
│   ├── nordic-oak-chair-2.jpg
│   ├── live-edge-table-1.jpg
│   ├── live-edge-table-2.jpg
│   ├── ceramic-lamp-1.jpg
│   ├── ceramic-lamp-2.jpg
│   ├── wall-shelf-1.jpg
│   ├── wall-shelf-2.jpg
│   ├── walnut-side-table-1.jpg
│   ├── walnut-side-table-2.jpg
│   ├── pendant-light-1.jpg
│   ├── pendant-light-2.jpg
│   ├── windsor-chair-1.jpg
│   ├── windsor-chair-2.jpg
│   ├── floating-shelf-1.jpg
│   └── floating-shelf-2.jpg
│
├── /lookbook/                      # Editorial lifestyle images (1920×1200px min)
│   ├── nordic-minimal.jpg
│   ├── natural-light.jpg
│   ├── forest-retreat.jpg
│   ├── coastal-living.jpg
│   ├── workshop.jpg
│   └── classics.jpg
│
└── /projects/                      # About page project images (1200×900px min, 4:3 ratio)
    ├── workshop-1.jpg
    ├── forest-1.jpg
    ├── install-1.jpg
    └── exhibition-1.jpg
```

## Image Specifications

### Format & Quality
- **Format:** JPEG (for photos), WebP (optional, for better compression)
- **Quality:** 80-90% for JPEG
- **Color Space:** sRGB
- **Optimization:** Use tools like ImageOptim, TinyPNG, or Squoosh

### Dimensions by Type

| Type | Aspect Ratio | Minimum Size | Notes |
|------|-------------|--------------|-------|
| Hero Images | 3:2 | 2400×1600px | Full-width backgrounds |
| Category Tiles | 3:4 (portrait) | 800×1067px | Vertical orientation |
| Products | 1:1 (square) | 1200×1200px | Two images per product |
| Lookbook | 16:10 | 1920×1200px | Landscape editorial shots |
| Projects | 4:3 | 1200×900px | Project showcase images |
| Open Graph | 1.91:1 | 1200×630px | Social media preview |

## Content Guidelines

### Photography Style
- **Aesthetic:** Minimal, calm, nature-centric
- **Lighting:** Natural light preferred; soft, diffused
- **Composition:** Clean backgrounds, thoughtful negative space
- **Color Palette:** Earthy tones, muted greens, warm woods, natural textures

### Hero Images
- Forest environments (Pacific Northwest aesthetic)
- Workshop/craft scenes
- Natural textures (wood grain, stone, linen)
- Soft focus or cinematic depth of field

### Product Images
- **Primary Image:** Straight-on product shot, clean background
- **Secondary Image:** Angled view or lifestyle context
- Consistent lighting across all products
- Show texture and craftsmanship details

### Lookbook Images
- Furniture in curated interior settings
- Natural environments (cabins, studios, forest homes)
- Lifestyle moments (reading corner, dining table with food)
- Emphasis on atmosphere and mood

### Project Images
- Workshop process shots
- Forest/sourcing locations
- Installation/delivery moments
- Exhibition or event coverage

## Placeholder Resources

Until you have final photography, use free stock images from:

### Recommended Sources
1. **Unsplash** (unsplash.com)
   - Search: "wood furniture", "minimalist interior", "scandinavian design"
   - Search: "pacific northwest forest", "workshop", "craftsman"
   
2. **Pexels** (pexels.com)
   - Search: "handmade furniture", "natural wood", "artisan"
   - Search: "forest cabin", "modern interior"

3. **Pixabay** (pixabay.com)
   - Free for commercial use
   - Search: "wooden furniture", "minimalist home"

### Example Searches
- Hero: "pacific northwest forest fog"
- Products: "wooden chair white background"
- Lookbook: "minimalist scandinavian interior"
- Workshop: "woodworking craftsman"

## Image Optimization

Before adding images to this directory:

1. **Resize** to appropriate dimensions (don't use oversized images)
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com) - PNG/JPEG compression
   - [Squoosh](https://squoosh.app) - Advanced web optimization
   - ImageOptim (Mac) or FileOptimizer (Windows)
3. **Convert** to WebP for better compression (optional)
4. **Name** files descriptively and consistently

## Next.js Image Component

All images are used through Next.js `<Image>` component for:
- Automatic optimization
- Responsive sizing
- Lazy loading
- Blur placeholder support

Example usage in code:
```tsx
<Image
  src="/images/products/nordic-oak-chair-1.jpg"
  alt="Nordic Oak Chair"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Credits

Remember to credit photographers if using stock images:
- Add credits to footer or dedicated page
- Follow license requirements (CC0, Unsplash License, etc.)

---

**Note:** This is a placeholder structure. Replace with professional product photography and branded imagery before launch.
