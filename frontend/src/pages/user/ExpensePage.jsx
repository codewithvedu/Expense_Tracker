import { useState, useEffect } from "react";
import { Container, Button, Table } from "react-bootstrap";
import AddModal from "./AddModal";
import api from "../../api/axiosConfig";

export default function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const res = await api.get(`/auth/expenses/user/${userId}`);
      setExpenses(res.data);
    } catch (err) {
      console.log("Error loading expenses", err);
    }
  };

  const handleAddExpense = async (e) => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,        // FROM MODAL
      amount: parseFloat(e.target.amount.value),
      userId: userId
    };

    try {
      await api.post("/auth/expense/add", data);
      setShowAdd(false);
      loadExpenses();
    } catch (err) {
      console.log("Error adding expense", err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await api.delete(`/auth/expense/delete/${id}`);
      loadExpenses();
    } catch (err) {
      console.log("Error deleting expense", err);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-3">Expenses</h2>

      <Button onClick={() => setShowAdd(true)} className="mb-3">
        Add Expense
      </Button>

      <AddModal
        show={showAdd}
        handleClose={() => setShowAdd(false)}
        title="Expense"
        fieldLabel="Expense Title"
        fieldName="title"               // IMPORTANT
        onSubmit={handleAddExpense}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Amount (₹)</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((exp, index) => (
            <tr key={exp.id}>
              <td>{index + 1}</td>
              <td>{exp.title}</td>
              <td>{exp.amount}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteExpense(exp.id)}
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
