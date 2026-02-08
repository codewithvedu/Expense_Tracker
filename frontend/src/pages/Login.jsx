import { useState, useContext } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await login(email, password);
    setError(response.message);

    if (response.role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }

  }  catch (err) {
      console.log(err);

      if (err.response && err.response.data) {
        // Backend returned error
        setError(err.response.data.message);
      } else {
        setError("Server not responding");
      }
    }
};

  return (
    <Container className="mt-5" style={{ maxWidth: "450px" }}>
      <h2 className="text-center">Login</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleLogin} className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>

      <p className="mt-3 text-center">
        Don’t have an account? <a href="/register">Register</a>
      </p>
    </Container>
  );
}
