// import { AdapterDayjs } from '@mui/x-date-pickers-pro';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//
import { useState, useEffect } from "react";

export const Fields = () => {
  // const [name, setName] = useState(null)
  // const [dob, setDob] = useState(null)
  // const [email, setEmail] = useState(null)
  // const [phnnum, setPhnnum] = useState(null)

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
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
