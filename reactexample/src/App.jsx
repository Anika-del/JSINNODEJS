// import React from 'react'
// import React, { useState } from 'react';
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Hero from "./Hero";
// import Card from './components/Card';
// import Button from './components/Button';

//----------------------------------useState---------------------------------------
// function App() {
//  const [count, setCount] = useState(0);

//  function handleClick(){
//   setCount(count+1);
//  }

//   return (
//       <div>
//       <Button handleClick={handleClick} 
//         text="click me">
//        <h1>{count}</h1>
//       </Button>
//----------------------------------useState---------------------------------------


//---------------------------------Simple-------------------
// {/* <Header/> */}
// {/* <Footer/> */}
// {/* <Hero /> */}
//--------------------------------Simple--------------------

//--------------------------------------------props LaveSir--------------------------------------
// <Card name="Anika Patel">
// <h1>hii ji</h1>
//   <p>ani patel ji</p>
// <h5>jii jii</h5>
// </Card>
// <Card children="Hii children">
//   Hello je kaise ho aap sab   //ye overide kr le rha h ye text nhi rhega to hi children rint ho jayega
// </Card>
//     </div>
//   )
// }
// export default App
//--------------------------------------------props LaveSir--------------------------------------


//---------------------------Props Dev-Bhaiya--------------------------------------
// import React from "react";
// import ComA from "./components/props/ComA";
// import ComB from "./components/props/ComB";
// import ComC from "./components/props/ComC";

// function App() {
//   return (
//     <>
//       {/* First Instance of ComA with name prop */}
//       <ComA name="Anika">
//         <h1>Anika Props methods App.jsx(Parent)</h1>
//         <p>This is props children App.jsx</p>
//       </ComA>

//       {/* Second Instance of ComA without name prop */}
//       <ComA>
//         <ComB />
//         <ComC />
//       </ComA>
//     </>
//   );
// }

// export default App;
//---------------------------Props Dev-Bhaiya--------------------------------------

//-------------------------------Card Second--------------------------------------
// import React from 'react';
// import Card from './components/Card';

// function App() {
//   return (
//     <div className="app">
//       <Card title="Card Title 1" content="This is the content of card 1." />
//       <Card title="Card Title 2" content="This is the content of card 2." />
//       <Card title="Card Title 3" content="This is the content of card 3." />
//     </div>
//   );
// }

// export default App;
//---------------------------Card Second------------------------------------------

//---------------------------Product-----------------------------------------------
// src/App.jsx
// import React from 'react';
// import ProductList from './components/product/ProductList';
// import './components/product/Product.css';

// function App() {
//   return (
//     <div className="app">
//       <ProductList />
//     </div>
//   );
// }

// export default App;
//---------------------------Product-----------------------------------------------

//------------------------------Netflix App ----------------------------------------
// src/components/App.jsx
import React from 'react';
import NetflixSeries from './components/netflixSeries/NetflixSeries';
import './components/netflixSeries/NetflixSeries.css';

function App() {
  return (
    <div className="app">
      <NetflixSeries />
    </div>
  );
}

export default App;


//-----------------------------------Netflix App ------------------------------------

