import React from 'react';
import { List } from 'immutable';
import { Todo } from 'Models/Todo';

interface TodosProps {
  todos: List<Todo>;
}

const Todos: React.SFC<TodosProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => (
        <li>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
