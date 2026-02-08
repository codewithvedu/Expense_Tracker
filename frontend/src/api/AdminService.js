import api from "./axiosConfig";

export const getAllUsers = () =>
  api.get("/admin/users");

export const getUserDetails = (id) =>
  api.get(`/admin/user/${id}`);

export const deactivateUserAdmin = (id) =>
  api.put(`/admin/user/deactivate/${id}`);
