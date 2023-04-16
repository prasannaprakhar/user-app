import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

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
  };

  useEffect(() => {
    getDataFromJavaServer();
    getDataFromNodeServer();
  }, []);
  return (
    <div className="App">
      <h3>UserApp</h3>
      <br />
      <h5>{msg === null ? "Springboot connection not created" : msg}</h5>
      <br />
      <h5>{nodeMsg === null ? "Node connection not created" : nodeMsg}</h5>
    </div>
  );
}

export default App;
