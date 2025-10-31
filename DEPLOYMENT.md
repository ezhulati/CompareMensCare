# CompareMensCare.com - Production Deployment Guide

## Deployment Status ✅

**Platform:** Vercel
**Framework:** Astro 5.0 (SSR Mode)
**Latest Deploy:** Production Ready
**Build Time:** ~43 seconds

## Required Environment Variables

Configure these in Vercel Dashboard → Project Settings → Environment Variables

### Analytics (Required for Tracking)

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
```
**Purpose:** Google Analytics 4 measurement ID
**Where to get:** Google Analytics → Admin → Data Streams → Measurement ID
**Format:** Must start with "G-"

### Affiliate URLs (Required for Monetization)

All affiliate URLs should include your tracking parameters. Example format:

```bash
# Sexual Health & Comprehensive Services
PUBLIC_HIMS_AFFILIATE_URL=https://www.forhims.com/?ref=YOUR_ID
PUBLIC_RO_AFFILIATE_URL=https://ro.co/?ref=YOUR_ID
PUBLIC_BLUECHEW_AFFILIATE_URL=https://www.bluechew.com/?ref=YOUR_ID
PUBLIC_MANUAL_AFFILIATE_URL=https://www.manual.co/?ref=YOUR_ID
PUBLIC_NUMAN_AFFILIATE_URL=https://www.numan.com/?ref=YOUR_ID
PUBLIC_KEEPS_AFFILIATE_URL=https://www.keeps.com/?ref=YOUR_ID

# Testosterone Therapy
PUBLIC_HONE_HEALTH_AFFILIATE_URL=https://www.honehealth.com/?ref=YOUR_ID
PUBLIC_VAULT_HEALTH_AFFILIATE_URL=https://www.vaulthealth.com/?ref=YOUR_ID

# Mental Health
PUBLIC_HEALTHYMALE_AFFILIATE_URL=https://www.healthymale.com.au/?ref=YOUR_ID
PUBLIC_BETTERHELP_AFFILIATE_URL=https://www.betterhelp.com/?ref=YOUR_ID
PUBLIC_TALKSPACE_AFFILIATE_URL=https://www.talkspace.com/?ref=YOUR_ID

# Diagnostics
PUBLIC_LETSGETCHECKED_AFFILIATE_URL=https://www.letsgetchecked.com/?ref=YOUR_ID
```

**Note:** Replace `YOUR_ID` with your actual affiliate tracking IDs from each platform's affiliate program.

## Deployment Checklist

### Pre-Launch (Complete)

- [x] All content created (12 brands, 12 guides, 6 blog, 6 categories)
- [x] SEO infrastructure (sitemap, robots.txt, schema.org)
- [x] Affiliate tracking system functional
- [x] 7 comparison pages created
- [x] Error pages (404, 500)
- [x] Cookie consent banner (GDPR/CCPA compliant)
- [x] Analytics integration ready
- [x] Dynamic guide/blog pages
- [x] Build passing (0 errors)

### Production Setup (To Do)

- [ ] Set environment variables in Vercel
  - [ ] PUBLIC_GA_ID (Google Analytics)
  - [ ] All 12 affiliate URLs
- [ ] Verify custom domain configuration
  - [ ] comparemenscare.com → Vercel
  - [ ] SSL certificate auto-provisioned
- [ ] Test affiliate redirects work with real URLs
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Analytics tracking fires

### Post-Launch Testing

- [ ] Mobile responsiveness check (all devices)
- [ ] Affiliate link tracking verification
- [ ] Analytics event tracking test
- [ ] Cookie consent banner functionality
- [ ] Schema.org validation (Google Rich Results Test)
- [ ] Core Web Vitals check (Lighthouse)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility audit (WCAG AA compliance)

## Commands

### Local Development
```bash
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Vercel Deployment
```bash
vercel               # Deploy to preview
vercel --prod        # Deploy to production
vercel logs          # View deployment logs
```

## Important URLs

- **Production:** https://compare-mens-care-iu2y3ieln-ezhulatis-projects.vercel.app (or custom domain)
- **Vercel Dashboard:** https://vercel.com/ezhulatis-projects/compare-mens-care
- **GitHub Repo:** https://github.com/ezhulati/CompareMensCare
- **Sitemap:** https://comparemenscare.com/sitemap-index.xml
- **Robots.txt:** https://comparemenscare.com/robots.txt

## Key Features Enabled

### SEO
- Complete schema.org markup (Product, Review, Article, Organization, BreadcrumbList)
- Dynamic XML sitemap
- Robots.txt configuration
- Open Graph meta tags
- Twitter Card meta tags

### Analytics & Compliance
- Google Analytics 4 (consent-based loading)
- Cookie consent banner (granular controls)
- IP anonymization
- GDPR/CCPA compliant

### Monetization
- 12 brand affiliate programs configured
- Server-side redirect tracking via `/go/{brand}`
- Client-side click tracking
- 30-day cookie attribution

### Content
- 12 brand review pages with ratings
- 12 comprehensive health guides
- 6 SEO-optimized blog posts
- 7 strategic comparison pages
- 6 category landing pages

## Architecture

**Mode:** Server-Side Rendering (SSR)
**Adapter:** @astrojs/vercel
**Node Version:** 20.x
**Build Command:** `astro check && astro build`
**Output Directory:** `dist/`

## Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

## Support

For deployment issues, check:
1. Vercel build logs
2. Browser console for client errors
3. Environment variables are set correctly
4. DNS propagation (if using custom domain)

---

**Last Updated:** 2025-01-30
**Status:** Production Ready ✅
