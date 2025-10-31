# Fluid Typography System

## Overview

We use CSS `clamp()` for **smooth, fluid typography** that scales proportionally with viewport width. No more awkward jumps at breakpoints!

---

## How `clamp()` Works

```css
font-size: clamp(minimum, preferred, maximum);
```

- **minimum**: Smallest size (mobile)
- **preferred**: Grows with viewport using `vw` units
- **maximum**: Largest size (desktop)

**Example:**
```css
h1 {
  font-size: clamp(2.25rem, 4vw + 1rem, 4rem);
}
```

This means:
- Mobile (320px): `2.25rem` (36px)
- Medium (768px): ~`3rem` (48px)
- Desktop (1440px): `4rem` (64px) - caps here

---

## Typography Scale

### Headlines (Epilogue)

#### H1 - Hero Headlines
```css
font-size: clamp(2.25rem, 4vw + 1rem, 4rem);
/* 36px → 64px smoothly */
```
**Use:** Page titles, hero headlines

#### H2 - Major Sections
```css
font-size: clamp(1.875rem, 3vw + 1rem, 3rem);
/* 30px → 48px smoothly */
```
**Use:** Section headings, feature titles

#### H3 - Subsections
```css
font-size: clamp(1.5rem, 2vw + 0.75rem, 2.25rem);
/* 24px → 36px smoothly */
```
**Use:** Card titles (like "Sexual Health", "Hair Health")

#### H4 - Minor Headings
```css
font-size: clamp(1.25rem, 1.5vw + 0.5rem, 1.875rem);
/* 20px → 30px smoothly */
```
**Use:** Smaller section titles

#### H5 - Small Headings
```css
font-size: clamp(1.125rem, 1vw + 0.5rem, 1.5rem);
/* 18px → 24px smoothly */
```

#### H6 - Tiny Headings
```css
font-size: clamp(1rem, 0.5vw + 0.5rem, 1.25rem);
/* 16px → 20px smoothly */
```

---

### Body Text (Inter)

#### Paragraph
```css
font-size: clamp(0.9375rem, 0.5vw + 0.875rem, 1.0625rem);
/* 15px → 17px smoothly */
```
**Never goes below 15px** for readability!

#### Lead Paragraph (.text-lead)
```css
font-size: clamp(1.0625rem, 1vw + 0.75rem, 1.375rem);
/* 17px → 22px smoothly */
```
**Use:** Intro paragraphs, emphasis text

#### Caption (.text-caption)
```css
font-size: clamp(0.75rem, 0.25vw + 0.6875rem, 0.875rem);
/* 12px → 14px smoothly */
```
**Use:** Image captions, metadata

---

### Utility Text

#### Pricing (.text-pricing)
```css
font-size: clamp(1.25rem, 1.5vw + 0.75rem, 2rem);
/* 20px → 32px smoothly */
```

#### Stats (.text-stat)
```css
font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
/* 40px → 72px smoothly */
```

#### Eyebrow (.text-eyebrow)
```css
font-size: clamp(0.6875rem, 0.25vw + 0.625rem, 0.8125rem);
/* 11px → 13px smoothly */
```

---

## Viewport Sizing Chart

| Viewport | H1 | H2 | H3 (Card Titles) | Body | Stats |
|----------|----|----|------------------|------|-------|
| 320px (Mobile) | 36px | 30px | **24px** | 15px | 40px |
| 375px (iPhone) | 39px | 32px | **25.5px** | 15.5px | 43px |
| 768px (Tablet) | 51px | 40px | **30px** | 16px | 56px |
| 1024px (Desktop) | 59px | 44px | **33px** | 16.5px | 65px |
| 1440px+ (Large) | 64px | 48px | **36px** | 17px | 72px |

**Note:** The card titles (H3) now scale from 24px to 36px smoothly!

---

## Benefits of Fluid Typography

✅ **Smooth Scaling** - No awkward jumps at breakpoints
✅ **Perfect on All Screens** - Works at ANY viewport size
✅ **Better Hierarchy** - Proportional relationships maintained
✅ **Less Code** - No more `sm:`, `md:`, `lg:` breakpoints
✅ **Future-Proof** - Works on foldables, tablets, ultrawide

---

## Usage Examples

### Good ✅
```html
<!-- Just use semantic HTML - it works! -->
<h1>You're Not Alone</h1>
<h2>Explore Health Categories</h2>
<h3>Sexual Health</h3>
<p>Body text scales automatically</p>

<!-- Or use utility classes -->
<div class="text-stat">50+</div>
<span class="text-pricing">$49/month</span>
```

### Avoid ❌
```html
<!-- Don't override with Tailwind text- classes -->
<h3 class="text-2xl">Sexual Health</h3>
<!-- This breaks the fluid scaling! -->

<!-- Don't use fixed sizes -->
<h1 style="font-size: 48px;">Title</h1>
<!-- This doesn't scale with viewport -->
```

---

## Testing Your Typography

### Desktop (1440px+)
- H1 should be **large and bold** (64px)
- Card titles (H3) should be **prominent** (36px)
- Body text comfortable (17px)

### Tablet (768-1024px)
- Everything scales down proportionally
- Card titles still **clear and readable** (30-33px)
- No awkward sizes

### Mobile (320-425px)
- H1 remains **impactful** but fits (36-40px)
- Card titles **legible** (24-26px)
- Body text **never too small** (15px minimum)

---

## Troubleshooting

### Issue: Text too big on mobile
**Solution:** Decrease the `vw` value in clamp()
```css
/* Before */
font-size: clamp(1.5rem, 4vw + 1rem, 3rem);

/* After */
font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
```

### Issue: Text too small on desktop
**Solution:** Increase the maximum value
```css
/* Before */
font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);

/* After */
font-size: clamp(1rem, 1vw + 0.5rem, 2rem);
```

### Issue: Not enough scaling
**Solution:** Increase the `vw` multiplier
```css
/* Before */
font-size: clamp(1rem, 0.5vw + 0.5rem, 2rem);

/* After */
font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
```

---

## Browser Support

✅ **Chrome/Edge** 89+
✅ **Safari** 13.1+
✅ **Firefox** 75+
✅ **All modern mobile browsers**

**Fallback:** Browsers without `clamp()` support (< 1% users) will use the minimum size.

---

## Performance

**Zero performance impact!**
- CSS `clamp()` is native browser feature
- Calculated once at page load
- No JavaScript required
- Works with CSS animations

---

## Quick Reference

```css
/* Fluid Typography Formula */
clamp(MIN, CALC, MAX)

/* Common patterns */
H1: clamp(2.25rem, 4vw + 1rem, 4rem)
H2: clamp(1.875rem, 3vw + 1rem, 3rem)
H3: clamp(1.5rem, 2vw + 0.75rem, 2.25rem)
Body: clamp(0.9375rem, 0.5vw + 0.875rem, 1.0625rem)
```

---

**Last Updated:** 2025-10-31
**Version:** 2.0 (Fluid Typography)
**Maintained by:** CompareMensCare Design Team
