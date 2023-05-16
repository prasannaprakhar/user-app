import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "./Records.css";

export const Records = ({ deleteUser, updateUser, records }) => {
  return (
    <div className="Table-div">
      <table>
        <>
          {records.length !== 0 ? (
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
                {records.map((user, index) => {
                  return (
                    <>
                      <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phnnum}</td>
                        <td>{user.dob}</td>
                        <td onClick={(event) => deleteUser(event, user._id)}>
                          <BsTrashFill />
                        </td>
                        <td>
                          <FiEdit
                            onClick={(event) => updateUser(event, user._id)}
                          />
                        </td>
                      </tr>
                      <br />
                    </>
                  );
                })}
              </tbody>
            </>
          ) : (
            <div className="no-records">No users found</div>
          )}
        </>
      </table>
    </div>
  );
};
