import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.0.117:3000',
  timeout: 1000,
});
