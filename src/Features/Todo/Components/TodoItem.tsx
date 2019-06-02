import React, { useState } from 'react';
import { Todo } from 'Models/Todo';

interface TodoItemProps {
  todo: Todo;
  checkHandler: (id: string, isChecked: boolean) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.SFC<TodoItemProps> = ({
  todo: { text, done, id },
  checkHandler,
  deleteTodo
}) => {
  const [isChecked, setIsChecked] = useState(done);

  const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const itemId = event.target.parentElement.dataset['id'];
    checkHandler(itemId, checked);
    setIsChecked(checked);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = (event.currentTarget as any).previousElementSibling.dataset[
      'id'
    ];
    deleteTodo(itemId);
  };

  return (
    <li
      className={isChecked ? 'task-done' : 'task-todo'}
      style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
    >
      <label htmlFor={`list-item-${id}`} data-id={id}>
        <input
          checked={done}
          id={`list-item-${id}`}
          type="checkbox"
          onChange={onCheckHandler}
        />
        {text}
      </label>
      <button onClick={onClickHandler}>Delete</button>
    </li>
  );
};

export default TodoItem;
