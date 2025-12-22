import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { jwtConfig } from '../config/jwt.js';

export const generateToken = (payload) =>
  jwt.sign(payload, env.JWT_SECRET, jwtConfig);
