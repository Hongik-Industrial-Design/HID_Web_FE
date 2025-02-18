import axios from 'axios';
import { ENV } from './env';

export const exhibitionAPI = axios.create({
  baseURL: ENV.API_BASE_URL_HWISO,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const CommunityFacultyAPI = axios.create({
  baseURL: ENV.API_BASE_URL_JUNBO,
  headers: {
    'Content-Type': 'application/json',
  },
});
