import React, { useState } from 'react';
// styles
import styles from './navbar.module.css';
// logo
import logo from '../../assets/images/GPT-3.png';
// icons
import { BiCar, BiMenu, BiX } from "react-icons/bi";
const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" />
            </div>
            <nav className={styles.nav}>
                <a href="">
                    Home
                </a>
                <a href="">
                    what is GPT?
                </a>
                <a href="">
                    Open AI
                </a>
                <a href="">
                    Case Studies
                </a>
                <a href="">
                    Library
                </a>
            </nav>
            <div className={styles.buttonContainer}>
                <a href="" className={styles.signup}>sign in</a>
                <button className={styles.signin}>sign up</button>
                <button onClick={() => setShow(!show)} className={styles.menuButton}>{show ? <BiX/> : <BiMenu/>}</button>
            </div>
            {
                show && <nav className={styles.mobileMenuContainer}>
                <a href="">
                    Home
                </a>
                <a href="">
                    what is GPT?
                </a>
                <a href="">
                    Open AI
                </a>
                <a href="">
                    Case Studies
                </a>
                <a href="">
                    Library
                </a>
                <a href="" className={styles.signup}>sign in</a>
                <button className={styles.signin}>sign up</button>
            </nav>
            }
        </div>
    );
}
 
export default Navbar;