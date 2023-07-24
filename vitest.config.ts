import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: 'src/test.setup.ts',
    coverage: {
      include: ['src/**/*.{ts}'],
      exclude: [
        '<rootDir>/node_modules/'
      ]
    }
  }
})
