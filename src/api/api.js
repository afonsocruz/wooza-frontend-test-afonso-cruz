import axios from 'axios';

const api = axios.create({
  baseURL: 'https://private-59658d-celulardireto2017.apiary-mock.com/plataformas',
});

export default api;
