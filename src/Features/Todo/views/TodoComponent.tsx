import React from 'react';
import { TodosPropsToState, TodosDispatchToProps } from './TodosContainer';
import Todos from 'Features/Todo/Components/Todos';
import AddTodo from 'Features/Todo/Components/AddTodo';

interface ContainerProps extends TodosPropsToState, TodosDispatchToProps {}

const TodosContainer: React.SFC<ContainerProps> = ({
  todos,
  todosLength,
  addTodo,
}) => {
  const renderTodos = () => {
    if (!todos) {
      return null;
    }

    return (
      <section>
        <h3>Showings {todosLength} todo tasks</h3>
        <Todos todos={todos} />
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
