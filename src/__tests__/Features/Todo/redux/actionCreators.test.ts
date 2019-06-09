import { status500Response } from '__fixtures__/apiError';
import rootState from '__fixtures__/rootState';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { axiosMock } from '../../../../setupTests';
import { apiGetTodos, apiAddTodo } from 'Features/Todo/redux/actionCreators';
import {
  getTodosPayload,
  mockedData,
  mockedTodo,
  addTodoPayload
} from '__fixtures__/actions';
import * as api from 'Helpers/api';
import { Map } from 'immutable';
import { RootState } from 'Core/reducers';

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middlewares);
const store = mockStore(rootState);
const todosToMap = Map(mockedData);

describe('Todos actionCreators', () => {
  afterEach(() => {
    store.clearActions();
    axiosMock.reset();
  });

  describe('apiGetTodos', () => {
    it('gets all the Todos if the api call is successful', async () => {
      axiosMock.onGet().reply(200, todosToMap);
      await store.dispatch(apiGetTodos() as any);

      expect(store.getActions()).toEqual(getTodosPayload.success);
    });

    it('throws an error if the request to the api fails', async () => {
      axiosMock.onGet().reply((config) => {
        throw status500Response(config);
      });

      await store.dispatch(apiGetTodos() as any);

      expect(store.getActions()).toEqual(getTodosPayload.failure);
    });
  });

  describe('apiAddTodo', () => {
    it('adds a Todo if the api call is successful', async () => {
      axiosMock.onPost().reply(200, mockedTodo);
      await store.dispatch(apiAddTodo(mockedTodo) as any);

      expect(store.getActions()).toEqual(addTodoPayload.success);
    });

    describe('error handler', () => {
      beforeEach(async () => {
        axiosMock.onPost().reply((config) => {
          throw status500Response(config);
        });
        await store.dispatch(apiAddTodo(mockedTodo) as any);
      });
      it('then throws an error if the request fails', () => {
        expect((store.getState() as RootState).todos.todos.size).toEqual(2);
      });
    });

    it('and the todos map has the same size', () => {
      expect((store.getState() as RootState).todos.todos.size).toEqual(2);
    });
  });
});
