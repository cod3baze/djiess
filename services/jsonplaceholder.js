import axios from 'axios';

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/photos?_limit=10",
});

export default api;
