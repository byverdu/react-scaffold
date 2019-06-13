/// <reference types="Cypress" />

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
}