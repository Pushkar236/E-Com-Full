import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { X, Eye, EyeOff } from "lucide-react";
import "../styles/auth.css";

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
        
        <div class="my-4 flex items-center gap-4">
              <hr class="w-full border-gray-800" />
              <p class="text-sm text-gray-800 text-center">or</p>
              <hr class="w-full border-gray-800" />
        </div>
        
        <button type="button" class="w-full flex items-center justify-center gap-4 py-3 px-6 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none" onClick={auth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="inline" viewBox="0 0 512 512">
                <path fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00" />
                <path fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58" />
                <path fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52" />
                <path fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6" />
                <path fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48" />
                <path fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132" />
              </svg>
              Continue with google
            </button>
        <div className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
