import React, { useState } from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";

export const Search = ({ searchUsers }) => {
  const [isSearching, setIsSerching] = useState(false);

  const searchTheUser = (event) => {
    searchUsers(event);
    event.target.value === "" ? setIsSerching(false) : setIsSerching(true);
  };
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
              onChange={(event) => searchTheUser(event)}
            />
            <div className="input-group-prepend">
              {isSearching ? (
                <FcSearch size={28} />
              ) : (
                <AiOutlineSearch size={22} />
              )}
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};
