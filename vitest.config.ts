import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: 'src/test.setup.ts',
    include: ['src/**/*.test.ts'],
    coverage: {
      exclude: [
        '<rootDir>/node_modules/'
      ]
    }
  }
})
