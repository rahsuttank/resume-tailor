import axios from 'axios';
import { API_BASE_URL } from '../config';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export async function loginUser(email, password) {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
}

export async function registerUser(email, password) {
  const res = await api.post("/auth/register", { email, password });
  return res.data;
}

export default api;