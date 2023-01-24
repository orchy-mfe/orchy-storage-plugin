/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/orchy-storage-plugin.ts',
      formats: ['es'],
      fileName: 'orchy-storage-plugin'
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  test: {
    environment: 'happy-dom',
    mockReset: true,
    coverage: {
      enabled: true
    }
  },
})
