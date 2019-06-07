import { TodoState, VisibilityFilterState } from 'Models/Todo';
import { RootState } from 'Core/reducers';
import { VisibilityFilterEnum } from 'Models/Enums';
import { Map } from 'immutable';
import { mockedData } from '__fixtures__/reducer';

const todos: TodoState = {
  todos: Map(mockedData)
};

const visibilityFilter: VisibilityFilterState = {
  activeFilter: VisibilityFilterEnum.SHOW_ALL
};

const rootState: RootState = {
  todos,
  visibilityFilter
};

export default rootState;
