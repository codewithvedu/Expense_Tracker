import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, role });
    role === "ADMIN" ? navigate("/admin/dashboard") : navigate("/user/dashboard");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">Login</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Select value={role} onChange={e => setRole(e.target.value)}>
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
