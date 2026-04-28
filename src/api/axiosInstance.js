import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://alpha-storegit-47047583-a5a89.firebaseapp.com/api",
  withCredentials: true,
});

export default axiosInstance;
