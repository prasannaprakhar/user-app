import { BiLogOut } from "react-icons/bi";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { isUserAuthenticated } from "../utils/auth";
import "./Navbar.css"
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../images/logo5.jpg"
import { logoutUser } from "../utils/auth"



export const Navbar = () => {

    const handleLogout = () => {
        logoutUser();
    }
    const redirectToLogin = (event) => {
        event.preventDefault();
        window.location.href = "/login";

    }
    const redirectToSignUp = (event) => {
        event.preventDefault();
        window.location.href = "/register";

    }

    const handleHomeDirection = (event) => {
        event.preventDefault();

        if(isUserAuthenticated()){
            window.location.href="/home";

        }else{
            window.location.href="/"

        }
 
     
        
    }


    return(
        <div className="navbar-app">
       <div className="logo">
        <img src={logo} height={50} width={50} onClick={(event) => handleHomeDirection(event)}/>
       </div>
       <div className="title">
        <Heading heading={"Food Heaven - Your own story"}/>
       </div>
       <div className={isUserAuthenticated() ? "profile-bar": "profile-bar-unauthenticated"}>
       <div className={isUserAuthenticated() ?"profile": "register" }>
        {isUserAuthenticated() ? <BsFillPersonFill size={25}/> : <Button  label={"Log In"} onClick={(event) =>redirectToLogin(event)}/>}
       </div>
       <div className={isUserAuthenticated() ? "sign-out" : "login"}>
       {isUserAuthenticated() ? <BiLogOut size={25} onClick={handleLogout}/> : <Button  label={"Sign In"} onClick={(event) => redirectToSignUp(event)}/>}
       </div>

       </div>

      </div>
        
    )
}