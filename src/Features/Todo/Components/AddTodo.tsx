import React, { useState, useRef } from 'react';
import { Todo } from 'Models/Todo';

const uuidv4 = require('uuid/v4');

interface AddTodoProps {
  addTodo: (todo: Todo) => void;
}

const AddTodo: React.SFC<AddTodoProps> = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');
  const inputElem = useRef<HTMLInputElement>(null);

  const todoTextChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodoText((event.target as HTMLInputElement).value);
  };
  const todoSubmitHandler = (event: React.MouseEvent) => {
    event.preventDefault();

    const todo: Todo = {
      text: todoText,
      done: false,
      id: uuidv4()
    };

    addTodo(todo);
    setTodoText('');
    inputElem.current.value = '';
  };

  return (
    <section className="add-todo">
      <h2>Add a Todo</h2>
      {todoText}
      <form noValidate>
        <label htmlFor="add-todo-field">Todo text</label>
        <input
          ref={inputElem}
          type="text"
          id="add-todo-field"
          onChange={todoTextChangeHandler}
        />
        <button onClick={todoSubmitHandler} disabled={todoText.length === 0}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
