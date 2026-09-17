import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssr: {
    // Bundle these CJS packages into the SSR build instead of leaving a
    // raw `import` for Node to resolve, since Node's ESM loader can't
    // reliably derive named exports from them.
    noExternal: ['react-helmet-async'],
  },
})
