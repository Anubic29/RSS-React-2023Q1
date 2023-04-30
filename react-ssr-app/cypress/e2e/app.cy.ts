/// <reference types="cypress" />

context('App', () => {
  it('routing', () => {
    cy.visit('/');
    cy.get('[class*="_link_"][class*="_active_"]').contains('Main');

    cy.get('[class*="_link_"]').contains('About').click();
    cy.get('[class*="_link_"][class*="_active_"]').contains('About');

    cy.get('[class*="_link_"]').contains('Form').click();
    cy.get('[class*="_link_"][class*="_active_"]').contains('Form');
  });
});
