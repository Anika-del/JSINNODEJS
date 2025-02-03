import React, {useContext} from 'react'
import { counterContext } from './Context';

const Component1 = ({count}) => {
  // const counter = useContext(counterContext)
  const value = useContext(counterContext)
  return (
    <div>
      {/* Component1 */}
      {value.count}
    </div>
  )
}

export default Component1;
