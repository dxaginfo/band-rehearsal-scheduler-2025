import axios from 'axios';
import { setupInterceptors } from './axiosConfig';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Setup request/response interceptors
setupInterceptors(api);

const register = (userData: any) => {
  return api.post('/auth/register', userData);
};

const login = (credentials: { email: string; password: string }) => {
  return api.post('/auth/login', credentials);
};

const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  return Promise.resolve();
};

const refreshToken = () => {
  const refreshToken = localStorage.getItem('refreshToken');
  return api.post('/auth/refresh', { refreshToken });
};

const getCurrentUser = () => {
  return api.get('/users/me');
};

const authService = {
  register,
  login,
  logout,
  refreshToken,
  getCurrentUser,
};

export default authService;