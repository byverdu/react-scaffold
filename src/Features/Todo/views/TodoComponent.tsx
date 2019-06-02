import React from 'react';
import { TodosPropsToState, TodosDispatchToProps } from './TodosContainer';
import Todos from 'Features/Todo/Components/Todos';
import AddTodo from 'Features/Todo/Components/AddTodo';

interface ContainerProps extends TodosPropsToState, TodosDispatchToProps {}

const TodosContainer: React.SFC<ContainerProps> = ({
  todos,
  todosLength,
  addTodo,
  checkHandler
}) => {
  const renderTodos = () => {
    if (!todos) {
      return null;
    }

    return (
      <section>
        <h3>
          Showings {todosLength} <code>todo</code> tasks
        </h3>
        <Todos checkHandler={checkHandler} todos={todos} />
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
