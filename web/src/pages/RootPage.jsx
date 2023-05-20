import { Navbar } from "../components/Navbar";
import { SideDrawer } from "../components/SideDrawer";
import { Home } from "./Home";
import "./RootPage.css";

export const RootPage = () => {
  return (
    <div>
      <div>
        <div className="navbar-section">
          <Navbar />
        </div>
        <div className="side-drawer">
          <SideDrawer />
        </div>
      </div>

      {/* <div>
        <Home />
      </div> */}
    </div>
  );
};
