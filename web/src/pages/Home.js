import { Fields } from "../components/Fields";
import { Search } from "../components/Search";
import { Records } from "../components/Records";
import { useState, useEffect } from "react";
import "./Home.css";
// import { Navbar } from "../components/Navbar";
import {
  AiOutlineSortAscending,
  AiFillFilter,
  AiOutlineFilter,
} from "react-icons/ai";
import api from "../api/api";
// import { SideDrawer } from "../components/SideDrawer";
import { Heading } from "../components/Heading";
import { ProfilePopup } from "../components/ProfilePopup";
import { PaginationBar } from "../components/Pagination/PaginationBar";
import { Loader } from "../components/Loader";

export const Home = ({ popUp }) => {
  const [updatedList, setUpdatedList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  //user search api
  const searchUsers = async (event) => {
    const { value } = event.target;
    const searchRecords = await api.get("/user/search-users", {
      params: {
        search: value,
      },
    });
    setUpdatedList(searchRecords?.data);
  };

  //create new user api
  const createNewUser = async (event, user) => {
    event.preventDefault();

    const response = await api.post("/user/create-user", user);

    !response.data.message && setIsLoading(true);

    response.data.message === "User created successfully !!" &&
      getAllUsersList();

    response.data.message && setIsLoading(false);
  };

  //get all users
  const getAllUsersList = async () => {
    const allUsersData = await api.get("/user/get-all-users");
    setUpdatedList(allUsersData.data);
  };

  //delete user api
  const deleteTheUser = async (event, id) => {
    const deleteResponse = await api.delete(`/user/delete-user/${id}`);
    deleteResponse.data.message === "User deleted successfully !!" &&
      getAllUsersList();
  };

  //update user api
  const updateTheUser = async (event, id) => {
    const name = prompt("Please enter updated name.");
    const email = prompt("Please enter updated email.");
    const phn = prompt("Please enter updated phone number.");
    const dob = prompt("Please enter updated dob.");

    const updateRes = await api.put(`/user/update-user/${id}`, {
      name: name,
      dob: dob,
      email: email,
      phnnum: phn,
    });
    updateRes.data.message === "User updated successfully !!" &&
      getAllUsersList();
  };

  //sort api
  const sortTheUsers = async () => {
    const getSortedUsers = await api.get("/user/sort-users");
    setUpdatedList(getSortedUsers.data);
    setIsSorted(!isSorted);
  };

  //filter api
  const filterTheUsers = () => {
    setIsFilter(!isFilter);
  };

  useEffect(() => {
    !isSorted && getAllUsersList();
  }, [isSorted]);

  useEffect(() => {
    getAllUsersList();
  }, []);

  return (
    <div className="main-home">
      <ProfilePopup popup={popUp} />
      <div className="home-heading">
        <Heading heading={"Track Your Users"} />
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
            <div
              className={isSorted ? "sort-icon-fill" : "sort-icon"}
              onClick={sortTheUsers}
            >
              <AiOutlineSortAscending size={25} />
            </div>
            <div
              className={isFilter ? "filter-icon-fill" : "filter-icon"}
              onClick={filterTheUsers}
            >
              {isFilter ? (
                <AiFillFilter size={25} />
              ) : (
                <AiOutlineFilter size={25} />
              )}
            </div>
          </div>
        </div>
        <div className="">
          {isLoading ? (
            <Loader />
          ) : (
            <Records
              deleteUser={(event, id) => deleteTheUser(event, id)}
              updateUser={(event, id) => updateTheUser(event, id)}
              records={updatedList}
            />
          )}
        </div>
      </div>
      <div className="main-pagination">
        <PaginationBar totalRecords={160} getParameters={() => {}} />
      </div>
    </div>
  );
};
