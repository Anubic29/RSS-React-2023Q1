/// <reference types="cypress" />

context('Next App', () => {
  it('visit the home page', () => {
    cy.visit('/');
    cy.contains('Search:');
  });

  it('visit the about page', () => {
    cy.visit('/about');
    cy.contains('About content');
  });
});
