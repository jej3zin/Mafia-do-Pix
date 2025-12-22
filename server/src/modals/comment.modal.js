import { pool } from '../config/db.js';

export const CommentModel = {
  create: (userId, postId, content) =>
    pool.query(
      `INSERT INTO comments (user_id, post_id, content)
       VALUES ($1,$2,$3)
       RETURNING *`,
      [userId, postId, content]
    ),
};
