import { faker } from '@faker-js/faker'

/**
 * Interface that defines the structure of the user information
 * required for registration and login flows.
 */
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

/**
 * Custom command to register a new user in the application.
 * Generates a dynamic email using faker to avoid duplicate user conflicts.
 * Fills registration form fields and submits account creation request.
 *
 * @param user Object containing user registration information
 */
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

/**
 * Custom command to log into the application using valid credentials.
 * Navigates to login page and submits authentication form.
 *
 * @param user Object containing login credentials
 */
Cypress.Commands.add('loginUser', (user: informationUser) => {
  cy.visit('https://automationexercise.com/login');
  cy.get('[data-qa="login-email"]').type(user.email);
  cy.get('[data-qa="login-password"]').type(user.password);
  cy.get('[data-qa="login-button"]').click();
});

/**
 * Custom command that retrieves login error message displayed
 * when authentication credentials are invalid.
 *
 * Used for negative login validation scenarios.
 *
 * @returns Cypress chainable element containing error message
 */
Cypress.Commands.add('getLoginError', () => {
  cy.contains('Your email or password is incorrect!');
});

/**
 * Custom command that returns logout button element.
 *
 * Used to validate session state or perform logout actions.
 *
 * @returns Cypress chainable logout button element
 */
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






