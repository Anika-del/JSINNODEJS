import { useState } from 'react';
import styles from '../../styles/Count.module.css';

function Count(){

    const [count, setCount] = useState(0);   //count is variable and setCount is function
    return(
        <>
        
        <div className={styles.countContainer}>
        <p>You have clicked {count} times</p>
        <button onClick={()=>{setCount(count+1)}} >click me</button>
        </div>

        </>
    );

}
export default Count;