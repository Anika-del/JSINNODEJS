import { useContext, useState } from "react";
import { HeyContext } from "./App";

const HeadAndTail = () => {
  const { tossThecoin, slectionButton, coinSpin } = useContext(HeyContext);
  const [headColor, setHeadColor] = useState(false);
  const [tailcolor, setTailcolor] = useState(false);

  const clickHead = () => {
    if (headColor) {
      setHeadColor(false);
    } else {
      setHeadColor(true);
    }
  };

  const cleckTail = () => {
    if (tailcolor) {
      setTailcolor(false);
    } else {
      setTailcolor(true);
    }
  };
  return (
    <>
      {/* Head and Tail section  */}
      <div className=" w-full flex justify-evenly py-5">
        <div
          className={`${
            headColor ? "bg-green-400" : "bg-blue-400"
          } px-4 py-1 rounded-2xl`}
          onClick={() => {
            slectionButton("Head");
            clickHead();
          }}
        >
          Head
        </div>
        <div
          className={`${
            tailcolor ? "bg-green-400" : "bg-blue-400"
          } px-4 py-1 rounded-2xl`}
          onClick={() => {
            slectionButton("Tail");
            cleckTail();
          }}
        >
          Tail
        </div>
      </div>
    </>
  );
};

export default HeadAndTail;
