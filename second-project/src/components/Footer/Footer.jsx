import React from 'react';
import styles from '../../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>© 2025 Your Company. All rights reserved.</p>
                <ul className={styles.menu}>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
