import "./SideDrawer.css";
import { Home } from "../pages/Home";
import {
  VscLayoutSidebarRightOff,
  VscLayoutSidebarRight,
} from "react-icons/vsc";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const sideBarOptions = [
  {
    name: "Home",
    to: "/home",
  },
  {
    name: "Orders",
    to: "/orders",
  },
  {
    name: "Contact Us",
    to: "/contact-us",
  },
];

export const SideDrawer = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <div className={`side-drawer-new`}>
          <button className="toggle-button" onClick={toggleDrawer}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <ul className="drawer-links">
            <div
              className="lis-wrapper
            "
            >
              {sideBarOptions.map((option) => {
                return (
                  <Link to={option.to}>
                    {" "}
                    <div className="li-wrapper">
                      <li>{option.name}</li>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ul>
        </div>
      ) : (
        <div className={`side-drawer-new-closed`}>
          <button className="toggle-button" onClick={toggleDrawer}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <ul className="drawer-links">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      )}
    </>
  );
};
