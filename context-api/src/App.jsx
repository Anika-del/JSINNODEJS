import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './withoutcontext/Navbar'
import Navbar from './context/Navbar'
import { counterContext } from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <counterContext.Provider value={count}> */}
    {/* dono pass krenge to value jo hoga o objects ban jayega */}
    <counterContext.Provider value={{count, setCount}}>
    <Navbar/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </counterContext.Provider>
    </>
  )
}

export default App
