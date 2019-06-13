import { Todo, MapSignature } from '../src/Models/Todo';
const { promisify } = require('util');
const path = require('path');
const fs = require('fs');

interface Utils {
  getContentForRoutes: () => Promise<any>;
  addTodo: (todos: MapSignature, id: string, todo: Todo) => MapSignature;
  updateTodo: (todos: MapSignature, id: string, status: boolean) => MapSignature;
  deleteTodo: (todos: MapSignature, id: string) => MapSignature;
}

const readFileAsync = promisify(fs.readFile);
const getPathToJsonMock = fileName => {
  const mocksPath = 'e2e/cypress/fixtures';
  const jsonPath = path.join(__dirname, '../', `${mocksPath}`, `${fileName}.json`);

  return jsonPath;
};

export const utils: Utils = {
  addTodo: (todos: MapSignature, id: string, todo: Todo) => {
    todos[id] = todo;
  
    return todos;
  },
  updateTodo: (todos: MapSignature, id: string, status: boolean) => {
    todos[id].done = status;
  
    return todos;
  },
  deleteTodo: (todos: MapSignature, id: string) => {
    delete todos[id];
  
    return todos;
  },
  getContentForRoutes: () => {
    let count = 0;
    const paths = {};
    const mapRoutesToJson = {
      todos: 'todos'
    };
    const routes = Object.keys(mapRoutesToJson);

    return new Promise((resolve, reject) => {
      routes.forEach(async route => {
        const fileName = mapRoutesToJson[route];

        try {
          const fileContent = await readFileAsync(getPathToJsonMock(fileName), { encoding: 'utf8' });
          paths[route] = JSON.parse(fileContent);
          count += 1;
          if (count === routes.length) {
            resolve(paths);
          }
        } catch (error) {
          reject(error);
        }
      });
    });
  }
};
