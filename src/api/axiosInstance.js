import axios from "axios";
import { mockApiAdapter } from "@/mockSite/mockApi";

const isStaticDemoMode = true;

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  ...(isStaticDemoMode ? { adapter: mockApiAdapter } : {}),
});

export default axiosInstance;
