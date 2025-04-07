import { faker } from "@faker-js/faker";

export const generateUsers = (count) => {
  return Array.from({ length: count }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: "coder123",
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: [],
  }));
};

export const generatePets = (count) => {
  return Array.from({ length: count }, () => ({
    name: faker.animal.dog(),
    breed: faker.animal.cat(),
    age: faker.number.int({ min: 1, max: 15 }),
    owner: null, // Simular referencia si querés
  }));
};
