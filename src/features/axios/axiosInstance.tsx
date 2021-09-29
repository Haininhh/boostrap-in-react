import axios from "axios";
import Cookies from "universal-cookie";

const baseURL = "http://35.213.94.95:8899/api";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const cookies = new Cookies();
    const token = await cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
