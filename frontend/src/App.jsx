import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./context/AuthContext.jsx";

import NavbarPublic from "./components/NavbarPublic.jsx";
import NavbarUser from "./components/NavbarUser.jsx";
import NavbarAdmin from "./components/NavbarAdmin.jsx";
import Footer from "./components/Footer.jsx";

// Public Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

// User Pages
import UserDashboard from "./pages/user/UserDashboard.jsx";
import IncomePage from "./pages/user/IncomePage.jsx";
import ExpensePage from "./pages/user/ExpensePage.jsx";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

// Route Protection
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";

export default function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  return (
    <BrowserRouter>
      {/* FIXED NAVBAR LOGIC */}
      {!user ? (
        <NavbarPublic />
      ) : user.role === "USER" ? (
        <NavbarUser />
      ) : user.role === "ADMIN" ? (
        <NavbarAdmin />
      ) : null}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER Protected Pages */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/income"
          element={
            <ProtectedRoute>
              <IncomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expense"
          element={
            <ProtectedRoute>
              <ExpensePage />
            </ProtectedRoute>
          }
        />

        {/* ADMIN Protected Pages */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
