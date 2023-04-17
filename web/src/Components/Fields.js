import React, { useState } from "react";
// import axios from "axios";

export const Fields = () => {
  const [userData, setUserData] = useState({
    name: null,
    dob: null,
    email: null,
    phnnum: null,
  });

  const handleNameChange = (value) => {
    setUserData((prevState) => ({
      ...prevState,
      name: value,
    }));
  };
  const handleDateChange = (value) => {
    setUserData((prevState) => ({
      ...prevState,
      dob: value,
    }));
  };
  const handleEmailChange = (value) => {
    setUserData((prevState) => ({
      ...prevState,
      email: value,
    }));
  };
  const handlePhnNumChange = (value) => {
    setUserData((prevState) => ({
      ...prevState,
      phnnum: value,
    }));
  };

  // have created for integerating node microservice
  // const createNewUser = async (event) => {};

  console.log("userData :", userData);
  return (
    <div>
      <form>
        <div class="row">
          <div class="col-5">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Name"
              onChange={(event) => handleNameChange(event.target.value)}
            />
          </div>
          <div class="col-5">
            <input
              type="date"
              class="form-control"
              placeholder="Enter D.O.B"
              onChange={(event) => handleDateChange(event.target.value)}
            />
          </div>
          <div class="col-5">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email"
              onChange={(event) => handleEmailChange(event.target.value)}
            />
          </div>
          <div class="col-5">
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              onChange={(event) => handlePhnNumChange(event.target.value)}
            />
          </div>
          <div class="Field_btn">
            <button
              type="submit"
              class="btn btn-primary"
              // onClick={createNewUser}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
