import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // Refresh page to update auth state
  };

  return (
    <nav style={styles.navbar}>
      <h1>E-Commerce App</h1>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
            <li>
              <button onClick={handleLogout} style={styles.logoutButton}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/auth">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;
