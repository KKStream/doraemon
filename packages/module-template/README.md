# Module Template

[![npm version](https://img.shields.io/npm/v/@kks-web/module-template?style=flat-square)](https://www.npmjs.com/package/@kks-web/module-template)
[![npm downloads](https://img.shields.io/npm/dm/@kks-web/module-template?style=flat-square)](https://www.npmtrends.com/@kks-web/module-template)
[![npm downloads](https://img.shields.io/npm/dt/@kks-web/module-template?style=flat-square)](https://www.npmtrends.com/@kks-web/module-template)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@kks-web/module-template?style=flat-square)](https://bundlephobia.com/result?p=@kks-web/module-template)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](../../CONTRIBUTING.md)

🚀 Your module start template that powered by [TSDX](https://tsdx.io).

## Directory Structure

Here is the structure of the starter.

```
.
├── src                # Write your code here
├── example            # Try your code here (refer to ./example for more info)
├── test               # Test your code here
├── jest.config.ts     # Jest configuration
└── tsconfig.json      # TypeScript configuration
```

## Script Commands

Some useful commands you might need.

| `yarn <script>` | Description                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------- |
| `start`         | Bundles the module with watch mode.                                                               |
| `build`         | Bundles the module to the `dist` folder (format: CommonJS and ES Module).                         |
| `test`          | Runs your tests using [Jest](https://jestjs.io).                                                  |
| `test:cov`      | Runs your tests with coverage report.                                                             |
| `lint`          | Runs [Eslint](https://eslint.org) with [Prettier](https://prettier.io) on `.ts` and `.tsx` files. |
| `size`          | Creates bundle size snapshots with [size-limit](https://github.com/ai/size-limit).                |
| `size:analyze`  | Creates bundle size snapshots with visualized analysis.                                           |
| `clean`         | Removes both `dist` and testing coverage folder.                                                  |
| `clean:build`   | Removes `dist` folder.                                                                            |
| `clean:cov`     | Removes testing coverage folder.                                                                  |

## Need More Information?

For more information or configuration, please refer to [TSDX](https://tsdx.io) document.
