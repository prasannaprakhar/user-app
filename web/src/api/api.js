import axios from "axios";
import { getAuthToken, isUserAuthenticated } from "../utils/auth";
import { logoutUser } from "../utils/auth";

// Create an instance of Axios
const api = axios.create({
  baseURL: "http://localhost:5000", // Replace with your base URL
});

// Add a request interceptor
api.interceptors.request.use(
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
api.interceptors.response.use(
  function (response) {
    // Handle successful responses
    // For example, you can parse and process the response data

    // Return the response
    return response;
  },
  function (error) {
    // Handle error responses
    // For example, you can check for specific error codes, log errors, etc.

    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      // Do something for status code 401 & 403
      logoutUser();
    }

    // Return the rejected Promise
    return Promise.reject(error);
  }
);

export default api;
