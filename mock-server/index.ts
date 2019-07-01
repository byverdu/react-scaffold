import { Application, Response, Request } from 'express-serve-static-core';
import { utils } from './utils';
const jsonServer = require('json-server');

const {
  getContentForRoutes,
  addTodo,
  updateTodo,
  deleteTodo
} = utils;

const MOCK_PORT = process.env.MOCK_PORT || 3001;

function createApp(routes) {
  const server: Application = jsonServer.create();
  const router = jsonServer.router(routes);
  const db = router.db; // lowdb instance

  db._.mixin({
    addTodo,
    updateTodo,
    deleteTodo
  });

  const middlewares = jsonServer.defaults();
  server.use(middlewares);
  server.use(jsonServer.bodyParser);

  server.get('/todos', (req: Request, res: Response) => {
    const todos = db.get('todos').value();
    res.status(200);
    
    res.jsonp(todos);
  });

  server.post('/todos/add', (req: Request, res: Response) => {
    const { todoId, todo } = req.body;
    const todos = db.get('todos')
      .addTodo(todoId, todo)
      .value();
    
    res.status(200);

    db.set('todos', todos).write();
    
    res.jsonp(todo);
  });

  server.patch('/todos/update', (req: Request, res: Response) => {
    const { todoId, status } = req.body;
    const todos = db.get('todos')
      .updateTodo(todoId, status)
      .value();
    
    res.status(200);

    db.set('todos', todos).write();
    
    res.jsonp(todos);
  });

  server.delete('/todos/delete/:todoId', (req: Request, res: Response) => {
    const {todoId} = req.params;
    const todos = db.get('todos')
      .deleteTodo(todoId)
      .value();
    
    res.status(200);

    db.set('todos', todos).write();
    
    res.jsonp(todos);
  });

  server.use((req, res, next) => {
    if (req.method === 'GET') {
      // Clearing query strings, so the filter feature does not kick in
      req.query = {};
    }
    // Continue to JSON Server router
    next();
  });

  server.use(router);

  return server;
}

(async () => {
  try {
    const routes = await getContentForRoutes();
    const app = createApp(routes);
    console.info(`app running on port ${MOCK_PORT}`);
    app.listen(MOCK_PORT);
  } catch (error) {
    throw new Error(error);
  }
})();
