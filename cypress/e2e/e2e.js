// This is the support file for Cypress e2e tests
// Add custom commands or global configurations here

// Example: Adding a custom command
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
});

// Example: Adding a global hook
beforeEach(() => {
    // Code to run before each test
    cy.log('Running before each test');
});

afterEach(() => {
    // Code to run after each test
    cy.log('Running after each test');
});