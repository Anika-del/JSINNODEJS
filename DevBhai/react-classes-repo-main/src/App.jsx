// import { useState } from "react";
// import ShowTodoList from "./ShowTodoList";

import CoinFlip from "./CoinFlip";
import ComA from "./ComA";
import ComB from "./ComB";
import ComC from "./ComC";

// const App = () => {
//   const [taskList, setTaskList] = useState([]);
//   const [taskName, setTaskname] = useState("");

//   // let myArray = [1, 2, 3, 4, 5];
//   // let myName = ["akash", "vikash", "suresh", "dinesh"]; // akash index = 0   vikash index
//   // let myObj = [{ name: "akash" }, { name: "vikash" }, { name: "brijesh" }];

//   const addTaskName = (taskName) => {
//     if (taskName.trim()) {
//       setTaskList([...taskList, taskName]);
//       console.log(taskList);
//     }
//   };

//   const removeTask = (taskId) => {
//     let vlaue = taskList.filter((data, index) => taskId != index);

//     setTaskList(vlaue);
//   };

//   return (
//     <>
//       <div className=" m-10 gap-x-3 w-[25rem] bg-yellow-200 border-2 border-black rounded-lg p-4">
//         <div className="flex gap-x-4  ">
//           <input
//             type="text"
//             placeholder="text here"
//             className="rounded-lg text-center"
//             onChange={(event) => {
//               setTaskname(event.target.value);
//               console.log(taskName);
//             }}
//           />
//           <button
//             className="bg-green-400 rounded-lg px-10 py-2"
//             onClick={() => {
//               addTaskName(taskName);
//             }}
//           >
//             Add
//           </button>
//         </div>
//         {/* show todo list */}
//         {/* {myName.map((data, index) => (
//           <div key={index}> {data}</div>
//         ))} */}
//         {taskList.map((data, index) => (
//           <ShowTodoList justkey={index} data={data} removeTaskId={removeTask} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

// Basic structur of React Component
// function App() {
//   return (
//     <>
//       <h1>Hello world</h1>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import Child from "./Child";
// function App() {
//   const [intitialValue, setValue] = useState("");

//   function getDataFromChild(receiveValue) {
//     setValue(receiveValue);
//   }
//   return (
//     <>
//       <h1>will show value down</h1>
//       <h2>{intitialValue}</h2>
//       <Child callingParentFunction={getDataFromChild} />
//     </>
//   );
// }

// export default App;

//---------------------Props-----------------------------------------------------
// import ComA from "./ComA";
// import ComB from "./ComB";
// import ComC from "./ComC";

// function App() {
//   return (
//     <>
//       <ComA>
//         <ComB />
//         <ComC />
//       </ComA>
//     </>
//   );
// }
// export default App;
//--------------------------Props----------------------------------


// import { useState } from "react";
// function App() {
//   const [optionA, setOptionA] = useState(false);
//   const [optionB, setOptionB] = useState(false);
//   const [optionc, setoptionC] = useState(false);
//   const [optionD, setOptionD] = useState(false);

//   function checkAnswer(answerReceive) {
//     if (answerReceive === "sludge") {
//       setoptionC(true);
//     } else {
//       setoptionC(true);
//       if (answerReceive === "compost") {
//         setOptionA(true);
//       } else if (answerReceive === "peat") {
//         setOptionB(true);
//       } else if (answerReceive === "urea") {
//         setOptionD(true);
//       }
//       console.log(" you clicked the wrong answer");
//     }
//   }
//   return (
//     <div className="bg-blue-500 w-1/2 p-5 box-border m-3 rounded-lg">
//       <div className="bg-blue-300 p-2 rounded-2xl">
//         Solids like fast, grease and oil tht float on top of liquid wasterwater
//         is called _____.
//       </div>
//       <div
//         className={`${
//           optionA ? "bg-red-500" : "bg-blue-300"
//         }  p-2 rounded-2xl w-1/2 mt-2 cursor-pointer `}
//         onClick={() => checkAnswer("compost")}
//       >
//         compost
//       </div>
//       <div
//         className={`${
//           optionB ? "bg-red-500" : "bg-blue-300"
//         }  p-2 rounded-2xl w-1/2 mt-2 cursor-pointer  `}
//         onClick={() => checkAnswer("peat")}
//       >
//         peat
//       </div>
//       <div
//         className={`${
//           optionc ? "bg-green-400" : "bg-blue-300"
//         }  p-2 rounded-2xl w-1/2 mt-2 cursor-pointer `}
//         onClick={() => checkAnswer("sludge")}
//       >
//         sludge
//       </div>
//       <div
//         className={`${
//           optionD ? "bg-red-500" : "bg-blue-300"
//         }  p-2 rounded-2xl w-1/2 mt-2 cursor-pointer `}
//         onClick={() => checkAnswer("urea")}
//       >
//         urea
//       </div>
//     </div>
//   );
// }

// export default App;

// useContext hook

import React, { createContext, useState } from "react";

export const HeyContext = createContext(); // Created Context

function App() {
  const [selctedSide, setSlectedSide] = useState("");
  const [coinSpin, setCoinSpin] = useState(false);
  const [randomToss, setRandomToss] = useState(""); // 0<=a<5 head   5<a<9 tale

  const slectionButton = (selectedValue) => {
    setSlectedSide(selectedValue);
    console.log(selectedValue);
  };

  const tossThecoin = () => {
    if (selctedSide != "") {
      setCoinSpin(true);
      setRandomToss(Math.floor(Math.random() * 10));
      if (5 <= randomToss >= 0) {
        if (selctedSide == "Head") {
          alert(" you win");
        }
      } else if (randomToss > 5) {
        if (selctedSide == "tail") {
          alert(" you win");
        }
      }
    } else {
      alert(" please selected any side");
    }
    setCoinSpin(false);
  };
  return (
    <>
      <HeyContext.Provider value={{ tossThecoin, slectionButton, coinSpin }}>
        <CoinFlip />
      </HeyContext.Provider>
    </>
  );
}

export default App;
