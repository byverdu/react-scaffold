/// <reference types="Cypress" />

import HomePage from '../utils/index';
import TodosRoutes from '../utils/routes';

context('Get initial Todos from the DB', () => {
  const todosRoutes = new TodosRoutes();
  const homePage = new HomePage();
  const emptyResponse = true;
  before(() => {
    cy.server();

    todosRoutes.getTodos(emptyResponse);
    homePage.visit();
  });

  describe('Given that I visit the home page with no Todos saved', () => {
    before(() => {
      cy.wait('@getTodos');
    });   
    it('then I should see the title', () => {
      cy.get('.App-header h1').contains('Todo List App');
    });
    it('and I should see the Add todo section', () => {
      cy.get('.add-todo').should('be.visible');
    });
    it('and I should not see the visibility filters', () => {
      cy.get('.visibility-actions').should('not.be.visible');
    });
    it('and I should see zero todos items', () => {
      cy.get('.list-todos').contains('No todo tasks to show');
    });
  });
});
