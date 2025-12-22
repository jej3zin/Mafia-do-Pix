import { pool } from '../config/db.js';

export const getTimeline = (userId, filter) => {
  if (filter === 'following') {
    return pool.query(
      `
      SELECT posts.*
      FROM posts
      JOIN follows ON follows.following_id = posts.user_id
      WHERE follows.follower_id = $1
      ORDER BY posts.created_at DESC
    `,
      [userId]
    );
  }

  return pool.query(`
    SELECT posts.*, COUNT(likes.post_id) AS likes
    FROM posts
    LEFT JOIN likes ON likes.post_id = posts.id
    GROUP BY posts.id
    ORDER BY likes DESC
  `);
};
