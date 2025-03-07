import axios from 'axios';
import { ENV } from './env';

export const HWISO_API = axios.create({
  baseURL: ENV.API_BASE_URL_HWISO,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const communityAPI = axios.create({
  baseURL: ENV.API_BASE_URL_JUNBO,
  headers: {
    'Content-Type': 'application/json',
  },
});
