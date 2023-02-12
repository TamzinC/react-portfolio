import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'

function Gallery(props) {
  const styles = {
    wrapper: {
      backgroundColor: '#EBD7C1',
      padding: '50px',
      color: '#462920'
    },
    about: {
      width: '500px',
      margin: '0 auto',
      textAlign: 'center'
    },
    skills: {
      textAlign: 'center'
    },
    badges: {
      height: '50px'
    }
    // contact: {
    //   display: 'flex',
    //   flexDirection: 'column',
    // },
    // sides: {
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   flexWrap: 'no-wrap',
    // }
  }
  
    return (
      <main>
          
        <h1>About Me</h1>

        <div className="wrapper" style={styles.wrapper}>

          <p style={styles.about}>I'm a marketing professional with a passion for design and have a background in graphic design, marketing strategy, paid social advertising and E-Commerce. I've recently decided to make a career switch to Front-End Web Development and I'm excited to bring my marketing mindset and design skills to the field!</p>

          <div className="sides" style={styles.sides}>
            <section className="skills" style={styles.skills}>
              <h3>Skills</h3>

              <h5>Development:</h5>
              <p>HTML, CSS, Javascript, JQuery, JSX, Bootstrap, moment.js, React, Node.js, JSON, Git & Git Version Control, JEST, APIs</p>

              <h5>Transferable:</h5>
              <p>Social media advertising, Graphic design, Adobe: Photoshop, Indesign and Illustrator, Attention to detail, Quick learner</p>
            </section>

            <aside>
              <FontAwesomeIcon icon={faGithub} style={styles.badges}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faLinkedin} style={styles.badges}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faEnvelope} style={styles.badges} href="mailto:tamzin.chikhalia@gmail.com"></FontAwesomeIcon>
              <FontAwesomeIcon icon={faFilePdf} style={styles.badges}></FontAwesomeIcon>
            </aside>
          </div>
        </div>

      </main>
    )
  }
  
  export default Gallery;

  // <a>GitHub</a>
  // <a>LinkedIn</a>
  // <a href="mailto:tamzin.chikhalia@gmail.com">Email</a>
  // <a>CV</a>
  
  /* Add:
   - Skills
   - Languages/key concepts
   - linkedin
   - github
   - CV
   - my email
   - brief summary of projects */