import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [msg, setMsg] = useState(null);

  const getData = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    setMsg(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h3>UserApp</h3>
      <h5>{msg}</h5>
    </div>
  );
}

export default App;
