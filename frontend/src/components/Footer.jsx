import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container fluid>
        <div className="footer-content">
          <Row className="footer-main py-5">
            <Col lg={3} md={6} sm={12} className="mb-4">
              <h5 className="footer-title">Expense Tracker</h5>
              <p className="footer-description">
                Your trusted companion for smart financial management.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" title="Facebook">
                  f
                </a>
                <a href="#" className="social-link" title="Twitter">
                  𝕏
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  in
                </a>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12} className="mb-4">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={6} sm={12} className="mb-4">
              <h5 className="footer-title">Features</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">Income Tracking</a>
                </li>
                <li>
                  <a href="#">Expense Management</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
                <li>
                  <a href="#">Reports</a>
                </li>
              </ul>
            </Col>

            <Col lg={3} md={6} sm={12} className="mb-4">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-links">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="/contact">Get Help</a>
                </li>
              </ul>
            </Col>
          </Row>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Expense Tracker. All Rights Reserved.</p>
            <p className="footer-tagline">Made with 💙 for smarter finances</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
