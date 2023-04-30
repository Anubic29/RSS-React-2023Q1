/// <reference types="cypress" />

context('About page', () => {
  it('visit the about page', () => {
    cy.visit('/about');
    cy.contains('About content');
  });
});
