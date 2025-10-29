import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

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
    react()
  ],
  site: 'https://comparemenscare.com'
});
