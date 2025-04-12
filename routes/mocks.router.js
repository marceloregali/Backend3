import { Router } from "express";
import { generateUsers, generatePets } from "../utils/mocking.js";
import Users from "../dao/Users.dao.js";
import Pets from "../dao/Pets.dao.js";
import bcrypt from "bcrypt";

const router = Router();

// GET: Generar 50 usuarios de prueba
router.get("/mockingusers", async (req, res) => {
  try {
    const users = generateUsers(50);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error generando usuarios:", error);
    res.status(500).json({ error: "Error generando usuarios" });
  }
});

// GET: Endpoint original de mockingpets (si lo tenías antes)
router.get("/mockingpets", async (req, res) => {
  try {
    const pets = generatePets(30);
    res.status(200).json(pets);
  } catch (error) {
    console.error("Error generando mascotas:", error);
    res.status(500).json({ error: "Error generando mascotas" });
  }
});

// POST: Generar e insertar usuarios y mascotas en la base de datos
router.post("/generateData", async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const userDocs = generateUsers(users).map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10), // Encriptar
    }));

    const petDocs = generatePets(pets);

    await Users.insertMany(userDocs);
    await Pets.insertMany(petDocs);

    res
      .status(200)
      .json({ message: "Datos generados e insertados correctamente" });
  } catch (error) {
    console.error("Error insertando datos:", error);
    res.status(500).json({ error: "Error insertando datos en la BD" });
  }
});

export default router;
