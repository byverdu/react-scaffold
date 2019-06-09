import { status500Response } from '__fixtures__/apiError';
import rootState from '__fixtures__/rootState';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { axiosMock } from '../../../../setupTests';
import { apiGetTodos } from 'Features/Todo/redux/actionCreators';
import { getTodosPayload, mockedData } from '__fixtures__/actions';
import * as api from 'Helpers/api';
import { Map } from 'immutable';

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middlewares);
const store = mockStore(rootState);
const todosToMap = Map(mockedData);

describe('ContentReleasePlan actionCreators', () => {
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
});
