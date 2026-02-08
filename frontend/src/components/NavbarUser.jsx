import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import "../css/NavbarUser.css";

export default function NavbarUser() {
  const { user, logout } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className="user-navbar" data-bs-theme={isDarkMode ? "dark" : "light"}>
      <Container className="con">
        <Navbar.Brand className="brand" href="/dashboard">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo"
            className="nav-logo"
          />
          EXPENSOMETER
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="user-navbar" />
        <Navbar.Collapse id="user-navbar">
          <Nav className="me-auto nav-links">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/income">Income</Nav.Link>
            <Nav.Link href="/expense">Expense</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
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

            <span className="user-greet">Hi, {user?.username}</span>

            <Button className="logout-btn" onClick={logout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
