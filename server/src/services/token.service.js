// server/src/services/token.service.js
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { jwtConfig } from '../config/jwt.js';

export const generateAccessToken = (payload) =>
  jwt.sign(payload, env.JWT_SECRET, jwtConfig.access);

export const generateRefreshToken = (payload) =>
  jwt.sign(payload, env.JWT_SECRET, jwtConfig.refresh);

export const verifyToken = (token) => jwt.verify(token, env.JWT_SECRET);
