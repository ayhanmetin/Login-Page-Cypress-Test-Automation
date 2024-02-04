describe('Username Field Validation', () => {
  it('displays an error when the username field is left empty', () => {

    cy.visit('https://www.ayhanmetin.eu/practice/loginpage');

    // Leave Username field empty and type the password
    cy.get('input[type="password"]').type('ayhan123');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Verify the error message is displayed
    cy.contains('Username and password cannot be empty!').should('be.visible');
  });
});
