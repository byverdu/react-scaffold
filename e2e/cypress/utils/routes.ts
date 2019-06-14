/// <reference types="Cypress" />
import {Todo} from '../../../src/Models/Todo';
import {Map} from 'immutable';

export default class TodosRoutes {
  getTodos(emptyResponse: boolean = false) {
    cy.fixture('todos.json').then(todos => {
      cy.route({
          method: 'GET',
          url: '/todos',
          status: 200,
          response: emptyResponse ? {} : todos
      }).as('getTodos');
    });
  }

  addTodo(todo: Todo) {
    cy.fixture('todos.json').then((todos: Map<string, Todo>) => {
      const newTodos = Map(todos).set(todo.id, todo);
      console.log(todos, newTodos)
      cy.route({
          method: 'POST',
          url: '/todos/add',
          status: 200,
          response: newTodos
      }).as('addTodo');
    });
  }
}