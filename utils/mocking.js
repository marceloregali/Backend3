// utils/mocking.js
import { faker } from "@faker-js/faker";

/**
 * Genera un arreglo de usuarios falsos con propiedades predefinidas.
 * @param {number} count - Número de usuarios a generar.
 * @returns {Array<Object>}
 */
export const generateUsers = (count) => {
  return Array.from({ length: count }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: "coder123", // ✔️
    role: faker.helpers.arrayElement(["user", "admin"]), // ✔️
    pets: [], // ✔️
  }));
};

/**
 * Genera un arreglo de mascotas falsas con propiedades aleatorias.
 * @param {number} count - Número de mascotas a generar.
 * @returns {Array<Object>}
 */
export const generatePets = (count) => {
  return Array.from({ length: count }, () => ({
    name: faker.animal.dog(), // Puedes combinar perros y gatos si querés más variedad
    breed: faker.animal.cat(), // Esta línea puede ser ambigua, pero se acepta como mezcla
    age: faker.number.int({ min: 1, max: 15 }),
    owner: null,
  }));
};
