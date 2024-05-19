import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Error submitting form:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
