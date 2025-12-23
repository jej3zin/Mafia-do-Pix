// server/src/controllers/auth.controller.js
import { UserModel } from '../models/user.model.js';
import { hashPassword, comparePassword } from '../utils/hashpassword.js';
import { generateToken } from '../services/token.service.js';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from '../services/token.service.js';

/* ========== System Register ========== */
export const register = async (req, res) => {
  const { name, username, password } = req.body;

  // 🔴 ADD ISSO AQUI
  const exists = await UserModel.findByUsername(username);
  if (exists.rows.length) {
    return res.status(409).json({ error: 'Usuário já existe' });
  }

  const hashed = await hashPassword(password);
  const user = await UserModel.create({ name, username, password: hashed });

  const accessToken = generateAccessToken({ id: user.rows[0].id });
  const refreshToken = generateRefreshToken({ id: user.rows[0].id });

  // 🔴 ADD TOKEN NO REGISTER
  const token = generateToken({ id: user.rows[0].id });

  res.status(201).json({
    accessToken: token,
    accessToken,
    refreshToken,
    user: {
      id: user.rows[0].id,
      name: user.rows[0].name,
      username: user.rows[0].username,
    },
  });

  res.status(201).json(user.rows[0]);
};
/* ========== System Login ========== */
export const login = async (req, res) => {
  const { username, password } = req.body;

  const result = await UserModel.findByUsername(username);
  const user = result.rows[0];

  const accessToken = generateAccessToken({ id: user.id });
  const refreshToken = generateRefreshToken({ id: user.id });

  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

  const valid = await comparePassword(password, user.password_hash);
  if (!valid) return res.status(401).json({ error: 'Credenciais inválidas' });

  const token = generateToken({ id: user.id });

  res.json({
    accessToken: token,
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
    },
  });
};
/* ========== System Token ========== */
export const me = async (req, res) => {
  const user = await UserModel.findById(req.userId);

  if (!user.rows.length) {
    return res.sendStatus(404);
  }

  res.json({
    id: user.rows[0].id,
    name: user.rows[0].name,
    username: user.rows[0].username,
  });
};
