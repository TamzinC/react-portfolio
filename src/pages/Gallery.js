import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-bootstrap/Carousel";

function Gallery(props) {
  const styles = {
    wrapper: {
      backgroundColor: "#EBD7C1",
      padding: "50px",
      color: "#462920",
    },
    about: {
      width: "500px",
      margin: "0 auto",
      textAlign: "center",
    },
    skills: {
      textAlign: "center",
    },
    badges: {
      height: "50px",
      margin: "15px",
    },
    h3: {
      fontSize: "25px",
      marginTop: "30px",
      marginBottom: "15px",
    },
    aside: {
      margin: "40px",
      textAlign: "center",
    },
  };

  return (
    <main>
      <h1>About Me</h1>

      <div className="wrapper" style={styles.wrapper}>
        <p style={styles.about}>
          I'm a marketing professional with a passion for design and have a
          background in graphic design, marketing strategy, paid social
          advertising and E-Commerce. I've recently decided to make a career
          switch to Front-End Web Development and I'm excited to bring my
          marketing mindset and design skills to the field!
        </p>

        <div>
          <section className="skills" style={styles.skills}>
            <h3 style={styles.h3}>Skills</h3>

            <h4 style={{ margin: "10px" }}>Development:</h4>
            <p>
              HTML, CSS, Javascript, JQuery, JSX, Bootstrap, moment.js, React,
              Node.js, JSON, Git & Git Version Control, JEST, APIs
            </p>

            <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>
              Transferable:
            </h4>
            <p>
              Social media advertising, Graphic design, Adobe: Photoshop,
              Indesign and Illustrator, Attention to detail, Quick learner
            </p>
          </section>

          <aside style={styles.aside}>
            <a href="https://github.com/TamzinC">
              <FontAwesomeIcon
                icon={faGithub}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/tamzin-chikhalia-44a59a188/">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="mailto:tamzin.chikhalia@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a>
              <FontAwesomeIcon
                icon={faFilePdf}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
          </aside>
        </div>

        {props.challenges.map((challenge, index) => (
          <div>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  key={index}
                  src={challenge.image}
                  alt={challenge.title}
                />
                <Carousel.Caption>
                  <h5 key={index}>{challenge.title}</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  key={index}
                  src={challenge.image}
                  alt={challenge.title}
                />
                <Carousel.Caption>
                  <h5 key={index}>{challenge.title}</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  key={index}
                  src={challenge.image}
                  alt={challenge.title}
                />
                <Carousel.Caption>
                  <h5 key={index}>{challenge.title}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        ))};
      </div>
    </main>
  );
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
