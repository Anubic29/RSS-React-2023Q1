import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  headers: {
    accept: 'application/json',
  },
});

export default instance;
