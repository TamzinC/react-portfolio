import {useState, useEffect} from 'react';
import styles from './Home.module.css';


function TaglineGenerator() {
    const taglines = [
        <>Crafted with HTML, styled with Sass, and sprinkled with  <span className={styles.emoji}>✨</span></>,
        <>Pixel-perfect. Emotion-infused. Chaos-approved <span className={styles.emoji}>👀</span></>,
        <>Web experiences, but make it <span className={styles.emoji}>✨</span>emotional<span className={styles.emoji}>✨</span> and responsive</>,
        <>Making bugs cry and users smile <span className={styles.emoji}>😁</span></>,
        <>Styled components and unhinged ambitions <span className={styles.emoji}>😮‍💨</span></>,
        <>If your website needs a main character arc, I'm your dev <span className={styles.emoji}>😎</span></>,
        <>I debug with tears in my eyes and glitter in my terminal <span className={styles.emoji}>🕺🏻</span></>,
        // <>Where cute meets code — and yes, I debug in pink <span className={styles.emoji}>😌</span></>,
    ];

    const [tagline, setTagline] = useState("");
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // to randomise the taglines:
        setTagline(taglines[Math.floor(Math.random() * taglines.length)]);

        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setTagline(prev => {
                    let next;
                    do {
                        next = taglines[Math.floor(Math.random() * taglines.length)];
                    } while (next === prev);
                    return next;
                });
                setIsFading(false);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return <p className={`${styles.tagline} ${isFading ? styles.fadeOut : ""}`}>{tagline}</p>
}


function Home(props) {
    return (
        <div className={styles.hero}>
            <div>
                <img src="%PUBLIC_URL%/images/memoji-1.PNG" alt="profile" className={styles.heroImg} />
            </div>
            <div className={styles.intro}>
                <h1>Hey, I'm Tamzin!</h1>
                <p className={styles.margin}>Front-End Developer</p>

                <p className={styles.caption}>Turning ideas into interactive, pixel-perfect realities.</p>
                {/* <p className={styles.tagline}>Crafted with HTML, styled with Sass, and sprinkled with ✨</p> */}
                <TaglineGenerator />
                
                <button>
                    <a href="mailto:tamzinchikhalia@gmail.com">Contact Me</a>
                </button>
            </div>
        </div>
    );
  }
  
  export default Home;