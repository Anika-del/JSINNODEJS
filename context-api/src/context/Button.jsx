import React, {useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from './Context';

const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>
    <button onClick={()=> value.setCount((count)=>count+1)}>
      {/* ab ispar bhi click krne se value change hoga */}
        <span>
        <Component1/>
        </span>Im a button
    </button>
        {/* <span><Component1 count={count}/> </span> Im a button */}
    
    </div>
  )
}

export default Button
