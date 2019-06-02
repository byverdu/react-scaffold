import React, { useState } from 'react';
import { Todo } from 'Models/Todo';

interface TodoItemProps {
  todo: Todo;
  checkHandler: (id: string, isChecked: boolean) => void;
}

const TodoItem: React.SFC<TodoItemProps> = ({
  todo: { text, done, id },
  checkHandler
}) => {
  const [isChecked, setIsChecked] = useState(done);

  const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const itemId = event.target.dataset['id'];
    checkHandler(itemId, checked);
    setIsChecked(checked);
  };

  return (
    <li
      className={isChecked ? 'task-done' : 'task-todo'}
      style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
    >
      <label htmlFor={`list-item-${id}`}>
        <input
          data-id={id}
          id={`list-item-${id}`}
          type="checkbox"
          onChange={onCheckHandler}
        />
        {text}
      </label>
    </li>
  );
};

export default TodoItem;
