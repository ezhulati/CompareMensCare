# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CompareMensCare.com is an independent comparison platform for men's telehealth services built with Astro 5.0 in SSR mode. The site compares 12 brands across 6 health categories (sexual health, hair loss, testosterone, weight loss, mental health, diagnostics) with affiliate monetization.

**Site:** https://comparemenscare.com
**Stack:** Astro 5 SSR + Tailwind CSS + Vercel
**Content:** 12 brands, 12 guides, 6 blog posts, 10 comparison pages

## Essential Commands

### Development
```bash
npm run dev              # Start dev server (usually http://localhost:4321)
npm run build            # Type check + build for production
npm run preview          # Preview production build locally
astro check              # TypeScript type checking only
```

### Testing
```bash
npm test                 # Run all Playwright tests
npm run test:mobile      # Mobile viewport tests only
npm run test:tablet      # Tablet viewport tests only
npm run test:desktop     # Desktop viewport tests only
npm run test:headed      # Run tests with visible browser
npm run test:ui          # Open Playwright UI mode
npm run test:report      # View last test report
```

### Deployment
```bash
vercel --prod            # Deploy to production
vercel ls                # List deployments
vercel logs              # View deployment logs
```

## Architecture Overview

### SSR Configuration
- **Mode:** Server-side rendering (`output: 'server'`)
- **Adapter:** Vercel with web analytics enabled
- **Purpose:** Dynamic affiliate redirects, personalized recommendations, real-time content

### Content Collections (src/content/config.ts)
Five type-safe collections with Zod schemas:

1. **brands** - 12 telehealth service reviews with ratings, pricing, priority scores (0-10 scale for matcher algorithm)
2. **guides** - 12 health guides with medical citations, FAQs, research metadata
3. **blog** - 6 SEO-focused posts with same rich metadata as guides
4. **comparisons** - 10 head-to-head brand comparison pages with verdict objects
5. **categories** - 6 category landing pages (sexual-health, hair-health, etc.)

**Key schema fields across collections:**
- `summary`, `summaryPoints`, `keyTakeaways` - Rich content summaries
- `researchHours`, `sourcesReviewed` - Research credibility metrics
- `faqs`, `faqTitle`, `faqCategory` - FAQ sections with schema markup
- `priorities` - Brand priority scores for matcher (brands only)
- `bestFor` - "Best For" badges with variants (brands only)

### Affiliate System
**Redirect Flow:** User clicks → `/go/[brand]` API route → Server-side 307 redirect with tracking

**Key Files:**
- `src/data/affiliateLinks.ts` - Maps brand slugs to affiliate URLs (uses env vars)
- `src/pages/go/[brand].ts` - SSR API route handling redirects
- `src/components/AffiliateButton.astro` - Standardized CTA component

**Environment Variables Required:**
```bash
PUBLIC_HIMS_AFFILIATE_URL
PUBLIC_RO_AFFILIATE_URL
PUBLIC_BLUECHEW_AFFILIATE_URL
# ... 9 more (see SETUP-ENV-VARS.md)
```

### Matching Algorithm
**Location:** `src/pages/match-results.astro` (client-side JavaScript)

**How it works:**
1. User selects 3 priorities from predefined list (affordability, privacy, speed, etc.)
2. Script calculates weighted scores: `priority1 × 1.0 + priority2 × 0.7 + priority3 × 0.4`
3. Filters brands by selected health category
4. Ranks by total score, returns top 3 matches
5. Priority scores (0-10) stored in brand frontmatter `priorities` object

### Dynamic Routes
- `/[brand]` - Brand detail pages (SSR, fetches from content collections)
- `/guides/[...slug]` - Guide pages with breadcrumbs, FAQs, citations
- `/blog/[...slug]` - Blog posts with same rich features
- `/go/[brand]` - Affiliate redirect API (307 temporary redirect)

### Schema.org Markup
Comprehensive structured data on every page:

- **Brands:** Product + AggregateRating + Review schemas
- **Guides/Blog:** Article schema with author, datePublished, citations
- **All Pages:** BreadcrumbList for navigation
- **Homepage:** Organization + WebSite schemas
- **FAQs:** FAQPage schema when `faqs` field present

**Implementation:** Separate schema components in `src/components/` (OrganizationSchema.astro, BreadcrumbSchema.astro, etc.)

## Design System

### Tailwind Configuration
**Medical-inspired color palette:** Professional blues/greens (see tailwind.config.mjs)
- `brand-primary`: #0F172A (slate-900, sophisticated dark)
- `brand-accent`: #0066CC (IBM Watson Health blue, trust)
- `medical-blue-500`: #0066CC
- `medical-green-500`: #059669 (clinical green, less bright than default)

**Typography:**
- Display: Manrope (hero text, H1-H2)
- Heading: Inter Tight (H3-H6)
- Body: Inter (paragraphs, content)
- Mono: Space Mono (pricing, stats)

**Custom spacing:** `container-custom` class for consistent max-width containers

### Logo System
- **Icon:** 44px mountain SVG (`/images/CMC.svg`) at w-11 h-11
- **Text:** "Compare" (font-light) + "Mens" (font-extrabold, brand-accent) + "Care" (font-semibold)
- **Location:** Header.astro and Footer.astro (consistent across both)

## Content Management

### Content Writing Standards

**CRITICAL: Avoid AI-Giveaway Language**

When writing or editing content, NEVER use these AI-sounding phrases:
- ❌ "Actually" / "What Actually..." → ✅ Remove or use direct statement
- ❌ "Real talk" / "Real answer" → ✅ Just state the answer
- ❌ "Here's what..." / "Here's the thing" → ✅ Direct statement instead
- ❌ "Let's be honest" / "To be honest" → ✅ Remove, just be honest
- ❌ "Bottom line:" → ✅ Use "Summary:" or state directly
- ❌ "Reality check:" / "The reality is" → ✅ Remove entirely
- ❌ "The truth is" → ✅ State the fact directly
- ❌ "What really/actually matters" → ✅ "Key factors:" or "Most important:"

**Why this matters:** These phrases are dead giveaways of AI-generated content and undermine credibility. Write with authority using direct statements backed by data.

**Examples:**
- Bad: "Here's what actually happens with sildenafil..."
- Good: "Sildenafil reaches peak effectiveness at 60 minutes..."

- Bad: "Bottom line: Choose based on your insurance."
- Good: "Choose based on your insurance."

**Full guidelines:** See `docs/content-guidelines.md` for complete content standards.

### Adding New Content

**Brand Review:**
```bash
src/content/brands/new-brand.md
```
Required frontmatter: title, description, categories[], rating, affiliateLink, affiliateId, pricing{}, services[], availability{}, pros[], cons[], priorities{}, publishDate, lastReviewed

**Guide/Blog Post:**
```bash
src/content/guides/new-guide.md
src/content/blog/new-post.md
```
Optional rich fields: summary, summaryPoints[], keyTakeaways[], faqs[], citations[], researchHours, sourcesReviewed

**Comparison Page:**
```bash
src/content/comparisons/brand1-vs-brand2.md
```
Must include: brand1, brand2, verdict{winner, brand1BestFor, brand2BestFor}, comparisonTable[]

### Content Schema Updates
When adding new frontmatter fields, update **both** schema and component usage:
1. Add field to `src/content/config.ts` collection schema (with `.optional()` if not required)
2. Update consuming pages (e.g., `src/pages/guides/[...slug].astro`)
3. Run `astro check` to verify types

**Common mistake:** Adding field to guides schema but not blog schema when both use same components

## SEO & Performance

### Sitemap Generation
- Auto-generated at build via `@astrojs/sitemap` integration
- Filters out `/api/*` and `/_*` paths
- Weekly changefreq, 0.7 priority, automatic lastmod

### Analytics
- Google Analytics 4 (consent-based loading via cookie banner)
- Only loads if `localStorage.getItem('analyticsConsent') !== 'false'`
- IP anonymization enabled
- Cookie consent UI in BaseLayout.astro

### Compliance
- Affiliate disclosure and medical disclaimer in Footer.astro (moved from header)
- `rel="nofollow sponsored"` on all affiliate links
- GDPR/CCPA compliant cookie banner with granular controls

## Common Workflows

### Updating Affiliate Links
1. Set environment variable in Vercel dashboard (or local `.env`)
2. Update `src/data/affiliateLinks.ts` if adding new brand
3. Redeploy (`vercel --prod`)

### Adding New Health Category
1. Add enum value to all collection schemas in `src/content/config.ts`
2. Create category content file in `src/content/categories/`
3. Add navigation link to Header.astro
4. Create category landing page in `src/pages/`

### Fixing Build Errors
- **Schema mismatches:** Content frontmatter doesn't match Zod schema → check error message for missing/invalid fields
- **Type errors:** Run `astro check` before `astro build` to catch early
- **Dynamic route errors:** Ensure SSR mode (`prerender = false`) for routes using API features

## Known Patterns

### Conditional Component Rendering
Many components check for optional fields before rendering:
```astro
{guide.data.faqs && guide.data.faqs.length > 0 && (
  <FAQSection faqs={guide.data.faqs} />
)}
```

### Priority Matching Calculation
Weighted scoring in match-results.astro:
- Priority 1: 1.0× weight (most important)
- Priority 2: 0.7× weight
- Priority 3: 0.4× weight
Top 3 brands by total score displayed

### Affiliate Redirect Pattern
Never link directly to affiliate URLs in content. Always use:
```astro
<a href={`/go/${brand.data.affiliateId}`}>Visit {brand.data.title}</a>
```
This enables server-side tracking and URL management.

## File Naming Conventions

- **Brand slugs:** lowercase-with-hyphens (e.g., `hone-health`, `vault-health`)
- **Multi-word brands:** Use hyphens consistently in affiliateId and content filenames
- **Comparison pages:** `brand1-vs-brand2.astro` format in `/compare/` directory
- **Dynamic params:** Use `[brand]` for single segment, `[...slug]` for catch-all

## Development Notes

- Port conflicts: Dev server tries 4321, 4322, 4323, 4324... if ports occupied
- Hot reload: Changes to content collections trigger automatic type regeneration
- Image optimization: Not configured - use pre-optimized images in `/public/images/`
- Favicon: `/public/favicon.svg` (mountain icon from CMC.svg)
