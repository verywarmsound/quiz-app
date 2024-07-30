describe('Quiz App', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays loading state initially', () => {
        cy.contains('Loading...').should('be.visible');
    });

    it('displays the author', () => {
        cy.contains('Made by Olga Korpacheva').should('be.visible');
    });
});
