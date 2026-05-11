import axios from "axios";

console.log("API Base URL:", process.env.REACT_APP_API_URL); // temporary debug line

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
  timeout: 30000,
});

export default api;