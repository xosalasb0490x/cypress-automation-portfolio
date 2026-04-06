beforeEach(() => {
    cy.fixture('credentials').as('credentials');
});

describe('Login (https://automationexercise.com)', () => {
    it('Should not login with an unresgistered user', function () {
        cy.loginUser(this.credentials.invalidUser);
        cy.getLoginError()
            .should('exist')
            .should('be.visible');
        // cy.screenshot('login-fail');
    });

    it('Should login an user with valid credentials successfully.', function () {
        cy.loginUser(this.credentials.validUser);
        cy.logoutButton()
            .should('exist')
            .should('be.visible');
    });
});
