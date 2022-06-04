import React from 'react';
// styles
import styles from './cta.module.css';
const Cta = () => {
    return (
        <div className={styles.CtaContainer}>
            <div className={styles.content}>
                <p>Request Early Access to Get Started</p>
                <h2>Register today and start exploring the endless possiblities.</h2>
            </div>
            <button>
                Get Started
            </button>
        </div>
    );
}
 
export default Cta;