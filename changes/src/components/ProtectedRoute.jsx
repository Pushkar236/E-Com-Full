import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const res = await api.put("/edit", { username: "UpdatedName" }); // Example protected call
        setUser(res.data);
      } catch (err) {
        console.error("Unauthorized or Token Expired", err);
        alert("Unauthorized access! Please log in.");
        localStorage.removeItem("token");
        navigate("/auth");
      }
    };
    fetchProtectedData();
  }, [navigate]);

  return (
    <div>
      <h2>Protected Route</h2>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProtectedRoute;
