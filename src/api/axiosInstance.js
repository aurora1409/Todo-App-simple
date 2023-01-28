import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://63103cdc36e6a2a04ee8b707.mockapi.io/todos",
  timeout: 5000,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosInstance;
