import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Admin Dashboard</h2>
          <Row className="mt-3">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Total Users</Card.Title>
                  <Card.Text>50</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Total Expenses</Card.Title>
                  <Card.Text>200</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Active Users</Card.Title>
                  <Card.Text>48</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
