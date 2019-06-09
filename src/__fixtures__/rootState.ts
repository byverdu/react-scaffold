import { TodoState, VisibilityFilterState } from 'Models/Todo';
import { LoggerState } from 'Models/Logger';
import { RootState } from 'Core/reducers';
import { VisibilityFilterEnum } from 'Models/Enums';
import { Map } from 'immutable';
import { mockedData } from '__fixtures__/actions';

const todos: TodoState = {
  todos: Map(mockedData)
};

const visibilityFilter: VisibilityFilterState = {
  activeFilter: VisibilityFilterEnum.SHOW_ALL
};

export const logger: LoggerState = {
  type: undefined,
  message: '',
  isVisible: false
};

const rootState: RootState = {
  todos,
  visibilityFilter,
  logger
};

export default rootState;
