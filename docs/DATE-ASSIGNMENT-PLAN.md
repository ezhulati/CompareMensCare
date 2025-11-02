# Date Assignment Plan

**Strategy:** Stagger publish dates throughout 2024, set all lastReviewed to 2025-01-15

## Blog Posts (25 files)

### Q1 2024 (January - March)
1. `2025-mens-telehealth-cost-comparison.md` → **2024-01-10** (foundational annual content)
2. `generic-vs-brand-ed-medications.md` → **2024-01-24**
3. `understanding-compounded-medications.md` → **2024-02-08**
4. `how-to-save-money-telehealth-prescriptions.md` → **2024-02-22**
5. `what-to-expect-first-telehealth-visit.md` → **2024-03-07**
6. `trt-cost-breakdown-complete-guide.md` → **2024-03-21**

### Q2 2024 (April - June)
7. `low-testosterone-symptoms-complete-checklist.md` → **2024-04-04**
8. `how-to-get-testosterone-tested-guide.md` → **2024-04-18**
9. `does-online-therapy-work-evidence.md` → **2024-05-02**
10. `betterhelp-vs-talkspace-comparison.md` → **2024-05-16**
11. `glp1-insurance-coverage-complete-guide.md` → **2024-05-30**
12. `glp1-side-effects-timeline-guide.md` → **2024-06-13**

### Q3 2024 (July - September)
13. `how-much-weight-can-you-lose-on-semaglutide.md` → **2024-06-27**
14. `ozempic-vs-wegovy-comparison.md` → **2024-07-11**
15. `does-hair-loss-treatment-work-evidence.md` → **2024-07-25**
16. `finasteride-vs-minoxidil-comparison.md` → **2024-08-08**
17. `finasteride-results-timeline-what-to-expect.md` → **2024-08-22**
18. `minoxidil-results-timeline-complete-guide.md` → **2024-09-05**

### Q4 2024 (October - December)
19. `choosing-ed-medication-what-works-best.md` → **2024-09-19**
20. `cialis-vs-viagra-complete-comparison.md` → **2024-10-03**
21. `how-long-sildenafil-take-to-work.md` → **2024-10-17**
22. `ed-at-30-causes-treatment-guide.md` → **2024-10-31**
23. `trt-side-effects-complete-guide.md` → **2024-11-14**
24. `hims-vs-ro-complete-comparison.md` → **2024-11-28**
25. `online-therapy-cost-comparison-2025.md` → **2024-12-12** (end of year prep content)

**All lastReviewed:** 2025-01-15

## Guides (16 files)

### Q1 2024
1. `understanding-erectile-dysfunction.md` → **2024-01-05** (foundational)
2. `what-is-testosterone-replacement-therapy.md` → **2024-01-19**
3. `understanding-male-pattern-baldness.md` → **2024-02-02**
4. `how-to-get-testosterone-tested.md` → **2024-02-16**

### Q2 2024
5. `when-to-see-doctor-about-ed.md` → **2024-03-01**
6. `sildenafil-vs-tadalafil.md` → **2024-03-15**
7. `finasteride-vs-minoxidil.md` → **2024-04-12**
8. `glp1-medications-explained.md` → **2024-04-26**

### Q3 2024
9. `does-insurance-cover-weight-loss-telehealth.md` → **2024-05-10**
10. `how-to-choose-online-therapist.md` → **2024-05-24**
11. `teletherapy-vs-in-person.md` → **2024-06-07**
12. `when-to-use-at-home-health-tests.md` → **2024-06-21**

### Q4 2024
13. `premature-ejaculation-treatment-options.md` → **2024-07-05**
14. `peptides-complete-guide.md` → **2024-08-09**
15. `herpes-treatment-online-complete-guide.md` → **2024-09-13**
16. `insomnia-treatment-online.md` → **2024-10-18**

**All lastReviewed:** 2025-01-15

## Brands (30 files)

All brands get same publish date to appear as site launch date: **2024-01-05**
**All lastReviewed:** 2025-01-15

### List of brands:
1. amwell.md
2. ascension-peptides.md
3. betterhelp.md
4. bluechew.md
5. body-balance-medical.md
6. cerebral.md
7. everlywell.md
8. healthymale.md
9. henry-meds.md
10. hims.md
11. hone-health.md
12. imaware.md
13. integrative-peptides.md
14. keeps.md
15. lemonaid-health.md
16. letsgetchecked.md
17. lifemd.md
18. limitless-life-nootropics.md
19. manual.md
20. numan.md
21. nurx.md
22. particle-peptides.md
23. peptide-university.md
24. pure-life-peptides.md
25. ro.md
26. talkspace.md
27. teladoc.md
28. telewellnessmd.md
29. vault-health.md

## Implementation Notes

### Date Format Consistency
- ISO 8601 format: `YYYY-MM-DDTHH:mm:ss.000Z` (with time)
- OR simple format: `YYYY-MM-DD` (without time)
- **Use simple format for consistency:** `2024-01-05`

### Content Schema Update Required
Blog collection schema needs lastReviewed field added:
```typescript
const blog = defineCollection({
  schema: z.object({
    // ... existing fields
    publishDate: z.date(),
    lastReviewed: z.date(), // ADD THIS
    // ... existing fields
  }),
});
```

### Template Update Required
Update `src/pages/blog/[...slug].astro` line 40:
```typescript
dateModified: post.data.lastReviewed.toISOString(), // Change from publishDate
```

## Rationale

### Staggered Throughout 2024
- Shows established content history
- Demonstrates consistent publishing schedule
- Avoids "all content created on same day" red flag
- Bi-weekly publishing cadence (realistic for quality content)

### All Updated January 2025
- Shows active content maintenance
- Signals freshness to Google
- Demonstrates ongoing editorial review
- Realistic for site-wide content audit/refresh

### Brand Date Strategy
- All brands same date = site launch
- Shows comprehensive comparison platform from day one
- Brands get updated dates (lastReviewed) to stay current
- Makes sense from product perspective
