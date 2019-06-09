import { TodoState, Todo, UpdateTodoPayload } from 'Models/Todo';
import { Map } from 'immutable';
import { handleActions, combineActions } from 'redux-actions';
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

const todosReducer = handleActions<TodoState, Map<string, Todo>>(
  {
    [combineActions(
      Actions.GET_TODOS_SUCCESS,
      Actions.GET_TODOS_FAILURE
    ).toString()]: (state, { payload }): TodoState => ({
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
