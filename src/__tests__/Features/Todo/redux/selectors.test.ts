import { filterTodos } from 'Features/Todo/redux/selector';
import rootState from '__fixtures__/rootState';
import { VisibilityFilterEnum } from 'Models/Enums';
import { MOCKED_TODO_ID } from '__fixtures__/reducer';
import { RootState } from 'Core/reducers';
import { Todo } from 'Models/Todo';

const changeFilterState = (activeFilter: VisibilityFilterEnum): RootState => {
  const updatedTodos = rootState.todos.todos.update(MOCKED_TODO_ID, (todo) => {
    todo.done = true;
    return todo;
  });

  return {
    visibilityFilter: {
      activeFilter
    },
    todos: {
      todos: updatedTodos
    }
  };
};

describe('filterTodos selector', () => {
  it('should return all the todos by default', () => {
    const result = {
      ...rootState.todos.todos
    };
    expect(filterTodos(rootState)).toEqual(result);
  });

  it('should filter the done todos', () => {
    const newState = changeFilterState(VisibilityFilterEnum.SHOW_DONE);

    expect((filterTodos(newState).first() as Todo).done).toEqual(true);
    expect(filterTodos(newState).size).toEqual(1);
  });

  it('should filter the pending todos', () => {
    const newState = changeFilterState(VisibilityFilterEnum.SHOW_TODO);

    expect((filterTodos(newState).first() as Todo).done).toEqual(false);
    expect(filterTodos(newState).size).toEqual(1);
  });
});
