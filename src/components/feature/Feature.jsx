import React from 'react';
// styles
import styles from './feature.module.css';
const Feature = ({title,paragraph}) => {
    return (
        <div className={styles.feature}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    );
}
 
export default Feature;