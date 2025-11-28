import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { getCurrentUser, login } from "../../utils/auth";

const UpdateSalary = () => {
  const user = getCurrentUser();
  const [salary, setSalary] = useState(user.salary || 0);
  const [message, setMessage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    login({ ...user, salary });
    setMessage("Salary updated successfully!");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Update Salary</Card.Title>
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleUpdate}>
                <Form.Group className="mb-3">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control 
                    type="number" 
                    value={salary} 
                    onChange={e => setSalary(e.target.value)} 
                    required 
                  />
                </Form.Group>
                <Button variant="success" type="submit">Update</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateSalary;
