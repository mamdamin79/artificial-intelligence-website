import React from 'react';
// styles
import styles from './brand.module.css';
// images
import google from "../../assets/images/google.png";
import atlassian from "../../assets/images/atlassian.png";
import dropbox from "../../assets/images/dropbox.png";
import slack from "../../assets/images/slack.png";
import shopify from "../../assets/images/shopify.png";

const Brand = () => {
    return (
        <div className={styles.brandContainer}>
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
        </div>
    );
}
 
export default Brand;