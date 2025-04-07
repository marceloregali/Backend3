import { Router } from "express";
import { generateUsers, generatePets } from "../utils/mocking.js";
import Users from "../dao/Users.dao.js";
import Pets from "../dao/Pets.dao.js";
import bcrypt from "bcrypt";

const router = Router();

// GET: genera 50 usuarios ficticios con contraseña hasheada
router.get("/mockingusers", async (req, res) => {
  try {
    const users = generateUsers(50).map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error generando usuarios" });
  }
});

// GET: genera mascotas ficticias (simulación)
router.get("/mockingpets", (req, res) => {
  try {
    const pets = generatePets(20);
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error generando mascotas" });
  }
});

// POST: genera e inserta usuarios y mascotas en la base de datos
router.post("/generateData", async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    if (isNaN(users) || isNaN(pets)) {
      return res.status(400).json({ error: "Parámetros inválidos" });
    }

    const userDocs = generateUsers(users).map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    }));

    const petDocs = generatePets(pets);

    await Users.insertMany(userDocs);
    await Pets.insertMany(petDocs);

    res
      .status(201)
      .json({ message: "Datos generados e insertados correctamente" });
  } catch (error) {
    console.error("Error en /generateData:", error);
    res.status(500).json({ error: "Error insertando datos en la BD" });
  }
});

export default router;
