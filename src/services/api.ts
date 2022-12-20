import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://swapi.dev/api/';
const REQUEST_TIMEOUT = 35000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
