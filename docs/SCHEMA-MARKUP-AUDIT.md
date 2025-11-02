# Schema Markup Audit - January 2025

## Overview
Comprehensive audit of schema.org markup across all page types to ensure maximum visibility for search engines and AI bots.

## Current Schema Components

### Existing Components
1. **OrganizationSchema.astro** - Organization + WebSite schemas
2. **BreadcrumbSchema.astro** - BreadcrumbList navigation
3. **AuthorSchema.astro** - Person schemas for authors/reviewers
4. **FAQSection.astro** - FAQPage schema (inline in component)

### Schema in Page Templates
- Blog posts: BlogPosting + Article schema
- Guides: Article schema
- Brands: Product + Review + AggregateRating schemas

## Page Type Breakdown

### ✅ EXCELLENT COVERAGE

#### Homepage (index.astro)
- ✅ Organization schema
- ✅ WebSite schema with search action
- ✅ BreadcrumbList implied (homepage)
- **Status:** Complete

#### Blog Posts (blog/[...slug].astro)
- ✅ BlogPosting schema
- ✅ Article schema (via template)
- ✅ BreadcrumbList schema
- ✅ Person schema (author)
- ✅ Person schema (medical reviewer, optional)
- ✅ FAQPage schema (when FAQs present)
- ✅ datePublished + dateModified
- **Status:** Complete

#### Guides (guides/[...slug].astro)
- ✅ Article schema
- ✅ BreadcrumbList schema
- ✅ Person schema (author)
- ✅ Person schema (medical reviewer)
- ✅ FAQPage schema (when FAQs present)
- ✅ datePublished + dateModified
- **Status:** Complete

### ⚠️ NEEDS ENHANCEMENT

#### Brand Pages ([brand].astro)
**Current:**
- ✅ Product schema
- ✅ Review schema
- ✅ AggregateRating schema
- ✅ Offers schema (pricing)

**Missing/Could Add:**
- ❌ Organization schema for the reviewed brand
- ❌ WebPage schema
- ❌ BreadcrumbList schema (NO breadcrumbs)
- ❌ Medical/health condition schema (what it treats)
- ⚠️ Service schema (telehealth is a service, not just product)

**Recommendation:** Add BreadcrumbList and consider Service schema

#### Category Pages (sexual-health.astro, hair-health.astro, etc.)
**Current:**
- ✅ WebPage schema (in BaseLayout)
- ✅ CollectionPage schema (implied)
- ✅ ItemList schema (provider listings)

**Missing:**
- ❌ BreadcrumbList schema (NO breadcrumbs)
- ❌ FAQPage schema (many have FAQs but no schema)
- ⚠️ MedicalCondition schema (could help for health categories)

**Recommendation:** Add BreadcrumbList and FAQPage schemas

#### Comparison Pages (compare/[...slug].astro)
**Current:**
- ⚠️ Basic page schema only

**Missing:**
- ❌ Article schema (comparisons are articles)
- ❌ BreadcrumbList schema (NO breadcrumbs)
- ❌ Person schema (author/reviewer)
- ❌ datePublished + dateModified
- ❌ Comparison table structured data

**Recommendation:** Treat like articles with full schema markup

#### Static Comparison Pages (compare/hims-vs-bluechew.astro, etc.)
**Current:**
- ⚠️ Similar to dynamic comparisons

**Missing:**
- Same as dynamic comparison pages above

**Recommendation:** Same as dynamic comparisons

### ❌ MINIMAL/MISSING SCHEMA

#### About Page (about.astro)
**Current:**
- ⚠️ Basic WebPage schema only

**Missing:**
- ❌ AboutPage schema
- ❌ Organization details
- ❌ ContactPoint schema

**Recommendation:** Add AboutPage + Organization schemas

#### Team Page (team.astro)
**Current:**
- ⚠️ Basic WebPage schema only

**Missing:**
- ❌ Person schemas for each team member
- ❌ Organization/members relationship

**Recommendation:** Add Person schema for each team member

#### Methodology Page (methodology.astro)
**Current:**
- ⚠️ Basic WebPage schema only

**Missing:**
- ❌ Article schema (it's editorial content)
- ❌ HowTo schema (explains process)

**Recommendation:** Add Article or HowTo schema

#### Contact Page (contact.astro)
**Current:**
- ⚠️ Basic WebPage schema only

**Missing:**
- ❌ ContactPage schema
- ❌ ContactPoint schema (email, support)

**Recommendation:** Add ContactPage + ContactPoint schemas

#### Blog Index (blog.astro)
**Current:**
- ⚠️ Basic WebPage/CollectionPage

**Missing:**
- ❌ ItemList schema (list of blog posts)
- ❌ BreadcrumbList schema

**Recommendation:** Add ItemList for blog post listings

#### Guides Index (guides.astro)
**Current:**
- ⚠️ Basic WebPage schema

**Missing:**
- ❌ ItemList schema (list of guides)
- ❌ BreadcrumbList schema

**Recommendation:** Add ItemList for guide listings

#### Compare Index (compare/index.astro)
**Current:**
- ⚠️ Basic WebPage schema

**Missing:**
- ❌ ItemList schema
- ❌ BreadcrumbList schema

**Recommendation:** Add ItemList schema

#### Author Pages (authors/[author].astro)
**Current:**
- Need to check if exists

**Missing:**
- ❌ ProfilePage schema
- ❌ Person schema with full details
- ❌ ItemList of authored content

**Recommendation:** Full Person schema + authored content list

#### Legal Pages (terms.astro, privacy.astro, disclaimer.astro, disclosure.astro)
**Current:**
- ⚠️ Basic WebPage schema only

**Missing:**
- ❌ No specific schema (acceptable, but could add)

**Recommendation:** Low priority, basic WebPage is fine

#### Match Results (match-results.astro)
**Current:**
- ⚠️ Dynamic page, unclear

**Missing:**
- ❌ Likely missing structured data for recommendations

**Recommendation:** Add ItemList or SearchResultsPage schema

## Priority Schema Additions

### 🔴 HIGH PRIORITY

1. **Add BreadcrumbList to Brand Pages**
   - Home > Category > Brand Name
   - Critical for navigation understanding

2. **Add BreadcrumbList to Category Pages**
   - Home > Category Name
   - Important for site structure

3. **Add FAQPage Schema to Category Pages**
   - Most have FAQs, no schema currently
   - Easy win for featured snippets

4. **Upgrade Comparison Pages to Article Schema**
   - Full article treatment with dates, author, etc.
   - Currently underutilizing content

5. **Add ItemList to Blog/Guides Index Pages**
   - Help search engines understand listings
   - Improve featured snippet chances

### 🟡 MEDIUM PRIORITY

6. **Add Person Schemas to Team Page**
   - Establish author authority
   - Connect to authored content

7. **Add AboutPage Schema to About Page**
   - Standard schema for about pages
   - Low effort, good signal

8. **Add ContactPage Schema to Contact Page**
   - Standard schema for contact pages
   - Include ContactPoint details

9. **Service Schema for Brand Pages**
   - Telehealth is a service
   - More accurate than just Product

10. **Add Structured Comparison Data**
    - Comparison tables in schema
    - Help AI understand differences

### 🟢 LOW PRIORITY

11. **MedicalCondition Schema for Categories**
    - Adds health context
    - More work, moderate benefit

12. **HowTo Schema for Methodology**
    - Good for process explanation
    - Low impact page

## AI Bot Optimization

### Current AI-Friendly Features
✅ Comprehensive structured data on main content
✅ Clear hierarchies with headings
✅ Rich metadata (descriptions, dates, authors)
✅ FAQ schemas for Q&A content

### Could Improve
⚠️ Add more ItemList schemas for "best X" lists
⚠️ Add HowTo schemas for instructional content
⚠️ Add more specific health/medical schemas
⚠️ Ensure all key pages have proper @type declarations

## Google Features Coverage

### Currently Supported
- ✅ Rich snippets (ratings, reviews)
- ✅ FAQ rich results
- ✅ Article rich results
- ✅ Breadcrumb navigation
- ✅ Organization knowledge panel

### Could Support
- ⚠️ How-to rich results (add HowTo schema)
- ⚠️ Comparison rich results (structured comparison data)
- ⚠️ Product carousels (enhance Product schema)
- ⚠️ People panels (enhance author schemas)

## Recommendations Summary

### Immediate Actions (This Session)
1. Add BreadcrumbSchema to brand pages
2. Add BreadcrumbSchema to category pages
3. Add FAQPage schema to category pages
4. Add ItemList to blog/guides index pages

### Next Session
5. Upgrade comparison pages with full Article schema
6. Add Person schemas to team page
7. Add AboutPage/ContactPage schemas

### Future Enhancements
8. Add Service schema to brand pages
9. Add MedicalCondition schemas to health categories
10. Add structured comparison data

## Schema Validation Tools

After implementing, validate with:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- Google Search Console: Check for schema errors

## Notes
- All major content pages (blog, guides, brands) have excellent schema
- Gap is primarily in index/listing pages and informational pages
- Priority should be breadcrumbs (critical for navigation understanding)
- FAQ schemas are easy wins for featured snippets
