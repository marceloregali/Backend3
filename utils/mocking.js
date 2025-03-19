import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export const generateUsers = (count) => {
  return Array.from({ length: count }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync("coder123", 10),
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: [],
  }));
};

export const generatePets = (count) => {
  return Array.from({ length: count }, () => ({
    name: faker.animal.dog(),
    breed: faker.helpers.arrayElement([
      "Siamese",
      "Persian",
      "Maine Coon",
      "Bengal",
      "Sphynx",
    ]),
    age: faker.number.int({ min: 1, max: 15 }),
    owner: null,
  }));
};

console.log(generateUsers(5));
console.log(generatePets(5));
