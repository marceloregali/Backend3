import Users from "../dao/Users.dao.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Aquí podrías guardar en sesión o generar un token
    req.session.user = {
      _id: user._id,
      email: user.email,
      role: user.role,
    };

    res.json({ message: "Login exitoso", user: req.session.user });
  } catch (error) {
    res.status(500).json({ error: "Error en login" });
  }
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Error cerrando sesión" });
    }
    res.json({ message: "Sesión cerrada" });
  });
};
