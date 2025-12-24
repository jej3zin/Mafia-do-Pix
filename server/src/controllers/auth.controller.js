// server/src/controllers/auth.controller.js
import { UserModel } from '../models/user.model.js';
import { hashPassword, comparePassword } from '../utils/hashpassword.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../services/token.service.js';

/* ========== REGISTER ========== */
export const register = async (req, res) => {
  const { name, username, email, password } = req.body;

  const exists = await UserModel.findByUsername(username);
  if (exists.rows.length) {
    return res.status(409).json({ error: 'Usuário já existe' });
  }

  const hashed = await hashPassword(password);
  const result = await UserModel.create({
    name,
    username,
    email,
    password: hashed,
  });
  const user = result.rows[0];

  const accessToken = generateAccessToken({ id: user.id });
  const refreshToken = generateRefreshToken({ id: user.id });

  res.status(201).json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
    },
  });
};

/* ========== LOGIN ========== */
export const login = async (req, res) => {
  const { username, password } = req.body;

  const result = await UserModel.findByUsername(username);
  const user = result.rows[0];

  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const valid = await comparePassword(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const accessToken = generateAccessToken({ id: user.id });
  const refreshToken = generateRefreshToken({ id: user.id });

  res.json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
    },
  });
};

/* ========== ME ========== */
export const me = async (req, res) => {
  const result = await UserModel.findById(req.userId);
  if (!result.rows.length) return res.sendStatus(404);

  const user = result.rows[0];

  res.json({
    id: user.id,
    name: user.name,
    username: user.username,
  });
};
