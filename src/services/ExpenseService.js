import axios from "axios";

const API_URL = "http://localhost:8080/api/expenses";

class ExpenseService {
  addExpense(data, token) {
    return axios.post(API_URL, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  updateExpense(expenseId, data, token) {
    return axios.put(`${API_URL}/${expenseId}`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  deleteExpense(expenseId, token) {
    return axios.delete(`${API_URL}/${expenseId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getUserExpenses(userId, token) {
    return axios.get(`${API_URL}/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getMonthlyExpenses(userId, month, year, token) {
    return axios.get(`${API_URL}/user/${userId}/month/${month}/year/${year}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

export default new ExpenseService();
