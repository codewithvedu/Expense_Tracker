import api from "./axiosConfig";

export const getUserById = (userId) =>
  api.get(`/user/${userId}`);

export const updateUser = (userId, data) =>
  api.put(`/user/update/${userId}`, data);

export const deactivateUser = (userId) =>
  api.put(`/user/deactivate/${userId}`);
