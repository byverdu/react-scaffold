import { TodoState, VisibilityFilterState } from 'Models/Todo';
import todos from 'Features/Todo/redux/reducer';
import visibilityFilter from 'Features/VisibilityFilter/redux';
import { combineReducers } from 'redux';

export interface RootState {
  todos: TodoState;
  visibilityFilter: VisibilityFilterState;
}

export default combineReducers<RootState>({
  todos,
  visibilityFilter
});
