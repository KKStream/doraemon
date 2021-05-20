# Contributing to Doraemon

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

> Working on your first Pull Request? You can learn how from [this free video series](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

## Pull Request Process

1. Fork the repository and create your branch from `master`.
2. Run `yarn` to install dependencies. (root)
3. If you’ve fixed a bug or added code that should be tested.
4. Ensure the test suite passes by running `yarn test`. (package)
5. If you've added a package, add it into the [table](README.md).
6. Add/update related documents with details of changes to the API of the package.
7. Make sure your code lints by running `yarn lint`. (package)
8. Run `yarn changeset` to [add a changeset](https://github.com/atlassian/changesets/blob/master/docs/adding-a-changeset.md). (root)

## Development Workflow

You can test new features or debug an issue as follows:

1. For a new package, start by cloning the (module-template)[packages/module-template].
2. Start it by checking out the [document](packages/module-template/README.md).
3. You can try something through the [example](packages/module-template/example/README.md) or wherever you want by [yarn link](https://classic.yarnpkg.com/en/docs/cli/link).

## Useful Commands

We use [Lerna](https://lerna.js.org) for monorepo management and use [Changesets](https://github.com/atlassian/changesets) for release management. There're some useful commands for you at the root directory.

- `yarn test` runs the testing of all the packages.
- `yarn lint` runs the lint of all the packages.
- `yarn build` runs the build of all the packages.
- `yarn format` formats all related files by [Prettier](https://prettier.io).
- `yarn release` publishes updated packages, mostly used by CI.

For more useful commands, please check out [Lerna](https://lerna.js.org).

## Style Guide

We use [ESLint](https://eslint.org) and [Prettier](https://prettier.io) for code style and formatting. Run `yarn lint` after making any changes to the code. Then, our linter will catch most issues that might exist in your code.

## License

By contributing to Doraemon, you agree that your contributions will be licensed under its MIT license.
