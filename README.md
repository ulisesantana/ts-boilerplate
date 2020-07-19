# ts-boilerplate

This is a template repository. So just use the template and once you have your repository cloned on your pc just run `npm install` for installing all the dependencies.

## Scripts

```javascript
"prestart": "npm run build",
"start": "node build/index.js",
"dev": "npm run build -- --watch & nodemon build/index.js",
"build": "npm run lint && tsc",
"lint": "./node_modules/.bin/eslint . --ext .ts",
"lint:fix": "npm run lint -- --fix",
"test": "jest",
"test:tdd": "npm t -- --watch"
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
{
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {},
}
```
