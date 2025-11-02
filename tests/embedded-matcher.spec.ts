import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1920, height: 1080 }
];

test.describe('Embedded Matcher Flow', () => {
  for (const viewport of viewports) {
    test.describe(`on ${viewport.name}`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto('/guides/understanding-erectile-dysfunction');
      });

      test('should display embedded matcher at bottom of page', async ({ page }) => {
        // Scroll to matcher section
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        // Check matcher is visible
        const matcher = page.locator('.embedded-matcher');
        await expect(matcher).toBeVisible();

        // Verify header
        await expect(page.getByRole('heading', { name: 'Find Your Best Match' })).toBeVisible();
        await expect(page.getByText('Answer 2 quick questions')).toBeVisible();
      });

      test('should complete full matcher flow', async ({ page }) => {
        // Scroll to matcher
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        // Step 1: Select subcategory
        const step1 = page.locator('#step-1');
        await expect(step1).toBeVisible();

        // Check subcategory options are visible
        const subcategoryOptions = page.locator('#step-1 .subcategory-option');
        const count = await subcategoryOptions.count();
        expect(count).toBeGreaterThan(0);

        // Click first subcategory option
        await subcategoryOptions.first().click();
        await page.waitForTimeout(300);

        // Step 2: Select priority
        const step2 = page.locator('#step-2');
        await expect(step2).toBeVisible();
        await expect(step1).not.toBeVisible();

        // Check priority options are visible
        const priorityOptions = page.locator('#step-2 .priority-option');
        const priorityCount = await priorityOptions.count();
        expect(priorityCount).toBeGreaterThan(0);

        // Click first priority option
        await priorityOptions.first().click();
        await page.waitForTimeout(500);

        // Results: Should show top 3 brands
        const results = page.locator('#results');
        await expect(results).toBeVisible();
        await expect(step2).not.toBeVisible();

        // Check that we have result cards
        const resultCards = page.locator('.result-card');
        const resultCount = await resultCards.count();
        expect(resultCount).toBeGreaterThanOrEqual(1);
        expect(resultCount).toBeLessThanOrEqual(3);

        // Verify result card has essential elements
        const firstCard = resultCards.first();
        await expect(firstCard.locator('.brand-name')).toBeVisible();
        await expect(firstCard.locator('.brand-rating')).toBeVisible();
        await expect(firstCard.locator('.brand-pricing')).toBeVisible();
        await expect(firstCard.locator('.affiliate-button')).toBeVisible();
      });

      test('should allow going back from step 2 to step 1', async ({ page }) => {
        // Scroll to matcher
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        // Complete step 1
        const subcategoryOptions = page.locator('#step-1 .subcategory-option');
        await subcategoryOptions.first().click();
        await page.waitForTimeout(300);

        // Should be on step 2
        const step2 = page.locator('#step-2');
        await expect(step2).toBeVisible();

        // Click back button
        const backButton = page.locator('#step-2 .back-button');
        await backButton.click();
        await page.waitForTimeout(300);

        // Should be back on step 1
        const step1 = page.locator('#step-1');
        await expect(step1).toBeVisible();
        await expect(step2).not.toBeVisible();
      });

      test('should allow going back from results to step 2', async ({ page }) => {
        // Scroll to matcher
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        // Complete step 1
        const subcategoryOptions = page.locator('#step-1 .subcategory-option');
        await subcategoryOptions.first().click();
        await page.waitForTimeout(300);

        // Complete step 2
        const priorityOptions = page.locator('#step-2 .priority-option');
        await priorityOptions.first().click();
        await page.waitForTimeout(500);

        // Should be on results
        const results = page.locator('#results');
        await expect(results).toBeVisible();

        // Click back button
        const backButton = page.locator('#results .back-button');
        await backButton.click();
        await page.waitForTimeout(300);

        // Should be back on step 2
        const step2 = page.locator('#step-2');
        await expect(step2).toBeVisible();
        await expect(results).not.toBeVisible();
      });

      test('should have working affiliate links in results', async ({ page }) => {
        // Scroll to matcher
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        // Complete flow
        await page.locator('#step-1 .subcategory-option').first().click();
        await page.waitForTimeout(300);
        await page.locator('#step-2 .priority-option').first().click();
        await page.waitForTimeout(500);

        // Check affiliate button
        const affiliateButton = page.locator('.result-card .affiliate-button').first();
        await expect(affiliateButton).toBeVisible();
        await expect(affiliateButton).toHaveAttribute('href', /^\/go\/.+/);
      });

      test('should display responsive layout correctly', async ({ page }) => {
        // Scroll to matcher
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);

        const matcher = page.locator('.embedded-matcher');
        const box = await matcher.boundingBox();

        if (box) {
          // Matcher should fit within viewport width with reasonable padding
          expect(box.width).toBeLessThanOrEqual(viewport.width);

          // On mobile, options should stack vertically (we'll check this in UI)
          if (viewport.name === 'mobile') {
            const options = page.locator('#step-1 .subcategory-option');
            if (await options.count() > 0) {
              const firstBox = await options.first().boundingBox();
              const secondBox = await options.nth(1).boundingBox();

              // On mobile, second option should be below first (higher y position)
              if (firstBox && secondBox) {
                expect(secondBox.y).toBeGreaterThan(firstBox.y);
              }
            }
          }
        }
      });
    });
  }
});
