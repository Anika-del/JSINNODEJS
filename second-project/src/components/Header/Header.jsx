import React, { useState } from 'react';
import styles from '../../styles/Header.module.css';

function Header() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <ul className={styles.menuBar}>
                <li
                    className={activeIndex === 0 ? styles.active : ''}
                    onClick={() => handleClick(0)}
                >
                    <a href="#">Home</a>
                </li>
                <li
                    className={activeIndex === 1 ? styles.active : ''}
                    onClick={() => handleClick(1)}
                >
                    <a href="#">About us</a>
                </li>
                <li
                    className={activeIndex === 2 ? styles.active : ''}
                    onClick={() => handleClick(2)}
                >
                    <a href="#">Service</a>
                </li>
                <li
                    className={activeIndex === 3 ? styles.active : ''}
                    onClick={() => handleClick(3)}
                >
                    <a href="#">Follow Us</a>
                </li>
                <li
                    className={activeIndex === 4 ? styles.active : ''}
                    onClick={() => handleClick(4)}
                >
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </>
    );
}

export default Header;
