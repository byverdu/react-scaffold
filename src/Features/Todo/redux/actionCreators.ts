import { createAction } from 'redux-actions';
import { Todo, UpdateTodoPayload, MapSignature } from 'Models/Todo';
import * as Actions from 'Features/Todo/redux/constants';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'Core/reducers';
import { Action, Dispatch } from 'redux';
import { API } from 'Models/Api';
import { ApiRoutes } from 'Models/Enums';

export const addTodo = createAction<Todo>(Actions.ADD_TODO);
export const getTodos = createAction<MapSignature>(Actions.GET_ALL_TODOS);
export const updateTodo = createAction<UpdateTodoPayload>(
  Actions.SET_TODO_STATUS
);
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
    } catch (error) {
      throw Error(error);
    }
  };
};
