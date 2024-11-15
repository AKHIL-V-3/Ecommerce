import axios, { AxiosInstance} from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Your base URL
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default api;