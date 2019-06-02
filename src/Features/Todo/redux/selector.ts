import { createSelector } from 'reselect';
import { RootState } from 'Core/reducers';
import { VisibilityFilterEnum } from 'Models/Enums';

const getTodos = ({ todos: { todos } }: RootState) => todos;
const getActiveFilter = ({ visibilityFilter: { activeFilter } }: RootState) =>
  activeFilter;

export const filterTodos = createSelector(
  getTodos,
  getActiveFilter,
  (todos, activeFilter) => {
    switch (activeFilter) {
      case VisibilityFilterEnum.SHOW_DONE:
        return todos.filter((todo) => todo.done);
      case VisibilityFilterEnum.SHOW_TODO:
        return todos.filter((todo) => !todo.done);
      case VisibilityFilterEnum.SHOW_ALL:
      default:
        return todos;
    }
  }
);
