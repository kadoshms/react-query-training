import axios from "axios";

export const API_BASE_URL = 'http://localhost:5001';

export const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/`
});

export default axiosInstance;
