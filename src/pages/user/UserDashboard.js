import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getCurrentUser } from "../../utils/auth";

const UserDashboard = () => {
  const user = getCurrentUser();

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Welcome, {user.username}</h2>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Salary</Card.Title>
              <Card.Text>${user.salary || 0}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Quick Links</Card.Title>
              <ul>
                <li>Add Expense</li>
                <li>View Expenses</li>
                <li>Monthly Expenses</li>
                <li>Update Salary</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
