# 🚀 QUICK START: Design Consistency Audit Prompt
## Copy-Paste This Into Claude Sonnet 4.5

---

You are an expert UI/UX designer conducting a comprehensive design consistency audit for Adriftwood, a premium furniture e-commerce website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🎯 YOUR MISSION

Analyze the entire codebase to identify and document **ALL inconsistencies** in:
- Colors (brand colors, backgrounds, text, borders, hover states)
- Typography (fonts, sizes, weights, line heights)
- Spacing & Proportions (margins, padding, gaps, sizes)
- Animations & Transitions (timing, easing, duration)
- Component Patterns (buttons, cards, forms, layouts)
- Interaction Design (hover, focus, active states)
- Visual Hierarchy (heading scales, content structure)
- Responsiveness (breakpoints, mobile adaptations)
- Accessibility (contrast, keyboard nav, ARIA)

## 📋 AUDIT PROCESS

### Phase 1: Foundation Analysis
1. Read `/BRAND_COLORS_AND_FONTS.md` and `/PROJECT_OVERVIEW.md`
2. Analyze `/tailwind.config.ts` and `/app/globals.css`
3. Document the intended design system (colors, fonts, spacing, animations)

### Phase 2: Page-by-Page Audit
For EACH page, systematically document:

**Pages to Audit:**
- Home (`app/(site)/page.tsx`)
- About (`app/about/page.tsx`)
- Collections (`app/(site)/collections/page.tsx`)
- Store (`app/store/page.tsx`)
- Product Detail (`app/store/[slug]/page.tsx`)
- Contact (`app/(site)/contact/page.tsx`)
- Legal pages (`app/legal/privacy/page.tsx`, `app/legal/terms/page.tsx`)

**For each page, check:**

#### A) Colors
- Background colors (hero, sections, cards, footer)
- Text colors (headings H1-H6, body, muted, links)
- Interactive elements (buttons, inputs, focus states)
- Borders & dividers
- Hover states
- **Document:** Current value vs Expected value with file locations

#### B) Typography
- Font families (Alta for headings, Montserrat for body)
- Font sizes (H1-H6, body, small text)
- Font weights (are they consistent?)
- Line heights (optimal 1.5-1.75 for body)
- Letter spacing
- **Document:** Deviations from type scale with file locations

#### C) Spacing
- Section padding (py values)
- Container max-widths
- Component internal spacing (cards, buttons, inputs)
- Grid/flex gaps
- Responsive spacing patterns
- **Document:** Inconsistent spacing values with file locations

#### D) Animations
- Transition durations (hover states)
- Easing functions
- Entrance animations (scroll triggers)
- Stagger delays
- GPU acceleration (transform/opacity only?)
- prefers-reduced-motion support
- **Document:** Inconsistent timing/easing with file locations

#### E) Component Patterns
- Button variants (primary, secondary, ghost)
- Card structures and hover effects
- Form elements (inputs, labels, error states)
- Navigation patterns
- **Document:** Pattern deviations with file locations

#### F) Interactions
- Hover states (links, buttons, cards, images)
- Focus indicators (visible, high contrast, consistent)
- Active/pressed states
- Loading states
- **Document:** Missing or inconsistent states with file locations

#### G) Responsive Design
- Breakpoint consistency (mobile < 640px, tablet 640-1024px, desktop > 1024px)
- Text size reductions
- Spacing reductions
- Touch target sizes (minimum 44×44px)
- Layout shifts
- **Document:** Responsive issues with file locations

### Phase 3: Component Library Audit
Audit all components in `/components/`:
- UI components (`/components/ui/`)
- Home components (`/components/home/`)
- About components (`/components/about/`)
- Collections components (`/components/collections/`)
- Contact components (`/components/contact/`)
- Product components (`/components/product/`)
- Store components (`/components/store/`)

**For each component, document:**
- Hardcoded colors (should use Tailwind classes)
- Arbitrary spacing values (should use spacing scale)
- Inconsistent animation timing
- Missing accessibility features (ARIA, focus management)
- Opportunities for pattern reuse

### Phase 4: Cross-Page Harmony Analysis
After auditing all pages individually, create matrices:

**Color Usage Matrix:**
| Color | Home | About | Collections | Store | Product | Contact |
|-------|------|-------|-------------|-------|---------|---------|
| Primary | ✅ | ✅ | ❌ wrong | ✅ | ✅ | ✅ |

**Typography Matrix:**
| Element | Home | About | Collections | Store | Product | Contact |
|---------|------|-------|-------------|-------|---------|---------|
| H1 size | 4xl | 5xl ❌ | 4xl | 4xl | 4xl | 4xl |

**Spacing Matrix:**
| Pattern | Home | About | Collections | Store | Product | Contact |
|---------|------|-------|-------------|-------|---------|---------|
| Hero py | py-24 | py-32 ❌ | py-24 | py-24 | py-20 ❌ | py-24 |

**Animation Matrix:**
| Type | Home | About | Collections | Store | Product | Contact |
|------|------|-------|-------------|-------|---------|---------|
| Hover | 200ms | 300ms ❌ | 200ms | 200ms | 200ms | 200ms |

### Phase 5: Accessibility Audit
- **Color Contrast:** Check all text-on-background combinations meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
- **Keyboard Navigation:** Test tab order, focus indicators, ESC to close modals
- **ARIA & Semantics:** Proper landmarks, button/link elements, alt text, ARIA attributes
- **Document:** All accessibility violations with file locations

### Phase 6: Performance Audit
- **Animation Performance:** Only transform/opacity? will-change usage? prefers-reduced-motion?
- **Code Splitting:** Heavy components lazy-loaded?
- **Image Optimization:** Next.js Image component used? Lazy loading?
- **Font Loading:** woff2 format? font-display strategy?
- **Document:** Performance issues with file locations

## 📊 FINAL DELIVERABLES

### 1. Executive Summary
Provide an overall consistency score out of 100 and scores for each category:
- Colors: X/10
- Typography: X/10
- Spacing: X/10
- Animations: X/10
- Components: X/10
- Interactions: X/10
- Responsive: X/10
- Accessibility: X/10
- Performance: X/10
- Code Quality: X/10

List top 5 critical issues that need immediate attention.

### 2. Detailed Issues Log
For EVERY issue found, document:

```markdown
## Issue #X: [Clear Title]
- **Category:** Color/Typography/Spacing/Animation/Component/Interaction/Responsive/A11y/Performance
- **Severity:** Critical / High / Medium / Low
- **Pages Affected:** [specific pages]
- **Current State:** [exact current value]
- **Expected State:** [exact target value]
- **Location:** [file:line]
- **Fix Complexity:** Easy / Medium / Hard
- **Estimated Time:** [X minutes/hours]
- **Suggested Fix:**
  ```tsx
  // Before
  className="text-gray-600"  // Wrong
  
  // After
  className="text-neutral-600"  // Correct brand color
  ```
- **Rationale:** [why this matters for consistency/UX]
```

### 3. Cross-Page Comparison Tables
Create the 4 matrices showing color, typography, spacing, and animation usage across all pages.

### 4. Action Plan
Organize fixes into prioritized phases:
- **Phase 1 (Critical):** Issues that break brand consistency
- **Phase 2 (High):** Issues that affect multiple pages
- **Phase 3 (Medium):** Minor inconsistencies
- **Phase 4 (Polish):** Documentation and guidelines

For each task, provide:
- [ ] Task description
- Files to modify
- Time estimate
- Order of execution

## 🎯 QUALITY STANDARDS

**Be Extremely Thorough:**
- Check EVERY color value, font size, spacing value
- Compare EVERY page against every other page
- Document even 2px differences - they matter for consistency

**Be Specific and Actionable:**
- Always provide exact file paths and line numbers
- Always provide exact current value and exact target value
- Always provide code examples showing before/after
- Never say "various places" - list every location

**Be Objective:**
- Use actual hex codes, not color names
- Use actual px/rem values, not "small"/"large"
- Measure animation durations in milliseconds
- Calculate actual contrast ratios (use tools)

**Think Holistically:**
- Consider visual rhythm across entire site
- Think about user flow consistency
- Consider mobile, tablet, desktop separately
- Think about different user scenarios (keyboard-only, screen reader, slow connection)

**Prioritize by Impact:**
- Issues affecting multiple pages = higher priority
- Issues affecting hero sections = higher priority
- Accessibility issues = critical priority
- Subtle spacing differences = lower priority

## 💡 SUCCESS CRITERIA

Your audit is successful when:
1. ✅ You've checked every page and component
2. ✅ You've documented every inconsistency with exact locations
3. ✅ You've provided actionable fixes for every issue
4. ✅ You've created cross-page comparison matrices
5. ✅ You've prioritized issues by impact
6. ✅ You've provided time estimates for fixes
7. ✅ You've checked accessibility compliance
8. ✅ You've verified performance best practices

## 🚀 START YOUR AUDIT

Begin by reading these files in order:
1. `/BRAND_COLORS_AND_FONTS.md` - Brand system
2. `/PROJECT_OVERVIEW.md` - Project context
3. `/tailwind.config.ts` - Design tokens
4. `/app/globals.css` - Global styles

Then systematically work through each page and component.

**Remember:** Adriftwood is a premium brand. Every pixel, every millisecond of animation, every color choice contributes to the user's perception of quality. Your audit ensures the experience is seamless, harmonious, and professional.

**Goal:** A perfectly consistent, accessible, performant website that reflects Adriftwood's premium positioning. ✨

