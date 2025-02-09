import { useState } from "react";
function Mcq() {
  const [optionA, setOptionA] = useState(false);
  const [optionB, setOptionB] = useState(false);
  const [optionc, setoptionC] = useState(false);
  const [optionD, setOptionD] = useState(false);

  function checkAnswer(answerReceive) {
    if (answerReceive === "sludge") {
      setoptionC(true);
    } else {
      setoptionC(true);
      if (answerReceive === "compost") {
        setOptionA(true);
      } else if (answerReceive === "peat") {
        setOptionB(true);
      } else if (answerReceive === "urea") {
        setOptionD(true);
      }
      console.log(" you clicked the wrong answer");
    }
  }
  return (
    <div className="bg-blue-500 w-1/2 p-5 box-border m-3 rounded-lg">
      <div className="bg-blue-300 p-2 rounded-2xl">
        Solids like fast, grease and oil tht float on top of liquid wasterwater
        is called ___.
      </div>
      <div
        className={`${
          optionA ? "bg-red-500" : "bg-blue-300"
        }  p-2 rounded-2xl w-1/2 mt-2 cursor-pointer `}
        onClick={() => checkAnswer("compost")}
      >
        compost
      </div>
      <div
        className={`${
          optionB ? "bg-red-500" : "bg-blue-300"
        }  p-2 rounded-2xl w-1/2 mt-2 cursor-pointer  `}
        onClick={() => checkAnswer("peat")}
      >
        peat
      </div>
      <div
        className={`${
          optionc ? "bg-green-400" : "bg-blue-300"
        }  p-2 rounded-2xl w-1/2 mt-2 cursor-pointer `}
        onClick={() => checkAnswer("sludge")}
      >
        sludge
      </div>
      <div
        className={`${
          optionD ? "bg-red-500" : "bg-blue-300"
        }  p-2 rounded-2xl w-1/2 mt-2 cursor-pointer `}
        onClick={() => checkAnswer("urea")}
      >
        urea
      </div>
    </div>
  );
}

export default Mcq;