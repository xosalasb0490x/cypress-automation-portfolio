import {faker} from '@faker-js/faker';

export interface User {
  username: string
  password: string
  email: string
}

export const buildUser = (overrides?: Partial<User>): User => {

  return {
    username: faker.internet.username(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    ...overrides
  }

}