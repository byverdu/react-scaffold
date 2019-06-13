/// <reference types="Cypress" />

import HomePage from '../utils/index';
import TodosRoutes from '../utils/routes';

context('Get initial Todos from the DB', () => {
  const todosRoutes = new TodosRoutes();
  const homePage = new HomePage();
  before(() => {
    cy.server();

    todosRoutes.getTodos();
    homePage.visit();
  });

  describe('Given that I visit the home page with saved Todos', () => {
    before(() => {
      cy.wait('@getTodos');
    });   
    it('then I should see the title', () => {
      cy.get('.App-header h1').contains('Todo List App')
    });
    it('and I should see the Add todo section', () => {
      cy.get('.add-todo').should('be.visible')
    });
    it('and I should see the visibility filters', () => {
      cy.get('.visibility-actions').should('be.visible')
    });
    it('and I should see two todos items', () => {
      cy.get('.list-todos').contains('Showing 2 todo tasks');
    });
    it('and the first one should have text "invasion"', () => {
      cy.get('.task-todo label').first().should('have.text', 'invasion! 👾');
    });
  });
});
