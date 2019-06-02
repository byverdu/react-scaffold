import { createAction } from 'redux-actions';
import { Todo, SetTodoStatus } from 'Models/Todo';
import * as Actions from 'Features/Todo/redux/constants';
import { List } from 'immutable';

export const addTodo = createAction<Todo>(Actions.ADD_TODO);
export const getAllTodos = createAction<List<Todo>>(Actions.GET_ALL_TODOS);
export const setTodoStatus = createAction<SetTodoStatus>(
  Actions.SET_TODO_STATUS
);
