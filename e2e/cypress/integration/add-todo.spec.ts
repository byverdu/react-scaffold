/// <reference types="Cypress" />

import HomePage from '../utils/index';
import TodosRoutes from '../utils/routes';

context('Get initial Todos from the DB', () => {
  const todosRoutes = new TodosRoutes();
  const homePage = new HomePage();
  const todoText = 'pollo!';
  const todo = {
      id: '128956',
      text: todoText,
      done: false
    };

  before(() => {
    cy.server();

    todosRoutes.addTodo(todo);
    homePage.visit();
  });

  describe('Given that I have visited the home page', () => {
    it('then I can see that I can add todos', () => {
      cy.get('.add-todo button').should('have.attr', 'disabled');
    });
    it('then I can fill the todo form', () => {
      homePage.fillAddTodoInput(todoText);
      cy.get('#add-todo-field').should('have.value', todoText);
    });
    it('and submit the form', () => {
      cy.get('.add-todo button').should('not.have.attr', 'disabled');
      homePage.submitAddTodoForm();
    });
    it('and see my last created item on the list', () => {
      cy.get('.task-todo').last().contains(todoText);
    });
  });
});
