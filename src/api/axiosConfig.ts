import axios from "axios";

// Create axios instance
const base_api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

// Add Authorization header for all requests
base_api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default base_api;
