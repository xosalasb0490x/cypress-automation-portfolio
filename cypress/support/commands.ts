import { faker } from '@faker-js/faker'

interface informationUser {
  name: string,
  lastName: string,
  email: string,
  password: string,
  address: string,
  country: string,
  state: string,
  city: string,
  zipCode: string,
  mobileNumber: string
}

Cypress.Commands.add('registerUser', (user: informationUser) => {
  const dynamicEmail = faker.internet.email()

  cy.visit('https://automationexercise.com/login');
  cy.get('[data-qa="signup-name"]').type(user.name);
  cy.get('[data-qa="signup-email"]').type(dynamicEmail);
  cy.get('[data-qa="signup-button"]').click();
  cy.get('[data-qa="password"]').type(user.password);
  cy.get('[data-qa="first_name"]').type(user.name);
  cy.get('[data-qa="last_name"]').type(user.lastName);
  cy.get('[data-qa="address"]').type(user.address);
  cy.get('[data-qa="country"]').type(user.country);
  cy.get('[data-qa="state"]').type(user.state);
  cy.get('[data-qa="city"]').type(user.city);
  cy.get('[data-qa="zipcode"]').type(user.zipCode);
  cy.get('[data-qa="mobile_number"]').type(user.mobileNumber);
  cy.get('[data-qa="create-account"]').click();
});

Cypress.Commands.add('loginUser', (user: informationUser) => {
  cy.visit('https://automationexercise.com/login');
  cy.get('[data-qa="login-email"]').type(user.email);
  cy.get('[data-qa="login-password"]').type(user.password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('getLoginError', () => {
  cy.contains('Your email or password is incorrect!');
});

Cypress.Commands.add('logoutButton', () => {
  cy.get('a[href="/logout"]');
});

declare global {
  namespace Cypress {
    interface Chainable {
      registerUser(user: informationUser): Chainable<void>;
      loginUser(user: informationUser): Chainable<void>;
      getLoginError(): Chainable<void>;
      logoutButton(): Chainable<void>;
    }
  }
}

export { }






