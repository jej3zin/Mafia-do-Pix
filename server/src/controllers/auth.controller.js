import jwt from 'jsonwebtoken';
import { UserModel } from '../models/User.model.js';
import { hashPassword, comparePassword } from '../utils/hashPassword.js';
import { env } from '../config/env.js';
import { jwtConfig } from '../config/jwt.js';

export const register = async (req, res) => {
  const { name, username, password } = req.body;

  const hashed = await hashPassword(password);
  const user = await UserModel.create({ name, username, password: hashed });

  res.status(201).json(user.rows[0]);
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const result = await UserModel.findByUsername(username);
  const user = result.rows[0];

  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

  const valid = await comparePassword(password, user.password_hash);
  if (!valid) return res.status(401).json({ error: 'Credenciais inválidas' });

  const token = jwt.sign({ id: user.id }, env.JWT_SECRET, jwtConfig);

  res.json({
    accessToken: token,
    user: { id: user.id, name: user.name, username: user.username },
  });
};
