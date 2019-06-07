import todoFilter, { initialState } from 'Features/Todo/redux/reducer';
import { Map } from 'immutable';
import {
  mockedPayloads,
  addTodoNewState,
  MOCKED_TODO_ID,
  mockedData
} from '__fixtures__/reducer';
import { TodoState } from 'Models/Todo';

const sharedInitialState: TodoState = {
  todos: Map(mockedData)
};

describe('todoFilter reducer', () => {
  it('should return the initialState by default', () => {
    expect(todoFilter(initialState, {})).toEqual({ todos: Map() });
  });

  it('should get all the Todos', () => {
    const newState = todoFilter(initialState, mockedPayloads.getTodosPayload);
    expect(newState.todos.size).toEqual(2);
  });

  it('should add a Todo', () => {
    expect(todoFilter(initialState, mockedPayloads.addTodoPayload)).toEqual({
      todos: addTodoNewState
    });
  });

  it('should update a Todo', () => {
    const newState = todoFilter(
      sharedInitialState,
      mockedPayloads.updateTodoPayload
    );

    expect(newState.todos.get(MOCKED_TODO_ID).done).toEqual(
      mockedPayloads.updateTodoPayload.payload.status
    );
  });

  it('should delete a Todo', () => {
    const newState = todoFilter(
      sharedInitialState,
      mockedPayloads.deleteTodoPayload
    );

    expect(newState.todos.get(MOCKED_TODO_ID)).toEqual(undefined);
    expect(newState.todos.size).toEqual(1);
  });
});
