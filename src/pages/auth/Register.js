import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Registered: ${username} with salary ${salary}`);
    navigate("/login");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">Register</Card.Title>
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
                  <Form.Label>Salary</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Enter salary" 
                    value={salary} 
                    onChange={e => setSalary(e.target.value)} 
                    required 
                  />
                </Form.Group>
                <Button variant="success" type="submit">Register</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
