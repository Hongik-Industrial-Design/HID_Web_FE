import axios from 'axios';
import { ENV } from './env';

export const HWISO_API = axios.create({
  baseURL: ENV.API_BASE_URL_HWISO,
  headers: {
    'Content-Type': 'application/json',
  },
});

// HWISO_API.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('accessToken');

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const communityAPI = axios.create({
  baseURL: ENV.API_BASE_URL_JUNBO,
  headers: {
    'Content-Type': 'application/json',
  },
});
