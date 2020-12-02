module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true
    },
    extends: [
        'standard-with-typescript'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {}
}