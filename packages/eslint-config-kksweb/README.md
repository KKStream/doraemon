# eslint-config-kksweb

ESlint configuration for the [React](https://reactjs.org) projects of KKStream web, which integrates [TypeScript](https://www.typescriptlang.org), [Compat](https://github.com/amilajack/eslint-plugin-compat), and [more](#whats-inside).

[![npm version](https://img.shields.io/npm/v/@kks-web/eslint-config-kksweb?style=flat-square)](https://www.npmjs.com/package/@kks-web/eslint-config-kksweb)
[![npm downloads](https://img.shields.io/npm/dm/@kks-web/eslint-config-kksweb?style=flat-square)](https://www.npmtrends.com/@kks-web/eslint-config-kksweb)
[![npm downloads](https://img.shields.io/npm/dt/@kks-web/eslint-config-kksweb?style=flat-square)](https://www.npmtrends.com/@kks-web/eslint-config-kksweb)
[![dependencies status](https://img.shields.io/david/doraemon/@kks-web/eslint-config-kksweb?style=flat-square)](https://david-dm.org/doraemon/@kks-web/eslint-config-kksweb)
[![devDependencies status](https://img.shields.io/david/dev/doraemon/@kks-web/eslint-config-kksweb?style=flat-square)](https://david-dm.org/doraemon/@kks-web/eslint-config-kksweb?type=dev)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@kks-web/eslint-config-kksweb). It requires [eslint](https://github.com/eslint/eslint) and [typescript](https://github.com/microsoft/TypeScript).

Install the correct version of each package, which are listed by the command:

```sh
npm info "@kks-web/eslint-config-kksweb@latest" peerDependencies
```

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps --dev @kks-web/eslint-config-kksweb
```

Or install each package by yourself:

```sh
npm install --save-dev @kks-web/eslint-config-kksweb eslint@^x.x.x typescript@^x.x.x
# or
yarn add --dev @kks-web/eslint-config-kksweb eslint@^x.x.x typescript@^x.x.x
```

## Usage

Add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ["@kks-web/eslint-config-kksweb"],
  rules: {
    // your overrides
  },
};
```

## Eliminate Prettier Conflicts for You

[Prettier](https://prettier.io) is a great code formatter, I highly recommend you guys give it a try. This package built-ins the [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) for you, all you need to do is setup the [Prettier CLI](https://prettier.io/docs/en/cli.html) to use it.

```json
// package.json

"format": "prettier --check ."
// or
"format": "prettier --write ."
```

## What's Inside?

This configuration contains the following cool packages.

| Package                                                                                                       | Description                                                                                                         | Auto Enabled    |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------- |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                                   | Monorepo for all the tooling which enables ESLint to support [TypeScript](https://github.com/microsoft/TypeScript). |                 |
| [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)        | This package provides Airbnb's .eslintrc as an extensible shared config.                                            |                 |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)                                       | React specific linting rules for ESLint.                                                                            |                 |
| [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) | This ESLint plugin enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).                        |                 |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)                                     | ESLint plugin with rules that help validate proper imports.                                                         |                 |
| [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)                                   | Static AST checker for a11y rules on JSX elements.                                                                  |                 |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)                                    | Enforce best practices for JavaScript promises.                                                                     |                 |
| [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)                                     | Lint the browser compatibility of your code.                                                                        |                 |
| [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)                                    | ESLint plugin for [Jest](https://jestjs.io).                                                                        |                 |
| [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)                           | ESLint rules for use with [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom).                          | ✅              |
| [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)             | ESLint plugin for [Testing Library](https://testing-library.com/docs/react-testing-library/intro).                  | ✅              |
| [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)                                  | Turns off all rules that are unnecessary or might conflict with Prettier.                                           | ✅              |
| [@emotion/eslint-plugin](https://github.com/emotion-js/emotion/blob/master/packages/eslint-plugin/README.md)  | ESLint rules for [emotion](https://emotion.sh).                                                                     | Dynamic enabled |

## How To Contribute?

Please follow our [contribute guidance](CONTRIBUTING.md) to contribute this package.
