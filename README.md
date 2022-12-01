# ts-boilerplate

This is a template repository. So just use the template and once you have your repository cloned on your pc just run `npm install` for installing all the dependencies.

## Scripts

```json
"prepare": "npm run build",
"prestart": "npm run build",
"start": "node build/index.js",
"build": "npm run lint && npm test && tsc",
"lint": "eslint . --ext .ts",
"lint:fix": "npm run lint -- --fix",
"test": "jest --verbose",
"test:watch": "npm t -- --watchAll",
"test:coverage": "npm t -- --coverage"
```

## Test config

```json
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

```json
{
    "env": {
        "es2022": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "standard"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"]
    }
}
```
