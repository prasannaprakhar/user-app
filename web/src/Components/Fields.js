import React, { useState } from "react";
import "./Fields.css";

export const Fields = ({ createNewUser }) => {
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

  const createTheUser = (event, userData) => {
    createNewUser(event, userData);

    setUserData({
      name: "",
      dob: "",
      email: "",
      phnnum: "",
    });
  };

  return (
    <div className="form-wrapper">
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
              onClick={(event) => createTheUser(event, userData)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
