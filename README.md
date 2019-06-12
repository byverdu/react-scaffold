![Travis (.org) branch](https://img.shields.io/travis/byverdu/react-scaffold/master.svg) [![GitHub license](https://img.shields.io/github/license/byverdu/react-scaffold.svg)](https://github.com/byverdu/react-scaffold) ![Codecov](https://img.shields.io/codecov/c/github/byverdu/react-scaffold.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/byverdu/react-scaffold.svg)

# React-Scaffold

Custom configuration for [create-react-app](https://facebook.github.io/create-react-app/) using typescript.

## How to install

```bash
> git clone https://github.com/byverdu/react-scaffold.git name-of-your-app
> yarn install
> yarn start

# There are some bash scripts that perform this tasks
# you might need to make the scripts folder executable
> chmod +x ./scripts/*

# Change your git remote url
> yarn change-remote # is just running -> git remote set-url origin $your_remote

# Print the tree view of your project
> yarn print-tree # you need have installed the tree command -> brew install tree

# Stop processes with "exit 1" if a high or critical vulnerability is found
> yarn check-audit
```

More info about `create-react-app` in their [docs page](https://facebook.github.io/create-react-app/docs/getting-started).

### Added Features

#### 🎃 Config/Setup Goodies

* [husky](https://github.com/typicode/husky) for git hooks, check `package.json` scripts section.
* [prettier](https://prettier.io/), edit `.prettierrc` to add your styling rules.
* Features added to avoid `eject` the react-create-app using [react-app-rewired](https://github.com/timarney/react-app-rewired#readme) and [customize-cra](https://github.com/arackaf/customize-cra#readme).
  * Check the `config-overrides.js` file to add more configurations.
  * [react-hot-loader](https://github.com/gaearon/react-hot-loader). Make sure that [@hot-loader/react-dom](https://github.com/hot-loader/react-dom#readme) version matches with `react-dom` version.
  * custom config for [eslint](https://eslint.org), add your own rules in `.eslintrc.js` file.
* CI using [travis](https://travis-ci.com/).
* Run `yarn audit` in the `postinstall` script to check **High | Critical** vulnerabilities for npm packages.
* [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) for a better debug experience with redux.

#### 🔮 Kind of Back End Goodies

* [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme), so you can run multiple processes on the same terminal tab.
* [json-server](https://github.com/typicode/json-server) to mock API endpoints responses. Already setup for CRUD operations. Check the `mock-server` folder.
* [axios](https://github.com/axios/axios) library for HTTP requests.
* [nodemon](https://nodemon.io/) to watch file changes. NodeJS builtin debugger enabled for the server.

#### 🐙 Front-end Goodies

* [Sass](https://sass-lang.com/) as a CSS pre-processor.
* [immutable](https://immutable-js.github.io/immutable-js/), to bring in Lists, Maps and so on.
* [redux](https://redux.js.org/) as a React state manager.
* [classnames](https://github.com/JedWatson/classnames#readme), to avoid concatenating strings.
* [redux-thunk](https://github.com/reduxjs/redux-thunk) to deal with asynchronous redux actions.
* [reselect](https://github.com/reduxjs/reselect#readme), to select and compute values from the redux store.
* [redux-actions](https://github.com/redux-utilities/redux-actions), to reduce boilerplate when creating actions for redux.
* [uuid](https://github.com/kelektiv/node-uuid#readme) to generate unique IDs;

#### 💣 Testing Goodies

* [codecov](https://codecov.io/) integration with CI and github. View the [docs](https://docs.codecov.io/docs) for more info
* [enzyme](https://airbnb.io/enzyme/) for testing react components and [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json#readme) for the snapshots.
* [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter#readme) to test http requests.
* `redux-mock-store`, well you may guess it.
* Badges from [shields.io](https://shields.io/), change **user** and **repo**

---
> Note on SCSS, there's no need to compile files during development because you can import `SCSS` files directly. Also, CSS Modules are available by default.
>
> Tslint will be [deprecated any time in 2019](https://github.com/palantir/tslint) in favor to use [eslint typescript](https://github.com/typescript-eslint/typescript-eslint). As a transition period all [eslint rules](https://eslint.org/docs/rules/) must be added in `.eslintrc.js` file.
