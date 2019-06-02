import React from 'react';
import { List } from 'immutable';
import { Todo } from 'Models/Todo';
import TodoItem from 'Features/Todo/Components/TodoItem';

interface TodosProps {
  todos: List<Todo>;
  checkHandler: (id: string, isChecked: boolean) => void;
}

const Todos: React.SFC<TodosProps> = ({ todos, checkHandler }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem checkHandler={checkHandler} key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default Todos;
