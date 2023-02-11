

function Gallery(props) {
  const styles = {
    about: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    contact: {
      display: 'flex',
      flexDirection: 'column',
    }
  }
  
    return (
      <main>
        <h1>About Me</h1>

        <div style={styles.about}>
          <p>Coming from a Marketing background, I have experience in a variety of different aspects ranging from graphic design, marketing strategy and paid social advertising, as well as E-Commerce which involves daily management of a live website. I'm now looking to broaden my career by moving into web development and finding my next challenge!</p>

          <aside style={styles.contact}>
            <a>GitHub</a>
            <a>LinkedIn</a>
            <a href="mailto:tamzin.chikhalia@gmail.com">Email</a>
            <a>CV</a>
          </aside>

          <section>
            <ul>
              <h3>Skills</h3>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Bootstrap</li>
              <li>moment.js</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </section>
        </div>

      </main>
    )
  }
  
  export default Gallery;

  /* Add:
   - Skills
   - Languages/key concepts
   - linkedin
   - github
   - CV
   - my email
   - brief summary of projects */