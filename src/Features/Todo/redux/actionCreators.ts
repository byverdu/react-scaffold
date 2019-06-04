import { createAction } from 'redux-actions';
import { Todo, SetTodoStatus, MapSignature } from 'Models/Todo';
import * as Actions from 'Features/Todo/redux/constants';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'Core/reducers';
import { Action, Dispatch } from 'redux';
import { API } from 'Models/Api';
import { ApiRoutes } from 'Models/Enums';

export const addTodo = createAction<Todo>(Actions.ADD_TODO);
export const getAllTodos = createAction<MapSignature>(Actions.GET_ALL_TODOS);
export const setTodoStatus = createAction<SetTodoStatus>(
  Actions.SET_TODO_STATUS
);
export const deleteTodo = createAction<string>(Actions.DELETE_TODO);

export const fetchTodos = (): ThunkAction<
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
      dispatch(getAllTodos(todosResponse));
    } catch (error) {
      throw Error(error);
    }
  };
};
