import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import api from "../api";

const ProtectedRoute = () => {
  const [isValid, setIsValid] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch("http://localhost:5000/verifyToken", {
          method: "POST",
          credentials: "include",
        });
        if (response.ok) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (err) {
        console.log("Found an error while verifying token", err);
      }
    };

    verifyToken();

    return;
  }, []);

  return (
    <div>
      <h2>Protected Route</h2>
      {isValid ? (
        <div>
          <p>Welcome!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProtectedRoute;
