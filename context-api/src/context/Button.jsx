import React from 'react'
import Component1 from './Component1'

const Button = () => {
  return (
    <div>
    <button>
        <span>
        <Component1/>
        </span>Im a button
    </button>
        {/* <span><Component1 count={count}/> </span> Im a button */}
    
    </div>
  )
}

export default Button
