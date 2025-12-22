import { UserModel } from '../models/user.model.js';

export const getPublicProfile = (username) =>
  UserModel.findPublicProfile(username);
