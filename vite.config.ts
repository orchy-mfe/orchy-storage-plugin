/// <reference types="vitest" />
import {visualizer} from 'rollup-plugin-visualizer'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [visualizer()],
  build: {
    lib: {
      entry: 'src/orchy-storage-plugin.ts',
      formats: ['es'],
      fileName: 'orchy-storage-plugin'
    },
  },
  test: {
    environment: 'happy-dom',
    mockReset: true,
    coverage: {
      enabled: true
    }
  }
})
