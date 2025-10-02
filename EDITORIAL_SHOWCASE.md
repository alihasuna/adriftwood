# 📸 Editorial Showcase - Magazine-Style Image Presentation

## Overview
A sophisticated, full-screen editorial component inspired by high-end interior design and architecture websites. Features a split-screen layout with text on the left and large, immersive images on the right.

## Features

### 🎨 Design Elements
- **Split-Screen Layout**: Text panel (40%) + Image panel (60%)
- **Dark Background**: Neutral-900 for text panel
- **Navigation Controls**: Circular arrow buttons with hover states
- **Page Indicator**: Shows current slide (e.g., "1 / 3")
- **Smooth Transitions**: Spring-based animations for natural feel
- **Swipe Gesture**: Drag horizontally to navigate (desktop)

### 📱 Responsive Behavior
- **Desktop**: Side-by-side layout (text left, image right)
- **Mobile**: Stacked layout (text above, image below)
- **Touch Optimized**: Swipe gestures on all devices

### 🎬 Animations
- **Image Slide**: Smooth horizontal transitions
- **Text Fade**: Content fades in/out when changing slides
- **Hover Effects**: Button hover states with scale and color changes
- **Direction-Aware**: Slides from correct direction based on navigation

## Content Structure

Each showcase item includes:
- `title`: Main heading (large, serif font)
- `subtitle`: Small uppercase label
- `description`: Detailed paragraph text
- `image`: Full-bleed background image
- `link`: CTA button destination

## Current Slides

1. **Craftsmanship** - Philosophy and quality focus
2. **Sustainability** - Environmental commitment
3. **Innovation** - Modern design approach

## Customization

### Update Content
Edit `/components/home/editorial-showcase.tsx`:

```typescript
const showcaseItems = [
  {
    id: 1,
    title: 'Your Title',
    subtitle: 'YOUR SUBTITLE',
    description: 'Your description...',
    image: '/images/your-image.jpg',
    link: '/your-link',
  },
  // Add more items...
]
```

### Change Colors
- Background: `bg-neutral-900`
- Text: `text-neutral-50`
- Accents: `border-neutral-600`
- Hover: `hover:border-neutral-400`

### Adjust Layout
- Desktop split: Change `lg:w-2/5` and `lg:w-3/5`
- Mobile height: Change `h-64` for mobile image
- Padding: Adjust `p-8 lg:p-12`

## Navigation Options

### Arrow Buttons
- Previous/Next circular buttons
- Left bottom of text panel
- Hover effects with border and background

### Keyboard
- Can be extended to support arrow keys
- Add keyboard event listeners if needed

### Swipe Gestures
- Drag horizontally on image
- Threshold-based detection
- Velocity-aware for natural feel

## Performance Tips

1. **Image Optimization**
   - Use high-quality images (1920x1080 or larger)
   - Compress with tools like TinyPNG
   - Use Next.js Image component (already implemented)

2. **Lazy Loading**
   - First slide uses `priority` prop
   - Subsequent images lazy load automatically

3. **Animation Performance**
   - Uses GPU-accelerated transforms
   - Spring animations for natural feel
   - Reduced motion respected automatically

## Integration

Already added to home page after Hero section:

```tsx
<Hero />
<EditorialShowcase />  ← NEW!
<CategoryTiles />
```

## Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on buttons
- ✅ Keyboard navigable
- ✅ Focus states
- ✅ Screen reader friendly
- ⚠️ Consider adding auto-play pause button for WCAG AAA

## Future Enhancements

- [ ] Add auto-play option with timer
- [ ] Keyboard arrow key navigation
- [ ] Dot indicators for direct navigation
- [ ] Video support alongside images
- [ ] Parallax scroll effect
- [ ] Progress bar for auto-play
- [ ] Touch gesture improvements for mobile

---

**Live after**: Refresh your browser to see the new editorial showcase!
