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
        <form className="form-type">
          <div className="input-grp">
            <input
              type="text"
              id="search-box"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => searchTheUser(event)}
            />
            <div className="input-grp-icon">
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
