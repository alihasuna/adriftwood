# 🎬 WOW Scroll Effects & Logo Usage Guide

## ✨ New "Wow" Effects Added

Your site now has **elegant, minimalistic scroll animations** that create impact without being overwhelming. Here's what's been enhanced:

---

## 🎯 Advanced Scroll Animations

### 1. **Parallax Scrolling**
Elements move at different speeds as you scroll, creating depth.

**Where it's used:**
- ✅ **Lookbook section** - Decorative tree moves slower than content
- ✅ **Newsletter section** - Trees rotate and move based on scroll position
- ✅ **Section opacity** - Content fades in and out as you scroll

**The effect:**
```
As you scroll down → Background trees move slower (parallax depth)
                  → Content scales slightly (breathing effect)
                  → Opacity adjusts for smooth transitions
```

### 2. **3D Rotation on Scroll**
Subtle perspective shifts create dimensionality.

**Where it's used:**
- ✅ **Lookbook heading** - Rotates slightly on Y-axis as it appears
- ✅ **Section headers** - Gentle 3D rotation from -10° to 0°

**The effect:**
```
Hidden state: rotateY(-10°), x: -50px
  ↓ (scroll into view)
Visible state: rotateY(0°), x: 0
Result: Text appears to "turn" toward you
```

### 3. **Scale + Blur Entrance**
Content scales up with a simulated blur for a cinematic reveal.

**Where it's used:**
- ✅ **Newsletter form** - Scales from 80% to 100%
- ✅ **Product cards** - Scale from 95% to 100%

**The effect:**
```
Scale: 0.8 → 1.0 (grows as it appears)
Opacity: 0 → 1 (fades in)
Duration: 0.8s with elastic easing
```

### 4. **Sophisticated Stagger**
Child elements appear in sequence with varying delays.

**Where it's used:**
- ✅ **Category tiles** - 150ms delay between each (0.15s)
- ✅ **Product cards** - 120ms delay between each (0.12s)
- ✅ **Lookbook items** - 180ms delay between each (0.18s)

**The effect:**
```
Item 1: appears at 0.0s
Item 2: appears at 0.15s  ← stagger delay
Item 3: appears at 0.30s
Item 4: appears at 0.45s
Creates a cascading waterfall effect
```

### 5. **Scroll-Linked Opacity**
Content visibility tied directly to scroll position.

**Where it's used:**
- ✅ **Section headers** - Fade based on viewport position
- ✅ **Decorative elements** - Appear/disappear with scroll

**The effect:**
```
Scroll position:  0%    30%   70%   100%
Opacity:          0  →  1  →  1  →  0.8
Smooth fade in and out
```

### 6. **Decorative Tree Elements**
Your beautiful tree logo used as subtle decorative accents.

**Where it's used:**
- ✅ **Lookbook section** - Large tree, right side, moves with parallax
- ✅ **Newsletter section** - Small trees that rotate as you scroll
- ✅ **All at 5% opacity** - Subtle, not distracting

---

## 🌲 Your Tree Logo - Usage Guide

### Logo Locations

#### 1. **Navigation Bar** (Top Left)
```
Tree icon + "Adriftwood Co." text
- Hover: Tree scales to 110%
- Size: 8x12 (w-8 h-12)
- Color: brand-pine
```

#### 2. **Footer** (Bottom Left)
```
Tree icon + "Adriftwood Co." text
- Color: brand-apricot (warm accent)
- Size: 6x12 (w-6 h-12)
```

#### 3. **Decorative Elements** (Throughout Pages)
```
Large background trees
- Opacity: 5% (very subtle)
- Movement: Parallax scroll
- Purpose: Brand reinforcement without distraction
```

### Logo Files

**SVG Version** (Recommended):
- `/public/logo.svg` - Full SVG file
- Scalable to any size
- Color: Customizable via CSS

**Inline SVG in Components**:
- Used in navbar, footer
- Color changes via `className="text-brand-pine"`
- Hover effects supported

### Logo Variations

**Primary (Navigation):**
```tsx
<svg className="text-brand-pine">
  {/* tree paths */}
</svg>
```

**Secondary (Footer):**
```tsx
<svg className="text-brand-apricot">
  {/* tree paths */}
</svg>
```

**Watermark (Background):**
```tsx
<svg className="text-brand-pine opacity-5">
  {/* tree paths */}
</svg>
```

---

## 🎨 Animation Specifications

### New Animation Library: `advanced-motion.ts`

**Available effects:**
1. `parallaxUp` - Rise from below with scale
2. `fadeInRotateLeft` - Slide from left with 3D rotation
3. `fadeInRotateRight` - Slide from right with 3D rotation
4. `scaleBlurIn` - Scale up with opacity (simulated blur)
5. `slideRotateUp` - Slide up with subtle rotation
6. `sophisticatedStagger` - Advanced stagger with 180ms delay
7. `imageReveal` - Zoom in from 115% to 100%
8. `floatIn` - Gentle floating entrance
9. `magneticHover` - Magnetic/wiggle on hover

### Easing Curves

**Smooth (Default):**
```js
[0.2, 0.8, 0.2, 1]
Most natural, use for 90% of animations
```

**Elastic:**
```js
[0.6, -0.05, 0.01, 0.99]
Slight bounce, use sparingly for emphasis
```

**Slow:**
```js
[0.25, 0.1, 0.25, 1]
Very gradual, use for large elements
```

---

## 🎭 "Wow" Moments Breakdown

### Home Page Scroll Journey

**Hero Section:**
```
↓ Scroll down
```

**Category Tiles:**
- Appear one by one from bottom
- Scale from 95% → 100%
- 150ms stagger creates cascade
- Hover: Image zooms to 105%

```
↓ Continue scrolling
```

**Manifesto:**
- Title slides from 20px below
- Each paragraph appears sequentially
- Delays create reading rhythm

```
↓ Continue scrolling
```

**Featured Products:**
- Header slides from left
- "View all" slides from right
- Cards rise from 50px below
- 120ms stagger between cards

```
↓ Continue scrolling
```

**Lookbook:**
- Background tree moves with parallax
- Header rotates in 3D (rotateY -10° → 0°)
- Cards appear with sophisticated stagger
- Opacity tied to scroll position

```
↓ Continue scrolling
```

**Newsletter:**
- Background trees rotate as you scroll
- Entire section scales 90% → 100% → 95%
- Form scales up with elastic easing
- Multiple elements choreographed

---

## 💡 Best Practices

### Do's ✅
- Use subtle movements (10-50px max)
- Keep durations between 0.6-1.2s
- Stagger delays between 80-200ms
- Use 5% opacity for decorative elements
- Test on slow scroll AND fast scroll

### Don'ts ❌
- No extreme rotations (>15°)
- No harsh spring/bounce effects
- No distracting colors on backgrounds
- No animations longer than 1.5s
- No auto-playing animations on load (except hero)

---

## 🎯 Performance Notes

All scroll effects use:
- **`useScroll`** from Framer Motion (optimized)
- **`useTransform`** for scroll-linked values
- **`viewport={{ once: true }}`** to trigger only once
- **GPU-accelerated properties** (opacity, transform, scale)

**No performance issues expected!** 🚀

---

## 🔧 Customization

### Adjust Parallax Speed

In `lookbook-carousel.tsx`:
```tsx
// Slower parallax
const y = useTransform(scrollYProgress, [0, 1], [50, -50])

// Faster parallax
const y = useTransform(scrollYProgress, [0, 1], [200, -200])
```

### Adjust Stagger Timing

In any component:
```tsx
staggerChildren: 0.18,  // Change to 0.1 (faster) or 0.25 (slower)
```

### Change Tree Opacity

In decorative elements:
```tsx
className="opacity-5"  // Change to opacity-10 for more visible
```

---

## 🎬 Summary

**What's New:**
1. ✅ **Parallax scrolling** on decorative trees
2. ✅ **3D rotation** on section headers
3. ✅ **Scroll-linked opacity** for smooth fades
4. ✅ **Scale effects** for depth
5. ✅ **Sophisticated stagger** with longer delays
6. ✅ **Tree logo** integrated throughout site
7. ✅ **Advanced motion library** with 10+ effects

**The Result:**
- Elegant, minimalistic animations
- "Wow" factor without being overwhelming
- Brand-consistent tree motif throughout
- Professional, polished feel

---

**All effects are elegant, minimalistic, and create impact! 🌲✨**
