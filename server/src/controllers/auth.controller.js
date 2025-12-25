// server/src/controllers/auth.controller.js
import { UserModel } from '../models/user.model.js';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from '../services/token.service.js';
import { hashPassword, comparePassword } from '../utils/hashpassword.js';
import {
  saveRefreshToken,
  revokeRefreshToken,
} from '../services/refresh.service.js';
import { revokeAllRefreshTokens } from '../services/refresh.service.js';
import { logAuthEvent } from '../services/auth-log.service.js';

/* ================= LOGIN ================= */
export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ error: 'Dados inválidos' });

  const { rows } = await UserModel.findByUsername(username);
  const user = rows[0];

  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

  // 🚫 status enforcement
  if (user.status !== 'active')
    return res.status(403).json({ error: 'Usuário desativado' });

  const match = await comparePassword(password, user.password_hash);
  if (!match) return res.status(401).json({ error: 'Credenciais inválidas' });

  // 🔐 tokens
  const accessToken = generateAccessToken({
    id: user.id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({ id: user.id });

  // 💾 persist refresh token
  await saveRefreshToken(user.id, refreshToken);

  res.json({
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
    },
  });

  await logAuthEvent({
    userId: user.id,
    action: 'login',
    req,
  });

  if (!user) {
    await logAuthEvent({ action: 'fail', req });
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  if (user.status !== 'active') {
    await logAuthEvent({ userId: user.id, action: 'fail', req });
    return res.status(403).json({ error: 'Usuário desativado' });
  }

  if (!match) {
    await logAuthEvent({ userId: user.id, action: 'fail', req });
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
};

/* ================= REGISTER ================= */
export const register = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password)
    return res.status(400).json({ error: 'Dados incompletos' });

  const passwordHash = await hashPassword(password);

  await UserModel.create({
    name,
    username,
    email,
    password: passwordHash,
  });
  const createdUser = rows[0];

  res.status(201).json({ message: 'Usuário criado com sucesso' });

  await logAuthEvent({
    userId: createdUser.id,
    action: 'register',
    req,
  });
};

/* ================= ME ================= */
export const me = async (req, res) => {
  const { rows } = await UserModel.findById(req.user.id);
  const user = rows[0];

  if (!user) return res.sendStatus(404);

  res.json(user);
};

/* ================= REFRESH TOKEN ================= */
export const refresh = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);

  let decoded;

  try {
    // 🔐 valida assinatura e expiração
    decoded = verifyToken(refreshToken);
  } catch {
    return res.sendStatus(401);
  }

  // ✅ verifica se refresh ainda existe no banco
  const isValid = await isRefreshTokenValid(decoded.id, refreshToken);
  if (!isValid) return res.sendStatus(403);

  // 🧠 busca role direto do banco (fonte da verdade)
  const { rows } = await UserModel.findAuthDataById(decoded.id);
  const user = rows[0];
  if (!user) return res.sendStatus(404);

  // 🔁 gera novo access token
  const accessToken = generateAccessToken({
    id: user.id,
    role: user.role,
  });

  res.json({ accessToken });

  // 🧾 audit log
  await logAuthEvent({
    userId: user.id,
    action: 'refresh',
    req,
  });
};

/* ================= LOGOUT ================= */
export const logout = async (req, res) => {
  // remove todos refresh tokens do usuário
  await revokeAllRefreshTokens(req.user.id);

  await logAuthEvent({
    userId: req.user.id,
    action: 'logout',
    req,
  });

  res.sendStatus(204);
};
