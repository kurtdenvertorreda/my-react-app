// src/services/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => axios.get(`${API_URL}/users`);

export const createUser = (userData) => axios.post(`${API_URL}/users`, userData);

export const updateUser = (id, userData) => axios.put(`${API_URL}/users/${id}`, userData);

export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Add interceptors for logging
axios.interceptors.response.use(
  response => {
    console.log(`${response.config.method.toUpperCase()} ${response.config.url} - Status: ${response.status}`);
    return response;
  },
  error => {
    console.error(`${error.config.method.toUpperCase()} ${error.config.url} - Status: ${error.response?.status}, Message: ${error.message}`);
    return Promise.reject(error);
  }
);