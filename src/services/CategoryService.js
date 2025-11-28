import axios from "axios";

const API_URL = "http://localhost:8080/api/categories";

class CategoryService {
  getCategories(token) {
    return axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

export default new CategoryService();
