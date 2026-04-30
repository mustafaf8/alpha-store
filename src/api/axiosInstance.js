import axios from "axios";
import { mockApiAdapter } from "../mockSite/mockApi";

const axiosInstance = axios.create({
  baseURL: "https://alpha-storegit-47047583-a5a89.firebaseapp.com/api",
  withCredentials: true,
});

const useMockApi = import.meta.env.VITE_USE_MOCK_API !== "false";

// Intercept requests and use mock adapter
axiosInstance.interceptors.request.use(async (config) => {
  if (!useMockApi) {
    return config;
  }

  const mockResponse = await mockApiAdapter(config);
  if (mockResponse) {
    return Promise.reject({
      config,
      response: mockResponse,
      isMock: true,
    });
  }
  return config;
});

// Intercept responses to handle the "mock" error we used to short-circuit
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.isMock) {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

