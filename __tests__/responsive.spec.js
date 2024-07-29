describe('Quiz App Responsiveness', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays correctly on mobile devices', () => {
        cy.viewport('iphone-6');
        cy.contains('Loading...').should('be.visible');
        cy.contains('Question text here').should('be.visible'); // Replace with actual question text
        cy.contains('Correct Answer').should('be.visible'); // Replace with actual correct answer text
        cy.contains('Questions Left:').should('be.visible');
    });

    it('displays correctly on tablets', () => {
        cy.viewport('ipad-2');
        cy.contains('Loading...').should('be.visible');
        cy.contains('Question text here').should('be.visible'); // Replace with actual question text
        cy.contains('Correct Answer').should('be.visible'); // Replace with actual correct answer text
        cy.contains('Questions Left:').should('be.visible');
    });

    it('displays correctly on desktops', () => {
        cy.viewport('macbook-15');
        cy.contains('Loading...').should('be.visible');
        cy.contains('Question text here').should('be.visible'); // Replace with actual question text
        cy.contains('Correct Answer').should('be.visible'); // Replace with actual correct answer text
        cy.contains('Questions Left:').should('be.visible');
    });
});
