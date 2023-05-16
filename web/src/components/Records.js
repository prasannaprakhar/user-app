import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import axios from "axios";
import "./Records.css";

export const Records = ({ isUserCreated }) => {
  const [users, setUsers] = useState([]);

  console.log("user msg :", isUserCreated);

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

  useEffect(() => {
    isUserCreated && getAllUsersList();
  }, [isUserCreated]);

  useEffect(() => {
    getAllUsersList();
  }, []);

  return (
    <div>
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
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phnnum}</td>
                      <td>{user.dob}</td>
                      <td onClick={(event) => deleteTheUser(event, user._id)}>
                        <BsTrashFill />
                      </td>
                    </tr>
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
