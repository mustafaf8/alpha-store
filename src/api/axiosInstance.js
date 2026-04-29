import axios from "axios";
import { mockApiAdapter } from "../mockSite/mockApi";

const axiosInstance = axios.create({
  baseURL: "https://alpha-storegit-47047583-a5a89.firebaseapp.com/api",
  withCredentials: true,
});

// Intercept requests and use mock adapter
axiosInstance.interceptors.request.use(async (config) => {
  const mockResponse = await mockApiAdapter(config);
  if (mockResponse) {
    // Return a resolved promise with the mock response
    // to "short-circuit" the actual network request
    return Promise.reject({
      config,
      response: mockResponse,
      isMock: true
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

