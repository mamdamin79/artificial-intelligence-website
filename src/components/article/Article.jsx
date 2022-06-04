import React from 'react';
// styles
import styles from './article.module.css';
const Article = ({imageUrl,date,title}) => {
    return (
        <div className={styles.article}>
            <img src={imageUrl} alt="" />
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read more</p>
            </div>
        </div>
    );
}
 
export default Article;