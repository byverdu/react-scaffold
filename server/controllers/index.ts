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
    console.log(data.key, '=', data.value)
  })
  .on('error', function (err) {
    res.status(500).send( err );
  })
  .on('end', function () {
    res.status(200).send( todos );
  })
};

export function postTodosAdd (req: Request, res: Response) {
  
  db.put()
  const todos = {};
  db.createReadStream({
    gte: 'todo',
    lte: 'todo~'
  })
  .on('data', function (data) {
    const todo: Todo = JSON.parse(data.value);
    todos[todo.id] = todo;
    console.log(data.key, '=', data.value)
  })
  .on('error', function (err) {
    res.status(500).send( err );
  })
  .on('end', function () {
    res.status(200).send( todos );
  })
};