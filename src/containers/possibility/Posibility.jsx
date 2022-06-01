import React from 'react';
// styles
import styles from './posibility.module.css'
// images
import image from "../../assets/images/Feature Image.png"
const Posibility = () => {
    return (
        <div className={styles.posibility}>
            <div className={styles.imageContainer}>
                <img src={image} alt="" />
            </div>
            <div className={styles.content}>
                <h4>Request Early Access to Get Started</h4>
                <h1>
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <h4>
                    Request Early Access to Get Started
                </h4>
            </div>
            
        </div>
    );
}
 
export default Posibility;