import React from 'react';
// styles
import styles from './footer.module.css'
// logo
import Logo from '../../assets/images/GPT-3.png'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.firstRow}>
                <h1>Do you want to step in to the future before others</h1>
                <button>Request Early Access</button>
            </div>
            <div className={styles.secondRow}>
                <div>
                    <img src={Logo} alt="" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h4>Company</h4>
                    <p>Terms , Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;