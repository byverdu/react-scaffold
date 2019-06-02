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
    checkHandler(id, checked);
    setIsChecked(checked);
  };

  return (
    <li
      className={isChecked ? 'task-done' : 'task-todo'}
      style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
    >
      <input type="checkbox" onChange={onCheckHandler} /> {text}
    </li>
  );
};

export default TodoItem;
