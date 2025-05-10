import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Base API URL

// Set up axios instance with auth token
const api = axios.create({
  baseURL: API_URL,
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.accessToken) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Account related functions
export const getAccounts = async () => {
  try {
    const response = await api.get('/accounts');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch accounts';
  }
};

// Transaction related functions
export const transferFunds = async (transferData) => {
  try {
    const response = await api.post('/transactions/transfer', transferData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Transfer failed';
  }
};

// User related functions
export const updateProfile = async (userData) => {
  try {
    const response = await api.put('/users/profile', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Profile update failed';
  }
};

// Export all functions
export default {
  getAccounts,
  transferFunds,
  updateProfile,
};