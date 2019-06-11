![Travis (.org) branch](https://img.shields.io/travis/byverdu/react-scaffold/master.svg) [![GitHub license](https://img.shields.io/github/license/byverdu/react-scaffold.svg)](https://github.com/byverdu/react-scaffold) ![Codecov](https://img.shields.io/codecov/c/github/byverdu/react-scaffold.svg?style=plastic) ![GitHub last commit](https://img.shields.io/github/last-commit/byverdu/react-scaffold.svg)

# React-Scaffold

Custom configuration for [create-react-app](https://facebook.github.io/create-react-app/) using typescript.

## How to install

```bash
> git clone https://github.com/byverdu/react-scaffold.git name-of-your-app
> yarn install
> yarn start

# change your git remote url
# you might need to make the folder executable
# chmod +x ./scripts/*
> yarn change-remote # is just running -> git remote set-url origin $your_remote
```

More info about `create-react-app` in their [docs page](https://facebook.github.io/create-react-app/docs/getting-started).

### Added Features

#### 🎃 Config/Setup Goodies

* [husky](https://github.com/typicode/husky) for git hooks, check `package.json` scripts section.
* [prettier](https://prettier.io/), edit `.prettierrc` to add your styling rules.
* Features added to avoid `eject` the react-create-app using `react-app-rewired` and `customize-cra`.
  * Check the `config-overrides.js` file to add more configurations.
  * [Hot reloading](https://github.com/gaearon/react-hot-loader). Make sure that `@hot-loader/react-dom` version matches with `react-dom` version.
  * custom config for [eslint](https://eslint.org), add your own rules in `.eslintrc.js` file.
* CI using [travis](https://travis-ci.com/). Added `custom-audit` npm script to check **High | Critical** vulnerabilities.
* `redux-devtools-extension` for a better debug experience with redux.

#### 🔮 Kind of Back End Goodies

* `concurrently`, so you can run multiple processes on the same terminal tab.
* `json-server` to mock API endpoints responses. Already setup for CRUD operations. Check the `mock-server` folder.
* `axios` library for HTTP requests.
* `nodemon` to watch file changes. NodeJS builtin debugger enabled for the server.

#### 🐙 Front-end Goodies

* [Sass](https://sass-lang.com/) as a CSS pre-processor.
* `immutable`, to bring in Lists, Maps and so on.
* `redux` as a React state manager.
* `classnames`, to avoid concatenating strings.
* `redux-thunk` to deal with asynchronous redux actions.
* `reselect`, to select and compute values from the redux store.
* `redux-actions`, to reduce boilerplate when creating actions for redux.

#### 💣 Testing Goodies

* `enzyme` for testing react components and `enzyme-to-json` for the snapshots.
* `axios-mock-adapter` to test http requests.
* `redux-mock-store`, well you may guess it.
* Badges from [shields.io](https://shields.io/), change **user** and **repo**

---
> Note on SCSS, there's no need to compile files during development because you can import `SCSS` files directly. Also, CSS Modules are available by default.
>
> Tslint will be [deprecated any time in 2019](https://github.com/palantir/tslint) in favor to use [eslint typescript](https://github.com/typescript-eslint/typescript-eslint). As a transition period all [eslint rules](https://eslint.org/docs/rules/) must be added in `.eslintrc.js` file.
