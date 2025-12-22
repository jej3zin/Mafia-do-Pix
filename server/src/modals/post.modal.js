import { pool } from '../config/db.js';

export const PostModel = {
  create: (userId, content) =>
    pool.query(
      `INSERT INTO posts (user_id, content)
       VALUES ($1, $2)
       RETURNING *`,
      [userId, content]
    ),

  delete: (postId, userId) =>
    pool.query(
      `DELETE FROM posts
       WHERE id = $1 AND user_id = $2`,
      [postId, userId]
    ),

  findByUser: (userId) =>
    pool.query(
      `SELECT * FROM posts
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [userId]
    ),
};
