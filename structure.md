# Project Structure

```text
├── LICENSE
├── README.md
├── config-overrides.js
├── e2e
│   ├── cypress
│   │   ├── fixtures
│   │   │   └── todos.json
│   │   ├── integration
│   │   │   ├── add-todo.spec.ts
│   │   │   ├── get-todos.spec.ts
│   │   │   └── visit-home-page.spec.ts
│   │   ├── plugins
│   │   │   └── index.js
│   │   └── utils
│   │       ├── index.ts
│   │       └── routes.ts
│   └── cypress.json
├── mock-server
│   ├── index.ts
│   └── utils.ts
├── package.json
├── scripts
│   ├── build.sh
│   ├── buildClient.sh
│   ├── buildServer.sh
│   ├── changeGitRemote.sh
│   ├── devServer.sh
│   ├── printTreeView.sh
│   └── yarnAudit.sh
├── server
│   ├── index.ts
│   ├── server
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   └── index.ts
│   │   ├── db.ts
│   └── tsconfig.json
├── src
│   ├── Components
│   │   └── Image.tsx
│   ├── Core
│   │   ├── reducers.ts
│   │   └── store.ts
│   ├── Features
│   │   ├── App
│   │   │   └── App.tsx
│   │   ├── Logger
│   │   │   ├── redux
│   │   │   │   └── index.ts
│   │   │   └── views
│   │   │       ├── Logger.tsx
│   │   │       └── LoggerContainer.ts
│   │   ├── Todo
│   │   │   ├── Components
│   │   │   │   ├── AddTodo.tsx
│   │   │   │   ├── TodoItem.tsx
│   │   │   │   └── Todos.tsx
│   │   │   ├── redux
│   │   │   │   ├── actionCreators.ts
│   │   │   │   ├── constants.ts
│   │   │   │   ├── reducer.ts
│   │   │   │   └── selector.ts
│   │   │   └── views
│   │   │       ├── TodoComponent.tsx
│   │   │       └── TodosContainer.ts
│   │   └── VisibilityFilter
│   │       ├── redux
│   │       │   └── index.ts
│   │       └── views
│   │           └── VisibilityFilter.tsx
│   ├── Helpers
│   │   └── api.ts
│   ├── Models
│   │   ├── Api.ts
│   │   ├── Enums.ts
│   │   ├── Logger.ts
│   │   └── Todo.ts
│   ├── Theme
│   │   ├── App.css
│   │   ├── App.module.css
│   │   ├── App.module.scss
│   │   ├── App.scss
│   │   ├── Logger.css
│   │   ├── Logger.scss
│   │   ├── index.css
│   │   └── index.scss
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── structure.md
├── tsconfig.json
├── tsconfig.prod.json
├── yarn-error.log
└── yarn.lock
```
