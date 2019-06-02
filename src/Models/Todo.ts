import { Map } from 'immutable';
import { VisibilityFilterEnum } from 'Models/Enums';

export interface Todo {
  text: string;
  id: string;
  done: boolean;
}

export interface TodoState {
  todos: Map<string, Todo>;
}

export interface SetTodoStatus {
  id: string;
  status: boolean;
}

export interface VisibilityFilterState {
  activeFilter: VisibilityFilterEnum;
}
