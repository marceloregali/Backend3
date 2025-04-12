import { faker } from "@faker-js/faker";

// Función para generar usuarios falsos
export const generateUsers = (count) => {
  return Array.from({ length: count }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: "coder123", // Será encriptada más adelante
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: [], // Siempre array vacío
  }));
};

// Función para generar mascotas falsas
export const generatePets = (count) => {
  return Array.from({ length: count }, () => ({
    name: faker.animal.dog(),
    breed: faker.animal.cat(),
    age: faker.number.int({ min: 1, max: 15 }),
    owner: null, // Dueño aún no asignado
  }));
};
