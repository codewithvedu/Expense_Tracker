import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

class UserService {
  updateSalary(userId, data, token) {
    return axios.put(`${API_URL}/${userId}/salary`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

export default new UserService();
