import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { X, Eye, EyeOff } from "lucide-react";
import "./Auth.css";

function navigateUrl(url) {
  window.location.href = url;
}

const auth = async () => {
  const response = await fetch("http://localhost:5000/request", {
    method: "post",
  });
  const data = await response.json();
  console.log(data);
  navigateUrl(data.url);
};

const Auth = () => {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const endpoint = "/login";

  //   try {
  //     const res = await api.post(endpoint, formData);
  //     if (res && res.data && res.data.token) {
  //       localStorage.setItem("token", res.data.token);
  //       navigate("/protected");
  //     } else {
  //       throw new Error("Invalid response from server");
  //     }
  //   } catch (err) {
  //     console.error(err.response?.data?.message);
  //     alert(err.response?.data?.message || "Something went wrong.");
  //   }
  // };

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
    <div className="auth-container">
      <motion.div
        className="auth-modal"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <button className="close-button" onClick={() => navigate("/")}>
          <X size={18} />
        </button>

        <h1 className="auth-title">Sign in</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email or phone number</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="auth-input"
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="auth-input"
            />
          </div>

          <div className="form-group">
            <div className="password-header">
              <label>Password</label>
              <button
                type="button"
                className="show-hide-text"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="auth-input"
              />
              <button
                type="button"
                className="show-hide-icon"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
        <button type="button" onClick={() => auth()}>
          Sign In with Google
        </button>
        <div className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
