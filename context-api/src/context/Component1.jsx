import React, {useContext} from 'react'
import { counterContext } from './Context';

const Component1 = ({count}) => {
  const counter = useContext(counterContext)
  return (
    <div>
      {/* Component1 */}
      {counter}
    </div>
  )
}

export default Component1;
