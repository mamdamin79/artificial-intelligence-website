import React from 'react';
// styles
import styles from './whatgpt3.module.css'
// components
import Feature from "../../components/feature/Feature"
const Whatgpt3 = () => {
    return (
        <div className={styles.Whatgpt3Container}>
            <div className={styles.firstFeatureContainer}>
                <Feature title="What is GPT-3" paragraph="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
            </div>
            <div className={styles.content}>
                <h1>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className={styles.featuresContainer}>
                <Feature title="Chatbots" paragraph="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
                <Feature title="Knowledgebase" paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
                <Feature title="Education" paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
            </div>
        </div>
    );
}
 
export default Whatgpt3;