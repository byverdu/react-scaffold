import { TodoState, Todo } from 'Models/Todo';
import { List } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Actions from 'Features/Todo/redux/constants';
import mergeReducers from 'merge-reducers';

const initialState: TodoState = {
  todos: undefined,
  todosLength: undefined,
};

const todoReducer = handleActions<TodoState, Todo>(
  {
    [Actions.ADD_TODO]: (state, { payload }): TodoState => {
      const todos = List(state.todos).push(payload);
      return {
        todos,
        todosLength: todos.size,
      };
    },
  },
  initialState
);

const todosReducer = handleActions<TodoState, List<Todo>>(
  {
    [Actions.GET_ALL_TODOS]: (state, { payload }): TodoState => {
      return {
        todos: payload,
        todosLength: 9,
      };
    },
  },
  initialState
);

export default mergeReducers(todoReducer, todosReducer);
