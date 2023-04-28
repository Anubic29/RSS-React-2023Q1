context('Form page', () => {
  it('visit the form page', () => {
    cy.visit('/form');
    cy.contains('Card List');
  });

  it('form page contains 7 labels', () => {
    cy.visit('/form');
    cy.get('form').find('[class^="_label_"]').should('have.length', 7);
  });

  it('form page create card', () => {
    cy.visit('/form');
    cy.get('input#user-name').type('Userone');
    cy.get('input#date').type('2009-12-12');
    cy.get('select#select').select('USA');
    cy.get('input[name="language"][value="English"]').click();
    cy.get('button[type="submit"]').click();

    cy.get('[data-testid="saved-text"]').contains('Saved');
    cy.get('[class^="_card-list_"]').find('[data-testid="form-card"]').should('have.length', 1);
    // cy.get('form').find('[class^="_label_"]').should('have.length', 7);
  });
});
