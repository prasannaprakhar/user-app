import { Heading } from "../Components/Heading";
import { Fields } from "../Components/Fields";
import { List } from "../Components/Lists";
import { HEADING } from "../Components/constants";

export const Home = () => {
  return (
    <div>
      <div>
        <div>
          <Heading heading={HEADING} />
        </div>
        <div>
          <Fields />
        </div>
      </div>
      <div>
        <div>
          <List />
        </div>
      </div>
    </div>
  );
};
