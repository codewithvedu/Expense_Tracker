import { Navbar, Nav, Container } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/NavbarPublic.css";

export default function NavbarPublic() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg" className="custom-navbar" data-bs-theme={isDarkMode ? "dark" : "light"}>
      <Container className="cont">
        <Navbar.Brand className="and" href="/">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo"
            className="nav-logo"
          />
          EXPENSOMETER
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="public-navbar" />

        <Navbar.Collapse id="public-navbar">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/" className="register-btn">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="register-btn">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="register-btn">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/login" className="register-btn">
              Login
            </Nav.Link>
            <Nav.Link href="/register" className="register-btn">
              Register
            </Nav.Link>

            {/* Theme Toggle Button */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
