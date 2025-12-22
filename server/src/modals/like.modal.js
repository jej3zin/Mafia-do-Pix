import { pool } from '../config/db.js';

export const LikeModel = {
  like: (userId, postId) =>
    pool.query(
      `INSERT INTO likes (user_id, post_id)
       VALUES ($1,$2)
       ON CONFLICT DO NOTHING`,
      [userId, postId]
    ),

  unlike: (userId, postId) =>
    pool.query(
      `DELETE FROM likes
       WHERE user_id=$1 AND post_id=$2`,
      [userId, postId]
    ),
};
