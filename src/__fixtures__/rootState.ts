import { TodoState, VisibilityFilterState } from 'Models/Todo';
import { RootState } from 'Core/reducers';
import { VisibilityFilterEnum } from 'Models/Enums';
import { Map } from 'immutable';

const initialSet = {
  1234: { id: '1234', text: 'todo task', done: false }
};

const todos: TodoState = {
  todos: Map(initialSet)
};

const visibilityFilter: VisibilityFilterState = {
  activeFilter: VisibilityFilterEnum.SHOW_ALL
};

const rootState: RootState = {
  todos,
  visibilityFilter
};

export default rootState;
