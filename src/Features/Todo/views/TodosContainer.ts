import { connect } from 'react-redux';
import Todos from 'Features/Todo/views/TodoComponent';
import { Map } from 'immutable';
import { Todo } from 'Models/Todo';
import { RootState } from 'Core/reducers';
import {
  addNewTodo,
  updateTodo,
  apiDeleteTodo
} from 'Features/Todo/redux/actionCreators';
import { filterTodos } from '../redux/selector';

export interface TodosPropsToState {
  todos: Map<string, Todo>;
  todosLength: number;
}

export interface TodosDispatchToProps {
  addTodo: (todo: Todo) => void;
  checkHandler: (todoId: string, status: boolean) => void;
  deleteTodo: (id: string) => void;
}

const mapPropsToState = (state: RootState): TodosPropsToState => ({
  todos: filterTodos(state),
  todosLength: state.todos.todos.size
});

const mapDispatchToProps = (dispatch): TodosDispatchToProps => ({
  addTodo: (todo: Todo) => dispatch(addNewTodo(todo)),
  checkHandler: (todoId: string, status: boolean) =>
    dispatch(updateTodo(todoId, status)),
  deleteTodo: (id: string) => dispatch(apiDeleteTodo(id))
});

export default connect<TodosPropsToState, TodosDispatchToProps>(
  mapPropsToState,
  mapDispatchToProps
)(Todos);
