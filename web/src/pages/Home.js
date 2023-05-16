import { Heading } from "../components/Heading";
import { Fields } from "../components/Fields";
import { Search } from "../components/Search";
import { HEADING } from "../components/constants";
import { Records } from "../components/Records";
import { useState, useEffect } from "react";
import "./Home.css";
import { AiOutlineSortAscending, AiFillFilter } from "react-icons/ai";
import axios from "axios";

export const Home = () => {
  const [updatedList, setUpdatedList] = useState([]);

  //user search api
  const searchUsers = async (event) => {
    const { value } = event.target;
    const searchRecords = await axios.get(
      "http://localhost:5000/user/search-users",
      {
        params: {
          search: value,
        },
      }
    );
    setUpdatedList(searchRecords?.data);
  };

  //create new user api
  const createNewUser = async (event, user) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/user/create-user",
      user
    );
    response.data.message === "User created successfully !!" &&
      getAllUsersList();
  };

  //get all users
  const getAllUsersList = async () => {
    const allUsersData = await axios.get(
      "http://localhost:5000/user/get-all-users"
    );
    setUpdatedList(allUsersData.data);
  };

  //delete user api
  const deleteTheUser = async (event, id) => {
    const deleteResponse = await axios.delete(
      `http://localhost:5000/user/delete-user/${id}`
    );
    deleteResponse.data.message === "User deleted successfully !!" &&
      getAllUsersList();
  };

  //update user api
  const updateTheUser = async (event, id) => {
    const name = prompt("Please enter updated name.");
    const email = prompt("Please enter updated email.");
    const phn = prompt("Please enter updated phone number.");
    const dob = prompt("Please enter updated dob.");

    const updateRes = await axios.put(
      `http://localhost:5000/user/update-user/${id}`,
      {
        name: name,
        dob: dob,
        email: email,
        phnnum: phn,
      }
    );
    updateRes.data.message === "User updated successfully !!" &&
      getAllUsersList();
  };

  useEffect(() => {
    getAllUsersList();
  }, []);

  return (
    <div>
      <div className="Heading-section">
        <Heading heading={HEADING} />
      </div>
      <div className="Form-section">
        <Fields createNewUser={(event, user) => createNewUser(event, user)} />
      </div>
      <div className="List-section">
        <div className="Tool-list">
          <div className="Search-bar">
            <Search searchUsers={(event) => searchUsers(event)} />
          </div>
          <div className="Filter-bar"></div>
          <div className="Sort-bar">
            <div className="sort-icon">
              <AiOutlineSortAscending size={25} />
            </div>
            <div className="filter-icon">
              <AiFillFilter size={25} />
            </div>
          </div>
        </div>
        <div className="">
          <Records
            deleteUser={(event, id) => deleteTheUser(event, id)}
            updateUser={(event, id) => updateTheUser(event, id)}
            records={updatedList}
          />
        </div>
      </div>
    </div>
  );
};
