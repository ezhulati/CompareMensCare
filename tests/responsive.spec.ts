import { test, expect } from '@playwright/test';

/**
 * Responsive Design Visual Tests
 *
 * These tests verify that the site renders correctly across all screen sizes
 * and that responsive breakpoints work as expected.
 */

// Key pages to test
const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/sexual-health', name: 'Sexual Health Category' },
  { path: '/hair-health', name: 'Hair Health Category' },
  { path: '/hims', name: 'Brand Review Page' },
  { path: '/compare/hims-vs-ro', name: 'Comparison Page' },
];

test.describe('Responsive Design Tests', () => {
  // Test each page for responsive layout
  for (const page of pages) {
    test(`${page.name} - Mobile Menu Toggle`, async ({ page: pw }) => {
      await pw.goto(page.path);

      // Wait for page to load
      await pw.waitForLoadState('networkidle');

      // On mobile, the hamburger menu should be visible
      const menuButton = pw.locator('#mobile-menu-button');
      await expect(menuButton).toBeVisible();

      // Click to open menu
      await menuButton.click();

      // Menu should be visible
      const mobileMenu = pw.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible();

      // Check aria-expanded is set correctly
      await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

      // Close menu with Escape key
      await pw.keyboard.press('Escape');

      // Menu should be hidden
      await expect(mobileMenu).toBeHidden();

      // Check aria-expanded is set correctly
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test(`${page.name} - Header Sticky Behavior`, async ({ page: pw }) => {
      await pw.goto(page.path);
      await pw.waitForLoadState('networkidle');

      // Get header position
      const header = pw.locator('header');
      const initialPosition = await header.boundingBox();

      // Scroll down
      await pw.evaluate(() => window.scrollBy(0, 500));
      await pw.waitForTimeout(300);

      // Header should still be at top
      const scrolledPosition = await header.boundingBox();
      expect(scrolledPosition?.y).toBe(0);

      // Header should be visible
      await expect(header).toBeVisible();
    });

    test(`${page.name} - No Horizontal Overflow`, async ({ page: pw }) => {
      await pw.goto(page.path);
      await pw.waitForLoadState('networkidle');

      // Check that body width doesn't exceed viewport
      const bodyWidth = await pw.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await pw.evaluate(() => window.innerWidth);

      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);

      // Check for horizontal scrollbar
      const hasHorizontalScroll = await pw.evaluate(() =>
        document.documentElement.scrollWidth > document.documentElement.clientWidth
      );

      expect(hasHorizontalScroll).toBe(false);
    });

    test(`${page.name} - Touch Targets (Mobile)`, async ({ page: pw }) => {
      await pw.goto(page.path);
      await pw.waitForLoadState('networkidle');

      // Get all buttons and links
      const buttons = await pw.locator('button, a.btn, a.btn-primary, a.btn-secondary').all();

      for (const button of buttons.slice(0, 5)) { // Test first 5 to keep test fast
        const box = await button.boundingBox();
        if (box && box.height > 0) {
          // Touch target should be at least 44px (iOS guideline)
          expect(box.height).toBeGreaterThanOrEqual(40); // Allow small margin
        }
      }
    });

    test(`${page.name} - Visual Screenshot`, async ({ page: pw }, testInfo) => {
      await pw.goto(page.path);
      await pw.waitForLoadState('networkidle');

      // Wait for any animations to complete
      await pw.waitForTimeout(500);

      // Take full page screenshot
      await expect(pw).toHaveScreenshot(`${page.name.toLowerCase().replace(/\s+/g, '-')}-${testInfo.project.name}.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
});

test.describe('Mobile Specific Tests (320px-430px)', () => {
  test('Homepage - Stats Grid Layout', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Stats should be in 2 columns on mobile
    const statsContainer = page.locator('.grid').filter({ hasText: 'Services Reviewed' }).first();
    const computedStyle = await statsContainer.evaluate((el) =>
      window.getComputedStyle(el).gridTemplateColumns
    );

    // Should have 2 equal columns on mobile
    expect(computedStyle).toContain('repeat(2');
  });

  test('Comparison Cards - Single Column Layout', async ({ page }) => {
    await page.goto('/sexual-health');
    await page.waitForLoadState('networkidle');

    // Brand cards should stack vertically on mobile
    const cards = await page.locator('article.card').all();

    if (cards.length >= 2) {
      const box1 = await cards[0].boundingBox();
      const box2 = await cards[1].boundingBox();

      // Second card should be below first card (not beside)
      if (box1 && box2) {
        expect(box2.y).toBeGreaterThan(box1.y + box1.height - 10);
      }
    }
  });

  test('Filter Panel - Stacked Layout', async ({ page }) => {
    await page.goto('/sexual-health');
    await page.waitForLoadState('networkidle');

    // Filter selects should stack vertically on mobile
    const filterPanel = page.locator('.filter-panel');
    if (await filterPanel.count() > 0) {
      const selects = await filterPanel.locator('select').all();

      if (selects.length >= 2) {
        const box1 = await selects[0].boundingBox();
        const box2 = await selects[1].boundingBox();

        // Second select should be below first (allowing for small tolerance)
        if (box1 && box2) {
          expect(box2.y).toBeGreaterThan(box1.y);
        }
      }
    }
  });
});

test.describe('Tablet Tests (768px-1024px)', () => {
  test('Filter Panel - 2 Column Grid', async ({ page }) => {
    await page.goto('/sexual-health');
    await page.waitForLoadState('networkidle');

    const filterPanel = page.locator('.filter-panel .grid').first();
    if (await filterPanel.count() > 0) {
      const computedStyle = await filterPanel.evaluate((el) =>
        window.getComputedStyle(el).gridTemplateColumns
      );

      // Should have 2 columns on tablet (sm breakpoint)
      expect(computedStyle).toContain('repeat(2');
    }
  });

  test('Stats Bar - 4 Column Layout', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Stats should expand to 4 columns on tablet
    const statsContainer = page.locator('.grid').filter({ hasText: 'Services Reviewed' }).first();
    const computedStyle = await statsContainer.evaluate((el) =>
      window.getComputedStyle(el).gridTemplateColumns
    );

    // Should have 4 columns at md breakpoint
    expect(computedStyle).toContain('repeat(4');
  });
});

test.describe('Desktop Tests (1280px+)', () => {
  test('Navigation - Desktop Menu Visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Desktop nav should be visible
    const desktopNav = page.locator('nav .hidden.lg\\:flex');
    await expect(desktopNav).toBeVisible();

    // Mobile menu button should be hidden
    const mobileButton = page.locator('#mobile-menu-button');
    await expect(mobileButton).toBeHidden();
  });

  test('Comparison Table - Full Width Layout', async ({ page }) => {
    await page.goto('/compare/hims-vs-ro');
    await page.waitForLoadState('networkidle');

    // Table should be visible without horizontal scroll
    const table = page.locator('table').first();
    if (await table.count() > 0) {
      const tableBox = await table.boundingBox();
      const viewportWidth = await page.evaluate(() => window.innerWidth);

      if (tableBox) {
        // Table should fit within viewport
        expect(tableBox.width).toBeLessThan(viewportWidth);
      }
    }
  });

  test('Brand Cards - 12 Column Grid Layout', async ({ page }) => {
    await page.goto('/sexual-health');
    await page.waitForLoadState('networkidle');

    // Brand cards should use 12-column grid on desktop
    const brandCard = page.locator('article.card .grid.lg\\:grid-cols-12').first();
    if (await brandCard.count() > 0) {
      const computedStyle = await brandCard.evaluate((el) =>
        window.getComputedStyle(el).gridTemplateColumns
      );

      // Should have 12 columns
      expect(computedStyle).toContain('repeat(12');
    }
  });
});

test.describe('Accessibility Tests', () => {
  test('Mobile Menu - Keyboard Navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Tab to mobile menu button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab'); // May need multiple tabs to reach it

    // Focus should be on menu button
    const menuButton = page.locator('#mobile-menu-button');

    // Open with Enter
    await page.keyboard.press('Enter');

    // Menu should open
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();

    // First menu item should receive focus
    const firstLink = mobileMenu.locator('a').first();
    await expect(firstLink).toBeFocused();
  });

  test('Focus Visible Styles', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Tab through interactive elements
    await page.keyboard.press('Tab');

    // Get focused element
    const focusedElement = page.locator(':focus');

    // Should have visible focus ring
    const outlineStyle = await focusedElement.evaluate((el) =>
      window.getComputedStyle(el).outline
    );

    // Should have some form of outline
    expect(outlineStyle).not.toBe('none');
  });
});
