export enum VisibilityFilterEnum {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_DONE = 'SHOW_DONE',
  SHOW_TODO = 'SHOW_TODO'
}

export enum ApiRoutes {
  getTodos = '/todos',
  addTodo = '/todos/add',
  updateTodo = '/todos/update',
  deleteTodo = '/todos/delete'
}

export enum HTTPVerbs {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  delete = 'DELETE'
}

export enum LoggerTypes {
  success = 'success',
  error = 'error',
  warn = 'warn',
  empty = ''
}
