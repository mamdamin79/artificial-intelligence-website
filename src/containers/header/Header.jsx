import React from 'react';
// styles
import styles from './header.module.css'
// images
import people from "../../assets/images/Group 81.png"
import ai from "../../assets/images/Illustration.png"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1>
                    Let's Build Something
                    amazing with GPT-3
                    OpenAI
                </h1>
                <p className={styles.description}>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className={styles.formContainer}>
                    <input type="text" />
                    <button>Get Start</button>
                </div>
                <div className={styles.peopleContainer}>
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={ai} alt="ai" />
            </div>
        </header>
    );
}
 
export default Header;