import axios from "axios";
import Cookies from "universal-cookie";

const baseURL = "http://35.213.94.95:8899/api";
let headers = {};
const cookies = new Cookies();
const token = cookies.get("token");

if (token) {
  headers = { Authorization: `Bearer ${token}` };
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
