import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Mock fetch all expenses
    setExpenses([
      { id: 1, title: "Food", amount: 50, category: "Food" },
      { id: 2, title: "Transport", amount: 20, category: "Travel" },
      { id: 3, title: "Shopping", amount: 100, category: "Lifestyle" },
    ]);
  }, []);

  const handleDelete = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  return (
    <Container className="mt-5">
      <h2>All Expenses</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp.id}>
              <td>{exp.title}</td>
              <td>${exp.amount}</td>
              <td>{exp.category}</td>
              <td>
                <Link to={`/user/edit-expense/${exp.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(exp.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ExpenseList;
