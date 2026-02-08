import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import api from "../../api/axiosConfig";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await api.get("/auth/admin/users"); 
      setUsers(res.data);
    } catch (err) {
      console.log("Error loading users", err);
    }
  };

  const toggleUserStatus = async (id) => {
    try {
      await api.put(`/auth/admin/user/${id}/toggle`);
      loadUsers();
    } catch (err) {
      console.log("Error updating user", err);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, index) => (
            <tr key={u.id}>
              <td>{index + 1}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                {u.active ? (
                  <span className="text-success fw-bold">Active</span>
                ) : (
                  <span className="text-danger fw-bold">Inactive</span>
                )}
              </td>
              <td>
                <Button
                  variant={u.active ? "danger" : "success"}
                  onClick={() => toggleUserStatus(u.id)}
                >
                  {u.active ? "Deactivate" : "Activate"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
