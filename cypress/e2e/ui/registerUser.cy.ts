describe('Register Functionality (https://automationexercise.com)', () => {
    it('Should register a new user successfully', () => {
        cy.fixture('credentials').then((a) => {
            cy.registerUser(a.informationUser);
            cy.get('[data-qa="account-created"]')
                .should('be.visible');
        });
    });

});
