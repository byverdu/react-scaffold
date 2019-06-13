/// <reference types="cypress"/>

export default class HomePage {
  visit() {
    cy.visit('http://localhost:3000/');
  }
}