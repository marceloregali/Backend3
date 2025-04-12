// controllers/adoption.controllers.js
import Users from "../dao/Users.dao.js";
import Pets from "../dao/Pets.dao.js";

export const adoptPet = async (req, res) => {
  try {
    const { userId, petId } = req.body;

    const user = await Users.findById(userId);
    const pet = await Pets.findById(petId);

    if (!user || !pet) {
      return res.status(404).json({ error: "Usuario o mascota no encontrada" });
    }

    pet.owner = user._id;
    user.pets.push(pet._id);

    await pet.save();
    await user.save();

    res.json({ message: "Adopción realizada con éxito", user, pet });
  } catch (error) {
    console.error("Error en la adopción:", error);
    res.status(500).json({ error: "Error al procesar adopción" });
  }
};
