import heroImage from '../../assets/img.jfif';
import heroImage1 from '../../assets/img1.jfif';
import heroImage2 from '../../assets/img2.jfif';
import styles from '../../styles/Hero.module.css';

export default function Hero(){

    return (
        <>

        <section className={styles.heroSection}>
         <div className={styles.row}>
            {/* <h2>Hero Section</h2> */}
            <div className={styles.col}>
                {/* Image section */}
                <img src={heroImage} alt="" style={{width:'350px', borderRadius:'20px'}}/>
            </div>
            <div className={`${styles.col} ${styles.colLeft}`}>
           <div className="caption">
            Always fresh
           </div>
           <div className={styles.title}>
From Texas width American Love</div>
<p style={{fontSize:'0.9rem', fontFamily:'cursive', letterSpacing:'1px', color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore perferendis magnam veritatis.
     Dolorum ab provident odio in quod! Soluta similique recusandae
     beatae ad provident, exercitationem nihil dolorum repellendus explicabo cum.</p>
           
           <button className={styles.orderBtm}>Order Now</button>
            </div>
         </div>
        </section>
{/* section 1 */}
        <section className={styles.cardWrapper}>
        <div className={styles.card}>
                <img src={heroImage1} alt="" className={styles.cardImage}/>
               <div className={styles.cardContent}> <div className={styles.cardTitle}>
                         Classic CheeseBurgur
                </div>
                <div className={styles.cardDescription}>
                 A juicy patty topped with melted cheese, fresh lettuce, tomato, onion, and our 
                 signature sauce, served on a toasted sesame bun.
                </div>
                <div className={styles.price}>
                  60Rs.
             </div>   </div>
            </div>
            {/* card 2 */}
            <div className={styles.card}>
                <img src={heroImage2} alt="" className={styles.cardImage}/>
               <div className={styles.cardContent}> <div className={styles.cardTitle}>
                         Classic CheeseBurgur
                </div>
                <div className={styles.cardDescription}>
                 A juicy patty topped with melted cheese, fresh lettuce, tomato, onion, and our 
                 signature sauce, served on a toasted sesame bun.
                </div>
                <div className={styles.price}>
                  60Rs.
             </div>   </div>
            </div>
            {/* card 3 */}
            <div className={styles.card}>
                <img src={heroImage1} alt="" className={styles.cardImage}/>
               <div className={styles.cardContent}> <div className={styles.cardTitle}>
                         Classic CheeseBurgur
                </div>
                <div className={styles.cardDescription}>
                 A juicy patty topped with melted cheese, fresh lettuce, tomato, onion, and our 
                 signature sauce, served on a toasted sesame bun.
                </div>
                <div className={styles.price}>
                  60Rs.
             </div>   </div>
            </div>
            {/* card 4 */}
            <div className={styles.card}>
                <img src={heroImage2} alt="" className={styles.cardImage}/>
               <div className={styles.cardContent}> <div className={styles.cardTitle}>
                         Classic CheeseBurgur
                </div>
                <div className={styles.cardDescription}>
                 A juicy patty topped with melted cheese, fresh lettuce, tomato, onion, and our 
                 signature sauce, served on a toasted sesame bun.
                </div>
                <div className={styles.price}>
                  60Rs.
             </div>   </div>
            </div>
        </section>
        </>
    )
}