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

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/auth" element={<Auth />} />
        <Route
          path="/protected"
          element={
            isAuthenticated ? <ProtectedRoute /> : <Navigate to="/auth" />
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} /> */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
