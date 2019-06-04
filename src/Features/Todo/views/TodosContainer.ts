import { connect } from 'react-redux';
import Todos from 'Features/Todo/views/TodoComponent';
import { Map } from 'immutable';
import { Todo } from 'Models/Todo';
import { RootState } from 'Core/reducers';
import {
  addNewTodo,
  setTodoStatus,
  deleteTodo
} from 'Features/Todo/redux/actionCreators';
import { filterTodos } from '../redux/selector';

export interface TodosPropsToState {
  todos: Map<string, Todo>;
  todosLength: number;
}

export interface TodosDispatchToProps {
  addTodo: (todo: Todo) => void;
  checkHandler: (id: string, isChecked: boolean) => void;
  deleteTodo: (id: string) => void;
}

const mapPropsToState = (state: RootState): TodosPropsToState => ({
  todos: filterTodos(state),
  todosLength: state.todos.todos.size
});

const mapDispatchToProps = (dispatch): TodosDispatchToProps => ({
  addTodo: (todo: Todo) => dispatch(addNewTodo(todo)),
  checkHandler: (id: string, isChecked: boolean) =>
    dispatch(setTodoStatus({ id, status: isChecked })),
  deleteTodo: (id: string) => dispatch(deleteTodo(id))
});

export default connect<TodosPropsToState, TodosDispatchToProps>(
  mapPropsToState,
  mapDispatchToProps
)(Todos);
