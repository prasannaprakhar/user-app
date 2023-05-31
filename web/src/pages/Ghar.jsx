import "./Ghar.css";
import { GharLogin } from "../components/GharLogin";
// import {setAuthToken} from '../utils/auth'
import { CarouselGrid } from "../components/CarouselGrid";
import { GharSecondSection } from "../components/GharSecondSection";

export const Ghar = ({setToken}) => {


  return (
    
       <div className="home-container">
        <div className="first-section">
        <div className="about-us-section">
        <CarouselGrid/>
        </div>
     
    
       <div className="login-section">
      <div className="login-cards">
      <GharLogin setToken={(token) => setToken(token)} />
      </div>
    </div>
    </div>
    <div className="second-section">
      <GharSecondSection/>

    </div>

  </div>

    
   
  )
  
};
