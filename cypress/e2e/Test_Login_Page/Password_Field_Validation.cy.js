describe('Password Field Validation', () => {
  it('displays an error when the password field is left empty', () => {

    cy.visit('https://www.ayhanmetin.eu/practice/loginpage');

    // Type the username and leave the Password field empty
    cy.get('input[type="text"]').type('ayhan89');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Verify the error message is displayed
    cy.contains('Username and password cannot be empty!').should('be.visible');
  });
});
