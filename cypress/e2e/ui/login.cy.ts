describe('Login (https://automationexercise.com)', () => {
    it('Should not login with an unresgistered user', () => {
        cy.fixture('credentials').then((a) => {
            cy.loginUser(a.invalidUser);
            cy.getLoginError()
                .should('exist')
                .should('be.visible');
        });
    });

    it('Should login an user with valid credentials successfully.', () => {
        cy.fixture('credentials').then((a) => {
            cy.loginUser(a.validUser);
            cy.logoutButton()
                .should('exist')
                .should('be.visible');
        });
    });
});