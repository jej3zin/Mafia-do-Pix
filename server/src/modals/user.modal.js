import { pool } from '../config/db.js';

export const UserModel = {
  create: ({ name, username, password }) =>
    pool.query(
      `INSERT INTO users (name, username, password_hash)
       VALUES ($1,$2,$3)
       RETURNING id, name, username`,
      [name, username, password]
    ),

  findByUsername: (username) =>
    pool.query(`SELECT * FROM users WHERE username = $1`, [username]),

  updateProfile: (id, { name, bio, avatar_url, banner_url }) =>
    pool.query(
      `
      UPDATE users
      SET
        name = COALESCE($1, name),
        bio = COALESCE($2, bio),
        avatar_url = COALESCE($3, avatar_url),
        banner_url = COALESCE($4, banner_url)
      WHERE id = $5
      `,
      [name, bio, avatar_url, banner_url, id]
    ),

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
