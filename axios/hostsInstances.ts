import axios, { AxiosInstance } from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const GATEWAY_URL = 'https://api.ambassadors.ink';

const coreService = axios.create({
  baseURL: `${GATEWAY_URL}/core/api/checkout`,
  withCredentials: true
});
setJWTToken(coreService);

export {
  coreService
};

function setJWTToken(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
