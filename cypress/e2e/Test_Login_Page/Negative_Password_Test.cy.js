describe('Negative Password Test', () => {
  it('displays an error for incorrect password', () => {
    cy.visit('https://www.ayhanmetin.eu/practice/loginpage');

    // Type the correct username and an incorrect password
    cy.get('input[type="text"]').type('ayhan89');
    cy.get('input[type="password"]').type('incorrectPassword');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Verify the error message is displayed
    cy.contains('Your password is invalid!').should('be.visible');
  });
});
