import { BiLogOut } from "react-icons/bi";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { isUserAuthenticated } from "../utils/auth";
import "./Navbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../images/logo5.jpg";
import { logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  const redirectToLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  const redirectToSignUp = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  const handleHomeDirection = (event) => {
    event.preventDefault();

    if (isUserAuthenticated()) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="navbar-app">
      <div className="logo">
        <img
          src={logo}
          height={50}
          width={50}
          onClick={(event) => handleHomeDirection(event)}
          alt="LOGO"
        />
      </div>
      <div className="title">
        <Heading heading={"Food Heaven - Your own story"} />
      </div>
      <div
        className={
          isUserAuthenticated() ? "profile-bar" : "profile-bar-unauthenticated"
        }
      >
        <div className={isUserAuthenticated() ? "profile" : "register"}>
          {isUserAuthenticated() ? (
            <BsFillPersonFill size={25} />
          ) : (
            <Button
              label={"Log In"}
              onClick={(event) => redirectToLogin(event)}
            />
          )}
        </div>
        <div className={isUserAuthenticated() ? "sign-out" : "login"}>
          {isUserAuthenticated() ? (
            <BiLogOut size={25} onClick={handleLogout} />
          ) : (
            <Button
              label={"Sign In"}
              onClick={(event) => redirectToSignUp(event)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
