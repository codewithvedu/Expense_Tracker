import api from "./axiosConfig";

export const addExpense = (data) =>
  api.post("/expenses/add", data);

export const getUserExpenses = (userId) =>
  api.get(`/expenses/user/${userId}`);

export const updateExpense = (id, data) =>
  api.put(`/expenses/update/${id}`, data);

export const deleteExpense = (id) =>
  api.delete(`/expenses/delete/${id}`);
