/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      addItem(): Chainable<Element>;
    }
  }
}

Cypress.Commands.add("addItem", () => {
  cy.get('[data-cy="item"]').first().click();
  cy.get('[data-cy="buy-button"]').click();
  cy.get('[data-cy="num-cart"]').should("have.text", "1");
  cy.get('[data-cy="cart"]').click();
});

export {};
