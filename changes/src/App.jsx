import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./components/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/protected"
          element={
            isAuthenticated ? <ProtectedRoute /> : <Navigate to="/auth" />
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </Router>
  );
}

export default App;
