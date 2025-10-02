# DESIGN CONSISTENCY AUDIT PROMPT
## For Claude Sonnet 4.5 - Adriftwood Premium Furniture E-commerce

---

## 🎯 PRIMARY OBJECTIVE

You are an expert UI/UX designer and frontend architect conducting a **comprehensive design consistency audit** for Adriftwood, a premium furniture e-commerce website. Your mission is to ensure **perfect harmony** across the entire website by identifying and documenting **all inconsistencies** in:

- **Color usage** (brand colors, backgrounds, text, borders, hover states)
- **Typography** (font families, sizes, weights, line heights, letter spacing)
- **Spacing & Proportions** (margins, padding, gaps, component sizes)
- **Animations & Transitions** (timing, easing, duration, triggers)
- **Component Patterns** (buttons, cards, forms, layouts)
- **Interaction Design** (hover effects, click states, focus states, loading states)
- **Visual Hierarchy** (heading scales, content structure, emphasis patterns)
- **Responsiveness** (breakpoints, mobile adaptations, touch targets)

---

## 📋 AUDIT METHODOLOGY

### PHASE 1: FOUNDATION ANALYSIS (Brand System Understanding)

**Step 1.1: Brand Color System Audit**
1. Read and analyze `/BRAND_COLORS_AND_FONTS.md` and extract the official color palette
2. Document the **intended color system**:
   ```
   Primary Colors: [list exact hex codes]
   Secondary Colors: [list exact hex codes]
   Neutral Grays: [list exact hex codes]
   Accent Colors: [list exact hex codes]
   Semantic Colors: [success, warning, error, info]
   ```
3. Scan through `app/globals.css` and `tailwind.config.ts` to verify color definitions
4. Create a **color usage matrix** showing where each color should be used

**Step 1.2: Typography System Audit**
1. Document the official font stack from brand guidelines:
   - Primary font (Alta): weights, use cases
   - Secondary font (Montserrat): weights, use cases
   - Fallback fonts
2. Extract the **type scale** (heading sizes H1-H6, body text, captions)
3. Document **font loading strategy** from `/public/fonts/`
4. Map **intended typography hierarchy** across page types

**Step 1.3: Spacing & Layout Grid Audit**
1. Document the **spacing scale** from Tailwind config (4px, 8px, 16px, 24px, etc.)
2. Identify the **container max-widths** and **section padding** standards
3. Map out the **grid system** and **responsive breakpoints**
4. Document **component spacing patterns** (cards, buttons, forms)

---

### PHASE 2: PAGE-BY-PAGE COMPONENT AUDIT

For **EACH PAGE** in the website, perform a systematic component-level analysis:

#### Pages to Audit:
1. **Home Page** (`app/(site)/page.tsx`)
2. **About Page** (`app/about/page.tsx`)
3. **Collections Page** (`app/(site)/collections/page.tsx`)
4. **Store Page** (`app/store/page.tsx`)
5. **Product Detail Page** (`app/store/[slug]/page.tsx`)
6. **Contact Page** (`app/(site)/contact/page.tsx`)
7. **Legal Pages** (`app/legal/privacy/page.tsx`, `app/legal/terms/page.tsx`)

#### For Each Page, Audit These Dimensions:

**2.1: COLOR CONSISTENCY CHECK**

Systematically scan each page's components and document:

```markdown
### [PAGE NAME] - Color Audit

**Background Colors:**
- [ ] Hero section background: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Content sections background: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Card backgrounds: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Footer background: [color used] - ✅ Correct / ❌ Should be [correct color]

**Text Colors:**
- [ ] Heading color (H1): [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Heading color (H2-H6): [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Body text color: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Muted text color: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Link color: [color used] - ✅ Correct / ❌ Should be [correct color]

**Interactive Element Colors:**
- [ ] Primary button background: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Primary button text: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Primary button hover state: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Secondary button styles: [document]
- [ ] Input borders: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Focus states: [color used] - ✅ Correct / ❌ Should be [correct color]

**Border & Divider Colors:**
- [ ] Section dividers: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Card borders: [color used] - ✅ Correct / ❌ Should be [correct color]
- [ ] Horizontal rules: [color used] - ✅ Correct / ❌ Should be [correct color]

**INCONSISTENCIES FOUND:**
1. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
2. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
```

**2.2: TYPOGRAPHY CONSISTENCY CHECK**

```markdown
### [PAGE NAME] - Typography Audit

**Font Family Usage:**
- [ ] Headings font: [font used] - ✅ Alta / ❌ Should be Alta
- [ ] Body text font: [font used] - ✅ Montserrat / ❌ Should be Montserrat
- [ ] Special text (buttons, labels): [font used] - Document if correct

**Font Sizes & Hierarchy:**
- [ ] H1 size: [size used] - ✅ Matches scale / ❌ Should be [correct size]
- [ ] H2 size: [size used] - ✅ Matches scale / ❌ Should be [correct size]
- [ ] H3 size: [size used] - ✅ Matches scale / ❌ Should be [correct size]
- [ ] Body text size: [size used] - ✅ Matches scale / ❌ Should be [correct size]
- [ ] Small text size: [size used] - ✅ Matches scale / ❌ Should be [correct size]

**Font Weights:**
- [ ] H1 weight: [weight used] - Document
- [ ] H2-H3 weight: [weight used] - Document
- [ ] Body text weight: [weight used] - Document
- [ ] Button text weight: [weight used] - Document
- [ ] Are weights consistent with brand guidelines? ✅ Yes / ❌ No

**Line Heights & Spacing:**
- [ ] Heading line-height: [value] - Is it consistent across headings?
- [ ] Body text line-height: [value] - Is it optimal for readability (1.5-1.75)?
- [ ] Letter spacing: [document any unusual letter-spacing]

**INCONSISTENCIES FOUND:**
1. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
2. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
```

**2.3: SPACING & PROPORTIONS CHECK**

```markdown
### [PAGE NAME] - Spacing Audit

**Section Spacing (Vertical):**
- [ ] Hero section padding-top: [value] - Consistent with other pages? ✅ / ❌
- [ ] Hero section padding-bottom: [value] - Consistent with other pages? ✅ / ❌
- [ ] Content section padding-y: [value] - Follows spacing scale? ✅ / ❌
- [ ] Section gaps: [value] - Consistent throughout page? ✅ / ❌

**Component Internal Spacing:**
- [ ] Card padding: [value] - Consistent with other cards? ✅ / ❌
- [ ] Button padding: [value] - Consistent with other buttons? ✅ / ❌
- [ ] Input padding: [value] - Consistent with other inputs? ✅ / ❌
- [ ] Gap between elements (flexbox/grid): [value] - Follows system? ✅ / ❌

**Container & Layout Spacing:**
- [ ] Container max-width: [value] - Consistent with other pages? ✅ / ❌
- [ ] Container horizontal padding: [value] - Consistent? ✅ / ❌
- [ ] Grid column gaps: [value] - Consistent? ✅ / ❌
- [ ] Grid row gaps: [value] - Consistent? ✅ / ❌

**Responsive Spacing:**
- [ ] Mobile padding reduction: Is there a consistent pattern? ✅ / ❌
- [ ] Tablet spacing: Is there a middle ground? ✅ / ❌
- [ ] Desktop spacing: Is max spacing defined? ✅ / ❌

**INCONSISTENCIES FOUND:**
1. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
2. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
```

**2.4: ANIMATION & TRANSITION CHECK**

```markdown
### [PAGE NAME] - Animation Audit

**Transition Properties:**
- [ ] Hover transitions on buttons: [duration] [easing] - Consistent? ✅ / ❌
- [ ] Hover transitions on cards: [duration] [easing] - Consistent? ✅ / ❌
- [ ] Hover transitions on links: [duration] [easing] - Consistent? ✅ / ❌
- [ ] Color transitions: [duration] [easing] - Consistent? ✅ / ❌
- [ ] Transform transitions: [duration] [easing] - Consistent? ✅ / ❌

**Entrance Animations:**
- [ ] Scroll-triggered animations: [library used] - Framer Motion / other?
- [ ] Animation timing: [duration] - Consistent across similar elements? ✅ / ❌
- [ ] Animation easing: [easing function] - Consistent brand feel? ✅ / ❌
- [ ] Stagger delays: [value] - Is stagger timing consistent? ✅ / ❌

**Interactive Animations:**
- [ ] Loading states: Documented and consistent? ✅ / ❌
- [ ] Modal/drawer animations: [duration] [easing] - Consistent? ✅ / ❌
- [ ] Form feedback animations: Present and consistent? ✅ / ❌

**Performance Considerations:**
- [ ] Are animations GPU-accelerated (transform/opacity only)? ✅ / ❌
- [ ] Are animations respecting prefers-reduced-motion? ✅ / ❌
- [ ] Are there any janky/laggy animations? ❌ List them

**INCONSISTENCIES FOUND:**
1. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
2. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
```

**2.5: COMPONENT PATTERN CONSISTENCY CHECK**

```markdown
### [PAGE NAME] - Component Patterns Audit

**Button Patterns:**
- [ ] Primary button: Classes used: [list]
- [ ] Secondary button: Classes used: [list]
- [ ] Ghost/outline button: Classes used: [list]
- [ ] Button sizes: Are sizes (sm, md, lg) consistent? ✅ / ❌
- [ ] Icon buttons: Consistent size and spacing? ✅ / ❌
- [ ] Button states (hover, active, disabled): All defined? ✅ / ❌

**Card Patterns:**
- [ ] Product cards: Structure consistent? ✅ / ❌
- [ ] Content cards: Structure consistent? ✅ / ❌
- [ ] Card hover effects: Same across all cards? ✅ / ❌
- [ ] Card shadows: Consistent elevation system? ✅ / ❌
- [ ] Card border-radius: Consistent rounding? ✅ / ❌

**Form Patterns:**
- [ ] Input fields: Consistent styling? ✅ / ❌
- [ ] Labels: Consistent positioning and styling? ✅ / ❌
- [ ] Error states: Consistent color and messaging? ✅ / ❌
- [ ] Success states: Consistent feedback? ✅ / ❌
- [ ] Placeholders: Consistent color and tone? ✅ / ❌

**Navigation Patterns:**
- [ ] Navbar: Consistent across all pages? ✅ / ❌
- [ ] Footer: Consistent across all pages? ✅ / ❌
- [ ] Breadcrumbs: Consistent implementation? ✅ / ❌
- [ ] Mobile menu: Consistent animation and layout? ✅ / ❌

**INCONSISTENCIES FOUND:**
1. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
2. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
```

**2.6: INTERACTION DESIGN CHECK**

```markdown
### [PAGE NAME] - Interaction Audit

**Hover States:**
- [ ] Links: Consistent hover treatment? ✅ / ❌
- [ ] Buttons: Consistent hover lift/scale/color? ✅ / ❌
- [ ] Cards: Consistent hover elevation/transform? ✅ / ❌
- [ ] Images: Consistent hover zoom/overlay? ✅ / ❌
- [ ] Navigation items: Consistent hover feedback? ✅ / ❌

**Focus States:**
- [ ] Keyboard focus: Visible focus rings? ✅ / ❌
- [ ] Focus ring color: Consistent and accessible? ✅ / ❌
- [ ] Focus ring offset: Consistent spacing? ✅ / ❌
- [ ] Tab order: Logical and complete? ✅ / ❌

**Active/Pressed States:**
- [ ] Buttons: Active state defined? ✅ / ❌
- [ ] Links: Active state defined? ✅ / ❌
- [ ] Toggles/switches: Clear active state? ✅ / ❌

**Loading States:**
- [ ] Button loading spinners: Consistent? ✅ / ❌
- [ ] Page loading states: Implemented? ✅ / ❌
- [ ] Skeleton loaders: Consistent with content? ✅ / ❌

**INCONSISTENCIES FOUND:**
1. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
2. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
```

**2.7: RESPONSIVE DESIGN CHECK**

```markdown
### [PAGE NAME] - Responsive Audit

**Breakpoint Usage:**
- [ ] Mobile (< 640px): Layout works? ✅ / ❌
- [ ] Tablet (640-1024px): Layout works? ✅ / ❌
- [ ] Desktop (> 1024px): Layout works? ✅ / ❌
- [ ] Are breakpoints consistent with Tailwind config? ✅ / ❌

**Mobile Adaptations:**
- [ ] Text sizes reduced appropriately? ✅ / ❌
- [ ] Spacing reduced appropriately? ✅ / ❌
- [ ] Navigation converted to mobile menu? ✅ / ❌
- [ ] Touch targets 44×44px minimum? ✅ / ❌
- [ ] Horizontal scrolling prevented? ✅ / ❌

**Layout Shifts:**
- [ ] Grid columns adjust logically? ✅ / ❌
- [ ] Images maintain aspect ratio? ✅ / ❌
- [ ] Text doesn't overflow? ✅ / ❌

**INCONSISTENCIES FOUND:**
1. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
2. [Describe inconsistency] - Location: [file:line] - Fix: [suggested correction]
```

---

### PHASE 3: COMPONENT LIBRARY AUDIT

Audit all reusable components in `/components/` directory:

**3.1: UI Components Audit**
For each component in `/components/ui/`:
- `button.tsx`
- `navbar.tsx`
- `footer.tsx`
- `product-card.tsx`
- `cart-drawer.tsx`
- `input.tsx`, `textarea.tsx`, `label.tsx`
- `ambient-gradient.tsx`
- `ambient-particles.tsx`
- `cursor-glow.tsx`, `custom-cursor.tsx`
- `forest-ambience.tsx`
- `light-beams.tsx`
- `newsletter-form.tsx`
- `page-transition.tsx`
- `scroll-progress.tsx`
- `sheet.tsx`
- `tabs.tsx`

**For Each Component, Document:**
```markdown
### Component: [component-name]

**Props Interface:**
[List all props and their types]

**Variants:**
[List all variants/sizes/states]

**Styling Approach:**
- [ ] Uses Tailwind classes? ✅ / ❌
- [ ] Uses inline styles? ✅ / ❌ (flag if yes)
- [ ] Uses CSS modules? ✅ / ❌
- [ ] Styling is consistent with design system? ✅ / ❌

**Color Usage:**
- [ ] Uses design system colors? ✅ / ❌
- [ ] Has hardcoded colors? ❌ List them: [...]

**Spacing Usage:**
- [ ] Uses spacing scale? ✅ / ❌
- [ ] Has arbitrary values? ❌ List them: [...]

**Animation Usage:**
- [ ] Animation duration: [value]
- [ ] Animation easing: [value]
- [ ] Consistent with other components? ✅ / ❌

**Accessibility:**
- [ ] ARIA labels present where needed? ✅ / ❌
- [ ] Keyboard navigation support? ✅ / ❌
- [ ] Focus management? ✅ / ❌
- [ ] Color contrast ratio meets WCAG AA? ✅ / ❌

**Issues Found:**
1. [Issue] - Fix: [suggestion]
```

**3.2: Page-Specific Components Audit**
Audit components in:
- `/components/home/`
- `/components/about/`
- `/components/collections/`
- `/components/contact/`
- `/components/product/`
- `/components/store/`

For each component, ask:
- Does it follow the same patterns as UI components?
- Does it reuse UI components where possible?
- Are there opportunities to extract reusable patterns?
- Are props and variants consistent with similar components?

---

### PHASE 4: GLOBAL STYLES & CONFIGURATION AUDIT

**4.1: Tailwind Configuration Audit**
Analyze `/tailwind.config.ts`:

```markdown
### Tailwind Config Audit

**Colors:**
- [ ] All brand colors defined in config? ✅ / ❌
- [ ] Color names semantic and clear? ✅ / ❌
- [ ] Duplicate/unused colors? ❌ List: [...]

**Typography:**
- [ ] Font families properly configured? ✅ / ❌
- [ ] Font size scale defined? ✅ / ❌
- [ ] Line heights configured? ✅ / ❌
- [ ] Font weights available? ✅ / ❌

**Spacing:**
- [ ] Spacing scale extended appropriately? ✅ / ❌
- [ ] Large spacing values defined? ✅ / ❌

**Animations:**
- [ ] Custom animations defined? ✅ / ❌
- [ ] Animation durations standardized? ✅ / ❌

**Breakpoints:**
- [ ] Breakpoints match design requirements? ✅ / ❌

**Issues Found:**
1. [Issue] - Fix: [suggestion]
```

**4.2: Global CSS Audit**
Analyze `/app/globals.css`:

```markdown
### Global CSS Audit

**CSS Variables:**
- [ ] CSS variables defined for colors? ✅ / ❌
- [ ] CSS variables match Tailwind config? ✅ / ❌

**Base Styles:**
- [ ] Body styles (font, color, background)? ✅ / ❌
- [ ] Heading styles reset appropriately? ✅ / ❌
- [ ] Link styles defined? ✅ / ❌

**Font Loading:**
- [ ] @font-face rules present and correct? ✅ / ❌
- [ ] Font loading strategy optimal? ✅ / ❌

**Global Animations:**
- [ ] @keyframes defined? ✅ / ❌
- [ ] Animation performance optimized? ✅ / ❌

**Utility Classes:**
- [ ] Custom utility classes documented? ✅ / ❌
- [ ] Could any be moved to Tailwind config? [list]

**Issues Found:**
1. [Issue] - Fix: [suggestion]
```

---

### PHASE 5: CROSS-PAGE HARMONY ANALYSIS

After auditing all pages individually, perform a **cross-cutting analysis**:

**5.1: Create a Color Usage Matrix**
```markdown
### Color Usage Across Pages

| Color | Home | About | Collections | Store | Product | Contact |
|-------|------|-------|-------------|-------|---------|---------|
| Primary | ✅ | ✅ | ❌ (wrong) | ✅ | ✅ | ✅ |
| Secondary | ✅ | ❌ (missing) | ✅ | ✅ | ✅ | ✅ |
| [etc] | ... | ... | ... | ... | ... | ... |

**Inconsistencies Summary:**
1. [Color] used differently on [pages] - Standardize to [value]
2. [Color] missing from [pages] - Add where appropriate
```

**5.2: Create a Typography Usage Matrix**
```markdown
### Typography Usage Across Pages

| Element | Home | About | Collections | Store | Product | Contact |
|---------|------|-------|-------------|-------|---------|---------|
| H1 size | 4xl | 5xl ❌ | 4xl | 4xl | 4xl | 4xl |
| H2 size | 3xl | 3xl | 2xl ❌ | 3xl | 3xl | 3xl |
| [etc] | ... | ... | ... | ... | ... | ... |

**Inconsistencies Summary:**
1. H1 sizes vary - Standardize to [size] or document intentional variations
2. Font weights inconsistent for [element] - Standardize to [weight]
```

**5.3: Create a Spacing Pattern Matrix**
```markdown
### Spacing Patterns Across Pages

| Pattern | Home | About | Collections | Store | Product | Contact |
|---------|------|-------|-------------|-------|---------|---------|
| Hero padding-y | py-24 | py-32 ❌ | py-24 | py-24 | py-20 ❌ | py-24 |
| Section padding-y | py-16 | py-16 | py-12 ❌ | py-16 | py-16 | py-16 |
| Card padding | p-6 | p-6 | p-8 ❌ | p-6 | p-6 | p-6 |
| [etc] | ... | ... | ... | ... | ... | ... |

**Inconsistencies Summary:**
1. Hero section padding varies - Standardize or document responsive reasons
2. Card padding inconsistent - Standardize to [value]
```

**5.4: Create an Animation Timing Matrix**
```markdown
### Animation Timing Across Pages

| Animation Type | Home | About | Collections | Store | Product | Contact |
|----------------|------|-------|-------------|-------|---------|---------|
| Hover transition | 200ms | 300ms ❌ | 200ms | 200ms | 200ms | 200ms |
| Entrance fade | 600ms | 600ms | 400ms ❌ | 600ms | 600ms | 600ms |
| Card hover scale | 1.02 | 1.05 ❌ | 1.02 | 1.02 | 1.02 | 1.02 |
| [etc] | ... | ... | ... | ... | ... | ... |

**Inconsistencies Summary:**
1. Hover transitions vary - Standardize to [duration] with [easing]
2. Entrance animations inconsistent - Standardize timing
```

---

### PHASE 6: ACCESSIBILITY & USABILITY AUDIT

**6.1: Color Contrast Audit**
For all text-on-background combinations across the site:
```markdown
### Color Contrast Report

**Passing Combinations (WCAG AA):**
- [Text color] on [Background color]: Ratio [value]:1 ✅
- [...]

**Failing Combinations (WCAG AA):**
- [Text color] on [Background color]: Ratio [value]:1 ❌
  - Location: [file:line]
  - Fix: Darken text or lighten background to achieve 4.5:1 minimum
- [...]

**Issues Found:** [count]
**Critical Issues (< 3:1):** [count]
```

**6.2: Keyboard Navigation Audit**
Test keyboard navigation across all interactive elements:
```markdown
### Keyboard Navigation Report

**Focus Indicators:**
- [ ] All interactive elements have visible focus? ✅ / ❌
- [ ] Focus indicator meets 3:1 contrast? ✅ / ❌
- [ ] Focus indicator consistent across site? ✅ / ❌

**Tab Order:**
- [ ] Logical tab order on all pages? ✅ / ❌
- [ ] Skip links present for main navigation? ✅ / ❌
- [ ] Modals trap focus appropriately? ✅ / ❌

**Keyboard Shortcuts:**
- [ ] ESC closes modals/drawers? ✅ / ❌
- [ ] ENTER activates buttons? ✅ / ❌
- [ ] SPACE works on checkboxes? ✅ / ❌

**Issues Found:**
1. [Issue] - Location: [file:line] - Fix: [suggestion]
```

**6.3: ARIA & Semantic HTML Audit**
```markdown
### ARIA & Semantics Report

**Landmark Regions:**
- [ ] <header>, <nav>, <main>, <footer> used appropriately? ✅ / ❌
- [ ] ARIA landmarks for complex layouts? ✅ / ❌

**Interactive Elements:**
- [ ] Buttons use <button> (not <div>)? ✅ / ❌
- [ ] Links use <a href> (not <div onClick>)? ✅ / ❌
- [ ] Forms have proper labels? ✅ / ❌

**ARIA Attributes:**
- [ ] aria-label on icon-only buttons? ✅ / ❌
- [ ] aria-hidden on decorative elements? ✅ / ❌
- [ ] aria-expanded on toggles? ✅ / ❌
- [ ] aria-live for dynamic content? ✅ / ❌

**Images:**
- [ ] All images have alt text? ✅ / ❌
- [ ] Decorative images have alt=""? ✅ / ❌

**Issues Found:**
1. [Issue] - Location: [file:line] - Fix: [suggestion]
```

---

### PHASE 7: PERFORMANCE & OPTIMIZATION AUDIT

**7.1: Animation Performance**
```markdown
### Animation Performance Audit

**GPU Acceleration:**
- [ ] All animations use transform/opacity only? ✅ / ❌
- [ ] Animations trigger layout/paint? ❌ List: [...]

**will-change Usage:**
- [ ] will-change used appropriately? ✅ / ❌
- [ ] will-change removed after animation? ✅ / ❌

**Reduced Motion:**
- [ ] prefers-reduced-motion media query respected? ✅ / ❌
- [ ] Alternative non-motion feedback provided? ✅ / ❌

**Issues Found:**
1. [Issue] - Location: [file:line] - Fix: [suggestion]
```

**7.2: Bundle Size & Loading**
```markdown
### Code Splitting & Loading Audit

**Dynamic Imports:**
- [ ] Heavy components lazy-loaded? ✅ / ❌
- [ ] Modal content loaded on-demand? ✅ / ❌

**Image Optimization:**
- [ ] Next.js Image component used? ✅ / ❌
- [ ] Loading="lazy" on below-fold images? ✅ / ❌
- [ ] Priority loading on hero images? ✅ / ❌

**Font Loading:**
- [ ] Font files optimized (woff2)? ✅ / ❌
- [ ] Font-display strategy defined? ✅ / ❌

**Issues Found:**
1. [Issue] - Location: [file:line] - Fix: [suggestion]
```

---

## 📊 FINAL DELIVERABLES

After completing all phases, compile your findings into these reports:

### DELIVERABLE 1: Executive Summary
```markdown
# Design Consistency Audit - Executive Summary

## Overall Score: [X]/100

## Critical Issues: [count]
[List top 3-5 most impactful inconsistencies]

## Categories Breakdown:
- Colors: [score]/10 - [brief summary]
- Typography: [score]/10 - [brief summary]
- Spacing: [score]/10 - [brief summary]
- Animations: [score]/10 - [brief summary]
- Components: [score]/10 - [brief summary]
- Interactions: [score]/10 - [brief summary]
- Responsive: [score]/10 - [brief summary]
- Accessibility: [score]/10 - [brief summary]
- Performance: [score]/10 - [brief summary]
- Code Quality: [score]/10 - [brief summary]

## Priority Matrix:
### 🔴 High Priority (Fix Immediately):
1. [Issue] - Impact: [description]
2. [...]

### 🟡 Medium Priority (Fix Soon):
1. [Issue] - Impact: [description]
2. [...]

### 🟢 Low Priority (Nice to Have):
1. [Issue] - Impact: [description]
2. [...]
```

### DELIVERABLE 2: Detailed Issues Log
```markdown
# Design Consistency Issues - Detailed Log

## Issue #1: [Title]
- **Category:** [Color/Typography/Spacing/Animation/etc]
- **Severity:** Critical / High / Medium / Low
- **Pages Affected:** [list]
- **Current State:** [describe what's wrong]
- **Expected State:** [describe what it should be]
- **Location:** [file paths and line numbers]
- **Fix Complexity:** Easy / Medium / Hard
- **Estimated Time:** [minutes/hours]
- **Suggested Fix:**
  ```tsx
  // Before
  [current code]
  
  // After
  [corrected code]
  ```
- **Rationale:** [why this fix improves consistency/UX]

[Repeat for all issues...]
```

### DELIVERABLE 3: Design System Documentation
```markdown
# Adriftwood Design System - Source of Truth

## Colors
[Comprehensive color palette with usage guidelines]

## Typography
[Complete type scale with usage guidelines]

## Spacing
[Spacing scale and usage patterns]

## Components
[All component patterns with variants]

## Animations
[Animation timing and easing standards]

## Responsive Breakpoints
[Breakpoint definitions and usage]

## Accessibility Standards
[Contrast ratios, focus states, ARIA patterns]
```

### DELIVERABLE 4: Action Plan
```markdown
# Design Consistency - Action Plan

## Phase 1: Critical Fixes (Week 1)
- [ ] Task 1: [description] - Files: [list] - Time: [estimate]
- [ ] Task 2: [description] - Files: [list] - Time: [estimate]
- [ ] [...]

## Phase 2: High Priority (Week 2)
- [ ] Task 1: [description] - Files: [list] - Time: [estimate]
- [ ] [...]

## Phase 3: Medium Priority (Week 3)
- [ ] Task 1: [description] - Files: [list] - Time: [estimate]
- [ ] [...]

## Phase 4: Polish & Documentation (Week 4)
- [ ] Task 1: Update design system docs
- [ ] Task 2: Create component library documentation
- [ ] Task 3: Write contribution guidelines
- [ ] [...]

## Validation Checklist:
- [ ] Run automated accessibility tests
- [ ] Perform cross-browser testing
- [ ] Test on real devices (mobile/tablet/desktop)
- [ ] Verify all animations smooth at 60fps
- [ ] Confirm all color contrasts pass WCAG AA
```

---

## 🎯 QUALITY STANDARDS FOR THIS AUDIT

**Be Extremely Thorough:**
- Don't skip any files or components
- Check EVERY color value, font size, spacing value
- Compare EVERY page against every other page
- Document even small inconsistencies (2px differences matter)

**Be Specific and Actionable:**
- Always provide file paths and line numbers
- Always provide the exact current value and exact target value
- Always provide code examples for fixes
- Never say "various places" - list every location

**Be Objective and Data-Driven:**
- Use actual color values (hex codes), not names
- Use actual pixel/rem values, not "small" or "large"
- Measure animation durations in milliseconds
- Calculate actual contrast ratios

**Think Holistically:**
- Consider the visual rhythm across the entire site
- Think about user flow and consistency of experience
- Consider mobile, tablet, and desktop experiences separately
- Think about different user scenarios (keyboard-only, screen reader, slow connection)

---

## 💡 GUIDELINES FOR SUCCESS

1. **Start Broad, Then Go Deep**: First pass captures obvious inconsistencies, second pass catches subtle details
2. **Use Your Tools**: Use browser DevTools to inspect computed styles, measure spacing, test contrast ratios
3. **Think Like a User**: Put yourself in the user's shoes - would they notice this inconsistency?
4. **Think Like a Developer**: Suggest fixes that are maintainable and leverage existing patterns
5. **Be Constructive**: Frame issues as opportunities to improve, not criticisms
6. **Prioritize Impact**: Focus most energy on issues that affect the most pages or most users
7. **Consider Context**: Sometimes inconsistencies are intentional for good UX reasons - note these but don't flag as errors

---

## 🚀 BEGIN YOUR AUDIT

When you start, first read:
1. `/BRAND_COLORS_AND_FONTS.md`
2. `/PROJECT_OVERVIEW.md`
3. `/tailwind.config.ts`
4. `/app/globals.css`

Then systematically work through each phase above, creating detailed reports for every category.

Your goal: **Ensure Adriftwood delivers a seamless, harmonious, professional experience that reflects its premium brand positioning.**

Good luck! 🎨✨

