# ts-boilerplate

This is a template repository. So just use the template and once you have your repository cloned on your pc just run `npm install` for installing all the dependencies.

## Scripts

```javascript
"prepare": "npm run build",
"prestart": "npm run build",
"start": "node build/index.js",
"dev": "npm run build -- --watch & nodemon build/index.js",
"build": "npm run lint && npm test && tsc",
"lint": "./node_modules/.bin/eslint . --ext .ts",
"lint:fix": "npm run lint -- --fix",
"test": "jest --verbose",
"test:tdd": "npm t -- --watchAll"
```

## Test config

```javascript
{
  "roots": [
    "<rootDir>/src"
 ],
 "testMatch": [
    "**/__tests__/**/*.+(ts|js)",
    "**/?(*.)+(spec|test).+(ts|js)"
 ],
 "transform": {
    "^.+\\.(ts)?$": "ts-jest"
 }
}
```

## Linter config

```javascript
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
```
