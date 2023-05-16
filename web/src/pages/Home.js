import { Heading } from "../components/Heading";
import { Fields } from "../components/Fields";
import { List } from "../components/Search";
import { HEADING } from "../components/constants";
import { Records } from "../components/Records";
import { useState } from "react";
import "./Home.css";
import { AiOutlineSortAscending, AiFillFilter } from "react-icons/ai";

export const Home = () => {
  const [isUserCreated, setIsIUserCreated] = useState(false);

  return (
    // <div>
    //   <div>
    //     <div>
    //       <Heading heading={HEADING} />
    //     </div>
    //     <div>
    //       <Fields setIsIUserCreated={setIsIUserCreated} />
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <List />
    //     </div>
    //   </div>
    //   <div>
    //     <div style={{ margin: "120px" }}>
    //       <Records isUserCreated={isUserCreated ? isUserCreated : false} />
    //     </div>
    //   </div>
    // </div>

    // <div className="form-section">

    // </div>
    <div>
      <div className="Heading-section">
        <Heading heading={HEADING} />
      </div>
      <div className="Form-section">
        <Fields setIsIUserCreated={setIsIUserCreated} />
      </div>
      <div className="List-section">
        <div className="Tool-list">
          <div className="Search-bar">
            <List />
          </div>
          <div className="Filter-bar"></div>
          <div className="Sort-bar">
            <div className="sort-icon">
              <AiOutlineSortAscending />
            </div>
            <div className="filter-icon">
              <AiFillFilter />
            </div>
          </div>
        </div>
        <div className="">
          <Records isUserCreated={isUserCreated ? isUserCreated : false} />
        </div>
      </div>
    </div>
  );
};
