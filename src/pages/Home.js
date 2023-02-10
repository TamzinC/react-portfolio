import profilePic from '../images/profile-pic.PNG';

function Home(props) {
    const styles = {
        hero: {
            display: 'flex',
            padding: '20px',
            backgroundColor: '#EBD7C1'
        },
        intro: {
            alignSelf: 'center',
            textAlign: 'center',
            lineHeight: '40px',
            color: '#462920'
        },
        button: {
            backgroundColor: 'rgb(128, 108, 84)',
            color: '#fff',
            height: '40px',
            border: 'none',
            borderRadius: '5px',
            width: '100px'
        },
        img: {
            borderRadius: '50%',
            height: '300px',
            width: '320px'
        }
      }
    
    return (
        <div className='hero' style={styles.hero}>
            <div className='intro' style={styles.intro}>
                <h1>Hey, I'm Tamzin!</h1>
                <p>Front-End Web Developer</p>
                
                <button style={styles.button} href="mailto:tamzin.chikhalia@gmail.com" role="button">Contact Me</button>
            </div>
            <div>
                <img src={profilePic} alt="profile" style={styles.img} />
            </div>
        </div>
    );
  }
  
  export default Home;