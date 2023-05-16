import React from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = ({ searchUsers }) => {
  return (
    <div>
      <div>
        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => searchUsers(event)}
            />
            <div className="input-group-prepend">
              <AiOutlineSearch size={22} />
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};
