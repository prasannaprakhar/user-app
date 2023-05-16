import { Heading } from "../components/Heading";
import { Fields } from "../components/Fields";
import { List } from "../components/Lists";
import { HEADING } from "../components/constants";
import { Records } from "../components/Records";
import { useState } from "react";

export const Home = () => {
  const [isUserCreated, setIsIUserCreated] = useState(false);

  return (
    <div>
      <div>
        <div>
          <Heading heading={HEADING} />
        </div>
        <div>
          <Fields setIsIUserCreated={setIsIUserCreated} />
        </div>
      </div>
      <div>
        <div>
          <List />
        </div>
      </div>
      <div>
        <div style={{ margin: "120px" }}>
          <Records isUserCreated={isUserCreated ? isUserCreated : false} />
        </div>
      </div>
    </div>
  );
};
