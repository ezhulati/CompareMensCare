import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      filter: (page) => !page.includes('/api/') && !page.includes('/_'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        // Brand pages (dynamic routes not auto-detected in SSR mode)
        'https://comparemenscare.com/hims',
        'https://comparemenscare.com/ro',
        'https://comparemenscare.com/bluechew',
        'https://comparemenscare.com/keeps',
        'https://comparemenscare.com/manual',
        'https://comparemenscare.com/numan',
        'https://comparemenscare.com/hone-health',
        'https://comparemenscare.com/vault-health',
        'https://comparemenscare.com/healthymale',
        'https://comparemenscare.com/betterhelp',
        'https://comparemenscare.com/talkspace',
        'https://comparemenscare.com/cerebral',
        'https://comparemenscare.com/amwell',
        'https://comparemenscare.com/teladoc',
        'https://comparemenscare.com/letsgetchecked',
        'https://comparemenscare.com/everlywell',
        'https://comparemenscare.com/imaware',
        'https://comparemenscare.com/henry-meds',
        'https://comparemenscare.com/lemonaid-health',
        'https://comparemenscare.com/nurx',
        'https://comparemenscare.com/lifemd',
        'https://comparemenscare.com/pure-life-peptides',
        'https://comparemenscare.com/integrative-peptides',
        'https://comparemenscare.com/peptide-university',
        'https://comparemenscare.com/telewellnessmd',
        'https://comparemenscare.com/ascension-peptides',
        'https://comparemenscare.com/body-balance-medical',
        'https://comparemenscare.com/limitless-life-nootropics',
        'https://comparemenscare.com/particle-peptides',
      ],
    })
  ],
  site: 'https://comparemenscare.com'
});
