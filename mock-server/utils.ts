import { Todo } from '../src/Models/Todo';
const { promisify } = require('util');
const path = require('path');
const fs = require('fs');

interface Utils {
  getContentForRoutes: () => Promise<any>;
  addTodo: (todos: { [key: string]: Todo; }, id: string, todo: Todo) => { [key: string]: Todo; };
  updateTodo: (todos: { [key: string]: Todo; }, id: string, status: boolean) => { [key: string]: Todo; };
  deleteTodo: (todos: { [key: string]: Todo; }, id: string) => { [key: string]: Todo; };
}

const readFileAsync = promisify(fs.readFile);
const getPathToJsonMock = fileName => {
  const mocksPath = 'data';
  const jsonPath = path.join(__dirname, '../', `${mocksPath}`, `${fileName}.json`);

  return jsonPath;
};

export const utils: Utils = {
  addTodo: (todos: { [key: string]: Todo; }, id: string, todo: Todo) => {
    todos[id] = todo;
  
    return todos;
  },
  updateTodo: (todos: { [key: string]: Todo; }, id: string, status: boolean) => {
    todos[id].done = status;
  
    return todos;
  },
  deleteTodo: (todos: { [key: string]: Todo; }, id: string) => {
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
