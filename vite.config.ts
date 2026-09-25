import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'
import { legacyRedirects } from './src/lib/redirects'

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart(),
    nitro({
      routeRules: Object.fromEntries(
        Object.entries(legacyRedirects).map(([from, to]) => [from, { redirect: { to, status: 301 } }]),
      ),
    }),
    viteReact(),
    tailwindcss(),
  ],
})
