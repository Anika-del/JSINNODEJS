//------------------------------------First------------------------------
// import React from 'react'

// // const Card = (props) => {   //or
//     const Card = ({children}) => {
//   return (
//     <div>
//          {/* {props.name} */}
//       {/* {props.children} */}    {/* or */}
//       {children}
     
//     </div>
//   )
// }

// export default Card




//----------------------------------------Second------------------------
import React from 'react';

function Card({ title, content }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
// ----------------------------------------Third------------------------
