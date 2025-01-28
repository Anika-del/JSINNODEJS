import heroImage from '../../assets/img.jfif';
import styles from '../../styles/Hero.module.css';
import './Her.module.css';

export default function Hero(){

    return (
        <>
        <h2> Hero Section </h2>
        <section className={styles.heroSection}>
         <div className="row">
            <div className="col">
                <h2>Image section</h2>
                <img src={heroImage} alt="" />
            </div>
            <div className={styles.col}>
                Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit. Laudantium nihil 
                     sapiente harum cum ex fugit quae modi ipsum veritatis consequatur, doloribus deserunt praesentium accusamus perspiciatis voluptates
                     animi incidunt voluptas ab?
            </div>
         </div>
        </section>
        </>
    )
}