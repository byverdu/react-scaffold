export enum VisibilityFilterEnum {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_DONE = 'SHOW_DONE',
  SHOW_TODO = 'SHOW_TODO'
}

export enum ApiRoutes {
  getTodos = '/todos',
  addTodo = '/todos/add',
  updateTodo = '/todos/update',
  deleteTodo = '/todos/delete/:todoId'
}
