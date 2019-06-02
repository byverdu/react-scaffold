import { Map } from 'immutable';

export interface Todo {
  text: string;
  id: string;
  done: boolean;
}

export interface TodoState {
  todos: Map<string, Todo>;
  todosLength: number;
}

export interface SetTodoStatus {
  id: string;
  status: boolean;
}
