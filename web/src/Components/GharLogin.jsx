import React, { useState } from "react";
import "./GharLogin.css";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
// import { Navbar } from "./Navbar";


const BASE_URL = "http://localhost:5000";

export const GharLogin = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const loginRes = await axios.post(BASE_URL + "/login", {
        username,
        password,
      });
      setToken(loginRes?.data?.token);
      navigate("/home");
    } catch (error) {
      console.log("Something wrong while login:", error);
    }
  };
  

  return (
    <>
      <form>
        <div className="container1">
          <h1>Login</h1>
          <hr />

          <label for="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <hr />

          <button
            type="submit"
            className="registerbtn"
            onClick={(event) => handleLogin(event)}
          >
            Login
          </button>
          <span>Don't have an account?</span>

          <Link to="/register"> 
          <span> Register now</span>

          </Link>
          
        </div>
      </form>
    </>
  );
};
