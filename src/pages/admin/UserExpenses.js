import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UserExpenses = () => {
  const { id } = useParams();
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Mock fetch expenses for user by ID
    setExpenses([
      { id: 1, title: "Food", amount: 50, category: "Food" },
      { id: 2, title: "Transport", amount: 20, category: "Travel" },
    ]);
  }, [id]);

  return (
    <Container className="mt-5">
      <h2>User {id} Expenses</h2>
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

export default UserExpenses;
