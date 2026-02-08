 
import { useEffect, useState } from "react";
import { Container, Card, CardGroup, Row, Col } from "react-bootstrap";
import api from "../../api/axiosConfig";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function UserDashboard() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);

  const userId = localStorage.getItem("userId");

  const savings = incomeTotal - expenseTotal;

  useEffect(() => {
    fetchTotals();
  }, []);

  const fetchTotals = async () => {
    try {
      const incomeRes = await api.get(`/auth/income/total/${userId}`);
      const expenseRes = await api.get(`/auth/expense/total/${userId}`);

      setIncomeTotal(incomeRes.data);
      setExpenseTotal(expenseRes.data);
    } catch (err) {
      console.log("Error loading totals", err);
    }
  };

  // Chart Data
  const pieData = [
    { name: "Income", value: incomeTotal },
    { name: "Expenses", value: expenseTotal },
    { name: "Savings", value: savings },
  ];

  const barData = [
    {
      name: "Finance Summary",
      Income: incomeTotal,
      Expenses: expenseTotal,
      Savings: savings,
    },
  ];

  const COLORS = ["#28a745", "#dc3545", "#17a2b8"];

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Dashboard</h2>

      {/* Summary Cards */}
      <CardGroup>
        <Card bg="success" text="white" className="m-2">
          <Card.Body>
            <Card.Title>Total Income</Card.Title>
            <Card.Text>₹ {incomeTotal}</Card.Text>
          </Card.Body>
        </Card>

        <Card bg="danger" text="white" className="m-2">
          <Card.Body>
            <Card.Title>Total Expense</Card.Title>
            <Card.Text>₹ {expenseTotal}</Card.Text>
          </Card.Body>
        </Card>

        <Card bg="info" text="white" className="m-2">
          <Card.Body>
            <Card.Title>Savings</Card.Title>
            <Card.Text>₹ {savings}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      {/* Charts */}
      <Row className="mt-5">
        {/* PIE CHART */}
        <Col md={6}>
          <h4 className="text-center mb-3">Income vs Expense vs Savings</h4>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Col>

        {/* BAR CHART */}
        <Col md={6}>
          <h4 className="text-center mb-3">Financial Breakdown</h4>
          <BarChart width={450} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="Income" fill="#28a745" />
            <Bar dataKey="Expenses" fill="#dc3545" />
            <Bar dataKey="Savings" fill="#17a2b8" />
          </BarChart>
        </Col>
      </Row>
    </Container>
  );
}

