# CompareMensCare.com Typography System

## Design Philosophy

This typography system is designed for **trust, approachability, and clarity** in men's healthcare. Every font choice serves the emotional journey of men seeking sensitive health information.

### Audience Psychology
- **Age:** 25-55 years old
- **Context:** Often first-time seekers of telehealth, may feel vulnerable
- **Needs:** Privacy, trust, clear information, no judgment
- **Reading Environment:** Often mobile, potentially in private moments

---

## Font Family Hierarchy

### 🎯 1. Display Font — **Manrope**
**Use:** H1-H2, Hero headlines, Emotional messaging

**Why:** Geometric with warm, humanist curves. Confident without aggression. The rounded terminals feel approachable and modern.

**Weights:**
- 700 (Bold) — Section titles
- 800 (ExtraBold) — Hero headlines

**Character:**
- Modern but not cold
- Masculine but not intimidating
- Professional but approachable

**Technical:**
- Variable font
- Excellent screen rendering
- Optimized for large sizes

**Examples:**
```html
<h1>You're Not Alone. We'll Help You Find the Right Care</h1>
<h2>Explore Health Categories</h2>
```

---

### 🎯 2. Heading Font — **Inter Tight**
**Use:** H3-H6, Section headers, Card titles, Navigation

**Why:** Sharper than standard Inter, more visual impact. Maintains IBM/healthcare professionalism while adding punch.

**Weights:**
- 600 (SemiBold) — H5-H6, subtle emphasis
- 700 (Bold) — H3-H4, section headers

**Character:**
- Technical precision
- Medical credibility
- Clean hierarchy

**Technical:**
- Variable font
- Tighter letter spacing than Inter
- Better for headings/short text

**Examples:**
```html
<h3>Side-by-Side Comparison</h3>
<h4>What You'll Pay</h4>
<h5>Privacy Features</h5>
```

---

### 🎯 3. Body Font — **Inter**
**Use:** Paragraphs, Descriptions, Long-form content, UI elements

**Why:** Gold standard for UI readability. Designed specifically for screens. Neutral, trustworthy, excellent for medical content.

**Weights:**
- 400 (Regular) — Body text, descriptions
- 500 (Medium) — Emphasis, labels
- 600 (SemiBold) — Strong emphasis, buttons

**Character:**
- Neutral and invisible
- Supreme readability
- Professional without personality

**Technical:**
- Designed at 9px for small sizes
- Optimized for low-res screens
- Tabular number support

**Examples:**
```html
<p>Whether you're dealing with ED, hair loss, or just exploring options for the first time...</p>
<span>Consultation Fee</span>
<button>Get Started</button>
```

---

### 🎯 4. Data/Mono Font — **Space Mono**
**Use:** Pricing, Statistics, Technical specs, Data displays

**Why:** Monospace adds technical credibility. Makes numbers feel precise and trustworthy. Great for pricing comparisons.

**Weights:**
- 400 (Regular) — Stats, small data
- 700 (Bold) — Pricing, emphasis numbers

**Character:**
- Technical precision
- Trustworthy numbers
- Retro-futuristic charm

**Technical:**
- Fixed-width (monospace)
- Tabular numbers by default
- Excellent for alignment

**Examples:**
```html
<div class="text-pricing">$49/month</div>
<div class="text-stat">50+</div>
```

---

## Typography Scale

### Display Scale (Manrope)
```css
H1: 48px → 60px → 72px (mobile → tablet → desktop)
    font-weight: 800
    letter-spacing: -0.04em
    line-height: 1.1

H2: 36px → 48px → 60px
    font-weight: 700
    letter-spacing: -0.03em
    line-height: 1.15
```

### Heading Scale (Inter Tight)
```css
H3: 24px → 36px → 48px
    font-weight: 700
    letter-spacing: -0.02em
    line-height: 1.25

H4: 20px → 24px → 36px
    font-weight: 600
    letter-spacing: -0.01em
    line-height: 1.3

H5: 18px → 20px → 24px
    font-weight: 600
    letter-spacing: -0.01em
    line-height: 1.35

H6: 16px → 18px
    font-weight: 600
    letter-spacing: 0
    line-height: 1.4
```

### Body Scale (Inter)
```css
Lead:    18px → 20px → 24px (large intro paragraphs)
Body:    16px (standard reading text)
Small:   14px (secondary text)
Caption: 12px → 14px (labels, metadata)
```

### Data Scale (Space Mono)
```css
Stat Large:  48px → 60px → 72px (hero numbers)
Pricing:     20px → 24px (standard pricing)
Data:        14px → 16px (tables, specs)
```

---

## Usage Guidelines

### ✅ Do's

1. **Hierarchy is Sacred**
   - H1: One per page, hero/page title
   - H2: Major sections (3-5 per page)
   - H3: Subsections within H2
   - Follow semantic HTML

2. **Font Pairing**
   - Manrope + Inter Tight + Inter works perfectly
   - Don't mix Manrope with body text
   - Keep Space Mono for numbers/data only

3. **Responsive Sizing**
   - All headings scale between 3 breakpoints
   - Body stays 16px (never smaller than 14px)
   - Use responsive classes: `text-2xl sm:text-3xl lg:text-4xl`

4. **Letter Spacing**
   - Tighter at large sizes (-0.04em for H1)
   - Normal at small sizes (0 for body)
   - Wider for uppercase labels (+0.05em)

5. **Line Height**
   - Tighter for headlines (1.1 for H1)
   - Relaxed for body (1.6 for paragraphs)
   - More space for small text (1.5 for captions)

### ❌ Don'ts

1. **Never:**
   - Use Manrope for body text (too heavy for reading)
   - Go below 14px font size (accessibility)
   - Mix more than 3 font families on a page
   - Use decorative fonts for medical content

2. **Avoid:**
   - All-caps blocks of text (use eyebrow text sparingly)
   - Justified text (reduces readability)
   - Pure black text (#000000) — use slate-900
   - Mixing font weights within a paragraph

3. **Be Careful:**
   - Don't over-bold (max 2 bold elements per section)
   - Don't stack headings without content between
   - Don't use color alone for emphasis (use weight)

---

## Utility Classes

### Tailwind Font Families
```html
<!-- Display headlines -->
<h1 class="font-display">Hero Headline</h1>

<!-- Section headings -->
<h3 class="font-heading">Section Title</h3>

<!-- Body text (default) -->
<p class="font-sans">Paragraph text</p>

<!-- Data/Pricing -->
<span class="font-mono">$49.99</span>
```

### Custom Typography Classes
```html
<!-- Pricing displays -->
<div class="text-pricing">$49/month</div>
<div class="text-pricing-large">$19</div>
<div class="text-pricing-small">From $5/dose</div>

<!-- Stats & Numbers -->
<div class="text-stat">50+</div>
<div class="text-stat-label">Services Reviewed</div>

<!-- Special text styles -->
<div class="text-eyebrow">Featured Service</div>
<p class="text-lead">Large intro paragraph</p>
<p class="text-caption">Small metadata text</p>
<p class="text-disclaimer">Medical disclaimer text</p>
<span class="text-trust">Verified Provider</span>
```

---

## Real-World Examples

### Hero Section
```html
<section>
  <!-- Eyebrow -->
  <span class="text-eyebrow">Trusted by Men Like You</span>

  <!-- Hero Headline (Manrope) -->
  <h1 class="font-display font-extrabold text-5xl lg:text-6xl">
    Find the Right Care for Your Health
  </h1>

  <!-- Lead paragraph (Inter) -->
  <p class="text-lead">
    Whether you're dealing with ED, hair loss, or exploring options
    for the first time — we'll match you with a service that fits.
  </p>

  <!-- Stats (Manrope + Space Mono) -->
  <div class="text-stat">50+</div>
  <div class="text-stat-label">Services Reviewed</div>
</section>
```

### Comparison Card
```html
<article class="card">
  <!-- Brand name (Inter Tight) -->
  <h3 class="font-heading font-bold text-xl">Hims</h3>

  <!-- Pricing (Space Mono) -->
  <div class="text-pricing">$49/month</div>
  <div class="text-caption">Billed quarterly</div>

  <!-- Description (Inter) -->
  <p class="text-base leading-relaxed">
    Full-service telehealth with prescription delivery...
  </p>

  <!-- Button (Inter) -->
  <button class="btn-primary">Visit Hims</button>
</article>
```

### Section Header
```html
<section>
  <!-- Section title (Inter Tight) -->
  <h2 class="font-heading font-bold text-3xl lg:text-4xl">
    How We Compare Services
  </h2>

  <!-- Subtitle (Inter) -->
  <p class="text-base text-slate-600">
    Our methodology for reviewing telehealth providers
  </p>
</section>
```

---

## Accessibility Standards

### WCAG Compliance

1. **Minimum Sizes:**
   - Body text: 16px minimum
   - Small text: 14px minimum (use sparingly)
   - Touch targets: 44px minimum height

2. **Contrast Ratios:**
   - Body text: 4.5:1 minimum (slate-900 on white = 18.4:1 ✓)
   - Large text (18px+): 3:1 minimum
   - UI elements: 3:1 minimum

3. **Line Length:**
   - Optimal: 60-75 characters per line
   - Maximum: 80 characters
   - Use `max-w-prose` or `max-w-2xl` for containers

4. **Line Height:**
   - Body text: 1.5 minimum (we use 1.6)
   - Headings: 1.2-1.4 depending on size

---

## Performance Optimization

### Font Loading Strategy

**Current Implementation:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&family=Inter+Tight:wght@400..700&family=Inter:wght@400..600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
```

**Benefits:**
- Variable fonts reduce weight (1 file vs multiple)
- `display=swap` prevents FOIT (Flash of Invisible Text)
- Preconnect reduces DNS lookup time
- Google Fonts CDN is fast and cached

**Weight:**
- Manrope Variable: ~12KB
- Inter Tight Variable: ~10KB
- Inter Variable: ~11KB
- Space Mono: ~8KB
- **Total:** ~41KB (gzipped)

### Font Features
```css
/* Enable for better rendering */
font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

---

## Testing Checklist

### Visual QA
- [ ] All headings use correct font family
- [ ] Pricing uses monospace font
- [ ] Body text is 16px minimum
- [ ] Line height feels comfortable
- [ ] Letter spacing looks balanced
- [ ] No orphan words on headlines

### Accessibility QA
- [ ] Text contrast passes WCAG AA
- [ ] Font sizes meet minimums
- [ ] Line length under 80 characters
- [ ] Works with browser zoom (200%)
- [ ] Readable on mobile devices

### Performance QA
- [ ] Fonts load within 2 seconds
- [ ] No FOUT (Flash of Unstyled Text)
- [ ] Variable fonts used correctly
- [ ] No unused font weights loaded

---

## Future Enhancements

### Potential Additions
1. **Dark Mode:** Test font weights (may need +100 weight in dark mode)
2. **Print Styles:** Optimize for PDF/print (serif for long-form?)
3. **Fluid Typography:** CSS `clamp()` for smoother scaling
4. **Font Subsetting:** Self-host for even faster loading

### A/B Testing Opportunities
- Headline sizes (bolder or larger?)
- Body text size (16px vs 17px vs 18px?)
- Pricing font (monospace vs sans-serif?)
- Button text (sentence case vs all caps?)

---

## Quick Reference

### Font Family Classes
```
font-display  → Manrope (H1-H2)
font-heading  → Inter Tight (H3-H6)
font-sans     → Inter (body, default)
font-mono     → Space Mono (data/pricing)
```

### Weight Classes
```
font-normal    → 400
font-medium    → 500
font-semibold  → 600
font-bold      → 700
font-extrabold → 800
```

### Responsive Text Sizes
```
text-base   → 16px
text-lg     → 18px
text-xl     → 20px
text-2xl    → 24px
text-3xl    → 30px
text-4xl    → 36px
text-5xl    → 48px
text-6xl    → 60px
```

Add `sm:` and `lg:` prefixes for responsive sizing.

---

## Support & Questions

For typography questions or updates:
1. Check this guide first
2. Test in multiple browsers/devices
3. Maintain semantic HTML structure
4. Keep accessibility in mind
5. Document any deviations

**Last Updated:** 2025-10-31
**Version:** 1.0
**Maintained by:** CompareMensCare Design Team
