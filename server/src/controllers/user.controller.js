// server/src/controllers/user.controller.js
import UserModel from '../models/user.model.js';

export const getByUsername = async (req, res) => {
  const result = await UserModel.findByUsername(req.params.username);

  if (!result.rows.length) return res.sendStatus(404);

  const { id, name, username, avatar_url, banner_url } = result.rows[0];

  res.json({ id, name, username, avatar_url, banner_url });
};
