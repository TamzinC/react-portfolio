import styles from './Home.module.css';

function Home(props) {
    
    return (
        <div className={styles.hero}>
            <div>
                <img src='./images/profile-pic.PNG' alt="profile" className={styles.img} />
            </div>
            <div className={styles.intro}>
                <h1>Hey, I'm Tamzin!</h1>
                <p className={styles.margin}>Front-End Web Developer</p>

                <p className={styles.margin}>Creating impactful and functional websites for memorable online presences.</p>
                
                <button>
                    <a href="mailto:tamzinchikhalia@gmail.com">Contact Me</a>
                </button>
            </div>
        </div>
    );
  }
  
  export default Home;