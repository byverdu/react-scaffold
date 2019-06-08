import { createAction } from 'redux-actions';
import { Todo, UpdateTodoPayload, MapSignature } from 'Models/Todo';
import * as Actions from 'Features/Todo/redux/constants';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'Core/reducers';
import { Action, Dispatch } from 'redux';
import { API } from 'Models/Api';
import { ApiRoutes, LoggerTypes } from 'Models/Enums';
import { toggleLogger } from 'Features/Logger/redux';

export const getTodos = createAction<MapSignature>(Actions.GET_ALL_TODOS);
export const addTodo = createAction<Todo>(Actions.ADD_TODO);
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
  ): Promise<any> => {
    try {
      const todosResponse = await api.get(ApiRoutes.getTodos);
      dispatch(getTodos(todosResponse));
      dispatch(
        toggleLogger({
          type: LoggerTypes.success,
          message: 'TODOS Fetched from API',
          isVisible: true
        })
      );
    } catch (error) {
      throw Error(error);
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
    try {
      const payloadRequest = {
        todoId: todo.id,
        todo
      };
      await api.post(ApiRoutes.addTodo, payloadRequest);
      dispatch(addTodo(todo));
      dispatch(
        toggleLogger({
          type: LoggerTypes.success,
          message: `${todo.id} TODO has been added`,
          isVisible: true
        })
      );
    } catch (error) {
      throw Error(error);
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
