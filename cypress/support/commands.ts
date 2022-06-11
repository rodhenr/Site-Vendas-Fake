/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      addItem(): Chainable<Element>;
      testPromo(direction: string): void;
    }
  }
}

Cypress.Commands.add("addItem", () => {
  cy.get('[data-cy="item"]').first().click();
  cy.get('[data-cy="buy-button"]').click();
  cy.get('[data-cy="num-cart"]').should("have.text", "1");
  cy.get('[data-cy="cart"]').click();
});

Cypress.Commands.add("testPromo", (direction) => {
  cy.get('[data-cy="promo-item"]').should("have.length", 2);
  cy.get(`[data-cy=promo-move-${direction}]`).click();
  cy.get('[data-cy="promo-item"]').should("have.length", 2);
  cy.get(`[data-cy=promo-move-${direction}]`).click();
  cy.get('[data-cy="promo-item"]').should("have.length", 2);
  cy.get(`[data-cy=promo-move-${direction}]`).click();
  cy.get('[data-cy="promo-item"]').should("have.length", 2);
  cy.get(`[data-cy=promo-move-${direction}]`).click();
  cy.get('[data-cy="promo-item"]').should("have.length", 2);
  cy.get(`[data-cy=promo-move-${direction}]`).click();
});



export {};
