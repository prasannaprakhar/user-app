import React, { useState } from "react";
import axios from "axios";
import "./Fields.css";

export const Fields = ({ setIsIUserCreated }) => {
  const [userData, setUserData] = useState({
    name: "",
    dob: "",
    email: "",
    phnnum: "",
  });

  const handleNameChange = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };
  const handleDateChange = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      dob: event.target.value,
    }));
  };
  const handleEmailChange = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };
  const handlePhnNumChange = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      phnnum: event.target.value,
    }));
  };

  // have created for integerating node microservice
  const createNewUser = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/user/create-user",
      userData
    );
    response.data.message === "User created successfully !!" &&
      setIsIUserCreated(true);

    setUserData({
      name: "",
      dob: "",
      email: "",
      phnnum: "",
    });
  };
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={userData.name}
              onChange={(event) => handleNameChange(event)}
            />
          </div>
          <div className="col-9">
            <input
              type="date"
              className="form-control"
              placeholder="Enter D.O.B"
              value={userData.dob}
              onChange={(event) => handleDateChange(event)}
            />
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              value={userData.email}
              onChange={(event) => handleEmailChange(event)}
            />
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              value={userData.phnnum}
              onChange={(event) => handlePhnNumChange(event)}
            />
          </div>
          <div className="Field_btn">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(event) => createNewUser(event)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
