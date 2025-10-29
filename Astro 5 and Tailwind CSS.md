Astro 5 and Tailwind CSS

The steps assume Node 18+ is installed.

---

1. **Initialize the project**

   * Run `npm create astro@latest mens-health-compare` and choose the minimal template.
   * Enter the project directory (`cd mens-health-compare`) and install Tailwind with Astro’s integration:

     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
   * Update `astro.config.mjs` to enable the Tailwind integration (`@astrojs/tailwind`) and configure content collections.

2. **Configure Tailwind**

   * In `tailwind.config.mjs`, enable JIT mode and set the content paths to include `.astro`, `.md`, `.tsx`, and `.jsx` files in `/src`.
   * Extend the theme with a neutral colour palette and your brand fonts.
   * Install `@tailwindcss/forms` for polished form styles and `@tailwindcss/typography` for rich text styling.

3. **Define content collections**

   * Create `src/content/config.ts` and define collections for `brands`, `categories`, `guides`, and `comparisons` using Astro’s `defineCollection`.  Specify a schema for front‑matter fields (e.g., `title`, `slug`, `affiliateLink`, `categories`, `pricing`, `cookieDays`, etc.).
   * In `/src/content/brands/`, add Markdown or MDX files for each telehealth company (Hims, Ro, BlueChew, Keeps, Manual, Numan, Hone Health, Vault Health, HealthyMale, BetterHelp, Talkspace and LetsGetChecked) with structured front‑matter.  Include review content in the body.
   * Similarly, create `/src/content/guides/` for condition guides and `/src/content/comparisons/` for side‑by‑side brand comparisons.

4. **Build the site structure**

   * In `/src/layouts/`, create `BaseLayout.astro` to wrap all pages; include the `<head>` with SEO meta tags and a `<DisclosureBanner>` component that displays your affiliate disclaimer at the top.
   * In `/src/components/`, create reusable components:

     * `Header.astro` and `Footer.astro` for navigation and global links.
     * `Table.astro` for static comparison tables.
     * `InteractiveTable.jsx` (a React island) for sortable/filterable tables; hydrate it with `client:load` in pages where dynamic behaviour is needed.
     * `NewsletterForm.astro` to collect email sign‑ups.
     * `AffiliateButton.astro` that reads the affiliate slug from props and links to `/go/[brand]`.

5. **Implement routing**

   * Create `src/pages/index.astro` for the home page; introduce the mission and link to each category hub.
   * For category hubs, add files such as `src/pages/sexual-health.astro`, `src/pages/hair-health.astro`, etc.  In each, use `getCollection('brands')` to filter by category and render a comparison table.
   * Create dynamic brand pages: `src/pages/[brand]/index.astro`.  Use `export async function getStaticPaths()` to read all brand slugs from the `brands` collection.  Fetch the brand’s content via `getEntryBySlug('brands', slug)` and render it with your review template.
   * For comparisons, create `src/pages/compare/[...slug].astro`.  Use `getStaticPaths()` to generate paths like `/compare/hims-vs-ro` and parse the slug array to load the appropriate comparison entry.
   * For guides, add `src/pages/guides/[slug].astro` to render condition‑based educational articles.

6. **Affiliate redirection**

   * In `/src/pages/go/[brand].ts`, write an API route that imports a map of affiliate URLs from a local file (`src/data/affiliateLinks.ts`).  Lookup the brand slug and return a `307` redirect to the actual affiliate URL.  Use environment variables to store your network IDs or unique tokens.

7. **Add interactivity**

   * Use Astro islands for interactive pieces only where needed.  For example, import `InteractiveTable` into category pages with `<InteractiveTable client:visible data={tableData} />`.
   * Build a simple quiz component (`src/components/Quiz.jsx`) to help users choose providers; hydrate it client‑side.

8. **Global utilities**

   * Create a `SEO.astro` component that accepts `title`, `description`, `canonical`, and `jsonLd` props.  Include it in every page to manage meta tags.
   * Add a `utils.ts` file to normalise pricing into 30‑day costs and to format strings for display.

9. **Styling**

   * Use Tailwind classes throughout your components and pages; define utility classes for spacing, typography, and responsive tables.
   * Avoid specifying colours directly in components; instead, reference your extended Tailwind palette.
   * Implement dark mode by toggling the `data-theme` attribute on `<html>` and using Tailwind’s `dark:` variants.

10. **Newsletter and forms**

    * In `NewsletterForm.astro`, build a simple POST form that submits to a serverless function or third‑party endpoint (e.g., Mailchimp) via `fetch`.  Provide validation states.
    * For contact or feedback forms, use `@astrojs/form-data` or a similar pattern to process submissions server‑side.

11. **Build and deploy**

    * Run `npm run dev` during development to preview the site.  Use `npm run build` to generate static output.
    * Deploy to Vercel or Netlify by connecting your Git repository.  Set environment variables for affiliate IDs in the deployment dashboard.
    * Configure a rewrite on the platform if needed so that `/go/*` paths are treated as serverless functions.

12. **Content updates and automation**

    * Write scripts in `scripts/` to pull updated pricing and commission data from spreadsheets or APIs and regenerate brand entries.
    * Optionally integrate with a headless CMS API (e.g., Sanity) to allow non‑technical content authors to update guides and reviews.

13. **Quality and compliance checks**

    * Include unit tests for helper functions (e.g., price normalisation).  Use Lighthouse or Astro’s built‑in audits to check performance and accessibility.
    * Ensure the disclosure banner renders above the fold on every page and that affiliate links include `rel="nofollow sponsored"`.

By following these steps, the coding agent will scaffold a fully static Astro 5 site styled with Tailwind CSS, with dynamic island components where necessary, content collections for structured data, and a clear routing scheme that matches the blueprint laid out in the earlier plan.
