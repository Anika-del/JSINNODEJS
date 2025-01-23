import React from 'react';

export default function Inlinecss(){
const style = {
    color: 'blue',
    fontSize: '20px',  
  };
  return ( <>
    <div style={style}>
      This is a styled component from Inlinecss.
    </div>

   

    <div style={        { color: 'red', fontSize: '25px',}                   }>
        This is 2nd Inlinecss 
    </div>

    </>
  );
}
