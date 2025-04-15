import { Router } from "express";
import { generateUsers, generatePets } from "../utils/mocking.js";
import Users from "../dao/Users.dao.js";
import Pets from "../dao/Pets.dao.js";
import bcrypt from "bcrypt";

const router = Router();

// GET: Genero 50 usuarios de prueba
router.get("/mockingusers", async (req, res) => {
  try {
    const users = generateUsers(50);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error generando usuarios:", error);
    res.status(500).json({ error: "Error generando usuarios" });
  }
});

// GET: Endpoint original de mockingpets
router.get("/mockingpets", async (req, res) => {
  try {
    const pets = generatePets(30);
    res.status(200).json(pets);
  } catch (error) {
    console.error("Error generando mascotas:", error);
    res.status(500).json({ error: "Error generando mascotas" });
  }
});

// GET: obtengo todos los usuarios de la base de datos
router.get("/dbusers", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo usuarios de la BD" });
  }
});

// GET : obtengo todas las mascotas de la base de datos
router.get("/dbpets", async (req, res) => {
  try {
    const pets = await Pets.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo mascotas de la BD" });
  }
});

// POST: Genero e insertar usuarios y mascotas en la base de datos
router.post("/generateData", async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const userDocs = generateUsers(users).map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10),
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
