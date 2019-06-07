import { TodoState, VisibilityFilterState } from 'Models/Todo';
import { LoggerState } from 'Models/Logger';
import todos from 'Features/Todo/redux/reducer';
import visibilityFilter from 'Features/VisibilityFilter/redux';
import { logger } from 'Features/Logger/redux';
import { combineReducers } from 'redux';

export interface RootState {
  todos: TodoState;
  visibilityFilter: VisibilityFilterState;
  logger: LoggerState;
}

export default combineReducers<RootState>({
  todos,
  visibilityFilter,
  logger
});
