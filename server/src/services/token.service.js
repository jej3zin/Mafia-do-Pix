// server/src/services/token.service.js
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { jwtConfig } from '../config/jwt.js';

/** Gera ACCESS TOKEN (curta duração) Payload deve ser mínimo: id, role*/
export const generateAccessToken = ({ id, role }) =>
  jwt.sign({ id, role }, env.JWT_SECRET, jwtConfig.access);

/** Gera REFRESH TOKEN (longa duração)  nunca coloque dados sensíveis aqui */
export const generateRefreshToken = ({ id }) =>
  jwt.sign({ id }, env.JWT_SECRET, jwtConfig.refresh);

/** Verifica token (access ou refresh) ⚠️ Use com try/catch no controller */
export const verifyToken = (token) => jwt.verify(token, env.JWT_SECRET);
