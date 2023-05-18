import { BiLogOut } from "react-icons/bi";
import "./Heading.css";
import { logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export const Heading = ({ heading }) => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    logoutUser();
    navigate("/login");
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
