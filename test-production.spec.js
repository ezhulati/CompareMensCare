const { test, expect } = require('@playwright/test');

const PRODUCTION_URL = 'https://comparemenscare.com';

const blogPosts = [
  '2025-mens-telehealth-cost-comparison',
  'choosing-ed-medication-what-works-best',
  'cialis-vs-viagra-complete-comparison',
  'finasteride-results-timeline-what-to-expect',
  'generic-vs-brand-ed-medications',
  'glp1-insurance-coverage-complete-guide',
  'hims-vs-ro-complete-comparison',
  'how-to-save-money-telehealth-prescriptions',
  'trt-cost-breakdown-complete-guide',
  'understanding-compounded-medications',
];

const guides = [
  'sildenafil-vs-tadalafil',
  'finasteride-vs-minoxidil',
  'glp1-medications-explained',
  'how-to-choose-online-therapist',
  'understanding-erectile-dysfunction',
  'what-is-testosterone-replacement-therapy',
  'understanding-male-pattern-baldness',
  'when-to-see-doctor-about-ed',
  'does-insurance-cover-weight-loss-telehealth',
  'teletherapy-vs-in-person',
  'how-to-get-testosterone-tested',
  'when-to-use-at-home-health-tests',
];

test.describe('Production Site - Blog Posts', () => {
  for (const slug of blogPosts) {
    test(`Blog: ${slug}`, async ({ page }) => {
      const url = `${PRODUCTION_URL}/blog/${slug}`;
      console.log(`Testing: ${url}`);

      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Check HTTP status
      const status = response.status();
      console.log(`  Status: ${status}`);

      // Check for 404 page
      const pageText = await page.textContent('body');
      const is404 = pageText.includes('404') || pageText.includes('Page Not Found');

      // Get page title
      const title = await page.title();
      console.log(`  Title: ${title}`);

      // Assertions
      expect(status).toBe(200);
      expect(is404).toBe(false);
      expect(title).not.toContain('404');
    });
  }
});

test.describe('Production Site - Guides', () => {
  for (const slug of guides) {
    test(`Guide: ${slug}`, async ({ page }) => {
      const url = `${PRODUCTION_URL}/guides/${slug}`;
      console.log(`Testing: ${url}`);

      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Check HTTP status
      const status = response.status();
      console.log(`  Status: ${status}`);

      // Check for 404 page
      const pageText = await page.textContent('body');
      const is404 = pageText.includes('404') || pageText.includes('Page Not Found');

      // Get page title
      const title = await page.title();
      console.log(`  Title: ${title}`);

      // Assertions
      expect(status).toBe(200);
      expect(is404).toBe(false);
      expect(title).not.toContain('404');
    });
  }
});

test('Homepage', async ({ page }) => {
  const response = await page.goto(PRODUCTION_URL, { waitUntil: 'domcontentloaded' });
  const status = response.status();
  const title = await page.title();

  console.log(`Homepage Status: ${status}`);
  console.log(`Homepage Title: ${title}`);

  expect(status).toBe(200);
  expect(title).toContain('CompareMensCare');
});
