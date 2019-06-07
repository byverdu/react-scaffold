import { TodoState, Todo, UpdateTodoPayload, MapSignature } from 'Models/Todo';
import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Actions from 'Features/Todo/redux/constants';
import mergeReducers from 'merge-reducers';

export const initialState: TodoState = {
  todos: Map()
};

const todoReducer = handleActions<TodoState, Todo>(
  {
    [Actions.ADD_TODO]: (state, { payload }): TodoState => {
      const todos = state.todos.set(payload.id, payload);
      return {
        ...state,
        todos
      };
    }
  },
  initialState
);

const todosReducer = handleActions<TodoState, MapSignature>(
  {
    [Actions.GET_ALL_TODOS]: (state, { payload }): TodoState => ({
      todos: Map(payload)
    })
  },
  initialState
);

const statusReducer = handleActions<TodoState, UpdateTodoPayload>(
  {
    [Actions.UPDATE_TODO]: (state, { payload }): TodoState => {
      const todos = state.todos.update(payload.todoId, (item) => {
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
        ...state,
        todos
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
