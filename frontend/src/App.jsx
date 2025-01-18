import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./components/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage/>} />

          {/* Protected Routes */}
          <Route
            path="/protected"
            element={
              isAuthenticated ? <ProtectedRoute /> : <Navigate to="/auth" />
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
