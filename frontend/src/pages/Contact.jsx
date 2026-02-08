import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2>Contact Us</h2>
      <Form className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Type your message here"
          />
        </Form.Group>

        <Button variant="primary">Send Message</Button>
      </Form>
    </Container>
  );
}
