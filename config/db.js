import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Conectado a MongoDB Atlas");
  } catch (error) {
    console.error(" Error de conexión a MongoDB:", error);
    process.exit(1); // Cerrar la app en caso de error
  }
};

export default connectDB;
