import { LeftMenu } from "./LeftMenu";
import { RightMenu } from "./RightMenu";
import "../style.scss";

export const App = () => {
  return (
    <div className="wraper">
      <div className="left_menu">
        <LeftMenu />
      </div>
      <div className="right_menu">
        <RightMenu />
      </div>
    </div>
  );
};
