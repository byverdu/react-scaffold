import { createAction } from 'redux-actions';
import { Todo } from 'Models/Todo';
import * as Actions from 'Features/Todo/redux/constants';
import { List } from 'immutable';

export const addTodo = createAction<Todo>(Actions.ADD_TODO);
export const getAllTodos = createAction<List<Todo>>(Actions.GET_ALL_TODOS);
