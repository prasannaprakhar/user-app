import axios from "axios";
import { getAuthToken, isUserAuthenticated } from "../utils/auth";

// Create an instance of Axios
const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Perform any modifications to the request config
    // For example, you can add headers, modify data, etc.
    config.headers["Authorization"] = `Bearer ${
      getAuthToken() || isUserAuthenticated()
    }`;

    // Return the modified request config
    return config;
  },
  function (error) {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Handle successful responses
    // For example, you can parse and process the response data

    // Return the response
    return response;
  },
  function (error) {
    // Handle error responses
    // For example, you can check for specific error codes, log errors, etc.

    // Return the rejected Promise
    return Promise.reject(error);
  }
);

export default axiosInstance;
