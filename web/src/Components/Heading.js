import { BiLogOut } from "react-icons/bi";
import "./Heading.css";
import { logoutUser } from "../utils/auth";

export const Heading = ({ heading }) => {
  const handleLogout = (event) => {
    event.preventDefault();
    logoutUser();
  };

  return (
    <div className="navbar">
      <h1 className="heading">{heading}</h1>
      <div className="logout">
        <BiLogOut size={30} onClick={(event) => handleLogout(event)} />
      </div>
    </div>
  );
};
