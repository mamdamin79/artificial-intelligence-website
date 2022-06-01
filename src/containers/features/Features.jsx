import React from 'react';
// styles
import styles from './features.module.css'
import Feature from '../../components/feature/Feature'
const Features = () => {
    return (
        <div className={styles.featuresSection}>
            <div className={styles.heading}>
                <h1>
                    The Future is Now and You Just Need To Realize It. Step into Future Today  Make it Happen.
                </h1>
                <p>
                    Request Early Access to Get Started
                </p>
            </div>
            <div className={styles.featuresContainer}>
                <Feature title="Improving end distrusts instantly " paragraph="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."/>
                <Feature title="Become the tended active" paragraph="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."/>
                <Feature title="Message or am nothing" paragraph="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."/>
                <Feature title="Really boy law county" paragraph="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."/>
            </div>
        </div>
    );
}
 
export default Features;