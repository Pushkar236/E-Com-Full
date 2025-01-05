import axios from "axios";

// Base Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000", // Backend server URL
  withCredentials: true,
});

export default api;
