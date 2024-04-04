import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  site: 'https://Saturn-Devs-Org.github.io',
  base: 'quantum-hub-admin-dashboard',
})
