# ESLint & Prettier Configuration for Next.js Project

## Overview

This document outlines the setup for ESLint, Prettier, and Husky in our Next.js project to maintain clean, consistent code and enforce pre-commit linting.

### ESLint Configuration

Our `.eslintrc` file is tailored to TypeScript, React, and Next.js, with additional plugins for Prettier, React Hooks, and TypeScript. It enforces several coding best practices such as maximum function length, camelCase naming conventions, and efficient React usage.

#### **ESLint File: `.eslintrc.json`**

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "root": true,
  "extends": [
    "next",
    "eslint:recommended",
    "prettier",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  "plugins": ["prettier", "@typescript-eslint", "react", "react-hooks"],
  "rules": {
    "camelcase": "error",
    "max-lines": ["error", 300],
    "max-len": ["warn", { "code": 120, "ignorePattern": "className=\"[^\"]*\"" }],
    "eol-last": ["error", "always"],
    "prefer-const": "warn",
    "no-var": "warn",
    "no-console": "warn",
    "max-lines-per-function": ["warn", { "max": 50, "skipBlankLines": true, "skipComments": true }],
    "no-unused-vars": "warn",
    "object-shorthand": "warn",
    "quote-props": ["warn", "as-needed"],
    "@typescript-eslint/array-type": [
      "warn",
      {
        "default": "array"
      }
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        "assertionStyle": "as",
        "objectLiteralTypeAssertions": "never"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["strictCamelCase"]
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      },
      {
        "selector": "variable",
        "types": ["boolean"],
        "format": ["StrictPascalCase"],
        "prefix": ["is", "has"]
      },
      {
        "selector": ["class", "typeAlias"],
        "format": ["StrictPascalCase"]
      },
      {
        "selector": "property",
        "modifiers": ["private"],
        "format": ["strictCamelCase"],
        "prefix": ["_"]
      },
      {
        "selector": "method",
        "modifiers": ["private"],
        "format": ["strictCamelCase"],
        "prefix": ["_"]
      }
    ],
    "react/jsx-fragments": ["warn", "syntax"],
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".ts", ".tsx"]
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "prettier/prettier": "warn"
  },
  "ignorePatterns": [".eslintrc.js"],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

#### Key Rules:

- **Max Lines**: Limits the length of a file to 300 lines.
- **Max Length**: Warns if lines exceed 120 characters.
- **Max Lines per Function**: Limits the lines per function to 50 to encourage small, maintainable functions.
- **React and React Hooks**: Enforces best practices for React and hooks.
- **Prettier Integration**: ESLint integrates with Prettier to maintain code style consistency.

### Prettier Configuration

The Prettier configuration ensures consistent formatting across the project, particularly for spacing, quotes, and line width. It works alongside ESLint for style rules enforcement.

#### **Prettier File: `.prettierrc.json`**

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true,
  "jsxSingleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "none",
  "bracketSpacing": true,
  "bracketSameLine": false
}
```

#### Key Rules:

- **Print Width**: Limits lines to 120 characters for better readability.
- **Tab Width**: Enforces a tab width of 2 spaces.
- **Single Quotes**: Uses single quotes for JavaScript and JSX.
- **Semi-Colons**: Ensures semi-colons are always used.

### Husky Setup

Husky is configured to automatically run linting on pre-commit, ensuring that code meets the required standards before it’s committed.

#### **Husky Script: `.husky/pre-commit`**

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint-staged
```

#### **Husky Script: `.husky/pre-push`**

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint && if npm run lint | grep 'warning'; then echo 'ESLint warnings found. Fix before pushing.' && exit 1; fi
```

#### **Husky Script: `.husky/commit-msg`**

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

### Commitlint Setup

Commitlint ensures that all commit messages follow a specific convention to improve collaboration and version control.

#### **Commitlint Config: `commitlint.config.js`**

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'build', 'perf', 'ci', 'revert']
    ],
    'subject-case': [0, 'never']
  }
};
```

### Installation & Setup

1. **Install Required Dependencies**:
   Run the following command to install ESLint, Prettier, and Husky along with other necessary plugins:

   ```bash
   npm install --save-dev eslint prettier husky lint-staged @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
   ```

2. **Husky Initialization**:
   Initialize Husky in the project:

   ```bash
   npx husky-init && npm install
   ```

3. **Add Lint-Staged**:
   Configure `lint-staged` in your `package.json` to only lint staged files:

   ```json
   "lint-staged": {
     "*.{ts,tsx,js,jsx}": [
       "eslint --fix",
       "prettier --write"
     ]
   }
   ```

4. **Running Linting**:
   Run the following command to lint all files:

   ```bash
   npm run lint
   ```

---
