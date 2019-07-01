import { Request, Response } from 'express';
import path from 'path';
import db from '../db';
import {Todo} from '../../src/Models/Todo';

const DB_PREFIX = 'todo_';

export function getRoot (req, res) {
  const indexHtml = path.join(__dirname, '../', 'client/index.html');
  res.status(200).sendFile( indexHtml );
};

export function getTodos (req: Request, res: Response) {
  const todos = {};
  db.createReadStream({
    gte: 'todo',
    lte: 'todo~'
  })
  .on('data', function (data) {
    const todo: Todo = JSON.parse(data.value);
    todos[todo.id] = todo;
  })
  .on('error', function (err) {
    res.status(500).send( err );
  })
  .on('end', function () {
    res.status(200).send( todos );
  })
};

export function postTodosAdd (req: Request, res: Response) {
  const { todoId, todo } = req.body;
  const todoToString = JSON.stringify(todo);
  const id = `${DB_PREFIX}${todoId}`;
  
  db.put(id, todoToString)
    .then(() => res.status(200).send( todo ))
    .catch(err => res.status(500).send( err ));
};

export function deleteTodos(req: Request, res: Response) {
  const {todoId} = req.params;
  const id = `${DB_PREFIX}${todoId}`;

  db.del(id)
    .then(() => res.status(200).send( 'ok' ))
    .catch(err => res.status(500).send( err ));
}

export function putTodosUpdate(req: Request, res: Response) {
  const { todoId, status } = req.body;
  const id = `${DB_PREFIX}${todoId}`;

  db.get(id, (err, value) => {
    if (err) {
      res.status(500).send( err );
      return;
    }
    const todo: Todo = JSON.parse(value);
    todo.done = status;

    db.put(id, JSON.stringify(todo))
    .then(() => res.status(200).send( todo ))
    .catch(err => res.status(500).send( err ));
  })
}