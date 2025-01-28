import { useContext } from "react";
import { HeyContext } from "./App";

const TossButton = () => {
  const { tossThecoin, slectionButton, coinSpin } = useContext(HeyContext);
  return (
    <>
      {/* Toss Button section  */}
      <div className=" w-full py-3 flex justify-center">
        <div
          className="bg-blue-400 px-4 py-1 rounded-2xl w-20"
          onClick={() => tossThecoin()}
        >
          TOSS
        </div>
      </div>
    </>
  );
};
export default TossButton;
