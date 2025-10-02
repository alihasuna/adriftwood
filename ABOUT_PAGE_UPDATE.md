# About Page Design Update

## Overview

The About page has been completely redesigned to match the minimalist, luxury aesthetic of the homepage while adding an amazing interactive Founders showcase that tells the story of the people behind Adriftwood Co.

## Key Changes

### 1. **Hero Section** (`components/about/hero.tsx`)
- **Redesigned to match homepage hero**:
  - Full-screen height with parallax background
  - Oversized typography: "OUR STORY" in massive display font
  - Elegant reveal animations with staggered timing
  - Minimal scroll indicator with smooth animation
  - Side text showing "Since 2018" in vertical orientation
  - Cleaner overlay for better contrast

### 2. **Manifesto Section** (`components/about/manifesto.tsx`)
- **Enhanced with homepage styling**:
  - Centered, larger typography matching homepage scale
  - Increased spacing and breathing room
  - Text-centered layout for better visual flow
  - Dark featured callout section with white text
  - Consistent animation patterns from homepage
  - Removed sidebar accents for cleaner look

### 3. **NEW: Founders Showcase** (`components/about/founders.tsx`)
✨ **This is the amazing new interaction featuring the founders and story!**

#### Features:
- **Interactive Founder Cards**:
  - Three founder portraits in a grid layout
  - Hover effects with image zoom and scale animations
  - Quote icons appear on hover
  - Focus badges showing each founder's specialty
  - Smooth spring animations for tactile feedback

- **Click-to-Expand Modal**:
  - Full-screen modal with detailed founder information
  - Large portrait on the left, content on the right
  - Featured quote in styled callout box
  - Full biography and key achievements
  - Contact links (email, LinkedIn)
  - Smooth entrance/exit animations

- **Amazing Animations**:
  - Staggered card reveals on scroll
  - Parallax background elements
  - Magnetic hover effects
  - Scale and rotation on card entrance
  - Modal spring animation
  - Smooth backdrop blur

#### Founder Profiles:
1. **Sarah Chen** - Master Craftsperson & Co-Founder
   - Focus: Design & Craftsmanship
   - Achievement: Award-winning designer featured in Design Canada

2. **Marcus Whitfield** - Sustainability Director & Co-Founder
   - Focus: Sustainable Sourcing
   - Achievement: Led company to carbon-neutral production

3. **Elena Rodriguez** - Creative Director & Co-Founder
   - Focus: Design Philosophy
   - Achievement: Launched 3 award-winning collections

### 4. **Page Structure** (`app/about/page.tsx`)
**New flow matching homepage**:
1. Hero (full-screen)
2. Manifesto (centered, spacious)
3. **Founders** (NEW - interactive showcase)
4. Timeline (journey)
5. Factory Stats (by the numbers)
6. Project Mosaic (visual gallery)
7. Newsletter CTA (engagement)

## Design Principles Applied

### Minimalist Luxury
- Generous white space
- Large, bold typography
- Clean lines and simple geometry
- Sophisticated color palette

### Typography Hierarchy
- Display font (Alta) for headings
- Body font (Montserrat) for content
- Oversized hero text matching homepage
- Consistent sizing and spacing

### Motion & Animation
- Smooth, elegant transitions
- Parallax scrolling effects
- Staggered element reveals
- Spring-based interactions
- Hover state micro-interactions

### Color & Contrast
- Neutral backgrounds (white/off-white)
- Dark text for readability
- Brand accent colors (apricot, sage, pine)
- High contrast for accessibility

## Technical Implementation

### New Components
- `components/about/founders.tsx` - Interactive founder showcase

### Updated Components
- `components/about/hero.tsx` - Matches homepage hero
- `components/about/manifesto.tsx` - Centered, minimalist layout

### Dependencies
- Framer Motion for animations
- Lucide React for icons
- Next.js Image for optimized images

### Animation Libraries Used
- `@/lib/advanced-motion` - Sophisticated animation variants
- Spring physics for natural movement
- Scroll-based parallax
- Viewport-triggered reveals

## Image Requirements

### Founder Images Needed
Create the following images in `/public/images/team/`:
- `sarah-chen.jpg` (1200x1600px, 3:4 ratio)
- `marcus-whitfield.jpg` (1200x1600px, 3:4 ratio)
- `elena-rodriguez.jpg` (1200x1600px, 3:4 ratio)

See `/public/images/team/README.md` for detailed image specifications.

## User Experience Highlights

### Interactive Storytelling
The Founders section creates an engaging narrative:
1. **Discovery**: Users see three compelling cards
2. **Interest**: Hover reveals more context
3. **Engagement**: Click opens detailed story
4. **Connection**: Contact information for each founder

### Progressive Disclosure
- Overview at card level
- More context on hover
- Full story on click
- Smooth transitions throughout

### Accessibility
- Keyboard navigation support
- Focus indicators
- Semantic HTML
- Alt text for images
- Reduced motion support

## Performance Optimizations

- Lazy-loaded images
- Optimized animations (GPU-accelerated)
- Conditional rendering (modal only when needed)
- Efficient re-renders with React best practices
- Responsive images with Next.js Image

## Responsive Design

### Mobile (< 768px)
- Single column layout
- Stacked founder cards
- Full-width modal
- Reduced spacing

### Tablet (768px - 1024px)
- Two-column founder grid
- Adjusted typography sizes
- Optimized modal layout

### Desktop (> 1024px)
- Three-column founder grid
- Full-scale animations
- Side-by-side modal layout
- Maximum visual impact

## Next Steps

1. **Add founder images** to `/public/images/team/`
2. **Test the interactive modal** by clicking on founder cards
3. **Customize founder content** in `components/about/founders.tsx`
4. **Review animations** for brand alignment
5. **Test responsive behavior** across devices

## Customization

To customize the founders:
1. Edit the `founders` array in `components/about/founders.tsx`
2. Update names, roles, bios, quotes, and achievements
3. Add actual email addresses and LinkedIn URLs
4. Adjust images and styling as needed

## Design Philosophy

This update transforms the About page from informational to inspirational:
- **Before**: Traditional about page with static content
- **After**: Immersive storytelling experience with interactive elements

The Founders showcase serves as the emotional heart of the page, putting faces and stories to the brand promise of craftsmanship and sustainability.

---

**Built with attention to detail, just like Adriftwood furniture.** ✨
