const TOKEN_KEY = "token";

export const setAuthToken = (token) => {
  if (token) {
    sessionStorage.setItem(TOKEN_KEY, token);
  } else {
    sessionStorage.removeItem(TOKEN_KEY);
  }
};

export const getAuthToken = () => {
  return sessionStorage.getItem(TOKEN_KEY);
};

export const isUserAuthenticated = () => {
  const token = getAuthToken();
  return !!token; // Return true if token exists
};

export const logoutUser = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  window.location.href = "/";
};
