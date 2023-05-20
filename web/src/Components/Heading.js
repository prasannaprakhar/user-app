import { BiLogOut } from "react-icons/bi";
import "./Heading.css";
import { logoutUser } from "../utils/auth";

export const Heading = ({ heading }) => {
  // const handleLogout = (event) => {
  //   event.preventDefault();
  //   logoutUser();
  // };

  return (
    <div className="heading-title">
      <h1 className="heading-name">{heading}</h1>
    </div>
  );
};
