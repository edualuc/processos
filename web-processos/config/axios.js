import axios from 'axios'

const api = axios.create({
  baseURL: process.env.api ||'http://localhost:8084/',
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  error => Promise.reject(error),
);

export default api;