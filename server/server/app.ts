import { Application } from 'express';

import path from 'path';
import {
  getRoot,
  getTodos,
  postTodosAdd,
  deleteTodos,
  putTodosUpdate
} from './controllers';

const express = require('express');
var bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '..', '/client/static')));

app.get('/', getRoot);
app.get('/todos', getTodos);
app.post('/todos/add', postTodosAdd);
app.delete('/todos/delete/:todoId', deleteTodos);
app.patch('/todos/update', putTodosUpdate);

export default app;