import { pool } from '../config/db.js';

export const FollowModel = {
  follow: (followerId, followingId) =>
    pool.query(
      `INSERT INTO follows (follower_id, following_id)
       VALUES ($1,$2)
       ON CONFLICT DO NOTHING`,
      [followerId, followingId]
    ),

  unfollow: (followerId, followingId) =>
    pool.query(
      `DELETE FROM follows
       WHERE follower_id=$1 AND following_id=$2`,
      [followerId, followingId]
    ),
};
