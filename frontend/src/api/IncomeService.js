import api from "./axiosConfig";

export const addIncome = (data) =>
  api.post("/income/add", data);

export const getUserIncomes = (userId) =>
  api.get(`/income/user/${userId}`);

export const updateIncome = (id, data) =>
  api.put(`/income/update/${id}`, data);

export const deleteIncome = (id) =>
  api.delete(`/income/delete/${id}`);
