import "./App.css";
import { Home } from "./Home/Home";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState(null);
  const [nodeMsg, setNodeMsg] = useState(null);

  const getDataFromJavaServer = async () => {
    const response = await axios.get("http://localhost:8080/");
    setMsg(response.data);
  };

  const getDataFromNodeServer = async () => {
    const response = await axios.get("http://localhost:5000/");
    setNodeMsg(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getDataFromJavaServer();
    getDataFromNodeServer();
  }, []);
  return (
    <div className="App">
      <>
        <Home />
      </>
      <br />
      <h5>{msg === null ? "Springboot connection not created" : msg}</h5>
      <br />
      {nodeMsg !== null ? (
        nodeMsg.map((option) => {
          return (
            <ul>
              <li>{option.name}</li>
            </ul>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
