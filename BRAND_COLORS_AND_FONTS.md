# Adriftwood Brand Colors & Fonts Guide

## 🎨 Brand Color Palette

### Primary Colors

#### **Dark Green (Pine)**
- **Variable:** `--brand-pine`
- **Hex:** `#044002`
- **Usage:** Primary brand color, headers, accents
- **Tailwind:** `bg-brand-pine`, `text-brand-pine`, `border-brand-pine`

#### **Bronze/Beige (Bronze)**
- **Variable:** `--brand-bronze`
- **Hex:** `#BFA68F`
- **Usage:** Secondary color, warm accents, CTAs, highlights
- **Tailwind:** `bg-brand-bronze`, `text-brand-bronze`, `border-brand-bronze`

#### **Light Sage (Sage)**
- **Variable:** `--brand-sage`
- **Hex:** `#CCD9CC`
- **Usage:** Light accents, backgrounds, subtle highlights
- **Tailwind:** `bg-brand-sage`, `text-brand-sage`, `border-brand-sage`

---

### Bronze Variations

#### **Light Bronze**
- **Variable:** `--brand-bronze-light`
- **Hex:** `#D4C3B1`
- **Usage:** Hover states, lighter backgrounds
- **Tailwind:** `bg-brand-bronze-light`, `text-brand-bronze-light`

#### **Dark Bronze**
- **Variable:** `--brand-bronze-dark`
- **Hex:** `#A68D76`
- **Usage:** Deeper accents, borders, shadows
- **Tailwind:** `bg-brand-bronze-dark`, `text-brand-bronze-dark`

---

### Neutral Colors

#### **Bright Palette**
- `neutral-50`: `#FAFAFA` - Bright off-white background
- `neutral-100`: `#F2F2F2` - Light neutral (brand guideline)
- `neutral-200`: `#E5E5E5` - Subtle borders, dividers
- `neutral-300`: `#D4D4D4` - Medium borders

#### **Mid-Range**
- `neutral-400`: `#A3A3A3` - Muted text
- `neutral-500`: `#737373` - Secondary text
- `neutral-600`: `#525252` - Body text alternative

#### **Dark Palette**
- `neutral-700`: `#404040` - Dark text
- `neutral-800`: `#262626` - Very dark text
- `neutral-900`: `#0D0D0D` - Dark neutral (brand guideline)

---

## ✨ Bronze Effects

### 1. **Bronze Gradient**
Creates a sophisticated gradient from light to dark bronze.

```tsx
<div className="bronze-gradient p-8 rounded-lg">
  <h2 className="text-white">Premium Content</h2>
</div>
```

**CSS:**
```css
background: linear-gradient(135deg, #D4C3B1 0%, #BFA68F 50%, #A68D76 100%);
```

---

### 2. **Bronze Shimmer Effect**
Animated shimmer that sweeps across elements - perfect for CTAs and premium features.

```tsx
<button className="bronze-shimmer bg-brand-bronze text-white px-8 py-4 rounded">
  Shop Now
</button>
```

**Features:**
- Continuous animation (3s loop)
- Subtle white shimmer overlay
- Creates luxury feel

---

### 3. **Bronze Text Effect**
Adds bronze color with subtle shadow for elegant text.

```tsx
<h2 className="text-bronze text-4xl">
  Handcrafted Excellence
</h2>
```

**Combines:**
- Bronze color (#BFA68F)
- Subtle text shadow for depth

---

## 🔤 Typography System

### Display Font: **Alta**

**Characteristics:**
- Elegant serif font
- Lighter weight (400) for sophistication
- Used for all headings
- Tight letter-spacing (-0.03em)

**Weights Available:**
- 300 (Light) - `font-light`
- 400 (Regular) - `font-normal`
- 700 (Caption/Bold) - `font-bold`

**Usage:**
```tsx
<h1 className="font-display text-8xl">Adriftwood</h1>
<h2 className="font-display text-6xl">Our Story</h2>
```

---

### Body Font: **Montserrat**

**Characteristics:**
- Clean sans-serif
- Used for body text, UI elements, navigation
- Excellent readability

**Weights Available:**
- 200 (ExtraLight) - `font-extralight`
- 400 (Regular) - `font-normal`
- 500 (Medium) - `font-medium`
- 600 (SemiBold) - `font-semibold`

**Usage:**
```tsx
<p className="font-body text-lg">Sustainable craftsmanship...</p>
<button className="font-body font-medium">Learn More</button>
```

---

## 📏 Heading Sizes

All headings use the **Alta** font by default:

### H1
- Size: `text-7xl` → `text-9xl`
- Line height: 0.9
- Letter spacing: -0.03em

### H2
- Size: `text-5xl` → `text-7xl`
- Line height: 0.95
- Letter spacing: -0.03em

### H3
- Size: `text-3xl` → `text-5xl`
- Line height: tight
- Letter spacing: -0.03em

---

## 🎯 Usage Examples

### Hero Section with Bronze Accent
```tsx
<section className="bg-neutral-50 py-24">
  <h1 className="font-display text-9xl text-brand-pine">
    Adriftwood
  </h1>
  <p className="font-body text-xl text-neutral-700 mt-6">
    Timeless furniture crafted with intention
  </p>
  <button className="bronze-shimmer bg-brand-bronze text-white px-8 py-4 rounded-lg mt-8">
    Explore Collections
  </button>
</section>
```

---

### Card with Bronze Border
```tsx
<div className="bg-white border-2 border-brand-bronze rounded-lg p-8">
  <h3 className="font-display text-4xl text-brand-pine mb-4">
    Sustainable Craftsmanship
  </h3>
  <p className="font-body text-neutral-600">
    Every piece is handcrafted using sustainably sourced materials.
  </p>
</div>
```

---

### Stats Section with Bronze Accent
```tsx
<div className="bg-brand-pine p-12">
  <div className="text-center">
    <div className="text-bronze text-6xl font-display mb-2">
      500+
    </div>
    <p className="font-body text-neutral-200">
      Pieces Crafted
    </p>
  </div>
</div>
```

---

### Navigation with Bronze Hover
```tsx
<nav>
  <Link 
    href="/about" 
    className="font-body text-neutral-700 hover:text-brand-bronze transition-colors"
  >
    About
  </Link>
</nav>
```

---

## 🌟 Design Principles

### **Bright & Elegant**
- Use `neutral-50` (#FAFAFA) as primary background
- Plenty of white space
- Light, airy feel

### **Bronze as Warm Accent**
- Use bronze for CTAs and important highlights
- Creates warmth and luxury
- Complements the green beautifully

### **Typography Hierarchy**
- Alta (display) for headings - elegant and refined
- Montserrat (body) for readability
- Lighter font weights for sophistication

### **Color Balance (from brand guidelines)**
- 70% Light neutrals (backgrounds, space)
- 30% Bronze/beige tones (accents, warmth)
- Green as primary for headers and key elements
- 20-30% Sage for subtle accents

---

## 🎨 Quick Reference

### Common Color Combinations

**Dark Green + Bronze**
```tsx
<h2 className="text-brand-pine">Heading</h2>
<div className="h-1 w-20 bg-brand-bronze"></div>
```

**Bronze Gradient Button**
```tsx
<button className="bronze-gradient bronze-shimmer text-white px-8 py-4 rounded-lg">
  Premium Action
</button>
```

**Light Sage Background**
```tsx
<section className="bg-brand-sage py-24">
  <h2 className="text-brand-pine">Our Values</h2>
</section>
```

**Bronze Text with Shimmer**
```tsx
<span className="text-bronze bronze-shimmer inline-block">
  Limited Edition
</span>
```

---

## 📱 Accessibility

- All color combinations meet WCAG AA standards
- Dark green (#044002) on white: ✅ AAA
- Bronze (#BFA68F) requires sufficient contrast - use on dark backgrounds
- Body text: `neutral-700` or darker on light backgrounds

---

## 🚀 Implementation Checklist

- [x] Brand colors defined in CSS variables
- [x] Tailwind config updated
- [x] Alta font loaded (display)
- [x] Montserrat font loaded (body)
- [x] Bronze gradient utility
- [x] Bronze shimmer animation
- [x] Bronze text effect
- [x] Proper font weights configured
- [x] Bright neutral palette

---

**Next Steps:**
- Apply bronze accents to CTAs
- Use bronze for premium features/sections
- Implement shimmer on important buttons
- Maintain bright, elegant feel throughout
