context('Next App', () => {
  it('visit the home page', () => {
    cy.visit('/');

    cy.contains('Search:');
  });
});
