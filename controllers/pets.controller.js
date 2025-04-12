import Pets from "../dao/Pets.dao.js";

export const getAllPets = async (req, res) => {
  try {
    const pets = await Pets.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mascotas" });
  }
};
