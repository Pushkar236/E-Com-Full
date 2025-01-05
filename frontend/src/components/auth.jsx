import api from "../api"; // Axios instance
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/register";

    try {
      const res = await api.post(endpoint, formData);
      console.log(res);
      if (res && res.data && res.data.token) {
        alert("Authentication Successful!");
        navigate("/protected");
      } else {
        throw new Error("Invalid response from server");
      }
      alert("Authentication Successful!");
      navigate("/protected");
    } catch (err) {
      console.error(err.response.data.message);
      alert(err.response.data.message || "Something went wrong.");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Register" : "Switch to Login"}
      </button>
    </div>
  );
};

export default Auth;
