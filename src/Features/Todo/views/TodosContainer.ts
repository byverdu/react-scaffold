import { connect } from 'react-redux';
import Todos from 'Features/Todo/views/TodoComponent';
import { List } from 'immutable';
import { Todo } from 'Models/Todo';
import { RootState } from 'Core/reducers';
import { addTodo } from 'Features/Todo/redux/actionCreators';

export interface TodosPropsToState {
  todos: List<Todo>;
  todosLength: number;
}

export interface TodosDispatchToProps {
  addTodo: (todo: Todo) => void;
}

const mapPropsToState = ({ todos }: RootState): TodosPropsToState => ({
  todos: todos.todos,
  todosLength: todos.todosLength,
});

const mapDispatchToProps = (dispatch): TodosDispatchToProps => ({
  addTodo: (todo: Todo) => dispatch(addTodo(todo)),
});

export default connect<TodosPropsToState, TodosDispatchToProps>(
  mapPropsToState,
  mapDispatchToProps
)(Todos);
