import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mocksRouter from "./routes/mocks.router.js";
import "reflect-metadata";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware para recibir JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.set("strictQuery", false); // Evita el warning de Mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Rutas
app.use("/api/mocks", mocksRouter);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando correctamente.");
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
