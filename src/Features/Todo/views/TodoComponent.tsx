import React from 'react';
import { TodosPropsToState, TodosDispatchToProps } from './TodosContainer';
import Todos from 'Features/Todo/Components/Todos';
import AddTodo from 'Features/Todo/Components/AddTodo';

interface ContainerProps extends TodosPropsToState, TodosDispatchToProps {}

const TodosContainer: React.SFC<ContainerProps> = ({
  todos,
  todosLength,
  addTodo,
  checkHandler,
  deleteTodo
}) => {
  const renderTodos = () => {
    if (!todos) {
      return null;
    }

    const title =
      todosLength > 0
        ? `Showing ${todosLength} todo tasks`
        : 'No todo tasks to show';

    return (
      <section>
        <h3>{title}</h3>
        <Todos
          deleteTodo={deleteTodo}
          checkHandler={checkHandler}
          todos={todos}
        />
      </section>
    );
  };

  return (
    <React.Fragment>
      <AddTodo addTodo={addTodo} />
      {renderTodos()}
    </React.Fragment>
  );
};

export default TodosContainer;
