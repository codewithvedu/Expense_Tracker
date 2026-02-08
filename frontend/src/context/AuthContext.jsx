import { createContext, useState, useEffect } from "react";
import api from "../api/axiosConfig";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  const safeJSONParse = (value) => {
    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return null;
    }
  };

  // Add token automatically
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Load user on refresh
  useEffect(() => {
    //const token = localStorage.getItem("token");
    const savedUser = safeJSONParse(localStorage.getItem("user"));

    if ( savedUser) {
      setUser(savedUser); // full object restored
    }

    setLoading(false);
  }, []);

  // LOGIN
  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });

    const loggedUser = {
      username: res.data.username,
      userId: res.data.id,
      role: res.data.role,
      message: res.data.message
    };

    
    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("username", loggedUser.username);// FIXED
    localStorage.setItem("userId", loggedUser.userId);
    localStorage.setItem("role", loggedUser.role);
    localStorage.setItem("message", res.data.message);

    setUser(loggedUser);

    return loggedUser;
  };

  // LOGOUT
  const logout = () => {
    
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
        localStorage.removeItem("message");

    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
