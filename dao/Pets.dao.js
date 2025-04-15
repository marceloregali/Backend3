import petModel from "./models/Pet.js";

export default class Pet {
  // Obtengo múltiples registros de acuerdo a los parámetros
  get = async (params) => {
    try {
      return await petModel.find(params);
    } catch (error) {
      throw new Error("Error al obtener las mascotas");
    }
  };

  // Obtengo un único registro según los parámetros
  getBy = async (params) => {
    try {
      return await petModel.findOne(params);
    } catch (error) {
      throw new Error("Error al obtener la mascota");
    }
  };

  // Guardo un nuevo registro
  save = async (doc) => {
    try {
      return await petModel.create(doc);
    } catch (error) {
      throw new Error("Error al guardar la mascota");
    }
  };

  // Actualizo un registro existente
  update = async (id, doc) => {
    try {
      return await petModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
    } catch (error) {
      throw new Error("Error al actualizar la mascota");
    }
  };

  // Elimino un registro
  delete = async (id) => {
    try {
      return await petModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Error al eliminar la mascota");
    }
  };
}
