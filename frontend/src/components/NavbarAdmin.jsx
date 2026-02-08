
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import "../css/NavbarAdmin.css";

export default function NavbarAdmin() {
  const { logout } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchUserCount();
  }, []);

  const fetchUserCount = async () => {
    try {
      const res = await api.get("/auth/admin/users");
      setTotalUsers(res.data.length);
    } catch (err) {
      console.log("Error fetching user count:", err);
    }
  };

  return (
    <Navbar expand="lg" className="admin-navbar" data-bs-theme={isDarkMode ? "dark" : "light"}>
      <Container className="cont">
        <Navbar.Brand className="brand" href="/admin/dashboard">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo"
            className="nav-logo"
          />
          EXPENSOMETER
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="admin-navbar" />
        <Navbar.Collapse id="admin-navbar">
          <Nav className="me-auto nav-links">
            <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
          </Nav>

          <Nav className="align-items-center">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>

            <span className="user-count">Total Users: {totalUsers}</span>

            <Button className="logout-btn" onClick={logout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

