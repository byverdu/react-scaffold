import React, { useRef } from 'react';
import { Todo } from 'Models/Todo';

const uuidv4 = require('uuid/v4');

interface AddTodoProps {
  addTodo: (todo: Todo) => void;
}

const AddTodo: React.SFC<AddTodoProps> = ({ addTodo }) => {
  const inputEl = useRef(null);
  const todoHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    const todo: Todo = {
      text: inputEl.current.value,
      done: false,
      id: uuidv4(),
    };

    addTodo(todo);
    inputEl.current.value = '';
  };

  return (
    <section>
      <h2>Add a Todo</h2>
      <form noValidate>
        <label htmlFor="add-todo-field">
          Todo text
          <input ref={inputEl} type="text" id="add-todo-field" />
        </label>
        <button onClick={todoHandler}>Submit</button>
      </form>
    </section>
  );
};

export default AddTodo;
