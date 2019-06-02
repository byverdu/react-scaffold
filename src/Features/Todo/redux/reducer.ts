import { TodoState, Todo, SetTodoStatus } from 'Models/Todo';
import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Actions from 'Features/Todo/redux/constants';
import mergeReducers from 'merge-reducers';

const initialState: TodoState = {
  todos: Map(),
  todosLength: undefined
};

const todoReducer = handleActions<TodoState, Todo>(
  {
    [Actions.ADD_TODO]: (state, { payload }): TodoState => {
      const todos = state.todos.set(payload.id, payload);
      return {
        todos,
        todosLength: todos.size
      };
    }
  },
  initialState
);

const todosReducer = handleActions<TodoState, List<Todo>>(
  {
    [Actions.GET_ALL_TODOS]: (state, { payload }): TodoState => {
      let todos = state.todos;
      payload.forEach((todo) => {
        todos.set(todo.id, todo);
      });
      return {
        todos,
        todosLength: todos.size
      };
    }
  },
  initialState
);

const statusReducer = handleActions<TodoState, SetTodoStatus>(
  {
    [Actions.SET_TODO_STATUS]: (state, { payload }): TodoState => {
      const todos = state.todos.update(payload.id, (item) => {
        item.done = payload.status;
        return item;
      });

      return {
        ...state,
        todos
      };
    }
  },
  initialState
);

const stringReducer = handleActions<TodoState, string>(
  {
    [Actions.DELETE_TODO]: (state, { payload }): TodoState => {
      const todos = state.todos.delete(payload);
      return {
        todos,
        todosLength: todos.size
      };
    }
  },
  initialState
);

export default mergeReducers(
  todoReducer,
  todosReducer,
  statusReducer,
  stringReducer
);
