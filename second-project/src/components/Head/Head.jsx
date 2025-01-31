//import React from 'react';
import { useState } from 'react';
import styles from '../../styles/Head.module.css';

function Head() {
    const [color, setColor] = useState(null);

    const handleClick = (index) => {
        setColor(index);
    };

    return (
       <>
                <ul className={styles.headContainer}>
                    <li className={color === 0 ? styles.active : ''} onClick={()=>handleClick(0)}>
                    <a href="#">Privacy Policy</a></li>

                    <li className={color === 1 ? styles.active : ''} onClick={()=>handleClick(1)}>
                    <a href="#">Terms of Service</a></li>

                    <li className={color === 2 ? styles.active : ''} onClick={()=>handleClick(2)}>
                    <a href="#">Contact</a></li>
                </ul>
        </>
    );
}

export default Head;
