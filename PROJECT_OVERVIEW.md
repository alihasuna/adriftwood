# Adriftwood Co. - Project Overview

## 🌲 What's Been Built

A complete, production-ready Next.js 14 website for **Adriftwood Co.**, a sustainable furniture brand based in Victoria, BC. The site features a minimal, nature-centric aesthetic with elegant animations and a focus on craftsmanship.

## ✨ Key Features

### Design & Aesthetics
- ✅ **Brand Typography:** Alta Caption (display) + Montserrat (body/UI)
- ✅ **Color System:** Custom CSS variables for brand colors (pine, sage, apricot, bluegray, mauve)
- ✅ **Nature-Centric:** Forest imagery, natural textures, calm palette
- ✅ **Minimal & Modern:** Clean layouts, generous white space, sophisticated UI

### Technical Implementation
- ✅ **Next.js 14** with App Router and Server Components
- ✅ **TypeScript** for type safety throughout
- ✅ **Tailwind CSS** with custom design tokens
- ✅ **Framer Motion** animations with prefers-reduced-motion support
- ✅ **Zustand** for global state (cart + UI)
- ✅ **shadcn/ui** components (buttons, forms, drawers, tabs)
- ✅ **MDX** support for long-form content
- ✅ **SEO Optimized** with metadata and Open Graph

### Animations & Motion
- ✅ Elegant page transitions (fade + vertical drift)
- ✅ Scroll-triggered reveals with stagger
- ✅ Subtle parallax on hero images
- ✅ Hover animations on products and tiles
- ✅ Custom easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- ✅ Full accessibility with reduced-motion support

### Accessibility & Performance
- ✅ WCAG AA contrast ratios
- ✅ Keyboard navigation
- ✅ Focus states on all interactive elements
- ✅ Screen reader friendly
- ✅ Optimized images with next/image
- ✅ Target: Lighthouse ≥95 across all metrics

## 📄 Pages Implemented

### 1. Home (`/`)
**Sections:**
- Full-screen hero with slow zoom parallax
- Category tiles (Chairs, Tables, Lamps, Shelves) with hover effects
- Brand manifesto with link to About
- Featured products grid (6 items)
- Lookbook horizontal carousel
- Newsletter signup CTA

### 2. About (`/about`)
**Sections:**
- Hero with workshop background
- Brand manifesto (long-form text)
- Project mosaic with location tags
- Timeline (2018-2024) with side-by-side layout
- Factory stats (sustainability metrics)

### 3. Store (`/store`)
**Features:**
- Category filter chips (All, Chairs, Tables, Lamps, Shelves)
- Sort dropdown (Newest, Price, Name)
- Search functionality (ready for implementation)
- Responsive product grid
- Price range and material filters (mobile drawer)
- Hover to reveal secondary product image

### 4. Product Detail (`/store/[slug]`)
**Features:**
- Image gallery with thumbnails
- Product info (title, price, stock badge)
- Size selector (if applicable)
- Material tags
- Dimensions display
- Add to cart functionality
- Tabbed content (Description, Materials, Dimensions, Care)
- Related products section

### 5. Collections (`/collections`)
**Features:**
- Hero section
- Lookbook grid with editorial imagery
- Overlay text and "Shop this look" buttons
- Links to filtered store views

### 6. Contact (`/contact`)
**Features:**
- Contact form (name, email, topic, message)
- Inline validation
- Contact information (email, phone, WhatsApp)
- Workshop hours
- Service area info

### 7. Legal Pages
- Privacy Policy (`/legal/privacy`)
- Terms of Service (`/legal/terms`)

## 🛒 E-Commerce Features

### Shopping Cart (Drawer)
- Add/remove products
- Quantity adjustment
- Subtotal calculation
- Persistent cart state (Zustand)
- Smooth slide-in animation
- Checkout placeholder (ready for Stripe integration)

### Product Management
- 8 sample products with full details
- Category filtering
- Price sorting
- Material filtering
- Stock status
- Size variants

## 🎨 Design System

### Color Tokens
```css
--brand-pine: #1a3a2e       /* Deep green - primary */
--brand-sage: #8b9d83       /* Muted green */
--brand-apricot: #d4a574    /* Warm accent */
--brand-bluegray: #7a95a8   /* Cool accent */
--brand-mauve: #a89099      /* Twilight accent */
--neutral-50 to 900         /* Grayscale palette */
```

### Typography Scale
- **Display (Alta Caption):** h1-h6, hero text, large UI
- **Body (Montserrat):** paragraphs, labels, UI text
- Fallback stacks for both fonts

### Spacing & Layout
- Container: `mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-24` (96px)
- Consistent gaps: 4, 6, 8, 12 (Tailwind scale)

### Animation Timing
- Duration: 220-450ms
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Stagger delay: 80ms between children

## 📁 File Structure

```
Adriftwood_Site/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx              # Site layout (nav + footer)
│   │   └── page.tsx                # Home page
│   ├── about/page.tsx              # About page
│   ├── store/
│   │   ├── page.tsx                # Store index
│   │   └── [slug]/page.tsx         # Product detail
│   ├── collections/page.tsx        # Lookbook
│   ├── contact/page.tsx            # Contact form
│   ├── legal/
│   │   ├── privacy/page.tsx        # Privacy policy
│   │   └── terms/page.tsx          # Terms of service
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles + tokens
│
├── components/
│   ├── ui/                         # Shared components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── cart-drawer.tsx
│   │   ├── product-card.tsx
│   │   ├── newsletter-form.tsx
│   │   └── [shadcn components]
│   ├── home/                       # Home sections
│   ├── about/                      # About sections
│   ├── store/                      # Store components
│   ├── product/                    # Product detail
│   ├── collections/                # Collections
│   └── contact/                    # Contact
│
├── lib/
│   ├── cn.ts                       # Class merger utility
│   ├── format.ts                   # Price/date formatting
│   ├── motion.ts                   # Framer Motion variants
│   ├── products.ts                 # Product data + helpers
│   ├── seo.ts                      # Metadata helpers
│   └── store.ts                    # Zustand store
│
├── public/
│   ├── fonts/                      # [Add font files here]
│   └── images/                     # [Add images here]
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── README.md                       # Main documentation
├── SETUP.md                        # Quick setup guide
└── PROJECT_OVERVIEW.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add fonts to `/public/fonts/`:**
   - Alta Caption (Regular, Medium, Bold)
   - Montserrat (Regular, Medium, SemiBold)
   - Both .woff2 and .woff formats

3. **Add images to `/public/images/`:**
   - See `/public/images/README.md` for structure
   - Use placeholder images from Unsplash/Pexels initially

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 What's Working Now

✅ All pages render without errors  
✅ Navigation and routing  
✅ Cart functionality (add, remove, quantity)  
✅ Product filtering and sorting  
✅ Responsive design (mobile → desktop)  
✅ Animations and transitions  
✅ Form validation  
✅ SEO metadata  

## 🔧 What Needs Customization

### Required (Before Launch)
1. **Add Font Files:** Alta Caption + Montserrat to `/public/fonts/`
2. **Add Images:** Professional photography to `/public/images/`
3. **Update Copy:** Replace placeholder text with real brand content
4. **Configure SEO:** Update site URL, social handles in `lib/seo.ts`
5. **Add Analytics:** Google Analytics or similar

### Optional Enhancements
1. **Payment Integration:** Stripe checkout flow
2. **CMS Integration:** Sanity, Contentful, or similar for product management
3. **Search Functionality:** Algolia or native search
4. **Email Integration:** Newsletter signup (Mailchimp, ConvertKit)
5. **Contact Form Backend:** EmailJS, Formspree, or custom API
6. **Inventory Management:** Real-time stock tracking
7. **User Accounts:** Login, order history, saved items
8. **Reviews & Ratings:** Product review system
9. **Multi-Currency:** International pricing
10. **Blog/Journal:** MDX-powered editorial content

## 📊 Performance Targets

- **Lighthouse Performance:** ≥95
- **Lighthouse Accessibility:** ≥95
- **Lighthouse Best Practices:** ≥95
- **Lighthouse SEO:** ≥95
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1

## 🎨 Inspiration Sources

The design draws from:
- **Kozowood:** Hero imagery, slow zoom effects
- **Harc Studio:** Editorial layouts, case studies
- **Props Coffee:** Category tiles, parallax scrolling
- **Rigas Furniture:** Timeline presentation, bold typography

## 📝 Notes for Developer

### TypeScript
- All components are typed
- Product interface in `lib/products.ts`
- Zustand store has full types

### Responsive Breakpoints
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

### Component Patterns
- Use `'use client'` for interactive components
- Server components by default
- Motion components require client directive

### State Management
- Global: Zustand (`lib/store.ts`)
- Local: React useState
- Forms: Controlled components

### Styling Conventions
- Tailwind utility classes
- CSS variables for colors (never hardcode hex)
- `font-display` for Alta Caption
- `font-body` for Montserrat

## 🤝 Contributing

When making changes:
1. Follow existing component structure
2. Use TypeScript types
3. Maintain accessibility standards
4. Test responsive layouts
5. Check reduced-motion behavior
6. Update documentation as needed

## 📞 Support

- **Documentation:** See README.md and SETUP.md
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/

---

**Built:** 2025  
**Framework:** Next.js 14  
**Status:** Production-ready (pending assets)  
**License:** All rights reserved - Adriftwood Co.
