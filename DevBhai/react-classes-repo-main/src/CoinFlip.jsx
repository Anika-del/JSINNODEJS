import CoinAnimation from "./CoinAnimation";
import HeadAndTail from "./HeadAndTail";
import PopUpBox from "./PopUpBox";
import TossButton from "./TossButton";

const CoinFlip = () => {
  return (
    <>
      <div className="bg-yellow-300 w-[30rem] h-[20rem]">
        <CoinAnimation />
        <HeadAndTail />
        <TossButton />
      </div>
      <PopUpBox />
    </>
  );
};

export default CoinFlip;
