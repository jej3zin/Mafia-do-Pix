// server/src/middleware/auth.middleware.js
import { verifyToken } from '../services/token.service.js';

/* Middleware de autenticação Injeta req.user { id, role } */
export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.sendStatus(401);

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);

    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado' });
    }
    return res.sendStatus(401);
  }
};
