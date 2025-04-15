import userModel from "./models/User.js";

export default class Users {
  // Obtengo múltiples registros de acuerdo a los parámetros
  get = async (params) => {
    try {
      return await userModel.find(params);
    } catch (error) {
      throw new Error("Error al obtener los usuarios");
    }
  };

  // Obtengo un único registro según los parámetros
  getBy = async (params) => {
    try {
      return await userModel.findOne(params);
    } catch (error) {
      throw new Error("Error al obtener el usuario");
    }
  };

  // Guardo un nuevo registro
  save = async (doc) => {
    try {
      return await userModel.create(doc);
    } catch (error) {
      throw new Error("Error al guardar el usuario");
    }
  };

  // Actualizo un registro existente
  update = async (id, doc) => {
    try {
      return await userModel.findByIdAndUpdate(id, { $set: doc });
    } catch (error) {
      throw new Error("Error al actualizar el usuario");
    }
  };

  // Elimino un registro
  delete = async (id) => {
    try {
      return await userModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Error al eliminar el usuario");
    }
  };
}
