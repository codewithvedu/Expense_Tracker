import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../utils/auth";

const AppNavbar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && user.role === "USER" && (
              <>
                <Nav.Link as={Link} to="/user/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/user/expenses">Expenses</Nav.Link>
              </>
            )}
            {user && user.role === "ADMIN" && (
              <>
                <Nav.Link as={Link} to="/admin/dashboard">Admin Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/admin/manage-users">Manage Users</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/contact-us">Contact</Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
