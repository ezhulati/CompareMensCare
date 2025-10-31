import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:4321',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Take screenshot on failure */
    screenshot: 'only-on-failure',

    /* Video on failure */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers and device sizes */
  projects: [
    // Mobile devices
    {
      name: 'Mobile Chrome - iPhone SE',
      use: {
        ...devices['iPhone SE'],
        viewport: { width: 375, height: 667 }
      },
    },
    {
      name: 'Mobile Chrome - iPhone 12',
      use: {
        ...devices['iPhone 12 Pro'],
        viewport: { width: 390, height: 844 }
      },
    },
    {
      name: 'Mobile Chrome - Samsung Galaxy S21',
      use: {
        ...devices['Galaxy S9+'],
        viewport: { width: 360, height: 740 }
      },
    },
    {
      name: 'Mobile Chrome - Small (320px)',
      use: {
        ...devices['iPhone SE'],
        viewport: { width: 320, height: 568 }
      },
    },

    // Tablets
    {
      name: 'Tablet - iPad Mini',
      use: {
        ...devices['iPad Mini'],
        viewport: { width: 768, height: 1024 }
      },
    },
    {
      name: 'Tablet - iPad',
      use: {
        ...devices['iPad (gen 7)'],
        viewport: { width: 810, height: 1080 }
      },
    },
    {
      name: 'Tablet - iPad Pro',
      use: {
        ...devices['iPad Pro 11'],
        viewport: { width: 1024, height: 1366 }
      },
    },

    // Desktop
    {
      name: 'Desktop - 1280px',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
    },
    {
      name: 'Desktop - 1920px',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      },
    },
    {
      name: 'Desktop - 2560px',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 2560, height: 1440 }
      },
    },

    // Additional browsers for key viewports
    {
      name: 'Firefox Desktop',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 }
      },
    },
    {
      name: 'Safari Desktop',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 720 }
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
