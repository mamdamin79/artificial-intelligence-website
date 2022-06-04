import React from 'react';
import Article from '../../components/article/Article';
// styles
import styles from './blog.module.css'
// images
import blog01 from "../../assets/images/Rectangle 22-1.png"
import blog02 from "../../assets/images/Rectangle 22-2.png"
import blog03 from "../../assets/images/Rectangle 22-3.png"
import blog04 from "../../assets/images/Rectangle 22-4.png"
import blog05 from "../../assets/images/Rectangle 22.png"
const Blog = () => {
    return (
        <div className={styles.blogSection}>
            <h1>
                A lot is happening, We are blogging about it
            </h1>
                <div className={styles.groupContainer}>
                    <div className={styles.gA}>
                        <Article imageUrl={blog01} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                    </div>
                    <div className={styles.gB}>
                        <Article imageUrl={blog02} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                        <Article imageUrl={blog04} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                        <Article imageUrl={blog03} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                        <Article imageUrl={blog05} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                    </div>
                </div>
        </div>
    );
}
 
export default Blog;