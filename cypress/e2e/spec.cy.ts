/// <reference types="cypress" />

describe("site", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("a loja deve mostrar a mensagem de estar vazia", () => {
    cy.get('[data-cy="num-cart"]').should("be.visible").and("have.text", "0");
    cy.get('[data-cy="cart"]').click();
    cy.get('[data-cy="cart-main"]')
      .contains("Nenhum produto no seu carrinho!")
      .and("be.visible");
    cy.get('[data-cy="cart-no-items"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("deve escolher o item, clicar em comprar e entrar no carrinho para colocar o cep e finalizar a compra", () => {
    cy.get('[data-cy="item"]').first().click();
    cy.get('[data-cy="buy-button"]').click();
    cy.get('[data-cy="num-cart"]').should("have.text", "1");
    cy.get('[data-cy="cart"]').click();
    cy.get('[data-cy="input-cep"]').type("30000000");
    cy.get('[data-cy="cep-button"]').click();
    cy.get('[data-cy="finish-button"]').click();
  });

  it("deve conseguir acrescentar 3 itens no carrinho e alterar a quantidade de cada item e deletá-los", () => {
    cy.addItemCart(0, 1);
    cy.addItemCart(1, 2);
    cy.addItemCart(2, 3);

    cy.get('[data-cy="cart"]').click();
    cy.get('[data-cy="cart-item-qtd"]')
      .should("have.length", 3)
      .each((el) => cy.wrap(el).should("have.text", "1"));
    cy.getItemMinus(0).click();
    cy.getItemQtd(0).should("have.text", "1");
    cy.getItemPlus(0).click();
    cy.getItemQtd(0).should("have.text", "2");
    cy.getItemPlus(1).click();
    cy.getItemQtd(1).should("have.text", "2");
    cy.getItemPlus(2).click();
    cy.getItemQtd(2).should("have.text", "2");

    cy.get('[data-cy="delete-item"]').eq(0).click();
    cy.get('[data-cy="cart-item"]').should("have.length", 2);
    cy.get('[data-cy="cart-clean"]').click();

    cy.get('[data-cy="num-cart"]').should("have.text", 0);
    cy.get('[data-cy="cart-main"]')
      .contains("Nenhum produto no seu carrinho!")
      .and("be.visible");
    cy.get('[data-cy="cart-no-items"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("deve mostrar o filtro corretamente", () => {
    let optionsArray: number[] = [];
    cy.get('[data-cy="category-motherboard"]').click();
    cy.get('[data-cy="filter-button"]').click();
    cy.get('[data-cy="filter-asc"]').click();
    cy.get('[data-cy="category-item-price"]')
      .each(($el, index) => {
        optionsArray[index] = Number($el.text().slice(2, -3).replace(".", ""));
      })
      .then(() => {
        const sorted = Cypress._.sortBy(optionsArray);
        expect(sorted).to.deep.equal(optionsArray);
      });
    cy.get('[data-cy="filter-button"]').click();
    cy.get('[data-cy="filter-desc"]').click();
    cy.get('[data-cy="category-item-price"]')
      .each(($el, index) => {
        optionsArray[index] = Number($el.text().slice(2, -3).replace(".", ""));
      })
      .then(() => {
        const sorted = Cypress._.sortBy(optionsArray).reverse();
        expect(sorted).to.deep.equal(optionsArray);
      });
  });

  it("deve conseguir navegar pelas promoções na tela inicial", () => {
    cy.get('[data-cy="promo-move-left"]').should("not.be.visible");
    cy.get('[data-cy="promo-item"]').should("have.length", 2);
    cy.get('[data-cy="promo-move-right"]').click();
    cy.get('[data-cy="promo-move-left"]').should("be.visible");
    cy.testPromo("right");
    cy.get('[data-cy="promo-move-right"]').should("not.be.visible");
    cy.get('[data-cy="promo-item"]').should("have.length", 2);
    cy.get('[data-cy="promo-move-left"]').click();
    cy.get('[data-cy="promo-move-right"]').should("be.visible");
    cy.testPromo("left");
    cy.get('[data-cy="promo-move-left"]').should("not.be.visible");
    cy.get('[data-cy="promo-item"]').should("have.length", 2);
  });
});

export {};