describe('Negative Username Test', () => {
  it('displays an error for incorrect username', () => {

    cy.visit('https://www.ayhanmetin.eu/practice/loginpage');

    // Type the incorrect username and valid password
    cy.get('input[type="text"]').type('incorrectUser');
    cy.get('input[type="password"]').type('ayhan123');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Verify the error message is displayed
    cy.contains('Your username is invalid!').should('be.visible');
  });
});
