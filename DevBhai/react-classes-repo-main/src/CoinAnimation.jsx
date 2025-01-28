import { useContext } from "react";
import "./CoinRotate.css";
import { HeyContext } from "./App";
const CoinAnimation = () => {
  const { tossThecoin, slectionButton, coinSpin } = useContext(HeyContext);
  let coinSide = "Head";
  return (
    <>
      {/*  coin moving animation section start */}
      <div className="w-full flex justify-center py-3 ">
        <div
          className={`w-[10rem] h-[10rem] ${
            coinSpin ? "coin-rotate" : ""
          }  rounded-full flex justify-center items-center font-bold text-2xl bg-gray-400`}
        >
          <h1>{coinSide}</h1>
        </div>
      </div>
    </>
  );
};

export default CoinAnimation;
