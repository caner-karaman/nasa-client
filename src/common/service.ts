import axios from "axios";

const instance = axios.create({
  baseURL: 'https://images-api.nasa.gov',
  timeout: 5000,
});

export default instance;
