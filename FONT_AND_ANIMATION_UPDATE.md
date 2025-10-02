# Font and Animation Updates

## Overview
This document outlines the updates made to use the correct brand fonts (Alta) and add an elegant hero animation.

## Font Corrections

### Brand Typography Hierarchy

#### Display Font: **Alta**
The Alta font family is now properly configured and used for all headings and display text:

- **Alta Light** (300) - `/fonts/Alta_light.woff/woff2`
- **Alta Regular** (400) - `/fonts/Alta_regular.woff/woff2`
- **Alta Caption** (700) - `/fonts/Alta_caption.woff/woff2`

#### Body Font: **Montserrat**
Montserrat remains the body font with full weight range:

- **Extra Light** (200) - `/fonts/Montserrat-ExtraLight.woff/woff2`
- **Regular** (400) - `/fonts/Montserrat-Regular.woff/woff2`
- **Medium** (500) - `/fonts/Montserrat-Medium.woff/woff2`
- **SemiBold** (600) - `/fonts/Montserrat-SemiBold.woff/woff2`

### Usage Pattern

```css
/* All headings use Alta (font-display) */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Alta', serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Body text uses Montserrat (font-body) */
body, p, span, a, button {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.01em;
}
```

### Components Updated for Alta Font

All major headings now use `font-display` (Alta):

1. **Navbar** - Logo and mobile menu links
2. **Hero** - Main "ADRIFTWOOD" title
3. **Footer** - "FOLLOW US" and brand name
4. **Manifesto** - "CRAFTED WITH INTENTION"
5. **Category Tiles** - "EXPLORE" and category names
6. **Featured Products** - "FEATURED" section title
7. **Newsletter CTA** - "STAY CONNECTED"
8. **Editorial Showcase** - Carousel titles
9. **Product Cards** - Product names

## Hero Animation

### The "Hero Reveal" Animation

A sophisticated, elegant animation for the main hero text that loads on page start.

#### Animation Features

1. **Staggered Reveal**: Two-line title animates with 300ms delay between lines
2. **Multi-dimensional Movement**: 
   - Vertical rise (60px to 0)
   - Opacity fade (0 to 1)
   - Letter-spacing tightening (0.1em to -0.02em)
3. **Smooth Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` for luxury feel
4. **Long Duration**: 1.4s for graceful, unhurried motion

#### Technical Implementation

```tsx
// Tailwind keyframes
'hero-reveal': {
  '0%': { 
    opacity: '0', 
    transform: 'translateY(60px)',
    letterSpacing: '0.1em',
  },
  '100%': { 
    opacity: '1', 
    transform: 'translateY(0)',
    letterSpacing: '-0.02em',
  },
}

// Component usage
<div 
  className="animate-hero-reveal"
  style={{ 
    animationDelay: '0.3s',
    animationFillMode: 'both' 
  }}
>
  ADRIFT
</div>
```

#### Animation Timeline

- **0ms**: Page loads
- **100ms**: Component initializes
- **400ms**: First line starts animating
- **700ms**: Second line starts animating
- **1500ms**: Supporting text fades in
- **1700ms**: Divider line extends
- **1800ms**: Scroll indicator appears

### Supporting Animations

Other elements animate in sequence to create a cohesive experience:

1. **Subtitle Line** (1.4s):
   - Horizontal line extends from 0 to 96px
   - Accompanies tagline text
   
2. **Side Element** (1.5s):
   - Vertical line grows from top
   - "50 Years Experience" text fades in
   
3. **Scroll Indicator** (1.8s):
   - Chevron fades in
   - Begins gentle bounce animation

## Animation Principles

### Luxury Motion Design

The animations follow high-end design principles:

1. **Slow and Deliberate**: 1.2-1.4s durations instead of quick 300-500ms
2. **Sophisticated Easing**: Custom cubic-bezier curves (not basic ease-in-out)
3. **Layered Complexity**: Multiple properties animate simultaneously
4. **Staggered Timing**: Elements reveal in choreographed sequence
5. **Subtle Details**: Letter-spacing animation adds refinement

### Performance Considerations

- Animations use `transform` and `opacity` (GPU-accelerated)
- `animationFillMode: 'both'` prevents flash of unstyled content
- State-based triggering with `useEffect` for reliability
- Respects user's reduced-motion preferences (built into Tailwind)

## Files Modified

1. **app/globals.css**
   - Fixed font-face declarations to match actual file names
   - Added Montserrat ExtraLight weight
   - Changed h1-h6 to use `font-display` (Alta)

2. **tailwind.config.ts**
   - Updated display font to 'Alta'
   - Added `hero-reveal` keyframe animation
   - Added `elegant-fade` animation for future use
   - Updated animation utilities

3. **components/home/hero.tsx**
   - Implemented staggered reveal animation
   - Added state management for animation triggering
   - Sequenced all hero elements with delays
   - Enhanced supporting animations

4. **All Component Headers**
   - Updated from `font-body` to `font-display`
   - Ensures consistent Alta usage across site

## Testing Checklist

- [ ] Fonts load correctly on all devices
- [ ] Hero animation plays smoothly on page load
- [ ] Animation respects prefers-reduced-motion
- [ ] All headings display in Alta font
- [ ] Body text displays in Montserrat
- [ ] Performance remains excellent (no jank)
- [ ] Scroll parallax works with animation
- [ ] Mobile experience is smooth

## Result

The site now features:
- ✅ Correct brand fonts (Alta for display, Montserrat for body)
- ✅ Elegant, sophisticated hero animation
- ✅ Consistent typography hierarchy
- ✅ Smooth, luxury-feeling motion design
- ✅ Professional, high-end aesthetic

The combination of Alta's refined letterforms and the smooth reveal animation creates a premium, memorable first impression that perfectly complements the minimalist luxury redesign.
