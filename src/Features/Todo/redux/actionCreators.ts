import { createAction } from 'redux-actions';
import { Todo, UpdateTodoPayload } from 'Models/Todo';
import * as Actions from 'Features/Todo/redux/constants';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'Core/reducers';
import { Action, Dispatch } from 'redux';
import { API, APIResponsesData } from 'Models/Api';
import { ApiRoutes, LoggerTypes } from 'Models/Enums';
import { toggleLogger } from 'Features/Logger/redux';
import { Map } from 'immutable';

export const getTodos = createAction<Map<string, Todo>>(
  Actions.GET_TODOS_SUCCESS
);
export const getTodosFailed = createAction<Map<string, Todo>>(
  Actions.GET_TODOS_FAILURE
);
export const addTodo = createAction<Todo>(Actions.ADD_TODO_SUCCESS);
export const updateTodo = createAction<UpdateTodoPayload>(Actions.UPDATE_TODO);
export const deleteTodo = createAction<string>(Actions.DELETE_TODO);

export const apiGetTodos = (): ThunkAction<
  Promise<Action>,
  RootState,
  null,
  null
> => {
  return async (
    dispatch: Dispatch<Action<string>>,
    getState: () => RootState,
    api: API
  ): Promise<Action> => {
    dispatch({
      type: Actions.GET_TODOS_IN_PROGRESS
    });

    try {
      const todosResponse: APIResponsesData['getTodos'] = await api.get(
        ApiRoutes.getTodos
      );
      dispatch(getTodos(todosResponse));
      dispatch(
        toggleLogger({
          type: LoggerTypes.success,
          message: 'TODOS Fetched from API',
          isVisible: true
        })
      );
    } catch (error) {
      const oldData = getState().todos.todos;
      dispatch(
        toggleLogger({
          type: LoggerTypes.error,
          message: error.message,
          isVisible: true
        })
      );
      return dispatch(getTodosFailed(oldData));
    }
  };
};

export const apiAddTodo = (
  todo: Todo
): ThunkAction<Promise<Action>, RootState, null, null> => {
  return async (
    dispatch: Dispatch<Action<string>>,
    getState: () => RootState,
    api: API
  ): Promise<any> => {
    dispatch({
      type: Actions.ADD_TODO_IN_PROGRESS
    });
    try {
      const payloadRequest = {
        todoId: todo.id,
        todo
      };
      const addResponse: APIResponsesData['addTodo'] = await api.post(
        ApiRoutes.addTodo,
        payloadRequest
      );

      dispatch(addTodo(addResponse));
      dispatch(
        toggleLogger({
          type: LoggerTypes.success,
          message: `${todo.id} TODO has been added`,
          isVisible: true
        })
      );
    } catch (error) {
      dispatch(
        toggleLogger({
          type: LoggerTypes.error,
          message: error.message,
          isVisible: true
        })
      );
      dispatch({
        type: Actions.ADD_TODO_FAILURE
      });
    }
  };
};

export const apiUpdateTodo = (
  todoId: string,
  status: boolean
): ThunkAction<Promise<Action>, RootState, null, null> => {
  return async (
    dispatch: Dispatch<Action<string>>,
    getState: () => RootState,
    api: API
  ): Promise<any> => {
    try {
      const payloadRequest = {
        todoId,
        status
      };
      await api.patch(ApiRoutes.updateTodo, payloadRequest);
      dispatch(updateTodo(payloadRequest));
      dispatch(
        toggleLogger({
          type: LoggerTypes.success,
          message: `${todoId} TODO has been updated`,
          isVisible: true
        })
      );
    } catch (error) {
      throw Error(error);
    }
  };
};

export const apiDeleteTodo = (
  todoId: string
): ThunkAction<Promise<Action>, RootState, null, null> => {
  return async (
    dispatch: Dispatch<Action<string>>,
    getState: () => RootState,
    api: API
  ): Promise<any> => {
    try {
      await api.deleteItem(`${ApiRoutes.deleteTodo}/${todoId}`);
      dispatch(deleteTodo(todoId));
      dispatch(
        toggleLogger({
          type: LoggerTypes.warn,
          message: `${todoId} TODO has been deleted`,
          isVisible: true
        })
      );
    } catch (error) {
      throw Error(error);
    }
  };
};
