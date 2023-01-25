/// <reference types="vitest" />
import {visualizer} from 'rollup-plugin-visualizer'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [visualizer()],
  build: {
    lib: {
      entry: {
        'orchy-storage-plugin': 'src/orchy-storage-plugin.ts',
        'orchy-storage-plugin-utils': 'src/orchy-storage-plugin-utils.ts'
      },
      formats: ['es']
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
