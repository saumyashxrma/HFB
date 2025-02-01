import axios from "axios";

const API_URL = "https://your-backend-api.com/api/auth"; // Change to your backend URL

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const forgotPassword = async (email) => {
  return await axios.post(`${API_URL}/forgot-password`, { email });
};
