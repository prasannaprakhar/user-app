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
    id: "home",
    name: "Home",
    to: "/home",
  },
  {
    id: "orders",
    name: "Orders",
    to: "/orders",
  },
  {
    id: "contactus",
    name: "Contact Us",
    to: "/contact-us",
  },
];

export const SideDrawer = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState({
    home: true,
  });

  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  const handleSideBarClick = (id) => {
    setSelected({ [id]: true });
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
                  <Link key={option.id} to={option.to}>
                    {" "}
                    <div
                      className={
                        selected[option.id]
                          ? "li-wrapper-selected"
                          : "li-wrapper"
                      }
                      onClick={() => handleSideBarClick(option.id)}
                    >
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
