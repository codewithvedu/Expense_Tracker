// import { Container } from "react-bootstrap";

// export default function About() {
//   return (
//     <Container className="mt-5">
//       <h2>About Us</h2>
//       <p className="mt-3">
//         Expense Tracker is a simple and efficient way to manage your daily
//         finances.  
//         Users can track incomes, expenses, and view their balance anytime.
//       </p>
//     </Container>
//   );
// }

import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function About() {
  return (
    <div>
      
      <div className="bg-primary text-white text-center py-5">
        <h1>About Expense Tracking System</h1>
        <p className="lead">
          Fast • Reliable • Accurate — Track Your Expenses Anytime, Anywhere
        </p>
      </div>

      {/* Main Content */}
      <Container className="my-5">
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src="/src/assets/images/aboutus.jpg"
              alt="Bus Travel"
              fluid
              rounded
              className="shadow-sm"
              height={50}
            />
          </Col>
          <Col md={6}>
            <h2>Who We Are</h2>
            <p>
              The <strong>Expense Tracker</strong> is a simple and smart tool designed to help users manage their finances with ease. It allows you to record income, track expenses, and understand spending habits through clear dashboards and insights. Our aim is to make financial management effortless, organized, and accessible for everyone.
            </p>
            <p>
              Our mission is to empower individuals to take control of their finances by providing a simple, intuitive, and reliable platform for tracking income and expenses. We aim to help users build smarter financial habits, stay organized, and make informed decisions with confidence. Through clean design, real-time insights, and secure technology, we strive to make financial management effortless and accessible for everyone.
            </p>
            <p>To build a fast, secure, and reliable platform, we used React for the frontend, Spring Boot for the backend, and MySQL for storing all financial data efficiently.</p>
          </Col>
        </Row>

        {/* Core Values */}
        <Row className="text-center mb-5">
          <h2 className="mb-4">Our Core Values</h2>
          <Col md={4} sm={12} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Efficiency</Card.Title>
                <Card.Text>
                  Manage your finances effortlessly with a clean, user-friendly interface that lets you add income, record expenses, and view insights within seconds.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Security</Card.Title>
                <Card.Text>
                  Your financial data matters. We protect all your information using secure authentication and modern backend safeguards to ensure complete privacy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Support</Card.Title>
                <Card.Text>
                  We aim to provide a smooth and helpful experience. Whether it’s managing entries or understanding features, our support is always ready to guide you whenever you need it.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Our Team Section */}
        <Row className="text-center mb-5">
          <h2 className="mb-4">Meet Our Team</h2>

          <Col md={4} sm={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="/src/assets/images/Naushin.jpg"
                height={400}
                alt="Team Member 1"
              />
              <Card.Body>
                <Card.Title>Naushin Sayyad</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Software Developer
                </Card.Subtitle>
                <Card.Text>
                  Contributed to building core backend APIs and implemented important frontend functionalities.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.linkedin.com/in/naushin-sayyad-501906288/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "600", textDecoration: "none", color: "#0a66c2" }}
                  > LinkedIn Profile
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="/src/assets/images/Vedant.jpg"
                alt="Team Member 2"
                height={400}
              />
              <Card.Body>
                <Card.Title>Vedant Padave</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Software Developer
                </Card.Subtitle>
                <Card.Text>
                  Developed backend APIs, connected the frontend with the backend, and improved the UI/UX by designing clean layouts and enhancing user interaction.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.linkedin.com/in/vedant-padave-b98b33348"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "600", textDecoration: "none", color: "#0a66c2" }}
                  > LinkedIn Profile
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src="/src/assets/images/Pranav.jpg"
                alt="Team Member 3"
                height={400}
              />
              <Card.Body>
                <Card.Title>Pranav Munot</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Software Developer
                </Card.Subtitle>
                <Card.Text>
                  Focused on designing and developing the main frontend pages, ensuring responsiveness and usability.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.linkedin.com/in/pranavmunot42/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "600", textDecoration: "none", color: "#0a66c2" }}
                  > LinkedIn Profile
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Us */}
        <Row className="text-center">
          <h2 className="mb-4">Link With Us</h2>
          <Col md={4} sm={12} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>📍 Address</Card.Title>
                <Card.Text>
                  Eskon Avenue, Mumbai, Maharashtra, India
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>📧 Email</Card.Title>
                <Card.Text>expensometer@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>📞 Phone</Card.Title>
                <Card.Text>+91 98765 43210</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      
     
    </div>
  );
}
