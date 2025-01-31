import { useState } from 'react';
import styles from '../../styles/decIncReducer.module.css';

function decIncReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    function reducer(state, action) {
        switch (action.type) {
          case 'increment':
            return { count: state.count + 1 };
          case 'decrement':
            return { count: state.count - 1 };
          default:
            throw new Error();
        }
      }
      
    return (
        <>
      <div className={styles.headBar}>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
</div>  
</>
    );
}
export default decIncReducer;