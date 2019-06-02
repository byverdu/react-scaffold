import { List } from 'immutable';

export interface Todo {
  text: string;
  id: string;
  done: boolean;
}

export interface TodoState {
  todos: List<Todo>;
  todosLength: number;
}

export interface SetTodoStatus {
  id: string;
  status: boolean;
}
