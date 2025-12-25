// server/src/services/refresh.service.js
import { pool } from '../config/db.js';
import { jwtConfig } from '../config/jwt.js';

/* Salva refresh token no banco */
export const saveRefreshToken = (userId, token) =>
  pool.query(
    `
    INSERT INTO refresh_tokens (user_id, token, expires_at)
    VALUES ($1, $2, NOW() + INTERVAL '${jwtConfig.refresh.expiresIn}')
    `,
    [userId, token]
  );

/* Verifica se o refresh token ainda é válido (existe no banco) */
export const isRefreshTokenValid = async (userId, token) => {
  const { rowCount } = await pool.query(
    `
    SELECT 1
    FROM refresh_tokens
    WHERE user_id = $1 AND token = $2
    `,
    [userId, token]
  );

  return rowCount > 0;
};

/* Valida e revoga refresh token (one-time use) */
export const revokeAllRefreshTokens = (userId) =>
  pool.query(
    `
    DELETE FROM refresh_tokens
    WHERE user_id = $1
    `,
    [userId]
  );
