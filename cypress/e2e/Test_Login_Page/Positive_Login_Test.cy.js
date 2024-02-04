describe('Positive LogIn Test', () => {
  it('successfully logs in the user and shows logout button', () => {
    cy.visit('https://www.ayhanmetin.eu/practice/loginpage');

    // Enter username and password
    cy.get('input[type="text"]').type('ayhan89');
    cy.get('input[type="password"]').type('ayhan123');

    // Click the submit button to log in
    cy.get('button[type="submit"]').click();

    // Wait for the login success message to appear before checking for the log out button
    cy.contains('Login Successful!').should('be.visible');

    // Now check for the "Log out" button
    cy.contains('button', 'Log out', { timeout: 10000 }).should('be.visible');
    
  });
});
