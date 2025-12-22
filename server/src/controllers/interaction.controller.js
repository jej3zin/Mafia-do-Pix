import { FollowModel } from '../models/Follow.model.js';
import { LikeModel } from '../models/Like.model.js';
import { CommentModel } from '../models/Comment.model.js';
import { ReportModel } from '../models/Report.model.js';

export const followUser = async (req, res) => {
  await FollowModel.follow(req.userId, req.params.id);
  res.sendStatus(204);
};

export const unfollowUser = async (req, res) => {
  await FollowModel.unfollow(req.userId, req.params.id);
  res.sendStatus(204);
};

export const likePost = async (req, res) => {
  await LikeModel.like(req.userId, req.params.id);
  res.sendStatus(204);
};

export const unlikePost = async (req, res) => {
  await LikeModel.unlike(req.userId, req.params.id);
  res.sendStatus(204);
};

export const commentPost = async (req, res) => {
  const comment = await CommentModel.create(
    req.userId,
    req.params.id,
    req.body.content
  );
  res.status(201).json(comment.rows[0]);
};

export const reportPost = async (req, res) => {
  await ReportModel.report(req.userId, req.params.id, req.body.reason);
  res.sendStatus(204);
};
