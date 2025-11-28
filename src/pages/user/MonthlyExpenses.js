import React, { useState } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";

const MonthlyExpenses = () => {
  const [month, setMonth] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleFilter = () => {
    // Mock filtered expenses by month
    setExpenses([
      { id: 1, title: "Food", amount: 50, category: "Food" },
      { id: 2, title: "Transport", amount: 20, category: "Travel" },
    ]);
  };

  return (
    <Container className="mt-5">
      <h2>Monthly Expenses</h2>
      <Form className="mb-3" onSubmit={e => { e.preventDefault(); handleFilter(); }}>
        <Form.Group className="mb-3" controlId="month">
          <Form.Label>Select Month</Form.Label>
          <Form.Control 
            type="month" 
            value={month} 
            onChange={e => setMonth(e.target.value)} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit">Filter</Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp.id}>
              <td>{exp.title}</td>
              <td>${exp.amount}</td>
              <td>{exp.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MonthlyExpenses;
