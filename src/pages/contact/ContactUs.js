import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("Your message has been submitted!");
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              {success && <Alert variant="success">{success}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    value={contact.name} 
                    onChange={e => setContact({ ...contact, name: e.target.value })} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    value={contact.email} 
                    onChange={e => setContact({ ...contact, email: e.target.value })} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    value={contact.message} 
                    onChange={e => setContact({ ...contact, message: e.target.value })} 
                    required 
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Send</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
