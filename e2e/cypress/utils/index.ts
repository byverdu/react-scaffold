/// <reference types="cypress"/>

export default class HomePage {
  visit() {
    cy.visit('http://localhost:3001/');
  }

  fillAddTodoInput(todoText: string) {
    cy.get('#add-todo-field').type(todoText);
  }

  submitAddTodoForm() {
    cy.get('.add-todo button').click();
  }
}