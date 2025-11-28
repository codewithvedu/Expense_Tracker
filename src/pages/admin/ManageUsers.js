import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock fetch users
    setUsers([
      { id: 1, username: "Alice", salary: 5000, status: "Active" },
      { id: 2, username: "Bob", salary: 4000, status: "Inactive" },
      { id: 3, username: "Charlie", salary: 6000, status: "Active" },
    ]);
  }, []);

  const handleToggleStatus = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u));
  };

  return (
    <Container className="mt-5">
      <h2>Manage Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>${user.salary}</td>
              <td>{user.status}</td>
              <td>
                <Button 
                  variant={user.status === "Active" ? "danger" : "success"} 
                  size="sm" 
                  onClick={() => handleToggleStatus(user.id)}
                >
                  {user.status === "Active" ? "Deactivate" : "Activate"}
                </Button>
                <Link 
                  to={`/admin/user-expenses/${user.id}`} 
                  className="btn btn-primary btn-sm ms-2"
                >
                  View Expenses
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageUsers;
