import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Mobile viewport configuration
const mobileViewport = { width: 375, height: 667 }; // iPhone SE

// All 109 pages to audit
const ALL_PAGES = {
  static: [
    '/',
    '/about',
    '/match-results',
    '/guides',
    '/blog',
    '/disclosure',
    '/terms',
    '/privacy',
    '/disclaimer',
    '/methodology',
  ],
  categories: [
    '/sexual-health',
    '/hair-health',
    '/testosterone',
    '/weight-loss',
    '/mental-health',
    '/diagnostics',
    '/sleep',
    '/herpes',
    '/peptides',
  ],
  comparisons: [
    '/compare',
    '/compare/hims-vs-bluechew',
    '/compare/bluechew-vs-hims',
    '/compare/hims-vs-manual',
    '/compare/keeps-vs-hims',
    '/compare/keeps-vs-manual',
    '/compare/manual-vs-numan',
    '/compare/bluechew-vs-ro',
    '/compare/ro-vs-manual',
    '/compare/ro-vs-hims',
    '/compare/hone-health-vs-vault-health',
    '/compare/lemonaid-health-vs-lifemd',
    '/compare/ro-vs-nurx',
    '/compare/nurx-vs-lemonaid-health',
  ],
  brands: [
    '/hims',
    '/ro',
    '/keeps',
    '/bluechew',
    '/manual',
    '/hone-health',
    '/vault-health',
    '/lifemd',
    '/henry-meds',
    '/betterhelp',
    '/talkspace',
    '/cerebral',
    '/everlywell',
    '/letsgetchecked',
    '/imaware',
    '/lemonaid-health',
    '/nurx',
    '/numan',
    '/healthymale',
    '/teladoc',
    '/amwell',
    '/telewellnessmd',
    '/pure-life-peptides',
    '/integrative-peptides',
    '/peptide-university',
    '/ascension-peptides',
    '/body-balance-medical',
    '/limitless-life-nootropics',
    '/particle-peptides',
  ],
  guides: [
    '/guides/understanding-erectile-dysfunction',
    '/guides/sildenafil-vs-tadalafil',
    '/guides/finasteride-vs-minoxidil',
    '/guides/understanding-male-pattern-baldness',
    '/guides/what-is-testosterone-replacement-therapy',
    '/guides/how-to-get-testosterone-tested',
    '/guides/glp1-medications-explained',
    '/guides/does-insurance-cover-weight-loss-telehealth',
    '/guides/how-to-choose-online-therapist',
    '/guides/teletherapy-vs-in-person',
    '/guides/when-to-see-doctor-about-ed',
    '/guides/premature-ejaculation-treatment-options',
    '/guides/insomnia-treatment-online',
    '/guides/herpes-treatment-online-complete-guide',
    '/guides/when-to-use-at-home-health-tests',
  ],
  blog: [
    '/blog/what-to-expect-first-telehealth-visit',
    '/blog/how-to-get-testosterone-tested-guide',
    '/blog/trt-cost-breakdown-complete-guide',
    '/blog/finasteride-vs-minoxidil-comparison',
    '/blog/low-testosterone-symptoms-complete-checklist',
    '/blog/glp1-insurance-coverage-complete-guide',
    '/blog/hims-vs-ro-complete-comparison',
    '/blog/ed-at-30-causes-treatment-guide',
    '/blog/minoxidil-results-timeline-complete-guide',
    '/blog/generic-vs-brand-ed-medications',
    '/blog/online-therapy-cost-comparison-2025',
    '/blog/how-long-sildenafil-take-to-work',
    '/blog/ozempic-vs-wegovy-comparison',
    '/blog/understanding-compounded-medications',
    '/blog/how-much-weight-can-you-lose-on-semaglutide',
    '/blog/choosing-ed-medication-what-works-best',
    '/blog/how-to-save-money-telehealth-prescriptions',
    '/blog/finasteride-results-timeline-what-to-expect',
    '/blog/glp1-side-effects-timeline-guide',
    '/blog/trt-side-effects-complete-guide',
    '/blog/2025-mens-telehealth-cost-comparison',
    '/blog/betterhelp-vs-talkspace-comparison',
    '/blog/cialis-vs-viagra-complete-comparison',
    '/blog/does-hair-loss-treatment-work-evidence',
    '/blog/does-online-therapy-work-evidence',
  ],
};

interface UIIssue {
  page: string;
  issueType: string;
  description: string;
  severity: 'critical' | 'medium' | 'low';
  element?: string;
}

const issues: UIIssue[] = [];

test.describe('Mobile UI Audit - All 109 Pages', () => {
  test.use({ viewport: mobileViewport });

  test.beforeAll(() => {
    console.log(`\n${'='.repeat(80)}`);
    console.log('MOBILE UI AUDIT - ALL 109 PAGES');
    console.log('Viewport: 375x667 (iPhone SE)');
    console.log(`${'='.repeat(80)}\n`);
  });

  test.afterAll(() => {
    // Write issues to file
    const reportPath = path.join(__dirname, '..', 'mobile-ui-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(issues, null, 2));

    console.log(`\n${'='.repeat(80)}`);
    console.log('AUDIT COMPLETE');
    console.log(`Total Issues Found: ${issues.length}`);
    console.log(`Report saved to: ${reportPath}`);
    console.log(`${'='.repeat(80)}\n`);

    // Print summary by severity
    const critical = issues.filter(i => i.severity === 'critical').length;
    const medium = issues.filter(i => i.severity === 'medium').length;
    const low = issues.filter(i => i.severity === 'low').length;

    console.log('\nISSUE SUMMARY:');
    console.log(`  Critical: ${critical}`);
    console.log(`  Medium: ${medium}`);
    console.log(`  Low: ${low}`);

    // Print by type
    const byType = issues.reduce((acc, issue) => {
      acc[issue.issueType] = (acc[issue.issueType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('\nISSUES BY TYPE:');
    Object.entries(byType).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
  });

  // Helper function to check for badge/breadcrumb overlap
  async function checkBadgeBreadcrumbOverlap(page: any, url: string) {
    const breadcrumbs = page.locator('nav[aria-label="Breadcrumb"], .breadcrumb, a[href="/"]').first();
    const badges = page.locator('[class*="badge"], [class*="chip"], [class*="tag"]').first();

    if (await breadcrumbs.count() > 0 && await badges.count() > 0) {
      const breadcrumbBox = await breadcrumbs.boundingBox();
      const badgeBox = await badges.boundingBox();

      if (breadcrumbBox && badgeBox) {
        // Check if they're on the same horizontal line (within 20px)
        const sameLine = Math.abs(breadcrumbBox.y - badgeBox.y) < 20;

        // Check if they overlap horizontally
        const overlaps = sameLine && (
          (breadcrumbBox.x < badgeBox.x + badgeBox.width && breadcrumbBox.x + breadcrumbBox.width > badgeBox.x)
        );

        if (overlaps || sameLine) {
          issues.push({
            page: url,
            issueType: 'Badge/Breadcrumb Stacking',
            description: overlaps ? 'Badges overlap with breadcrumbs on same line' : 'Badges and breadcrumbs on same line (may cause crowding)',
            severity: overlaps ? 'critical' : 'medium',
            element: 'breadcrumbs + badges',
          });
        }
      }
    }
  }

  // Helper function to check spacing inconsistencies
  async function checkSpacing(page: any, url: string) {
    const sections = page.locator('section');
    const sectionCount = await sections.count();

    if (sectionCount > 1) {
      const spacings: number[] = [];

      for (let i = 0; i < Math.min(sectionCount - 1, 5); i++) {
        const section1 = sections.nth(i);
        const section2 = sections.nth(i + 1);

        const box1 = await section1.boundingBox();
        const box2 = await section2.boundingBox();

        if (box1 && box2) {
          const spacing = box2.y - (box1.y + box1.height);
          spacings.push(spacing);
        }
      }

      // Check for inconsistent spacing (variance > 20px)
      if (spacings.length > 1) {
        const avg = spacings.reduce((a, b) => a + b, 0) / spacings.length;
        const hasInconsistent = spacings.some(s => Math.abs(s - avg) > 20);

        if (hasInconsistent) {
          issues.push({
            page: url,
            issueType: 'Spacing Inconsistency',
            description: `Inconsistent section spacing detected (variance > 20px)`,
            severity: 'medium',
            element: 'sections',
          });
        }
      }
    }
  }

  // Helper function to check text overflow
  async function checkTextOverflow(page: any, url: string) {
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const count = await headings.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      const heading = headings.nth(i);
      const box = await heading.boundingBox();

      if (box && box.width > mobileViewport.width) {
        const text = await heading.textContent();
        issues.push({
          page: url,
          issueType: 'Text Overflow',
          description: `Heading text wider than viewport: "${text?.substring(0, 50)}..."`,
          severity: 'medium',
          element: await heading.evaluate((el: HTMLElement) => el.tagName),
        });
      }
    }
  }

  // Helper function to check overcrowding
  async function checkOvercrowding(page: any, url: string) {
    // Check if any container has too many children in a small space
    const containers = page.locator('div[class*="container"], div[class*="grid"], div[class*="flex"]');
    const count = await containers.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      const container = containers.nth(i);
      const box = await container.boundingBox();
      const children = await container.locator('> *').count();

      if (box && box.height < 200 && children > 5) {
        issues.push({
          page: url,
          issueType: 'Overcrowding',
          description: `Container has ${children} elements in ${Math.round(box.height)}px height`,
          severity: 'low',
          element: 'container',
        });
      }
    }
  }

  // Test each page category
  Object.entries(ALL_PAGES).forEach(([category, pages]) => {
    test.describe(`${category.toUpperCase()} Pages (${pages.length})`, () => {
      pages.forEach((url) => {
        test(`Audit: ${url}`, async ({ page }) => {
          console.log(`  Auditing: ${url}`);

          try {
            await page.goto(`http://localhost:4322${url}`, {
              waitUntil: 'networkidle',
              timeout: 30000
            });

            // Wait for page to be fully loaded
            await page.waitForLoadState('domcontentloaded');

            // Run all checks
            await checkBadgeBreadcrumbOverlap(page, url);
            await checkSpacing(page, url);
            await checkTextOverflow(page, url);
            await checkOvercrowding(page, url);

            // Take screenshot if issues found for this page
            const pageIssues = issues.filter(i => i.page === url);
            if (pageIssues.length > 0) {
              const screenshotPath = path.join(__dirname, '..', 'test-results', 'mobile-audit', `${url.replace(/\//g, '_')}.png`);
              await page.screenshot({ path: screenshotPath, fullPage: true });
              console.log(`    ⚠️  ${pageIssues.length} issue(s) found`);
            } else {
              console.log(`    ✓ No issues`);
            }

          } catch (error) {
            console.error(`    ✗ Error loading page: ${error}`);
            issues.push({
              page: url,
              issueType: 'Page Load Error',
              description: `Failed to load page: ${error}`,
              severity: 'critical',
            });
          }
        });
      });
    });
  });
});
