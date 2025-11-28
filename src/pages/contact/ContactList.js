import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Mock fetch all contact messages
    setContacts([
      { id: 1, name: "Alice", email: "alice@example.com", message: "Hello" },
      { id: 2, name: "Bob", email: "bob@example.com", message: "Need help" },
    ]);
  }, []);

  return (
    <Container className="mt-5">
      <h2>Contact Messages</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ContactList;
