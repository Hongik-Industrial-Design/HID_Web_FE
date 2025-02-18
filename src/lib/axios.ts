import axios from 'axios';
import { ENV } from './env';

const api = axios.create({
  baseURL: ENV.API_BASE_URL_HWISO,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
