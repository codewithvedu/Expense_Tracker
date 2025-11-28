import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import AddExpense from "./pages/user/AddExpense";
import EditExpense from "./pages/user/EditExpense";
import ExpenseList from "./pages/user/ExpenseList";
import MonthlyExpenses from "./pages/user/MonthlyExpenses";
import UpdateSalary from "./pages/user/UpdateSalary";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import UserExpenses from "./pages/admin/UserExpenses";

// Contact Pages
import ContactUs from "./pages/contact/ContactUs";
import ContactList from "./pages/contact/ContactList";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/add-expense" element={<AddExpense />} />
        <Route path="/user/edit-expense/:id" element={<EditExpense />} />
        <Route path="/user/expenses" element={<ExpenseList />} />
        <Route path="/user/monthly-expenses" element={<MonthlyExpenses />} />
        <Route path="/user/update-salary" element={<UpdateSalary />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/user-expenses/:id" element={<UserExpenses />} />

        {/* Contact */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact-list" element={<ContactList />} />
      </Routes>
    </Router>
  );
}

export default App;
