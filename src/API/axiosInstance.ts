import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_BUSINESS}/api`,
});

export default AxiosInstance