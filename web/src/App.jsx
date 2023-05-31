import "./App.css";
import { Home } from "./pages/Home";
import React, { useState } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isUserAuthenticated, setAuthToken } from "./utils/auth";
import Cookies from "js-cookie";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Ghar } from "./pages/Ghar";
import { RootPage } from "./pages/RootPage";
import { Navbar } from "./components/Navbar";
import { SideDrawer } from "./components/SideDrawer";

const App = () => {
  const [jwtToken, setJwtToken] = useState("");

  const handleAuthentication = (token) => {
    setJwtToken(token);
    setAuthToken(token);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <>{(jwtToken || isUserAuthenticated()) && <SideDrawer />}</>

        <div className="padding-div"></div>
        <Routes>
          <Route
            path="/login"
            element={
              <Login setToken={(token) => handleAuthentication(token)} />
            }
          />
          <Route path="/register" element={<Register />} />
          {/* <ProtectedRoute path="/" element={<Home />} token={jwtToken} /> */}
          <Route
            path="/home"
            element={
              jwtToken || isUserAuthenticated() ? (
                <Home />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/" element={<Ghar />} />
          <Route path="/orders" element={<></>} />
          <Route path="/contact-us" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
