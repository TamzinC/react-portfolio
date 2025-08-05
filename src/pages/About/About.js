import styles from "./About.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";


function About(props) {

  return (
    <div>
      <h1>About Me</h1>

      <div className={styles.aboutContainer}>
        <p className={styles.about}>
          With a strong foundation in Marketing and a passion for design, I've thrived in areas like graphic design, marketing strategy, paid social advertising, and E-Commerce. Now transitioning into Front-End Web Development, I'm eager to fuse my marketing savvy with design expertise to create impactful online experiences.
        </p> 
        {/* <p className="about" style={styles.about}>
          With a background in Marketing, I have a passion for design. I hold
          experience in areas such as graphic design, marketing strategy, paid
          social advertising and E-Commerce - just to name a few! I've recently
          decided to make a career switch to Front-End Web Development and I'm
          excited to bring my marketing mindset and design skills to the field!
        </p> */}
        <img src="/images/memoji-6.png" className={styles.aboutImage} />
      </div>

      <div className={styles.wrapper}>
        <div>
          <section className={styles.skills}>
            <h3 className={styles.h3}>Skills</h3>

            <h5>Development:</h5>
            <p>
              HTML, CSS, Javascript, JQuery, JSX, Bootstrap, moment.js, React, npm, 
              Node.js, JSON, Git & Git Version Control, JEST, APIs, Next.js, Vercel, Sanity
            </p>

            <h5>
              Transferable:
            </h5>
            <p>
              Social media management, Graphic design, Adobe: Photoshop,
              Indesign and Illustrator, Attention to detail, Quick learner & Continuous learning, Creative, Customer/UX understanding, Analytical
            </p>
          </section>

          <aside className={styles.aside}>
            <a href="https://github.com/TamzinC" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/tamzin-chikhalia-44a59a188/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="mailto:tamzinchikhalia@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="./assets/tamzin_cv.pdf" target="_blank">
              <FontAwesomeIcon
                icon={faFilePdf}
                className={styles.badges}
              ></FontAwesomeIcon>
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default About;
