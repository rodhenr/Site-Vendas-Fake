/// <reference types="cypress" />

describe("site", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("a loja deve mostrar a mensagem de estar vazia", () => {
    cy.get('[data-cy="num-cart"]').should("have.text", "0");
    cy.get('[data-cy="cart"]').click();
    cy.get('[data-cy="cart-main"]')
      .contains("Nenhum produto no seu carrinho!")
      .and("be.visible");
    cy.get('[data-cy="cart-no-items"]').click();
  });

  it("deve fazer todo o processo desde escolher o item até a compra", () => {
    cy.addItem();
    cy.get('[data-cy="input-cep"]').type("30000000");
    cy.get('[data-cy="cep-button"]').click();
    cy.get('[data-cy="finish-button"]').click();
  });

  it.only("deve fazer todo o processo desde escolher o item até a compra", () => {
    cy.addItem();
    cy.get('[data-cy="cart-plus-qtd"]').click();
    cy.get('[data-cy="cart-item-qtd"]').should("have.text", "2");
    cy.get('[data-cy="cart-plus-qtd"]').click();
    cy.get('[data-cy="cart-item-qtd"]').should("have.text", "3");
    cy.get('[data-cy="cart-minus-qtd"]').click();
    cy.get('[data-cy="cart-item-qtd"]').should("have.text", "2");
    cy.get('[data-cy="cart-minus-qtd"]').click();
    cy.get('[data-cy="cart-item-qtd"]').should("have.text", "1");
  });
});

export {};
