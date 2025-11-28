import axios from "axios";

const API_URL = "http://localhost:8080/api/contact";

class ContactService {
  sendMessage(data, token) {
    return axios.post(API_URL, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getMessages(token) {
    return axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}

export default new ContactService();
