import axios from 'axios';

const request = axios.create({
  baseURL: '/',
  timeout: 1000 * 10,
});

request.interceptors.request.use(config => config);

request.interceptors.response.use(response => response, console.error);

export default request;
