import { useState, useEffect } from "react";
import { Container, Button, Table } from "react-bootstrap";
import AddModal from "./AddModal";
import api from "../../api/axiosConfig";

export default function IncomePage() {
  const [incomes, setIncomes] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    loadIncomes();
  }, []);

  const loadIncomes = async () => {
    try {
      const res = await api.get(`/auth/income/user/${userId}`);
      setIncomes(res.data);
    } catch (err) {
      console.log("Error loading incomes", err);
    }
  };

  const handleAddIncome = async (e) => {
    e.preventDefault();

    const data = {
      source: e.target.source.value,   // from modal (fieldName="source")
      amount: parseFloat(e.target.amount.value),
      userId: userId,
    };

    try {
      await api.post("/auth/income/add", data);
      setShowAdd(false);
      loadIncomes();
    } catch (err) {
      console.log("Error adding income", err);
    }
  };

  const deleteIncome = async (id) => {
    try {
      await api.delete(`/auth/income/delete/${id}`);
      loadIncomes();
    } catch (err) {
      console.log("Error deleting income", err);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-3">Income</h2>

      <Button onClick={() => setShowAdd(true)} className="mb-3">
        Add Income
      </Button>

      <AddModal
        show={showAdd}
        handleClose={() => setShowAdd(false)}
        title="Income"
        fieldLabel="Income Source"
        fieldName="source"        // IMPORTANT
        onSubmit={handleAddIncome}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Source</th>
            <th>Amount (₹)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((inc, index) => (
            <tr key={inc.id}>
              <td>{index + 1}</td>
              <td>{inc.source}</td>
              <td>{inc.amount}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteIncome(inc.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
