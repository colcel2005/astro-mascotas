import { defineConfig } from 'astro/config';

// https://https://astro-mascotas.pages.dev/
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://creativetimofficial.github.io',
  base: '/astro-ecommerce'
});