import axios from 'axios';
import appProperties from './app.properties';

const api = axios.create({
  baseURL: appProperties.apiBase, // Replace with your API base URL
  timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token'); // Replace with your token logic
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized, redirecting to login...');
      // Redirect to login page or handle error
    }
    return Promise.reject(error);
  }
);


  export default api