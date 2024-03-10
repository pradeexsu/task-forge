import axios from 'axios';
import { TOKEN } from './const';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URI}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosAuthInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URI}/auth/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(sessionStorage.getItem(TOKEN));
    const { token } = sessionStorage;
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuthInstance.interceptors.response.use(
  (config) => {
    const { token } = config.headers;
    if (token) {
      sessionStorage.setItem(TOKEN, token);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
