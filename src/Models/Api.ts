import { Todo } from './Todo';
import { Map } from 'immutable';
export interface API {
  get: (url: string) => any;
  post: (url: string, data: any) => any;
  patch: (url: string, data: any) => any;
  deleteItem: (url: string) => any;
}

export interface APIResponsesData {
  addTodo: Todo;
  getTodos: Map<string, Todo>;
}
