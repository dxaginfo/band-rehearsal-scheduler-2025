import { AxiosInstance } from 'axios';
import authService from './authService';

export const setupInterceptors = (api: AxiosInstance) => {
  // Request interceptor for adding token
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor for handling token expiration
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If the error is due to an expired token
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        
        try {
          // Try to refresh the token
          const response = await authService.refreshToken();
          const { accessToken } = response.data;
          
          // Update token in localStorage
          localStorage.setItem('accessToken', accessToken);
          
          // Update token in the original request header
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
          
          // Retry the original request
          return api(originalRequest);
        } catch (refreshError) {
          // If refresh token fails, redirect to login
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
          return Promise.reject(refreshError);
        }
      }
      
      return Promise.reject(error);
    }
  );
};