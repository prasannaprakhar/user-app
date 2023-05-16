import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import "./Records.css";

export const Records = ({ isUserCreated }) => {
  const [users, setUsers] = useState([]);

  const getAllUsersList = async () => {
    const allUsersData = await axios.get(
      "http://localhost:5000/user/get-all-users"
    );
    setUsers(allUsersData.data);
  };

  const deleteTheUser = async (event, id) => {
    const deleteResponse = await axios.delete(
      `http://localhost:5000/user/delete-user/${id}`
    );
    deleteResponse.data.message === "User deleted successfully !!" &&
      getAllUsersList();
  };

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
    isUserCreated && getAllUsersList();
  }, [isUserCreated]);

  useEffect(() => {
    getAllUsersList();
  }, []);

  return (
    <div className="Table-div">
      <table>
        <>
          {users.length !== 0 && (
            <>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>DOB</th>
                </tr>
                <br />
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <>
                      <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phnnum}</td>
                        <td>{user.dob}</td>
                        <td onClick={(event) => deleteTheUser(event, user._id)}>
                          <BsTrashFill />
                        </td>
                        <td>
                          <FiEdit
                            onClick={(event) => updateTheUser(event, user._id)}
                          />
                        </td>
                      </tr>
                      <br />
                    </>
                  );
                })}
              </tbody>
            </>
          )}
        </>
      </table>
      {users.length === 0 && <div>No users found</div>}
    </div>
  );
};
