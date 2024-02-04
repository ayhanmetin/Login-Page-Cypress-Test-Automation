describe('Password Strength Test', () => {
  it('displays an error for a weak password', () => {

    cy.visit('https://www.ayhanmetin.eu/practice/loginpage');

    // Type the username and a weak password
    cy.get('input[type="text"]').type('ayhan89');
    cy.get('input[type="password"]').type('1234');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Verify the error message is displayed
    cy.contains('Password is too weak!').should('be.visible');
  });
});
