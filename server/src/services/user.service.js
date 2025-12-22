import { UserModel } from '../models/User.model.js';

export const getPublicProfile = (username) =>
  UserModel.findPublicProfile(username);
