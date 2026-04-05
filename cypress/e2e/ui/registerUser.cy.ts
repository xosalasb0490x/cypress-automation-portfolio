beforeEach(() => {
    cy.fixture('credentials').as('credentials');
})

describe('Register Functionality (https://automationexercise.com)', () => {
    it('Should register a new user successfully', function () {
        cy.registerUser(this.credentials.informationUser);
        cy.get('[data-qa="account-created"]')
            .should('be.visible');
    });
});
