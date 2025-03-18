import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import mocksRouter from "./routes/mocks.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.MONGO_URI;

// Conectar a MongoDB
connectDB();

app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);

//  servidor
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
