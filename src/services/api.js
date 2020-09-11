import axios from 'axios';

const api = axios.create({
  baseURL: 'https://meuataca-backend.herokuapp.com/'
});

export default api;