import { useState } from 'react';
import styles from '../../styles/IncDecCount.module.css';


function IncDecCount(){

    const [incdec, setIntDec ] = useState(0)
    return (
        <>
        <p>Incerement Decrement Operation usein UseState Hooks {incdec}</p>
        <div className={styles.incdecContainer}>
            
            <button onClick={()=> {setIntDec(incdec-1)}}>-</button>
            <span >{incdec}</span>
            <button onClick={()=> {setIntDec(incdec+1)}}>+</button>
        </div>
        </>
    );

}
export default IncDecCount;