import { Router } from "express";
import { generateUsers, generatePets } from "../../utils/mocking.js";
import Users from "../../dao/Users.dao.js";
import Pets from "../../dao/Pets.dao.js";
import bcrypt from "bcrypt";

const router = Router();

//  GET para generar usuarios ficticios
router.get("/mockingusers", async (req, res) => {
  try {
    const users = generateUsers(50);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error generando usuarios" });
  }
});

//  POST para generar e insertar datos en la BD
router.post("/generateData", async (req, res) => {
  try {
    const { users, pets } = req.body;

    // Genero usuarios y encriptar contraseñas
    const userDocs = generateUsers(users).map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    }));

    const petDocs = generatePets(pets);

    await Users.insertMany(userDocs);
    await Pets.insertMany(petDocs);

    res.json({ message: "Datos generados e insertados correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error insertando datos en la BD" });
  }
});

export default router;
