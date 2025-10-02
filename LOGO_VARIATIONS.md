# 🌲 Tree Logo - All Variations

Your minimalist tree logo is now integrated throughout the site. Here's every way it's being used:

---

## 📍 Logo Placements

### 1. Navigation Bar (Primary)
**Location:** Top left corner  
**Size:** 32px × 48px (w-8 h-12)  
**Color:** `brand-pine` (deep green #1a3a2e)  
**Effect:** Scales to 110% on hover  

**Usage:**
```tsx
<Link href="/" className="flex items-center gap-3 group">
  <div className="w-8 h-12 group-hover:scale-110">
    {/* Tree SVG */}
  </div>
  <span>Adriftwood Co.</span>
</Link>
```

---

### 2. Footer (Secondary)
**Location:** Bottom left, brand section  
**Size:** 24px × 48px (w-6 h-12)  
**Color:** `brand-apricot` (warm accent #d4a574)  
**Effect:** Static, part of brand lockup  

**Why apricot?** Creates visual variety and warmth in the dark footer.

---

### 3. Lookbook Section Decoration
**Location:** Top right, background  
**Size:** 64px × 128px (w-16 h-32)  
**Color:** `brand-pine` at 5% opacity  
**Effect:** Parallax scroll (moves 100px up to -100px down)  

**Code:**
```tsx
<motion.div style={{ y }}>
  {/* Tree moves slower than page scroll */}
</motion.div>
```

---

### 4. Newsletter Section Decoration
**Location:** Top left, background  
**Size:** 48px × 96px (w-12 h-24)  
**Color:** `brand-pine` at 5% opacity  
**Effect:** Rotates 0° to 10° + moves up 50px as you scroll  

**Code:**
```tsx
<motion.div style={{ 
  rotate: useTransform(scrollYProgress, [0, 1], [0, 10]),
  y: useTransform(scrollYProgress, [0, 1], [0, -50])
}}>
  {/* Subtle rotation + movement */}
</motion.div>
```

---

## 🎨 Color Variations

### Primary - Navigation
```css
color: var(--brand-pine)  /* #1a3a2e - Deep forest green */
```
**Use for:** Main logo, primary branding

### Secondary - Footer
```css
color: var(--brand-apricot)  /* #d4a574 - Warm accent */
```
**Use for:** Footer, alternative contexts

### Decorative - Background
```css
color: var(--brand-pine)
opacity: 0.05  /* 5% opacity */
```
**Use for:** Subtle brand reinforcement, backgrounds

### On Dark Backgrounds
```css
color: var(--neutral-50)  /* Near white */
```
**Use for:** Hero sections, dark panels

---

## 📐 Size Guide

| Context | Width | Height | Class |
|---------|-------|--------|-------|
| Navigation | 32px | 48px | `w-8 h-12` |
| Footer | 24px | 48px | `w-6 h-12` |
| Decorative Large | 64px | 128px | `w-16 h-32` |
| Decorative Small | 48px | 96px | `w-12 h-24` |
| Hero (potential) | 80px | 160px | `w-20 h-40` |

---

## 🎭 Animation States

### Hover (Navigation)
```tsx
transition-transform duration-300 ease-smooth
group-hover:scale-110
```
**Result:** Gentle 10% scale up in 300ms

### Parallax Scroll
```tsx
const y = useTransform(scrollYProgress, [0, 1], [100, -100])
```
**Result:** Moves 200px total as page scrolls

### Rotation Scroll
```tsx
const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])
```
**Result:** Rotates 10° as section scrolls into view

---

## 🎨 How to Use in New Components

### Static Logo (Simple)
```tsx
<svg viewBox="0 0 60 120" className="w-8 h-12 text-brand-pine">
  <path d="M30 10 C35 10, 50 15, 55 25..." 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"/>
</svg>
```

### With Hover Effect
```tsx
<div className="w-8 h-12 transition-transform hover:scale-110">
  <svg viewBox="0 0 60 120" className="w-full h-full text-brand-pine">
    {/* SVG path */}
  </svg>
</div>
```

### As Background Decoration
```tsx
<div className="absolute top-10 right-10 w-16 h-32 opacity-5">
  <svg viewBox="0 0 60 120" className="w-full h-full text-brand-pine">
    {/* SVG path */}
  </svg>
</div>
```

### With Parallax
```tsx
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], [100, -100])

<motion.div style={{ y }} className="w-16 h-32 opacity-5">
  <svg viewBox="0 0 60 120" className="w-full h-full text-brand-pine">
    {/* SVG path */}
  </svg>
</motion.div>
```

---

## 💡 Creative Usage Ideas

### 1. **Loading State**
Animate tree "growing" from bottom to top:
```tsx
<motion.div
  initial={{ clipPath: 'inset(100% 0 0 0)' }}
  animate={{ clipPath: 'inset(0% 0 0 0)' }}
  transition={{ duration: 1.5 }}
>
  {/* Tree SVG */}
</motion.div>
```

### 2. **Section Divider**
Use multiple trees in a row:
```tsx
<div className="flex justify-center gap-8 my-16 opacity-10">
  <TreeIcon /> <TreeIcon /> <TreeIcon />
</div>
```

### 3. **Bullet Points**
Replace list bullets with tiny trees:
```tsx
<ul className="space-y-2">
  <li className="flex gap-2">
    <TreeIcon className="w-4 h-8 flex-shrink-0" />
    <span>Your text here</span>
  </li>
</ul>
```

### 4. **404 Page**
Large tree with "Lost in the woods?" message

### 5. **Email Signature**
Small tree icon in email footer

---

## 🎯 Dos and Don'ts

### ✅ Do's
- Use as a subtle decorative element
- Keep opacity at 5-10% for backgrounds
- Use brand-pine or brand-apricot colors
- Scale on hover for interactivity
- Use in multiples for patterns

### ❌ Don'ts
- Don't rotate more than 15°
- Don't use bright/neon colors
- Don't exceed 20% opacity for decoration
- Don't distort the aspect ratio
- Don't use in busy/cluttered areas

---

## 📱 Favicon & Icons

### Favicon (Coming Soon)
Convert logo to favicon:
1. Go to https://favicon.io/favicon-converter/
2. Upload `/public/logo.svg`
3. Download generated files
4. Place in `/public/`

### Social Media Icons
Create different sizes:
- **Twitter:** 400×400px (square crop)
- **Facebook:** 1200×630px (horizontal)
- **Instagram:** 1080×1080px (square)

---

## 🌲 The Tree Represents

- **Sustainability** - Natural, eco-friendly materials
- **Growth** - Timeless design that improves with age
- **Roots** - Pacific Northwest heritage
- **Craftsmanship** - Organic, handmade quality
- **Balance** - Harmony with nature

---

**Your tree logo is now woven throughout the site, reinforcing your brand identity in elegant, minimalistic ways! 🌲**
