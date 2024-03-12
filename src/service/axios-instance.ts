import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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

axiosAuthInstance.interceptors.request.use(
  (config) => {
    config.headers['x-request-id'] = uuidv4();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const { userToken } = sessionStorage;

    config.headers['x-request-id'] = uuidv4();
    if (userToken) {
      config.headers['x-auth-token'] = userToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuthInstance.interceptors.response.use(
  (config) => {
    const userToken = config.headers['x-auth-token'];
    if (userToken) {
      sessionStorage.setItem('userToken', userToken);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
