//1. -----------------------withoutcontext---------------------
App.jsx
  Navbar.jsx
    Button.jsx
       Component1.jsx
to agar component1.jsx me app.jsx se kuch data lana h to sab me apply krna padega jo shi nhi h
//-----------------------withoutcontext---------------------------




//2. ---------------------------context/Context.jsx-----------------------------------------
sabse phle context create krna  h
Context.jsx me  
      1). import { createContext } from "react";
      2). export const counterContext = createContext(0);
fir app.jsx me use krna means import krna h from createContextSe
      1).import { counterContext } from './context/Context'
      2). <counterContext.Provider>---------all data iske bich rkh dena h ------------<counterContext.Provider>
and is tag me value count ka pass kr denge like-- <counterContext.Provider value={count}>
to jitne bhi component use kr rhe h unhe bhi value mil jayegi like Button.jsx, Navbar.jsx, Component1.jsx
herericy nhi folow krna pdega
and agr Component1.jsx me use krna h to 
      1).import React, {useContext} from 'react'
      2).import { counterContext } from './Context';
      3). return ke upar function ke ander
      4).const counter = useContext(counterContext)
      fir counter ko {counter} aise use krna h 
ab value change bhi krna h to app.jsx me
      1).<counterContext.Provider value={{count, setCount}}>
 count ka value change krna h to setCount ka use krna h
      2).
