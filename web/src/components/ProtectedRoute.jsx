import React from "react";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ path, element, token }) => {
  return (
    <Route
      path={path}
      element={token ? element : <Navigate to="/login" replace />}
    />
  );
};
