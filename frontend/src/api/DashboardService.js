import api from "./axiosConfig";

export const getTotalIncome = (userId) =>
  api.get(`/dashboard/total-income/${userId}`);

export const getTotalExpense = (userId) =>
  api.get(`/dashboard/total-expense/${userId}`);

export const getSavings = (userId) =>
  api.get(`/dashboard/savings/${userId}`);
