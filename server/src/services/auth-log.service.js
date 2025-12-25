import { pool } from '../config/db.js';

/* Registra eventos de autenticação */
export const logAuthEvent = ({ userId = null, action, req }) => {
  return pool.query(
    `
    INSERT INTO auth_logs (user_id, action, ip_address, user_agent)
    VALUES ($1, $2, $3, $4)
    `,
    [userId, action, req.ip, req.headers['user-agent']]
  );
};
