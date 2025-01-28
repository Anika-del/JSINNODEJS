import { useContext } from "react";
import ComC from "./ComC";
import { HeyContext } from "./App";

const ComB = () => {
  const { hey, sayhello } = useContext(HeyContext);
  return (
    <div>
      {" "}
      {hey} <div onClick={sayhello}>click me</div>
    </div>
  );
};

export default ComB;
