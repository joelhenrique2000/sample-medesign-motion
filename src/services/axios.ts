import axios from "axios";

export function getAPIClient(ctx?: any) {

  const api = axios.create({
    baseURL: 'https://eggi.herokuapp.com/api/',
    headers: {
      
    }
  })

  api.interceptors.request.use(config => {
    return config;
  })

  return api;
}