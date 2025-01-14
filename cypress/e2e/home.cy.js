// End-to-End Tests (Cypress) focused on user interaction and overall flow.
// cypress/e2e/home.cy.js
describe('Home Page', () => {
    it('loads the home page', () => {
        cy.visit('/');
        cy.contains('Transform Your Body & Mind').should('be.visible'); // Test that a main text is displayed
    });

    it('should have a clickable button', () => {
        cy.visit('/');
        cy.get('button').should('be.visible').click()
    })
});