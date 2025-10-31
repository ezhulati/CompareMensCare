# CompareMensCare.com 🏥

> Independent comparison platform for men's telehealth services. Compare pricing, treatments, and reviews for ED, hair loss, testosterone therapy, weight loss, and mental health.

**Live Site:** [comparemenscare.com](https://comparemenscare.com)

[![Deploy Status](https://img.shields.io/badge/deploy-production-success)](https://comparemenscare.com)
[![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/ezhulati/CompareMensCare)

---

## 📊 Project Stats

- **Content:** 12 brand reviews, 12 guides, 6 blog posts, 6 categories
- **Comparisons:** 10 strategic comparison pages
- **Build Time:** ~43 seconds
- **Performance:** SSR optimized, Lighthouse 90+ target
- **SEO:** Complete schema.org markup, dynamic sitemap

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod
```

## 🏗️ Tech Stack

- **Framework:** [Astro 5.0](https://astro.build) (SSR Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** [Lucide Astro](https://lucide.dev)
- **Deployment:** [Vercel](https://vercel.com)
- **Analytics:** Google Analytics 4 (consent-based)
- **Content:** Markdown with frontmatter

## 📁 Project Structure

```
CompareMensCare/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── AffiliateButton.astro
│   │   ├── BreadcrumbSchema.astro
│   │   └── OrganizationSchema.astro
│   ├── content/            # Content collections (Markdown)
│   │   ├── brands/         # 12 brand review profiles
│   │   ├── guides/         # 12 comprehensive health guides
│   │   ├── blog/           # 6 SEO-optimized blog posts
│   │   ├── categories/     # 6 category landing pages
│   │   └── config.ts       # Content schemas
│   ├── data/
│   │   └── affiliateLinks.ts  # Affiliate URL mappings
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ComparisonLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Homepage with guided matcher
│   │   ├── [brand].astro   # Dynamic brand pages
│   │   ├── blog/
│   │   │   └── [...slug].astro
│   │   ├── guides/
│   │   │   └── [...slug].astro
│   │   ├── compare/        # 10 comparison pages
│   │   ├── go/
│   │   │   └── [brand].ts  # Affiliate redirect API
│   │   ├── 404.astro
│   │   └── 500.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── helpers.ts
├── public/
│   └── robots.txt
├── DEPLOYMENT.md           # Production deployment guide
├── SETUP-ENV-VARS.md      # Environment setup guide
└── astro.config.mjs
```

## 🎯 Features

### Content & SEO
- ✅ 12 comprehensive brand reviews with ratings
- ✅ 12 health guides with medical citations
- ✅ 10 strategic comparison pages
- ✅ 6 SEO-optimized blog posts
- ✅ Complete schema.org markup (Product, Review, Article, Organization, BreadcrumbList)
- ✅ Dynamic XML sitemap
- ✅ Robots.txt configuration
- ✅ Custom 404/500 error pages

### Analytics & Compliance
- ✅ Google Analytics 4 integration (consent-based loading)
- ✅ GDPR/CCPA compliant cookie consent banner
- ✅ Granular cookie controls (Essential + Analytics)
- ✅ IP anonymization
- ✅ Privacy-first approach

### Monetization
- ✅ 12 affiliate programs configured
- ✅ Server-side redirect tracking (`/go/{brand}`)
- ✅ Client-side click event tracking
- ✅ 30-day cookie attribution
- ✅ Proper rel="nofollow sponsored" attributes

### User Experience
- ✅ Guided matcher (3-step personalized recommendations)
- ✅ Priority-based matching algorithm
- ✅ Mobile-responsive design
- ✅ Fast page loads (SSR)
- ✅ Professional clinical design

## 🔧 Configuration

### Environment Variables

See [`SETUP-ENV-VARS.md`](SETUP-ENV-VARS.md) for detailed setup instructions.

**Required for production:**
```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_HIMS_AFFILIATE_URL=https://www.forhims.com/?ref=YOUR_ID
PUBLIC_RO_AFFILIATE_URL=https://ro.co/?ref=YOUR_ID
# ... (10 more affiliate URLs)
```

### Content Collections

Content is managed through Astro Content Collections with Zod schemas:

```typescript
// src/content/config.ts
const brands = defineCollection({
  schema: z.object({
    title: z.string(),
    rating: z.number().min(0).max(5),
    pricing: z.object({ ... }),
    // ... full schema
  })
});
```

Add new content:
```bash
# Add a new brand review
src/content/brands/new-brand.md

# Add a new guide
src/content/guides/new-guide.md

# Add a blog post
src/content/blog/new-post.md
```

## 📈 SEO Strategy

### Schema.org Markup
- **Product + Review:** All 12 brand pages
- **Article:** All 12 guide pages
- **BlogPosting:** All 6 blog posts
- **Organization + WebSite:** Homepage
- **BreadcrumbList:** Site-wide navigation

### Sitemap
Dynamic sitemap generated at build time:
- All brand pages
- All guide pages
- All blog posts
- All comparison pages
- All category pages

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_astro/
Sitemap: https://comparemenscare.com/sitemap-index.xml
```

## 🎨 Design System

### Colors
- **Primary:** `#4F46E5` (Indigo)
- **Accent:** `#EC4899` (Pink)
- **Background:** `#FFFFFF` / `#F8FAFC`
- **Text:** `#0F172A` / `#64748B`

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** 700-800 weight
- **Body:** 400-500 weight

### Components
- Buttons: `btn-primary`, `btn-secondary`, `btn-outline`
- Cards: `card`, `card-hover`
- Sections: `section`, `section-light`

## 📊 Content Strategy

### Brand Reviews (12 total)
Target brands across all categories with detailed pricing, pros/cons, and ratings.

### Guides (12 total)
Comprehensive health guides targeting informational keywords:
- "Understanding Erectile Dysfunction"
- "Sildenafil vs Tadalafil"
- "GLP-1 Medications Explained"
- etc.

### Comparisons (10 total)
Strategic brand comparisons targeting high-intent keywords:
- "Ro vs Hims"
- "BlueChew vs Hims"
- "Hims vs Manual"
- etc.

### Blog Posts (6 total)
SEO-focused content:
- "2025 Men's Telehealth Cost Comparison"
- "Hims vs Ro: Complete Comparison"
- etc.

## 🚀 Deployment

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for complete deployment guide.

**Quick Deploy:**
```bash
# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

## 🧪 Testing

```bash
# Type check
npm run astro check

# Build test
npm run build

# Preview production build
npm run preview
```

## 📝 Content Checklist

- [x] 12 brand reviews
- [x] 12 health guides
- [x] 6 blog posts
- [x] 6 category pages
- [x] 10 comparison pages
- [x] Dynamic guide/blog pages
- [x] Homepage with matcher
- [x] Error pages (404, 500)
- [ ] Favicon & OG images
- [ ] Brand logos

## 🔐 Security & Privacy

- ✅ HTTPS enforced
- ✅ Consent-based analytics
- ✅ IP anonymization
- ✅ Secure cookie flags
- ✅ GDPR/CCPA compliant
- ✅ No PII collection without consent

## 📞 Support

- **Documentation:** See `DEPLOYMENT.md` and `SETUP-ENV-VARS.md`
- **Issues:** [GitHub Issues](https://github.com/ezhulati/CompareMensCare/issues)
- **Vercel:** [Project Dashboard](https://vercel.com/ezhulatis-projects/compare-mens-care)

## 📄 License

Private repository. All rights reserved.

---

**Built with [Claude Code](https://claude.com/claude-code)** 🤖

Last Updated: January 2025
