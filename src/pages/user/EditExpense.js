import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditExpense = () => {
  const { id } = useParams();
  const [expense, setExpense] = useState({ title: "", amount: "", category: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Mock fetch expense by ID
    setExpense({ title: `Expense ${id}`, amount: 100, category: "Food" });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Expense updated: ${expense.title} - $${expense.amount}`);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Edit Expense</Card.Title>
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={expense.title} 
                    onChange={e => setExpense({ ...expense, title: e.target.value })} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control 
                    type="number" 
                    value={expense.amount} 
                    onChange={e => setExpense({ ...expense, amount: e.target.value })} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={expense.category} 
                    onChange={e => setExpense({ ...expense, category: e.target.value })} 
                    required 
                  />
                </Form.Group>
                <Button variant="warning" type="submit">Update Expense</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditExpense;
