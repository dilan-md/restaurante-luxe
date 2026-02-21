// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["img.freepik.com", "media.istockphoto.com", "images.unsplash.com"],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});