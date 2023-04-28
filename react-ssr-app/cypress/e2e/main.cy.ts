/// <reference types="cypress" />

context('Main page', () => {
  it('visit the main page', () => {
    cy.visit('/');
    cy.contains('Search:');
  });

  it('search characters', () => {
    cy.visit('/');

    cy.get('input[class*=_search__input_]').type('alien{enter}');
    cy.get('[data-testid="character-card"]').should('have.length', 12);
    cy.contains('Alien Googah');
    cy.contains('Alien Rick');
    cy.contains('Alien Morty');
  });

  it('search certail character and open modal', () => {
    cy.visit('/');

    cy.get('input[class*=_search__input_]').type('alexander{enter}');
    cy.get('[data-testid="character-card"]').should('have.length', 1);
    cy.contains('Alexander');

    cy.get('[data-testid="character-card"]').click();
    cy.get('[class*="_overlay__modal_"]').contains('Alexander');
    cy.get('[class*="_overlay__modal_"]').contains('Dead');
    cy.get('[class*="_overlay__modal_"]').contains('Human');
    cy.get('[class*="_overlay__modal_"]').contains('Anatomy Park');
  });
});
