import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

const BASE_URL = "http://localhost:5000";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const res = await axios.post(BASE_URL + "/register", {
      username,
      email,
      password,
    });
    console.log("register response: ", res.data);
    navigate("/login");
  };

  return (
    <>
      <form>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
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

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
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
            onClick={(event) => handleRegister(event)}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};
