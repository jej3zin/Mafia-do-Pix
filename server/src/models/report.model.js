import { pool } from '../config/db.js';

export const ReportModel = {
  report: (userId, postId, reason) =>
    pool.query(
      `INSERT INTO reports (user_id, post_id, reason)
       VALUES ($1,$2,$3)`,
      [userId, postId, reason]
    ),
};
