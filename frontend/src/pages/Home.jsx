import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/Home.css";

export default function Home() {
  // Sample statistics data
  const stats = [
    { label: "Total Users", value: "5,230+", icon: "👥" },
    { label: "Transactions Tracked", value: "45,890+", icon: "📊" },
    { label: "Money Managed", value: "$2.5M+", icon: "💰" },
  ];

  // Sample features data
  const features = [
    {
      title: "Easy Income Tracking",
      description: "Record your income from various sources with just a few clicks",
      icon: "💵",
      color: "success",
    },
    {
      title: "Smart Expense Management",
      description: "Categorize and monitor your expenses in real-time",
      icon: "📉",
      color: "danger",
    },
    {
      title: "Visual Analytics",
      description: "Get insights into your spending patterns with beautiful charts",
      icon: "📈",
      color: "info",
    },
    {
      title: "Secure & Private",
      description: "Your financial data is encrypted and stored securely",
      icon: "🔒",
      color: "warning",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="hero-content">
          <h1 className="hero-title">Welcome to Expense Tracker</h1>
          <p className="hero-subtitle">
            Take control of your finances. Track incomes, manage expenses, and build better financial habits.
          </p>
          <div className="hero-buttons mt-4">
            <Button variant="primary" href="/login" className="btn-custom btn-lg me-3">
              Login
            </Button>
            <Button variant="success" href="/register" className="btn-custom btn-lg">
              Register Now
            </Button>
          </div>
        </Container>
      </div>

      {/* Statistics Section */}
      <section className="stats-section">
        <Container>
          <Row className="text-center">
            {stats.map((stat, index) => (
              <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                <div className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <div className="section-header text-center mb-5">
            <h2>Why Choose Expense Tracker?</h2>
            <p>Everything you need to manage your finances efficiently</p>
          </div>

          <Row>
            {features.map((feature, index) => (
              <Col md={6} lg={3} sm={12} key={index} className="mb-4">
                <Card className="feature-card h-100 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="feature-icon">{feature.icon}</div>
                    <Card.Title className="mt-3">{feature.title}</Card.Title>
                    <Card.Text className="feature-description">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <Container>
          <div className="section-header text-center mb-5">
            <h2>How It Works</h2>
          </div>

          <Row className="align-items-center">
            <Col md={6} xs={12} className="mb-4 mb-md-0">
              <div className="steps">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5>Sign Up</h5>
                    <p>Create your free account in seconds</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5>Add Transactions</h5>
                    <p>Record your income and expenses</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5>Track & Analyze</h5>
                    <p>View analytics and manage your budget</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h5>Achieve Goals</h5>
                    <p>Build better financial habits</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} xs={12} className="text-center">
              <div className="how-it-works-image">
                <div className="placeholder-box">
                  📱 Dashboard Preview
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container className="text-center">
          <h2 className="cta-title">Ready to Manage Your Finances?</h2>
          <p className="cta-subtitle">
            Join thousands of users who trust Expense Tracker
          </p>
          <Button
            variant="light"
            href="/register"
            className="btn-cta"
            size="lg"
          >
            Get Started For Free
          </Button>
        </Container>
      </section>
    </div>
  );
}
