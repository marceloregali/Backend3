import { Router } from "express";
import { generateUsers, generatePets } from "../utils/mocking.js";
import Users from "../dao/Users.dao.js";
import Pets from "../dao/Pets.dao.js";
import bcrypt from "bcrypt";

const router = Router();

// GET  genera usuarios ficticios
router.get("/mockingusers", async (req, res) => {
  try {
    const users = generateUsers(50);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error generando usuarios" });
  }
});

// GET  genera mascotas ficticias
router.get("/mockingpets", async (req, res) => {
  try {
    const pets = generatePets(50);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error generando mascotas" });
  }
});

router.post("/generateData", async (req, res) => {
  try {
    const { users, pets } = req.body;

    // Validación de entrada
    if (!users || !pets || isNaN(users) || isNaN(pets)) {
      return res.status(400).json({ error: "Parámetros inválidos" });
    }

    // Genero usuarios y encripto contraseñas
    const userDocs = generateUsers(users).map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    }));

    const petDocs = generatePets(pets);

    // Inserto en la base de datos
    await Users.insertMany(userDocs);
    await Pets.insertMany(petDocs);

    res.json({ message: "Datos generados e insertados correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error insertando datos en la BD" });
  }
});

export default router;
