// import { Application } from 'express';

// import path from 'path';
// import {
//   getRoot,
//   getTodos,
//   postTodosAdd,
//   deleteTodos,
//   putTodosUpdate
// } from './server/controllers';

// const express = require('express');
// var bodyParser = require('body-parser');
// const app: Application = express();
// const PORT = process.env.PROT || 3001;

// app.use(bodyParser.json());
// app.use('/static', express.static(path.join(__dirname, "/client/static")));

// app.get('/', getRoot);
// app.get('/todos', getTodos);
// app.post('/todos/add', postTodosAdd);
// app.delete('/todos/delete/:todoId', deleteTodos);
// app.patch('/todos/update', putTodosUpdate);


// app.listen(PORT, function () {
//   console.info(`Example app listening on port ${PORT}!`);
// });

// export default app;
import app from './server/app';
const PORT = process.env.PROT || 3001;

app.listen(PORT, function () {
  console.info(`Example app listening on port ${PORT}!`);
});
