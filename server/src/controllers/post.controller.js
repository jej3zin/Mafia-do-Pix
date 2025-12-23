// server/src/controllers/post.controller.js
import { PostModel } from '../models/post.model.js';

export const createPost = async (req, res) => {
  const post = await PostModel.create(req.userId, req.body.content);
  res.status(201).json(post.rows[0]);
};

export const deletePost = async (req, res) => {
  await PostModel.delete(req.params.id, req.userId);
  res.sendStatus(204);
};
