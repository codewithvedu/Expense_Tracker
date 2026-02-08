import api from "./axiosConfig";

export const registerUser = (user) =>
  api.post("/auth/register", user);

export const loginUser = (credentials) =>
  api.post("/auth/login", credentials);
