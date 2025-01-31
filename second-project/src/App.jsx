import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Mcq from "./components/Mcq/Mcq";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
// import UseStateHooks from './components/UseStateHooks/Count';
import UseStateHooks from './components/UseStateHooks/IncDecCount';
import Head from './components/Head/Head';
import  UseReducer from './components/UseReducer/decIncReducer';

function App() {
  
  return (
   <>
   <Mcq /> 
   {/* <Header /> 
   <Hero />
   <Footer />  */}
  {/* <UseStateHooks /> */}
  {/* <Head /> */}
  {/* < UseReducer /> */}

   </>
  );
}

export default App;
