/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      addItem(): Chainable<Element>;
      testPromo(direction: string): void;
      getItemPlus(index: number): Chainable<Element>;
      getItemMinus(index: number): Chainable<Element>;
      getItemQtd(index: number): Chainable<Element>;
      addItemCart(index: number, n: number): Chainable<Element>;
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

Cypress.Commands.add("getItemPlus", (index) => {
  cy.get('[data-cy="cart-plus-qtd"]').eq(index);
});

Cypress.Commands.add("getItemMinus", (index) => {
  cy.get('[data-cy="cart-minus-qtd"]').eq(index);
});

Cypress.Commands.add("getItemQtd", (index) => {
  cy.get('[data-cy="cart-item-qtd"]').eq(index);
});

Cypress.Commands.add("addItemCart", (index, n) => {
  cy.get('[data-cy="category-motherboard"]').click();
  cy.get('[data-cy="filter-items"] [data-cy="item"]').eq(index).click();
  cy.get('[data-cy="buy-button"]').click();
  cy.get('[data-cy="num-cart"]').should("have.text", n);
});

export {};
