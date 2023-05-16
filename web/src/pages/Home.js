import { Heading } from "../components/Heading";
import { Fields } from "../components/Fields";
import { List } from "../components/Lists";
import { HEADING } from "../components/constants";
import { Records } from "../components/Records";
import { useState } from "react";
import "./Home.css";

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
        <div style={{ margin: "120px" }}>
          <Records isUserCreated={isUserCreated ? isUserCreated : false} />
        </div>
      </div>
    </div>
  );
};
