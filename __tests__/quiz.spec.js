describe('Quiz App', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays loading state initially', () => {
        cy.contains('Loading...').should('be.visible');
    });

    it('displays quiz questions', () => {
        cy.contains('Question text here').should('be.visible'); // Replace with actual question text
    });

    it('handles correct answer', () => {
        cy.contains('Correct Answer').click(); // Replace with actual correct answer text
        cy.contains('Correct Answers: 1').should('be.visible');
    });

    it('handles incorrect answer', () => {
        cy.contains('Incorrect Answer').click(); // Replace with actual incorrect answer text
        cy.contains('Incorrect Answers: 1').should('be.visible');
    });

    it('displays quiz summary after finishing', () => {
        // Simulate answering all questions
        cy.contains('Correct Answer').click(); // Replace with actual correct answer text
        cy.contains('Quiz Summary').should('be.visible');
    });
});
```

### 4. Update `package.json` Scripts

Add scripts to run your tests:

```json
{
    "scripts": {
    "test": "jest",
        "cypress:open": "cypress open",
        "cypress:run": "cypress run"
}
}
