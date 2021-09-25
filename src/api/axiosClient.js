import axios from 'axios';
import queryString from 'query-string';
import { CookiesStorage } from 'shared/config/cookie';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
      localStorage.removeItem('access_token');
      window.location = '/login';
    } else {
      throw error;
    }
  },
);

axiosClient.interceptors.request.use(async (config) => {
  const token = CookiesStorage.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosClient;
