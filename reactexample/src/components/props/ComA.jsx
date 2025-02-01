import React from "react";

//1.-------------------------------------
//const ComA = (props) => {
 //return <>{props.children} </>;
// };

//2. ---------------------------------------
// const ComA = ({name}) => {
//   return <>{name} </>;
// };

//3. -----------------------------------
const ComA = ({ name, children }) => {
  return (
    <div>
      {name && <h1>{name} Props methods from ComA</h1>}
      <div>{children}</div>
    </div>
  );
};




export default ComA;
