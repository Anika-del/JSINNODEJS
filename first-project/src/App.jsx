 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

// Ankit ko 
import Ankit from './Ankit';
import Alok from './Alok';
import Mcq from './Mcq';
 import Inlinecss from './Inlinecss';
 import Externalcss from './Externalcss';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Ankit />
    <Alok />
    <Mcq />
    <Inlinecss />
    <Externalcss />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
    <header>
        <h1>Welcome to My React App.jsx</h1>
    </header>
    <main>
        <p>React stands for React.js or simply React, which is a popular JavaScript library used 
          for building user interfaces, particularly single-page applications where you need a fast and 
          interactive user experience. React was developed and is maintained by Facebook, and it is
           widely used in web development due to its efficiency and flexibility.</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
        </ul>
    </main>
    </>
  )
}

export default App
