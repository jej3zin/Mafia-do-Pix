// server/src/services/user.service.js
import { UserModel } from '../models/user.model.js';

export const getPublicProfile = (username) =>
  UserModel.findPublicProfile(username);
export const getUserById = (id) => UserModel.findById(id);
export const createUser = (userData) => UserModel.create(userData);
export const getUserByUsername = (username) => UserModel.findOne({ username });
export const getUserByEmail = (email) => UserModel.findOne({ email });
export const updateUser = (id, updateData) =>
  UserModel.findByIdAndUpdate(id, updateData, { new: true });
export const deleteUser = (id) => UserModel.findByIdAndDelete(id);
