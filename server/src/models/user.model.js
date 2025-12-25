// server/src/models/user.model.js
import { pool } from '../config/db.js';

export const UserModel = {
  /* Cria usuário (registro) */
  create: ({ name, username, email, password }) =>
    pool.query(
      `INSERT INTO users (name, username, email, password_hash)
       VALUES ($1,$2,$3,$4)
       RETURNING id, name, username`,
      [name, username, email, password]
    ),

  /* Busca usuário para LOGIN (inclui hash) */
  findByUsername: (username) =>
    pool.query(
      `
      SELECT
        id,
        name,
        username,
        email,
        password_hash,
        role,
        status
      FROM users
      WHERE username = $1
      `,
      [username]
    ),

  /* Busca usuário autenticado (/me) */
  findById: (id) =>
    pool.query(
      `
      SELECT
        id,
        name,
        username,
        email,
        bio,
        avatar_url,
        banner_url,
        role,
        status
      FROM users
      WHERE id = $1
      `,
      [id]
    ),

  /* Busca role do db */
  findAuthDataById: (id) =>
    pool.query(
      `
    SELECT id, role
    FROM users
    WHERE id = $1
    `,
      [id]
    ),

  /* Atualiza perfil do usuário */
  updateProfile: (id, { name, bio, avatar_url, banner_url }) =>
    pool.query(
      `
      UPDATE users
      SET
        name = COALESCE($1, name),
        bio = COALESCE($2, bio),
        avatar_url = COALESCE($3, avatar_url),
        banner_url = COALESCE($4, banner_url),
        updated_at = NOW()
      WHERE id = $5
      `,
      [name, bio, avatar_url, banner_url, id]
    ),

  /* Perfil público (sem dados sensíveis) */
  findPublicProfile: (username) =>
    pool.query(
      `
      SELECT
        id,
        name,
        username,
        bio,
        avatar_url,
        banner_url
      FROM users
      WHERE username = $1
      `,
      [username]
    ),
};
