// server/src/middleware/status.middleware.js

/* Bloqueia usuários não ativos */
export const requireActiveUser = (req, res, next) => {
  if (req.user.status && req.user.status !== 'active')
    return res.status(403).json({ error: 'Conta suspensa' });

  next();
};
