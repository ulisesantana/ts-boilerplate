# ts-boilerplate

This is a template repository. So just use the template and once you have your repository cloned on your pc just run `npm install` for installing all the dependencies.

## Scripts

```javascript
"prestart": "npm run build",
"start": "node build/index.js",
"dev": "npm run build -- --watch & nodemon build/index.js",
"build": "npm run lint && tsc",
"lint": "xo",
"lint:fix": "npm run lint -- --fix",
"test": "jest",
"test:tdd": "npm t -- --watch"
```

## Test config

```
"jest": {
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

```
"xo": {
  "prettier": true
  "ignores": [
    "build"
  ],
  "globals": [
    "describe",
    "xdescribe",
    "it",
    "xit",
    "expect"
  ],
  "extends": "xo-typescript",
  "extensions": [ 
    "ts"
  ]
}

```
