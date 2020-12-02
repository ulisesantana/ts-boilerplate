module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'standard-jsx',
    'prettier-standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // disabled due to conflict with prettier-standard
    '@typescript-eslint/space-before-function-paren': 'off'
  }
}
