[![Build Status](https://travis-ci.org/byverdu/react-scaffold.svg?branch=master)](https://travis-ci.org/byverdu/react-scaffold)

# React-Scaffold

Custom configuration for [create-react-app](https://facebook.github.io/create-react-app/) using typescript.

## How to install

```bash
> git clone https://github.com/byverdu/react-scaffold.git name-of-your-app
> yarn install
> yarn start
```

More info about `create-react-app` in their [docs page](https://facebook.github.io/create-react-app/docs/getting-started).

### Added Features

1. [husky](https://github.com/typicode/husky) for git hooks, check `package.json` scripts section.
1. [prettier](https://prettier.io/), edit `.prettierrc` to add your styling rules.
1. [tslint](https://palantir.github.io/tslint/), add files to exclude in `tslint.json` section `linterOptions > exclude` array.
1. [Hot reloading](https://github.com/gaearon/react-hot-loader). Make sure that `@hot-loader/react-dom` version matches with `react-dom` version.
1. [Sass](https://sass-lang.com/) as a CSS pre-processor

> Note on SCSS, there's no need to compile files during development because you can import `SCSS` files directly. Also, CSS Modules are available by default.