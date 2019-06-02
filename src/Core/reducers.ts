import { TodoState } from 'Models/Todo';
import todos from 'Features/Todo/redux/reducer';
import { combineReducers } from 'redux';

export interface RootState {
  todos: TodoState;
}

export default combineReducers<RootState>({
  todos
});
