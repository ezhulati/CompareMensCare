# Production Setup Guide

## Environment Variables Setup

### Required Environment Variables

Add these to Vercel via: `vercel env add` or Vercel Dashboard → Settings → Environment Variables

#### 1. Google Analytics

```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
```

**How to get your GA ID:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create account if needed
3. Set up property for `comparemenscare.com`
4. Get Measurement ID (starts with `G-`)
5. Add to Vercel environment variables

#### 2. Affiliate URLs

Replace with your actual affiliate links:

```bash
PUBLIC_HIMS_AFFILIATE_URL=https://www.hims.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_RO_AFFILIATE_URL=https://ro.co/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_BLUECHEW_AFFILIATE_URL=https://bluechew.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_KEEPS_AFFILIATE_URL=https://www.keeps.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_MANUAL_AFFILIATE_URL=https://www.manual.co/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_NUMAN_AFFILIATE_URL=https://www.numan.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_HONE_HEALTH_AFFILIATE_URL=https://honehealth.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_VAULT_HEALTH_AFFILIATE_URL=https://www.vaulthealth.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_HEALTHYMALE_AFFILIATE_URL=https://www.healthymale.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_BETTERHELP_AFFILIATE_URL=https://www.betterhelp.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_TALKSPACE_AFFILIATE_URL=https://www.talkspace.com/?utm_source=comparemenscare&utm_medium=referral
PUBLIC_LETSGETCHECKED_AFFILIATE_URL=https://www.letsgetchecked.com/?utm_source=comparemenscare&utm_medium=referral
```

### Quick Setup via Vercel CLI

```bash
# Set Google Analytics
vercel env add PUBLIC_GA_ID production

# Set affiliate URLs (one by one or via dashboard)
vercel env add PUBLIC_HIMS_AFFILIATE_URL production
vercel env add PUBLIC_RO_AFFILIATE_URL production
# ... repeat for each affiliate URL
```

### Or Use Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project (`compare-mens-care`)
3. Settings → Environment Variables
4. Add each variable for "Production" environment
5. Redeploy after adding all variables

---

## Google Search Console Setup

### 1. Verify Site Ownership

**Option A: HTML File Upload**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://comparemenscare.com`
3. Choose "HTML file upload" verification
4. Download verification file
5. Place in `/public/` directory
6. Commit and push
7. Click "Verify" in Search Console

**Option B: DNS Verification** (Recommended)
1. In Search Console, choose "Domain" property
2. Add TXT record to your DNS settings
3. Verify

### 2. Submit Sitemap

Once verified:
1. In Search Console → Sitemaps
2. Submit: `https://comparemenscare.com/sitemap-index.xml`
3. Google will start crawling and indexing

### 3. Request Indexing

For important pages:
1. Search Console → URL Inspection
2. Enter URL
3. Click "Request Indexing"

---

## Visual Assets Checklist

### Favicons (Already have favicon.svg ✓)

Additional formats needed:
- [ ] `/public/favicon.ico` (16x16, 32x32, 48x48 multi-size)
- [ ] `/public/apple-touch-icon.png` (180x180)
- [ ] `/public/apple-touch-icon-152x152.png`
- [ ] `/public/android-chrome-192x192.png`
- [ ] `/public/android-chrome-512x512.png`

### Open Graph Images

Create 1200x630px images for:
- [ ] `/public/og-image.png` (Default homepage)
- [ ] `/public/og-images/sexual-health.png`
- [ ] `/public/og-images/hair-health.png`
- [ ] `/public/og-images/testosterone.png`
- [ ] `/public/og-images/weight-loss.png`
- [ ] `/public/og-images/mental-health.png`
- [ ] `/public/og-images/diagnostics.png`

**Tools to create OG images:**
- Canva (easiest)
- Figma
- Photoshop
- Online OG image generators

**Design tips:**
- Use brand colors (blue #3B82F6, slate backgrounds)
- Include site name "Compare Men's Care"
- Category-specific imagery
- Large, readable text
- 1200x630px exactly

---

## Testing Checklist

### Performance Testing

**Lighthouse Audit:**
```bash
npm run build
npx lighthouse https://comparemenscare.com --view
```

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Mobile Testing

Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Various screen sizes

Check:
- [ ] Navigation works on mobile
- [ ] Matcher tools function correctly
- [ ] Forms are usable
- [ ] Images load and scale properly
- [ ] Touch targets are adequate (44x44px minimum)

### Cross-Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

### Functional Testing

- [ ] All comparison pages load correctly
- [ ] Guided matcher completes successfully
- [ ] Priority matcher provides recommendations
- [ ] All affiliate links work
- [ ] Search functionality (if implemented)
- [ ] Blog pagination
- [ ] Guide navigation

---

## SEO Verification

### On-Page SEO

Check each page has:
- [ ] Unique title tag (50-60 characters)
- [ ] Unique meta description (150-160 characters)
- [ ] H1 tag (one per page)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on all images
- [ ] Internal linking
- [ ] Canonical URLs

### Technical SEO

- [ ] Sitemap accessible at `/sitemap-index.xml`
- [ ] Robots.txt allows crawling
- [ ] HTTPS enabled (via Vercel)
- [ ] Mobile-friendly (responsive design)
- [ ] Page speed optimized
- [ ] Structured data (schema.org)

### Content SEO

- [ ] All guides are 4,000+ words ✓
- [ ] All blogs are 1,600-4,100+ words ✓
- [ ] Target keywords in titles
- [ ] Natural keyword usage
- [ ] Internal linking strategy
- [ ] External authoritative links

---

## Analytics & Monitoring

### Google Analytics Setup

Once PUBLIC_GA_ID is set:
1. Verify tracking code loads (check Network tab)
2. Send test pageview
3. Check Real-Time reports in GA
4. Set up Goals:
   - Outbound affiliate clicks
   - Matcher completions
   - Time on site
   - Scroll depth

### Vercel Web Analytics

Already enabled! View in:
- Vercel Dashboard → Your Project → Analytics
- See: Traffic, Top Pages, Referrers, Devices

### Conversion Tracking

Track important events:
```javascript
// Example: Track affiliate clicks
gtag('event', 'affiliate_click', {
  'brand': 'Hims',
  'placement': 'comparison_page',
  'value': potential_commission
});
```

---

## Pre-Launch Checklist

### Content

- [x] All guides published (12 guides) ✓
- [x] All blog posts published (6 posts) ✓
- [ ] Legal pages reviewed (Privacy Policy, Terms, Disclaimer)
- [ ] About page complete
- [ ] Contact information accurate

### Technical

- [ ] Environment variables set in Vercel
- [ ] Google Analytics tracking verified
- [ ] Search Console verified and sitemap submitted
- [ ] All favicons generated
- [ ] OG images created
- [ ] Site speed optimized (Lighthouse 90+)
- [ ] Mobile responsive
- [ ] Cross-browser tested

### Monetization

- [ ] Affiliate links configured
- [ ] Tracking parameters added
- [ ] Disclosure notices present (already implemented ✓)
- [ ] FTC compliance verified

### Marketing

- [ ] Social media profiles created (optional)
- [ ] Email address set up (contact@comparemenscare.com)
- [ ] Google Business Profile (optional)
- [ ] Reddit/community strategy (optional)

---

## Post-Launch Tasks

### Week 1

- Monitor Google Analytics for traffic
- Check Search Console for crawl errors
- Review Vercel Analytics
- Test all affiliate links tracking
- Monitor site performance
- Check for 404 errors

### Month 1

- Review top-performing content
- Identify low-performing pages
- Add more internal links
- Create additional content
- Build backlinks
- Guest posting outreach

### Ongoing

- Publish new blog posts (2-4/month)
- Update guides quarterly
- Monitor affiliate performance
- Optimize underperforming pages
- Build email list
- Expand comparison coverage

---

## Quick Reference Commands

```bash
# Development
npm run dev

# Build and preview locally
npm run build
npm run preview

# Deploy to production
git push origin main  # Auto-deploys via Vercel

# Check Vercel deployment status
vercel ls

# Pull environment variables locally
vercel env pull

# View production logs
vercel logs

# Check lighthouse score
npx lighthouse https://comparemenscare.com --view
```

---

## Support Resources

- **Astro Docs:** https://docs.astro.build
- **Vercel Docs:** https://vercel.com/docs
- **Google Analytics:** https://analytics.google.com
- **Search Console:** https://search.google.com/search-console
- **Lighthouse:** https://pagespeed.web.dev

---

**Last Updated:** 2025-01-15
**Status:** Production Ready (pending environment variable setup)
