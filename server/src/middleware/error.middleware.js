// server/src/middleware/error.middleware.js
export const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno' });
};
