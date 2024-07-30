describe('Quiz App Responsiveness', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays correctly on mobile devices', () => {
        cy.viewport('iphone-6');
        cy.contains('Loading...').should('be.visible');
        it('displays the author', () => {
            cy.contains('Made by Olga Korpacheva').should('be.visible');
        });
    });

    it('displays correctly on tablets', () => {
        cy.viewport('ipad-2');
        cy.contains('Loading...').should('be.visible');
        it('displays the author', () => {
            cy.contains('Made by Olga Korpacheva').should('be.visible');
        });
    });

    it('displays correctly on desktops', () => {
        cy.viewport('macbook-15');
        cy.contains('Loading...').should('be.visible');
        it('displays the author', () => {
            cy.contains('Made by Olga Korpacheva').should('be.visible');
        });
    });
});
