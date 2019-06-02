import React from 'react';
import { Map } from 'immutable';
import { Todo } from 'Models/Todo';
import TodoItem from 'Features/Todo/Components/TodoItem';

interface TodosProps {
  todos: Map<string, Todo>;
  checkHandler: (id: string, isChecked: boolean) => void;
}

const Todos: React.SFC<TodosProps> = ({ todos, checkHandler }) => {
  return (
    <ul>
      {todos.valueSeq().map((item) => (
        <TodoItem checkHandler={checkHandler} key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default Todos;
