import "./SideDrawer.css";
import { Home } from "../pages/Home";
import { Link } from "react-router-dom";
import {
  VscLayoutSidebarRightOff,
  VscLayoutSidebarRight,
} from "react-icons/vsc";
import React, { useState } from "react";

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

  const handleSideBarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="side-bar-main">
      <div className="sidebar-section">
        <div className="sidebar-logo-main">
          <div className={toggle ? "sidebar-logo-selected" : "sidebar-logo"}>
            {<VscLayoutSidebarRight size={30} onClick={handleSideBarToggle} />}
          </div>
        </div>

        {toggle ? (
          <div className="sidebar">
            <ul>
              {sideBarOptions.map((option) => {
                return (
                  <li>
                    <div className="link">
                      <Link to={option.to}>{option.name}</Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="content">
        <Home />
      </div>
    </div>
  );
};
