

function Home(props) {
    const styles = {
        hero: {
            padding: '50px',
            backgroundColor: '#EBD7C1'
        },
        img: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '50%',
            height: '300px',
            width: '320px'
        },
        intro: {
            marginTop: '30px',
            textAlign: 'center',
        },
        margin: {
            margin: '20px'
        }
      }
    
    return (
        <div className='hero' style={styles.hero}>
            <div>
                <img src='./images/profile-pic.PNG' alt="profile" style={styles.img} />
            </div>
            <div className='intro' style={styles.intro}>
                <h1>Hey, I'm Tamzin!</h1>
                <p style={styles.margin}>Front-End Web Developer</p>

                <p style={styles.margin}>Creating impactful and functional websites for memorable online presences.</p>
                
                <button>
                    <a href="mailto:tamzin.chikhalia@gmail.com">Contact Me</a>
                </button>
            </div>
        </div>
    );
  }
  
  export default Home;