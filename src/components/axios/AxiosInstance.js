/** @format */

import axios from 'axios';

// const baseURL = '';

// Create a new axios instance
const AxiosInstance = axios.create({
  // baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

// Axios Interceptors => https://axios-http.com/docs/interceptors
AxiosInstance.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

export default AxiosInstance;
